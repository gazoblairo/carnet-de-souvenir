(function (window, document) {
  const LARGE_FILE_BYTES = 10 * 1024 * 1024;
  const DUPLICATE_SCAN_LIMIT = 32 * 1024 * 1024;
  const LOCAL_STORAGE_PREFIX = 'carnet_';
  const DATABASES = {
    media: { name: 'carnet-media-db', store: 'audios' },
    backgrounds: { name: 'carnet-message-background-db', store: 'backgrounds' }
  };
  const CATEGORY_KEYS = ['photos', 'music', 'messages', 'otherFiles', 'applicationData'];
  const CATEGORY_COLORS = {
    photos: '#e87998',
    music: '#8b5cf6',
    messages: '#3b82a0',
    otherFiles: '#0f9b8e',
    applicationData: '#e5a84b'
  };

  let initialized = false;
  let files = [];
  let currentPreview = null;
  let previewObjectUrl = null;
  let sorting = 'size-desc';
  let duplicateFileIds = new Set();
  let lastInventory = null;
  let lastStatus = ['storage.updated', {}];
  let duplicateStatus = null;

  function t(key, values = {}) {
    let message = window.I18n?.t(key) || key;
    for (const [name, value] of Object.entries(values)) {
      message = message.replaceAll(`{${name}}`, String(value));
    }
    return message;
  }

  function formatBytes(bytes) {
    if (!Number.isFinite(bytes) || bytes < 0) return t('storage.bytesUnavailable');
    if (bytes < 1024) return `${Math.round(bytes)} ${t('storage.bytesUnit')}`;
    const units = ['KiB', 'MiB', 'GiB', 'TiB'];
    let value = bytes / 1024;
    let unitIndex = 0;
    while (value >= 1024 && unitIndex < units.length - 1) {
      value /= 1024;
      unitIndex += 1;
    }
    const locale = window.I18n?.getLocale() || 'fr-FR';
    return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(value)} ${units[unitIndex]}`;
  }

  function formatDate(value) {
    const date = value instanceof Date ? value : new Date(value);
    if (!Number.isFinite(date.getTime())) return t('storage.dateUnavailable');
    return new Intl.DateTimeFormat(window.I18n?.getLocale() || 'fr-FR', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(date);
  }

  function getDataUrlSize(dataUrl) {
    if (typeof dataUrl !== 'string' || !dataUrl.startsWith('data:')) return null;
    const commaIndex = dataUrl.indexOf(',');
    if (commaIndex < 0) return null;
    const metadata = dataUrl.slice(0, commaIndex);
    const payload = dataUrl.slice(commaIndex + 1);
    if (/;base64/i.test(metadata)) {
      const padding = payload.endsWith('==') ? 2 : payload.endsWith('=') ? 1 : 0;
      return Math.max(0, Math.floor(payload.length * 3 / 4) - padding);
    }
    try {
      return new Blob([decodeURIComponent(payload)]).size;
    } catch (error) {
      console.warn('Could not measure a stored data URL.', error);
      return null;
    }
  }

  function getStoredProfileCode() {
    try {
      const raw = window.localStorage.getItem('carnet_pairing_state');
      const pairing = raw ? JSON.parse(raw) : null;
      return pairing?.myCode?.trim().toUpperCase() || 'local';
    } catch (error) {
      console.error('Could not identify the local storage profile.', error);
      return 'local';
    }
  }

  function categoryForLocalKey(key) {
    if (key === 'carnet_gallery') return 'photos';
    if (key === 'carnet_audios' || key.startsWith('carnet_notification_preferences:')) return 'music';
    if (key.startsWith('carnet_message')) return 'messages';
    return 'applicationData';
  }

  function readLocalStorage() {
    const categories = Object.fromEntries(CATEGORY_KEYS.map((key) => [key, 0]));
    const records = [];
    const localStorage = window.localStorage;
    const profileCode = getStoredProfileCode();
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (!key || !key.startsWith(LOCAL_STORAGE_PREFIX)) continue;
      const value = localStorage.getItem(key);
      if (value === null) continue;
      categories[categoryForLocalKey(key)] += new Blob([key, value]).size;

      if (key === 'carnet_gallery') {
        try {
          const photos = JSON.parse(value);
          if (!Array.isArray(photos)) continue;
          photos.forEach((photo, photoIndex) => {
            if (!photo || typeof photo.src !== 'string' || !photo.src.startsWith('data:')) return;
            records.push({
              id: `photo:${String(photo.id ?? photoIndex)}`,
              type: 'photo',
              name: typeof photo.name === 'string' && photo.name.trim()
                ? photo.name
                : `${t('storage.photoFile')} ${photoIndex + 1}`,
              size: getDataUrlSize(photo.src),
              createdAt: photo.added || photo.date || null,
              mimeType: photo.src.match(/^data:([^;,]+)/i)?.[1] || 'image/*',
              dataUrl: photo.src,
              sourceId: photo.id
            });
          });
        } catch (error) {
          console.error('Could not read gallery file metadata for storage inventory.', error);
        }
      }

      if (key === `carnet_notification_preferences:${profileCode}`) {
        try {
          const preferences = JSON.parse(value);
          const customSound = preferences?.customSound;
          if (typeof customSound?.dataUrl === 'string' && customSound.dataUrl.startsWith('data:')) {
            records.push({
              id: 'notification-custom-sound',
              type: 'notificationSound',
              name: customSound.name || t('storage.notificationSound'),
              size: getDataUrlSize(customSound.dataUrl),
              createdAt: null,
              mimeType: customSound.type || 'audio/*',
              dataUrl: customSound.dataUrl
            });
          }
        } catch (error) {
          console.error('Could not read the custom notification sound metadata.', error);
        }
      }
    }
    return { available: true, categories, records };
  }

  function readDatabaseStore(name, storeName) {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(name);
      request.onerror = () => reject(request.error || new Error(`Could not open ${name}.`));
      request.onsuccess = () => {
        const database = request.result;
        database.onversionchange = () => database.close();
        if (!database.objectStoreNames.contains(storeName)) {
          database.close();
          reject(new Error(`The ${storeName} object store is unavailable in ${name}.`));
          return;
        }

        let records = [];
        let settled = false;
        const fail = (error) => {
          if (settled) return;
          settled = true;
          database.close();
          reject(error);
        };
        try {
          const transaction = database.transaction(storeName, 'readonly');
          const getAllRequest = transaction.objectStore(storeName).getAll();
          getAllRequest.onsuccess = () => { records = getAllRequest.result || []; };
          getAllRequest.onerror = () => fail(getAllRequest.error || transaction.error);
          transaction.oncomplete = () => {
            if (settled) return;
            settled = true;
            database.close();
            resolve(records);
          };
          transaction.onerror = () => fail(transaction.error || new Error(`Could not read ${storeName}.`));
          transaction.onabort = () => fail(transaction.error || new Error(`Reading ${storeName} was aborted.`));
        } catch (error) {
          fail(error);
        }
      };
    });
  }

  async function readIndexedDb() {
    if (!window.indexedDB || typeof window.indexedDB.databases !== 'function') {
      return {
        available: false,
        audioAvailable: false,
        backgroundsAvailable: false,
        audioRecords: [],
        backgroundRecords: [],
        errors: [new Error('IndexedDB database enumeration is unavailable.')]
      };
    }

    const databaseList = await window.indexedDB.databases();
    const existingNames = new Set(databaseList.map((database) => database.name).filter(Boolean));
    const [audioResult, backgroundsResult] = await Promise.allSettled([
      existingNames.has(DATABASES.media.name)
        ? readDatabaseStore(DATABASES.media.name, DATABASES.media.store)
        : Promise.resolve([]),
      existingNames.has(DATABASES.backgrounds.name)
        ? readDatabaseStore(DATABASES.backgrounds.name, DATABASES.backgrounds.store)
        : Promise.resolve([])
    ]);

    return {
      available: audioResult.status === 'fulfilled' && backgroundsResult.status === 'fulfilled',
      audioAvailable: audioResult.status === 'fulfilled',
      backgroundsAvailable: backgroundsResult.status === 'fulfilled',
      audioRecords: audioResult.status === 'fulfilled' ? audioResult.value : [],
      backgroundRecords: backgroundsResult.status === 'fulfilled' ? backgroundsResult.value : [],
      errors: [audioResult, backgroundsResult]
        .filter((result) => result.status === 'rejected')
        .map((result) => result.reason)
    };
  }

  async function readBrowserEstimate() {
    if (typeof window.navigator.storage?.estimate !== 'function') return null;
    const estimate = await window.navigator.storage.estimate();
    if (!Number.isFinite(estimate.usage) || !Number.isFinite(estimate.quota)) return null;
    return { usage: estimate.usage, quota: estimate.quota };
  }

  async function readApplicationCache() {
    if (!window.caches) return null;
    const names = (await window.caches.keys()).filter((name) => name.startsWith('carnet-'));
    let bytes = 0;
    let entryCount = 0;
    for (const name of names) {
      const cache = await window.caches.open(name);
      const requests = await cache.keys();
      for (const request of requests) {
        const response = await cache.match(request);
        if (!response) continue;
        bytes += (await response.blob()).size;
        entryCount += 1;
      }
    }
    return { names, bytes, entryCount };
  }

  function addIndexedFiles(inventory, indexedDb) {
    if (indexedDb.audioAvailable) {
      indexedDb.audioRecords.forEach((record) => {
        const file = record?.file;
        inventory.files.push({
          id: `audio:${String(record.id)}`,
          type: 'audio',
          name: record.name || t('storage.audioFile'),
          size: Number.isFinite(file?.size) ? file.size : null,
          createdAt: record.added || null,
          mimeType: record.type || file?.type || 'audio/*',
          blob: file instanceof Blob ? file : null,
          sourceId: record.id
        });
        if (Number.isFinite(file?.size)) inventory.categories.music += file.size;
      });
    }

    if (indexedDb.backgroundsAvailable) {
      const activeRecordId = `conversation-background:${getStoredProfileCode()}`;
      indexedDb.backgroundRecords.forEach((record) => {
        if (Number.isFinite(record?.blob?.size)) inventory.categories.otherFiles += record.blob.size;
      });
      indexedDb.backgroundRecords
        .filter((record) => record?.id === activeRecordId)
        .forEach((record) => {
          inventory.files.push({
            id: `background:${String(record.id)}`,
            type: 'background',
            name: record.name || t('storage.backgroundFile'),
            size: Number.isFinite(record.blob?.size) ? record.blob.size : null,
            createdAt: record.updatedAt || null,
            mimeType: record.type || record.blob?.type || 'image/*',
            blob: record.blob instanceof Blob ? record.blob : null,
            sourceId: record.id
          });
        });
    }
  }

  function renderCategories(inventory) {
    const list = document.getElementById('storageBreakdown');
    const chart = document.getElementById('storageUsageChart');
    const labels = [
      ['photos', 'storage.photos'],
      ['music', 'storage.music'],
      ['messages', 'storage.messageData'],
      ['otherFiles', 'storage.otherFiles'],
      ['applicationData', 'storage.applicationData']
    ];
    list.replaceChildren();
    const knownTotal = labels.reduce((sum, [key]) => {
      if (!inventory.availableCategories[key]) return sum;
      return sum + inventory.categories[key] + (key === 'music' ? inventory.categories.musicFiles : 0);
    }, 0);
    const segments = [];

    for (const [key, labelKey] of labels) {
      const bytes = inventory.categories[key];
      const categoryBytes = bytes + (key === 'music' ? inventory.categories.musicFiles : 0);
      const item = document.createElement('li');
      item.className = 'storage-legend-item';
      const swatch = document.createElement('span');
      swatch.className = 'storage-legend-swatch';
      swatch.style.backgroundColor = CATEGORY_COLORS[key];
      swatch.setAttribute('aria-hidden', 'true');
      const label = document.createElement('span');
      label.className = 'storage-legend-label';
      label.textContent = t(labelKey);
      const value = document.createElement('strong');
      value.textContent = inventory.availableCategories[key] ? formatBytes(categoryBytes) : t('storage.measureUnavailable');
      item.append(swatch, label, value);
      list.appendChild(item);

      if (inventory.availableCategories[key] && categoryBytes > 0) {
        const start = segments.reduce((sum, segment) => sum + segment.percent, 0);
        const percent = knownTotal > 0 ? categoryBytes / knownTotal * 100 : 0;
        segments.push({ color: CATEGORY_COLORS[key], start, end: start + percent, percent });
      }
    }

    chart.style.background = segments.length
      ? `conic-gradient(${segments.map((segment) => `${segment.color} ${segment.start}% ${segment.end}%`).join(', ')})`
      : '';
    chart.setAttribute('aria-label', t('storage.chartAria', { size: formatBytes(knownTotal) }));
  }

  function getSortedFiles() {
    const sorted = files.slice();
    sorted.sort((left, right) => {
      if (sorting.startsWith('size')) {
        const difference = (left.size ?? -1) - (right.size ?? -1);
        return sorting === 'size-asc' ? difference : -difference;
      }
      const difference = new Date(left.createdAt || 0).getTime() - new Date(right.createdAt || 0).getTime();
      return sorting === 'date-asc' ? difference : -difference;
    });
    return sorted;
  }

  function renderFiles() {
    const list = document.getElementById('storageFileList');
    list.replaceChildren();
    const sorted = getSortedFiles();
    if (!sorted.length) {
      const empty = document.createElement('li');
      empty.className = 'storage-empty-state';
      empty.textContent = t('storage.noFiles');
      list.appendChild(empty);
      return;
    }

    sorted.forEach((file) => {
      const item = document.createElement('li');
      item.className = 'storage-file-row';
      if (file.size !== null && file.size >= LARGE_FILE_BYTES) item.classList.add('is-large');
      if (duplicateFileIds.has(file.id)) item.classList.add('is-duplicate');

      const summary = document.createElement('div');
      summary.className = 'storage-file-summary';
      const name = document.createElement('strong');
      name.className = 'storage-file-name';
      name.textContent = file.name;
      const metadata = document.createElement('span');
      metadata.className = 'storage-file-meta';
      metadata.textContent = `${t(`storage.type.${file.type}`)} · ${formatBytes(file.size)} · ${formatDate(file.createdAt)}`;
      summary.append(name, metadata);
      if (duplicateFileIds.has(file.id)) {
        const duplicate = document.createElement('span');
        duplicate.className = 'storage-duplicate-badge';
        duplicate.textContent = t('storage.duplicateLabel');
        summary.appendChild(duplicate);
      }
      const preview = document.createElement('button');
      preview.className = 'storage-action-button';
      preview.type = 'button';
      preview.textContent = t('storage.preview');
      preview.addEventListener('click', () => openPreview(file.id));
      item.append(summary, preview);
      list.appendChild(item);
    });
  }

  function renderRemoteStatus() {
    const status = document.getElementById('storageRemoteStatus');
    const state = window.MessageModule?.getState?.();
    if (!state?.partnerCode) {
      status.textContent = t('storage.remoteNotLinked');
      return;
    }
    if (!state?.ready) {
      status.textContent = t('storage.remoteLoading');
      return;
    }
    const messages = window.MessageModule?.getMessages?.();
    if (!Array.isArray(messages)) {
      status.textContent = t('storage.remoteMeasureUnavailable');
      return;
    }
    status.textContent = t('storage.remoteLoaded', { count: messages.length });
  }

  function renderEstimate(estimate) {
    const status = document.getElementById('storageEstimateStatus');
    if (!estimate) {
      status.textContent = t('storage.browserEstimateUnavailable');
      return;
    }
    status.textContent = t('storage.browserEstimate', {
      usage: formatBytes(estimate.usage),
      quota: formatBytes(estimate.quota)
    });
  }

  function renderCache(cache) {
    const status = document.getElementById('storageCacheStatus');
    const button = document.getElementById('storageClearCache');
    if (!cache) {
      status.textContent = t('storage.cacheUnavailable');
      button.hidden = true;
      return;
    }
    status.textContent = cache.entryCount
      ? t('storage.cacheUsage', { size: formatBytes(cache.bytes), count: cache.entryCount })
      : t('storage.cacheEmpty');
    button.hidden = cache.names.length === 0;
  }

  function renderLargeFileSummary() {
    const largeCount = files.filter((file) => Number.isFinite(file.size) && file.size >= LARGE_FILE_BYTES).length;
    document.getElementById('storageLargeFilesStatus').textContent = largeCount
      ? t('storage.largeFiles', { count: largeCount, threshold: formatBytes(LARGE_FILE_BYTES) })
      : t('storage.noLargeFiles', { threshold: formatBytes(LARGE_FILE_BYTES) });
  }

  function renderDuplicateStatus() {
    if (!duplicateStatus) return;
    const status = document.getElementById('storageDuplicateStatus');
    if (duplicateStatus.unavailable) {
      status.textContent = t('storage.duplicateUnavailable');
      return;
    }
    if (duplicateStatus.error) {
      status.textContent = t('storage.duplicateError');
      return;
    }
    const message = duplicateStatus.count
      ? t('storage.duplicateFound', { count: duplicateStatus.count, groups: duplicateStatus.groups })
      : t('storage.duplicateNone');
    status.textContent = duplicateStatus.skipped
      ? `${message} ${t('storage.duplicateSkipped', {
        count: duplicateStatus.skipped,
        size: formatBytes(DUPLICATE_SCAN_LIMIT)
      })}`
      : message;
  }

  function renderInventory(inventory) {
    files = inventory.files;
    lastInventory = inventory;
    duplicateFileIds = new Set();
    duplicateStatus = null;
    document.getElementById('storageDuplicateStatus').textContent = '';
    renderCategories(inventory);
    renderEstimate(inventory.estimate);
    renderRemoteStatus();
    renderCache(inventory.cache);
    renderLargeFileSummary();
    renderFiles();
    document.getElementById('storageScanDuplicates').disabled = files.length < 2;
  }

  async function refresh() {
    const refreshButton = document.getElementById('storageRefreshButton');
    refreshButton.disabled = true;
    setStatus('storage.refreshing');
    const errors = [];
    const [localResult, databaseResult, estimateResult, cacheResult] = await Promise.allSettled([
      Promise.resolve().then(readLocalStorage),
      readIndexedDb(),
      readBrowserEstimate(),
      readApplicationCache()
    ]);

    let local = { available: false, categories: Object.fromEntries(CATEGORY_KEYS.map((key) => [key, 0])), records: [] };
    let indexedDb = {
      available: false,
      audioAvailable: false,
      backgroundsAvailable: false,
      audioRecords: [],
      backgroundRecords: [],
      errors: []
    };
    if (localResult.status === 'fulfilled') local = localResult.value;
    else {
      errors.push(localResult.reason);
      console.error('Could not inspect local storage.', localResult.reason);
    }
    if (databaseResult.status === 'fulfilled') indexedDb = databaseResult.value;
    else {
      errors.push(databaseResult.reason);
      console.error('Could not inspect IndexedDB files.', databaseResult.reason);
    }
    indexedDb.errors.forEach((error) => {
      errors.push(error);
      console.warn('Part of the IndexedDB inventory is unavailable.', error);
    });

    const inventory = {
      localStorageAvailable: local.available,
      categories: {
        ...local.categories,
        musicFiles: 0
      },
      availableCategories: {
        photos: local.available,
        music: local.available && indexedDb.audioAvailable,
        messages: local.available,
        otherFiles: indexedDb.backgroundsAvailable,
        applicationData: local.available
      },
      files: local.records,
      estimate: estimateResult.status === 'fulfilled' ? estimateResult.value : null,
      cache: cacheResult.status === 'fulfilled' ? cacheResult.value : null
    };
    if (estimateResult.status === 'rejected') {
      errors.push(estimateResult.reason);
      console.warn('Browser storage estimate is unavailable.', estimateResult.reason);
    }
    if (cacheResult.status === 'rejected') {
      errors.push(cacheResult.reason);
      console.error('Could not inspect the application cache.', cacheResult.reason);
    }

    if (indexedDb.audioAvailable || indexedDb.backgroundsAvailable) addIndexedFiles(inventory, indexedDb);
    renderInventory(inventory);
    setStatus(errors.length ? 'storage.partial' : 'storage.updated');
    refreshButton.disabled = false;
  }

  function setStatus(key, values = {}) {
    lastStatus = [key, values];
    document.getElementById('storageManagerStatus').textContent = t(key, values);
  }

  async function getFileBlob(file) {
    if (file.blob instanceof Blob) return file.blob;
    if (typeof file.dataUrl === 'string' && file.dataUrl.startsWith('data:')) {
      const response = await fetch(file.dataUrl);
      if (!response.ok) throw new Error(`Could not read ${file.name}.`);
      return response.blob();
    }
    throw new Error(`The file contents for ${file.name} are unavailable.`);
  }

  function hashToHex(buffer) {
    return Array.from(new Uint8Array(buffer), (byte) => byte.toString(16).padStart(2, '0')).join('');
  }

  async function scanDuplicates() {
    const button = document.getElementById('storageScanDuplicates');
    const sameSizeGroups = new Map();
    duplicateFileIds = new Set();
    button.disabled = true;
    setStatus('storage.duplicateScanning');
    try {
      if (!window.crypto?.subtle) {
        duplicateStatus = { unavailable: true };
        renderDuplicateStatus();
        setStatus('storage.duplicateUnavailable');
        return;
      }
      files.forEach((file) => {
        if (!Number.isFinite(file.size)) return;
        const group = sameSizeGroups.get(file.size) || [];
        group.push(file);
        sameSizeGroups.set(file.size, group);
      });

      const candidates = [...sameSizeGroups.values()].filter((group) => group.length > 1);
      let skipped = 0;
      const hashes = new Map();
      for (const group of candidates) {
        if (group[0].size > DUPLICATE_SCAN_LIMIT) {
          skipped += group.length;
          continue;
        }
        for (const file of group) {
          const blob = await getFileBlob(file);
          const digest = await window.crypto.subtle.digest('SHA-256', await blob.arrayBuffer());
          const hash = hashToHex(digest);
          const matches = hashes.get(hash) || [];
          matches.push(file);
          hashes.set(hash, matches);
        }
      }

      const duplicateGroups = [...hashes.values()].filter((group) => group.length > 1);
      const duplicateCount = duplicateGroups.reduce((sum, group) => sum + group.length, 0);
      duplicateGroups.forEach((group) => group.forEach((file) => duplicateFileIds.add(file.id)));
      renderFiles();
      duplicateStatus = { count: duplicateCount, groups: duplicateGroups.length, skipped };
      renderDuplicateStatus();
      setStatus('storage.duplicateDone');
    } catch (error) {
      console.error('Exact duplicate scan failed.', error);
      duplicateStatus = { error: true };
      renderDuplicateStatus();
      setStatus('storage.duplicateError');
    } finally {
      button.disabled = files.length < 2;
    }
  }

  function appendPreviewMedia(file, content) {
    if ((file.type === 'photo' || file.type === 'background') && (file.dataUrl || file.blob)) {
      const image = document.createElement('img');
      image.className = 'storage-preview-image';
      image.alt = file.name;
      if (file.dataUrl) image.src = file.dataUrl;
      else {
        previewObjectUrl = URL.createObjectURL(file.blob);
        image.src = previewObjectUrl;
      }
      content.appendChild(image);
      return;
    }
    if ((file.type === 'audio' || file.type === 'notificationSound') && (file.dataUrl || file.blob)) {
      const audio = document.createElement('audio');
      audio.className = 'storage-preview-audio';
      audio.controls = true;
      audio.preload = 'metadata';
      if (file.dataUrl) audio.src = file.dataUrl;
      else {
        previewObjectUrl = URL.createObjectURL(file.blob);
        audio.src = previewObjectUrl;
      }
      content.appendChild(audio);
      return;
    }
    const unavailable = document.createElement('p');
    unavailable.textContent = t('storage.previewUnavailable');
    content.appendChild(unavailable);
  }

  function openPreview(fileId) {
    const file = files.find((item) => item.id === fileId);
    if (!file) {
      setStatus('storage.fileUnavailable');
      return;
    }
    currentPreview = file;
    const content = document.getElementById('storagePreviewContent');
    content.replaceChildren();
    const name = document.createElement('strong');
    name.className = 'storage-preview-name';
    name.textContent = file.name;
    const metadata = document.createElement('p');
    metadata.className = 'storage-preview-meta';
    metadata.textContent = `${t(`storage.type.${file.type}`)} · ${formatBytes(file.size)} · ${formatDate(file.createdAt)}`;
    content.append(name, metadata);
    appendPreviewMedia(file, content);
    document.getElementById('storagePreviewDelete').hidden = !['photo', 'audio', 'background', 'notificationSound'].includes(file.type)
      || (file.type === 'photo' && (file.sourceId === undefined || file.sourceId === null));
    document.getElementById('storagePreviewDialog').showModal();
  }

  function closePreview() {
    const dialog = document.getElementById('storagePreviewDialog');
    if (dialog.open) dialog.close();
    if (previewObjectUrl) URL.revokeObjectURL(previewObjectUrl);
    previewObjectUrl = null;
    currentPreview = null;
    document.getElementById('storagePreviewContent').replaceChildren();
  }

  async function deletePreviewFile() {
    const file = currentPreview;
    if (!file) return;
    if (!window.confirm(t('storage.confirmDelete', { name: file.name }))) return;
    const button = document.getElementById('storagePreviewDelete');
    button.disabled = true;
    try {
      if (file.type === 'photo') {
        if (file.sourceId === undefined || file.sourceId === null) {
          throw new Error('The gallery photo has no stable identifier.');
        }
        if (typeof window.deletePhoto !== 'function') throw new Error('Gallery deletion is unavailable.');
        window.deletePhoto(file.sourceId);
      } else if (file.type === 'audio') {
        if (typeof window.renderPlaylist !== 'function' || typeof window.deleteTrack !== 'function') {
          throw new Error('Music deletion is unavailable.');
        }
        await window.renderPlaylist();
        await window.deleteTrack(file.sourceId);
      } else if (file.type === 'background') {
        if (typeof window.removeMessageBackgroundFromSettings !== 'function') {
          throw new Error('Message background deletion is unavailable.');
        }
        const removed = await window.removeMessageBackgroundFromSettings();
        if (!removed) throw new Error('Message background deletion failed.');
      } else if (file.type === 'notificationSound') {
        const removed = window.NotificationCenter?.removeCustomSound?.();
        if (!removed) throw new Error('Custom notification sound deletion failed.');
      } else {
        throw new Error('This file cannot be deleted from the storage manager.');
      }
      closePreview();
      await refresh();
      if (files.some((currentFile) => currentFile.id === file.id)) {
        throw new Error('The selected file is still present after the deletion attempt.');
      }
      setStatus('storage.deleteSuccess');
    } catch (error) {
      console.error('Could not delete the selected local file.', error);
      setStatus('storage.deleteError');
    } finally {
      button.disabled = false;
    }
  }

  async function clearApplicationCache() {
    const button = document.getElementById('storageClearCache');
    try {
      const cache = await readApplicationCache();
      if (!cache) {
        setStatus('storage.cacheUnavailable');
        return;
      }
      if (!cache.names.length) {
        setStatus('storage.cacheEmpty');
        return;
      }
      if (!window.confirm(t('storage.clearCacheConfirm'))) return;
      button.disabled = true;
      const results = await Promise.all(cache.names.map((name) => window.caches.delete(name)));
      if (results.some((deleted) => !deleted)) throw new Error('One or more application caches could not be removed.');
      await refresh();
      setStatus('storage.cacheCleared');
    } catch (error) {
      console.error('Could not clear the application cache.', error);
      setStatus('storage.cacheDeleteError');
    } finally {
      button.disabled = false;
    }
  }

  function bindEvents() {
    document.getElementById('storageRefreshButton').addEventListener('click', refresh);
    document.getElementById('storageFileSort').addEventListener('change', (event) => {
      sorting = event.target.value;
      renderFiles();
    });
    document.getElementById('storageScanDuplicates').addEventListener('click', scanDuplicates);
    document.getElementById('storageClearCache').addEventListener('click', clearApplicationCache);
    document.getElementById('storagePreviewClose').addEventListener('click', closePreview);
    document.getElementById('storagePreviewCancel').addEventListener('click', closePreview);
    document.getElementById('storagePreviewDelete').addEventListener('click', deletePreviewFile);
    document.getElementById('storagePreviewDialog').addEventListener('cancel', (event) => {
      event.preventDefault();
      closePreview();
    });
    document.getElementById('storagePreviewDialog').addEventListener('click', (event) => {
      if (event.target === event.currentTarget) closePreview();
    });
    window.addEventListener('carnet:languagechange', () => {
      if (lastInventory) {
        renderCategories(lastInventory);
        renderEstimate(lastInventory.estimate);
        renderCache(lastInventory.cache);
        renderFiles();
      }
      renderRemoteStatus();
      renderLargeFileSummary();
      document.getElementById('storagePreviewDelete').textContent = t('storage.delete');
      document.getElementById('storagePreviewCancel').textContent = t('storage.cancel');
      if (currentPreview) openPreview(currentPreview.id);
      renderDuplicateStatus();
      setStatus(...lastStatus);
    });
  }

  function initialize() {
    if (initialized) return;
    if (!document.getElementById('storageFileList')) return;
    initialized = true;
    bindEvents();
    refresh();
  }

  window.StorageManager = { initialize };
})(window, document);
