(function (window, document) {
  const STORAGE_KEY = 'carnet_app_lock';
  const PBKDF2_ITERATIONS = 310000;
  let screen;
  const root = document.documentElement;
  let record = null;
  let enteredPin = '';
  let pendingPin = '';
  let mode = '';
  let isLocked = false;
  let isProcessing = false;
  let lockTimer = null;

  function t(key) {
    return window.I18n?.t(key) || key;
  }

  function readRecord() {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || parsed.enabled !== true) return null;
    if (![4, 6].includes(parsed.pinLength)
      || !/^[a-f\d]{32}$/.test(parsed.salt)
      || !/^[a-f\d]{64}$/.test(parsed.hash)
      || !Number.isSafeInteger(parsed.failedAttempts)
      || parsed.failedAttempts < 0
      || !Number.isFinite(parsed.lockedUntil)) {
      throw new Error('Stored PIN configuration is invalid.');
    }
    return parsed;
  }

  function saveRecord(nextRecord) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextRecord));
    record = nextRecord;
  }

  function encodeHex(bytes) {
    return Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  async function hashPin(pin, salt) {
    const key = await window.crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(pin),
      'PBKDF2',
      false,
      ['deriveBits']
    );
    const bits = await window.crypto.subtle.deriveBits({
      name: 'PBKDF2',
      salt,
      iterations: PBKDF2_ITERATIONS,
      hash: 'SHA-256'
    }, key, 256);
    return encodeHex(new Uint8Array(bits));
  }

  function equalHashes(left, right) {
    if (left.length !== right.length) return false;
    let difference = 0;
    for (let index = 0; index < left.length; index += 1) {
      difference |= left.charCodeAt(index) ^ right.charCodeAt(index);
    }
    return difference === 0;
  }

  function setError(message) {
    document.getElementById('appLockError').textContent = message || '';
  }

  function renderPin() {
    const length = mode.startsWith('unlock') || mode === 'verify-change' || mode === 'verify-disable'
      ? Number(record?.pinLength) || 4
      : Number(document.getElementById('appLockPinLength').value) || 4;
    const dots = document.getElementById('appLockDots');
    dots.replaceChildren(...Array.from({ length }, (_, index) => {
      const dot = document.createElement('span');
      dot.className = `app-lock-dot${index < enteredPin.length ? ' is-filled' : ''}`;
      dot.setAttribute('aria-hidden', 'true');
      return dot;
    }));
    return length;
  }

  function renderPrompt() {
    const keys = {
      unlock: 'lock.promptUnlock',
      setup: 'lock.promptCreate',
      confirm: 'lock.promptConfirm',
      'verify-change': 'lock.promptCurrent',
      'verify-disable': 'lock.promptCurrent'
    };
    document.getElementById('appLockPrompt').textContent = t(keys[mode] || 'lock.promptUnlock');
    document.getElementById('appLockCancel').hidden = isLocked;
    renderPin();
  }

  function refreshSettings() {
    const enabled = !!record?.enabled;
    document.getElementById('appLockEnabled').checked = enabled;
    document.getElementById('appLockPinLength').value = String(record?.pinLength || 4);
    document.getElementById('appLockConfigure').textContent = t(enabled ? 'privacy.changePin' : 'privacy.configurePin');
  }

  function showScreen(nextMode) {
    mode = nextMode;
    enteredPin = '';
    document.querySelectorAll('#appLockKeypad button').forEach(button => { button.disabled = false; });
    screen.hidden = false;
    screen.classList.toggle('is-locked', isLocked);
    root.dataset.appLockDialog = 'open';
    document.getElementById('app').inert = true;
    setError('');
    renderPrompt();
    screen.querySelector('[data-pin-digit]')?.focus();
  }

  function hideScreen() {
    window.clearInterval(lockTimer);
    lockTimer = null;
    mode = '';
    enteredPin = '';
    pendingPin = '';
    isLocked = false;
    document.querySelectorAll('#appLockKeypad button').forEach(button => { button.disabled = false; });
    screen.hidden = true;
    delete root.dataset.appLockDialog;
    delete root.dataset.appLockBoot;
    document.getElementById('app').inert = false;
    refreshSettings();
  }

  function cancelFlow() {
    if (isLocked) return;
    hideScreen();
  }

  function rateLimitMessage() {
    const seconds = Math.max(1, Math.ceil((record.lockedUntil - Date.now()) / 1000));
    return t('lock.wait').replace('{seconds}', String(seconds));
  }

  function startRateLimitTimer() {
    window.clearInterval(lockTimer);
    const update = () => {
      if (!record?.lockedUntil || record.lockedUntil <= Date.now()) {
        window.clearInterval(lockTimer);
        lockTimer = null;
        if (record) {
          record.lockedUntil = 0;
          saveRecord(record);
        }
        setError('');
        document.querySelectorAll('#appLockKeypad button').forEach(button => { button.disabled = false; });
        return;
      }
      setError(rateLimitMessage());
    };
    document.querySelectorAll('#appLockKeypad button').forEach(button => { button.disabled = true; });
    update();
    lockTimer = window.setInterval(update, 1000);
  }

  async function saveNewPin(pin) {
    const salt = window.crypto.getRandomValues(new Uint8Array(16));
    const hash = await hashPin(pin, salt);
    saveRecord({
      enabled: true,
      pinLength: pin.length,
      salt: encodeHex(salt),
      hash,
      failedAttempts: 0,
      lockedUntil: 0
    });
    refreshSettings();
    hideScreen();
  }

  async function verifyCurrentPin(pin) {
    const lockedUntil = Number(record?.lockedUntil) || 0;
    if (lockedUntil > Date.now()) {
      setError(rateLimitMessage());
      startRateLimitTimer();
      return false;
    }

    const actualHash = await hashPin(pin, Uint8Array.from(
      record.salt.match(/.{2}/g).map(value => parseInt(value, 16))
    ));
    if (equalHashes(actualHash, record.hash)) {
      record.failedAttempts = 0;
      record.lockedUntil = 0;
      saveRecord(record);
      return true;
    }

    record.failedAttempts = (Number(record.failedAttempts) || 0) + 1;
    if (record.failedAttempts >= 5) {
      const delay = Math.min(300000, 30000 * (2 ** (record.failedAttempts - 5)));
      record.lockedUntil = Date.now() + delay;
      saveRecord(record);
      startRateLimitTimer();
    } else {
      saveRecord(record);
      setError(t('lock.wrong'));
    }
    return false;
  }

  async function submitPin(pin) {
    if (mode === 'unlock') {
      if (!await verifyCurrentPin(pin)) {
        enteredPin = '';
        renderPin();
        return;
      }
      hideScreen();
      return;
    }

    if (mode === 'verify-change' || mode === 'verify-disable') {
      if (!await verifyCurrentPin(pin)) {
        enteredPin = '';
        renderPin();
        return;
      }
      if (mode === 'verify-disable') {
        window.localStorage.removeItem(STORAGE_KEY);
        record = null;
        refreshSettings();
        hideScreen();
        return;
      }
      showScreen('setup');
      return;
    }

    if (mode === 'setup') {
      pendingPin = pin;
      showScreen('confirm');
      return;
    }

    if (mode === 'confirm') {
      if (pin !== pendingPin) {
        pendingPin = '';
        showScreen('setup');
        setError(t('lock.mismatch'));
        return;
      }
      await saveNewPin(pin);
    }
  }

  function appendDigit(digit) {
    if (isProcessing) return;
    if (mode === 'unlock' && record?.lockedUntil > Date.now()) return;
    setError('');
    const length = renderPin();
    if (enteredPin.length >= length) return;
    enteredPin += digit;
    renderPin();
    if (enteredPin.length === length) {
      const pin = enteredPin;
      enteredPin = '';
      isProcessing = true;
      document.querySelectorAll('#appLockKeypad button').forEach(button => { button.disabled = true; });
      submitPin(pin).catch(error => {
        console.error('Échec de la vérification du code PIN.', error);
        setError(t('lock.storageError'));
        renderPin();
      }).finally(() => {
        isProcessing = false;
        if (!screen.hidden && (!record?.lockedUntil || record.lockedUntil <= Date.now())) {
          document.querySelectorAll('#appLockKeypad button').forEach(button => { button.disabled = false; });
        }
      });
    }
  }

  function init() {
    screen = document.getElementById('appLockScreen');
    const enabledToggle = document.getElementById('appLockEnabled');
    const lengthSelect = document.getElementById('appLockPinLength');
    const configureButton = document.getElementById('appLockConfigure');

    try {
      record = readRecord();
    } catch (error) {
      console.error('Impossible de lire la configuration du verrouillage.', error);
      setError(t('lock.storageError'));
    }
    refreshSettings();

    if (root.dataset.appLockBoot === 'locked') {
      isLocked = true;
      if (!record) {
        showScreen('unlock');
        setError(t('lock.storageError'));
      } else {
        showScreen('unlock');
        if (record.lockedUntil > Date.now()) startRateLimitTimer();
      }
    }

    enabledToggle.addEventListener('change', () => {
      if (enabledToggle.checked) {
        enabledToggle.checked = false;
        if (!window.isSecureContext || !window.crypto?.subtle) {
          window.showToast?.(t('lock.unsupported'));
          return;
        }
        showScreen('setup');
      } else if (record?.enabled) {
        enabledToggle.checked = true;
        showScreen('verify-disable');
      }
    });

    configureButton.addEventListener('click', () => {
      if (!window.isSecureContext || !window.crypto?.subtle) {
        window.showToast?.(t('lock.unsupported'));
        return;
      }
      showScreen(record?.enabled ? 'verify-change' : 'setup');
    });

    lengthSelect.addEventListener('change', () => {
      document.getElementById('appLockPinLength').value = lengthSelect.value;
    });

    document.getElementById('appLockKeypad').addEventListener('click', event => {
      const digitButton = event.target.closest('[data-pin-digit]');
      if (digitButton) appendDigit(digitButton.dataset.pinDigit);
    });
    document.getElementById('appLockBackspace').addEventListener('click', () => {
      if (isProcessing) return;
      enteredPin = enteredPin.slice(0, -1);
      setError('');
      renderPin();
    });
    document.getElementById('appLockCancel').addEventListener('click', cancelFlow);
    screen.addEventListener('keydown', event => {
      if (/^\d$/.test(event.key)) appendDigit(event.key);
      else if (event.key === 'Backspace' && !isProcessing) {
        enteredPin = enteredPin.slice(0, -1);
        renderPin();
      } else if (event.key === 'Escape') cancelFlow();
    });

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState !== 'hidden' || !record?.enabled || isLocked || mode) return;
      isLocked = true;
      showScreen('unlock');
    });
    window.addEventListener('carnet:languagechange', renderPrompt);
    root.dataset.appLockReady = 'true';
  }

  document.addEventListener('DOMContentLoaded', init);
})(window, document);
