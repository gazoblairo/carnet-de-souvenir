(function (window, document) {
  const STORAGE_PREFIX = 'carnet_notification_preferences:';
  const MAX_SOUND_BYTES = 1024 * 1024;
  const CHANNELS = ['messages'];
  const DEFAULTS = {
    enabled: false,
    channels: { messages: true },
    soundEnabled: true,
    sound: 'soft',
    customSound: null,
    vibration: false,
    dndEnabled: false,
    dndStart: '22:00',
    dndEnd: '07:00',
    dndExceptions: [],
    hideContent: true
  };
  const SOUND_PRESETS = {
    soft: [{ frequency: 523.25, delay: 0 }, { frequency: 659.25, delay: 0.13 }],
    bell: [{ frequency: 659.25, delay: 0 }, { frequency: 880, delay: 0.15 }],
    bright: [{ frequency: 783.99, delay: 0 }, { frequency: 987.77, delay: 0.1 }, { frequency: 1174.66, delay: 0.2 }]
  };
  let preferences = { ...DEFAULTS, channels: { ...DEFAULTS.channels } };
  let storageKey = `${STORAGE_PREFIX}local`;
  let seenMessageIds = new Set();
  let initialized = false;

  function t(key) {
    return window.I18n?.t(key) || key;
  }

  function getStorageKey() {
    const pairing = window.getPairingState?.();
    const profileCode = pairing?.myCode?.trim().toUpperCase() || 'local';
    return `${STORAGE_PREFIX}${profileCode}`;
  }

  function loadPreferences() {
    storageKey = getStorageKey();
    try {
      const raw = window.localStorage.getItem(storageKey);
      const stored = raw ? JSON.parse(raw) : {};
      if (!stored || typeof stored !== 'object' || Array.isArray(stored)) {
        throw new Error('Stored notification preferences are invalid.');
      }
      const savedChannels = stored.channels && typeof stored.channels === 'object' ? stored.channels : {};
      const savedSound = ['soft', 'bell', 'bright', 'custom'].includes(stored.sound) ? stored.sound : DEFAULTS.sound;
      const customSound = stored.customSound
        && typeof stored.customSound.name === 'string'
        && typeof stored.customSound.dataUrl === 'string'
        && stored.customSound.dataUrl.startsWith('data:')
        ? stored.customSound
        : null;
      preferences = {
        enabled: stored.enabled === true,
        channels: Object.fromEntries(CHANNELS.map(channel => [
          channel,
          typeof savedChannels[channel] === 'boolean' ? savedChannels[channel] : DEFAULTS.channels[channel]
        ])),
        soundEnabled: typeof stored.soundEnabled === 'boolean' ? stored.soundEnabled : DEFAULTS.soundEnabled,
        sound: savedSound === 'custom' && !customSound ? DEFAULTS.sound : savedSound,
        customSound,
        vibration: stored.vibration === true,
        dndEnabled: stored.dndEnabled === true,
        dndStart: typeof stored.dndStart === 'string' && /^([01]\d|2[0-3]):[0-5]\d$/.test(stored.dndStart)
          ? stored.dndStart
          : DEFAULTS.dndStart,
        dndEnd: typeof stored.dndEnd === 'string' && /^([01]\d|2[0-3]):[0-5]\d$/.test(stored.dndEnd)
          ? stored.dndEnd
          : DEFAULTS.dndEnd,
        dndExceptions: Array.isArray(stored.dndExceptions)
          ? stored.dndExceptions.filter(channel => CHANNELS.includes(channel))
          : [],
        hideContent: typeof stored.hideContent === 'boolean' ? stored.hideContent : DEFAULTS.hideContent
      };
    } catch (error) {
      console.error('Unable to load notification preferences.', error);
      preferences = { ...DEFAULTS, channels: { ...DEFAULTS.channels } };
      window.showToast?.(t('notification.storageError'));
    }
  }

  function persistPreferences(next) {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next));
      preferences = next;
      renderControls();
      return true;
    } catch (error) {
      console.error('Unable to save notification preferences.', error);
      window.showToast?.(t('notification.storageError'));
      renderControls();
      return false;
    }
  }

  function updatePreferences(partial) {
    const next = {
      ...preferences,
      ...partial,
      channels: partial.channels ? { ...preferences.channels, ...partial.channels } : preferences.channels,
      dndExceptions: partial.dndExceptions || preferences.dndExceptions
    };
    persistPreferences(next);
  }

  function removeCustomSound() {
    if (!preferences.customSound) return false;
    return persistPreferences({
      ...preferences,
      customSound: null,
      sound: preferences.sound === 'custom' ? 'soft' : preferences.sound
    });
  }

  function getNotificationPermission() {
    if (!window.isSecureContext || !('Notification' in window)) return 'unsupported';
    return window.Notification.permission;
  }

  function renderPermissionStatus() {
    const button = document.getElementById('notificationPermissionButton');
    const status = document.getElementById('notificationPermissionStatus');
    if (!button || !status) return;
    const permission = getNotificationPermission();
    const messages = {
      granted: 'notification.permissionGranted',
      default: 'notification.permissionDefault',
      denied: 'notification.permissionDenied',
      unsupported: 'notification.permissionUnsupported'
    };
    status.textContent = t(messages[permission] || 'notification.permissionUnsupported');
    button.textContent = t(permission === 'default' ? 'notification.enablePermission' : messages[permission] || 'notification.permissionUnsupported');
    button.disabled = permission !== 'default';
  }

  function renderControls() {
    const master = document.getElementById('notificationAllEnabled');
    if (!master) return;
    master.checked = !!preferences.enabled;
    document.querySelectorAll('[data-notification-type]').forEach(input => {
      input.checked = !!preferences.channels[input.dataset.notificationType];
    });
    document.getElementById('notificationSoundEnabled').checked = !!preferences.soundEnabled;
    document.getElementById('notificationSound').value = preferences.sound;
    document.querySelector('#notificationSound option[value="custom"]').disabled = !preferences.customSound;
    document.getElementById('notificationSoundFileName').textContent = preferences.customSound?.name || '';
    document.getElementById('notificationRemoveSound').hidden = !preferences.customSound;

    const vibration = document.getElementById('notificationVibration');
    const vibrationSupported = typeof window.navigator.vibrate === 'function';
    vibration.checked = !!preferences.vibration;
    vibration.disabled = !vibrationSupported;
    document.getElementById('notificationVibrationHelp').hidden = vibrationSupported;

    document.getElementById('notificationDndEnabled').checked = !!preferences.dndEnabled;
    document.getElementById('notificationDndStart').value = preferences.dndStart;
    document.getElementById('notificationDndEnd').value = preferences.dndEnd;
    document.querySelectorAll('[data-notification-exception]').forEach(input => {
      input.checked = preferences.dndExceptions.includes(input.dataset.notificationException);
      input.disabled = !preferences.dndEnabled;
    });
    document.getElementById('notificationDndStart').disabled = !preferences.dndEnabled;
    document.getElementById('notificationDndEnd').disabled = !preferences.dndEnabled;
    document.getElementById('notificationHideContent').checked = !!preferences.hideContent;
    renderPermissionStatus();
  }

  function getMessageChannel(message) {
    if (['voice', 'audio', 'audio_message'].includes(message.type)) return 'voice';
    if (['image', 'music', 'document', 'video', 'file'].includes(message.type)) return 'media';
    return message.type === 'text' ? 'messages' : null;
  }

  function isInQuietHours(now = new Date()) {
    const toMinutes = value => {
      const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(value || '');
      return match ? Number(match[1]) * 60 + Number(match[2]) : null;
    };
    const start = toMinutes(preferences.dndStart);
    const end = toMinutes(preferences.dndEnd);
    if (!preferences.dndEnabled || start === null || end === null || start === end) return false;
    const current = now.getHours() * 60 + now.getMinutes();
    return start < end
      ? current >= start && current < end
      : current >= start || current < end;
  }

  function isQuietFor(channel) {
    return isInQuietHours() && !preferences.dndExceptions.includes(channel);
  }

  async function playSound() {
    if (preferences.sound === 'custom') {
      if (!preferences.customSound?.dataUrl) throw new Error(t('notification.customNoFile'));
      const audio = new window.Audio(preferences.customSound.dataUrl);
      audio.volume = 0.75;
      await audio.play();
      return;
    }

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) throw new Error(t('notification.soundError'));
    const context = new AudioContext();
    try {
      if (context.state === 'suspended') await context.resume();
      const start = context.currentTime;
      SOUND_PRESETS[preferences.sound].forEach(note => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        const noteStart = start + note.delay;
        oscillator.type = 'sine';
        oscillator.frequency.value = note.frequency;
        gain.gain.setValueAtTime(0.0001, noteStart);
        gain.gain.exponentialRampToValueAtTime(0.14, noteStart + 0.025);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + 0.24);
        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.start(noteStart);
        oscillator.stop(noteStart + 0.25);
      });
      await new Promise(resolve => window.setTimeout(resolve, 600));
    } finally {
      await context.close();
    }
  }

  function notificationContent(message, channel) {
    const sender = document.getElementById('messagesPartnerName')?.textContent?.trim() || t('notification.genericSender');
    let body;
    if (preferences.hideContent) {
      body = t('notification.genericBody');
    } else if (channel === 'voice') {
      body = t('notification.voiceBody');
    } else if (channel === 'media') {
      body = t('notification.mediaBody');
    } else {
      body = (message.text || t('notification.genericBody')).trim().slice(0, 180);
    }
    return { title: sender, body };
  }

  async function showSystemNotification(message, channel) {
    if (getNotificationPermission() !== 'granted') return;
    const { title, body } = notificationContent(message, channel);
    const options = {
      body,
      icon: '/assets/icons/icon-192.png',
      badge: '/assets/icons/icon-192.png',
      tag: `carnet-message-${message.id}`,
      renotify: false,
      silent: true,
      data: { url: '/#messages' }
    };

    if ('serviceWorker' in window.navigator) {
      try {
        const registration = await window.navigator.serviceWorker.getRegistration('/');
        if (registration?.showNotification) {
          await registration.showNotification(title, options);
          return;
        }
      } catch (error) {
        console.warn('Service-worker notification failed; falling back to the browser API.', error);
      }
    }

    const notification = new window.Notification(title, options);
    notification.onclick = () => {
      window.focus();
      window.location.hash = 'messages';
      notification.close();
    };
  }

  async function notifyForMessage(message) {
    if (!preferences.enabled || message.sender !== 'partner' || message.deletedForEveryone || message.deletedForMe) return;
    const channel = getMessageChannel(message);
    if (!channel || !preferences.channels[channel]) return;
    const quiet = isQuietFor(channel);

    if (!quiet && preferences.soundEnabled) {
      playSound().catch(error => {
        console.warn('Notification sound could not be played.', error);
      });
    }
    if (preferences.vibration && typeof window.navigator.vibrate === 'function') {
      try {
        window.navigator.vibrate([80, 45, 80]);
      } catch (error) {
        console.warn('Notification vibration could not be triggered.', error);
      }
    }

    try {
      await showSystemNotification(message, channel);
    } catch (error) {
      console.error('Unable to show a system notification.', error);
    }
  }

  function observeMessages(messages) {
    messages.forEach(message => {
      const id = String(message.id || '');
      if (!id || seenMessageIds.has(id)) return;
      seenMessageIds.add(id);
      notifyForMessage(message);
    });
  }

  function readCustomSound(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error || new Error('Unable to read the audio file.'));
      reader.readAsDataURL(file);
    });
  }

  async function requestNotificationPermission() {
    if (getNotificationPermission() !== 'default') {
      renderPermissionStatus();
      return;
    }
    try {
      await window.Notification.requestPermission();
      renderPermissionStatus();
    } catch (error) {
      console.error('Unable to request notification permission.', error);
      document.getElementById('notificationPermissionStatus').textContent = t('notification.permissionError');
    }
  }

  function bindControls() {
    document.getElementById('notificationPermissionButton').addEventListener('click', requestNotificationPermission);

    document.querySelectorAll('[data-notification-setting]').forEach(input => {
      input.addEventListener('change', () => {
        const { notificationSetting: setting } = input.dataset;
        updatePreferences({ [setting]: input.type === 'checkbox' ? input.checked : input.value });
      });
    });

    document.querySelectorAll('[data-notification-type]').forEach(input => {
      input.addEventListener('change', () => {
        updatePreferences({ channels: { [input.dataset.notificationType]: input.checked } });
      });
    });

    document.querySelectorAll('[data-notification-exception]').forEach(input => {
      input.addEventListener('change', () => {
        const exceptions = new Set(preferences.dndExceptions);
        if (input.checked) exceptions.add(input.dataset.notificationException);
        else exceptions.delete(input.dataset.notificationException);
        updatePreferences({ dndExceptions: [...exceptions] });
      });
    });

    document.getElementById('notificationTestSound').addEventListener('click', async () => {
      try {
        await playSound();
      } catch (error) {
        console.error('Notification sound test failed.', error);
        window.showToast?.(error.message || t('notification.soundError'));
      }
    });

    const soundInput = document.getElementById('notificationSoundFile');
    document.getElementById('notificationChooseSound').addEventListener('click', () => soundInput.click());
    soundInput.addEventListener('change', async () => {
      const file = soundInput.files?.[0];
      soundInput.value = '';
      if (!file) return;
      const allowedAudio = (file.type || '').startsWith('audio/')
        || /\.(mp3|wav|ogg|m4a|aac|flac)$/i.test(file.name);
      if (!allowedAudio) {
        window.showToast?.(t('notification.invalidAudio'));
        return;
      }
      if (file.size > MAX_SOUND_BYTES) {
        window.showToast?.(t('notification.fileTooLarge'));
        return;
      }
      try {
        const dataUrl = await readCustomSound(file);
        updatePreferences({
          customSound: { name: file.name, type: file.type || 'audio/mpeg', dataUrl },
          sound: 'custom'
        });
      } catch (error) {
        console.error('Unable to read the custom notification sound.', error);
        window.showToast?.(t('notification.storageError'));
      }
    });

    document.getElementById('notificationRemoveSound').addEventListener('click', () => {
      updatePreferences({ customSound: null, sound: preferences.sound === 'custom' ? 'soft' : preferences.sound });
    });
  }

  function initialize(messageModule) {
    if (initialized) return;
    initialized = true;
    loadPreferences();
    renderControls();
    bindControls();
    window.addEventListener('carnet:languagechange', renderPermissionStatus);

    const messages = messageModule?.getMessages?.() || [];
    seenMessageIds = new Set(messages.map(message => String(message.id || '')).filter(Boolean));
    messageModule?.onMessagesUpdated?.(observeMessages);
  }

  window.NotificationCenter = { initialize, removeCustomSound };
})(window, document);
