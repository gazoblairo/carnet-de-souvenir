(function (window, document) {
  const STORAGE_PREFIX = 'carnet_visual_preferences:';
  const SECTION_IDS = {
    home: ['accueil'],
    messages: ['messages'],
    memories: ['souvenirs'],
    gallery: ['mediaPhotosPage'],
    music: ['mediaMusicPage'],
    games: ['jeux'],
    other: ['plus']
  };
  const PALETTES = {
    rose: {
      light: { primary: '#d94672', secondary: '#8b5cf6', accent: '#f4a261' },
      dark: { primary: '#ff8fb1', secondary: '#b692ff', accent: '#ffe29c' }
    },
    lavender: {
      light: { primary: '#7054c8', secondary: '#aa83df', accent: '#df8dad' },
      dark: { primary: '#bd9cff', secondary: '#d2adff', accent: '#ffaac4' }
    },
    ocean: {
      light: { primary: '#087e8b', secondary: '#3b82a0', accent: '#f4a261' },
      dark: { primary: '#70d7de', secondary: '#75b8ff', accent: '#ffd166' }
    },
    sage: {
      light: { primary: '#477b62', secondary: '#87a987', accent: '#d6a768' },
      dark: { primary: '#8cc9a5', secondary: '#a6c8a9', accent: '#eed49b' }
    },
    champagne: {
      light: { primary: '#a96d37', secondary: '#c59a70', accent: '#d2a84d' },
      dark: { primary: '#f3c98b', secondary: '#d8b27f', accent: '#f8e0a3' }
    }
  };
  const GLOBAL_PALETTES = ['original', 'rose', 'lavender', 'ocean', 'sage', 'champagne', 'custom'];
  const SECTION_PALETTES = ['global', 'rose', 'lavender', 'ocean', 'sage', 'champagne'];
  const BACKGROUNDS = ['original', 'soft', 'blush', 'aurora', 'ocean', 'sage'];
  const SECTION_BACKGROUNDS = ['inherit', 'soft', 'blush', 'lavender', 'ocean', 'sage'];
  const BUTTON_SHAPES = ['original', 'rounded', 'pill', 'square'];
  const COLOR_PATTERN = /^#[0-9a-f]{6}$/i;
  const DEFAULTS = {
    version: 1,
    global: {
      palette: 'original',
      primary: '#ff5e8a',
      secondary: '#a855f7',
      buttonShape: 'original',
      background: 'original',
      textScale: 100,
      animations: true,
      highContrast: false,
      reduceEffects: false,
      largeTargets: false,
      oneHanded: false
    },
    sections: Object.fromEntries(Object.keys(SECTION_IDS).map((section) => [section, {
      accent: 'global',
      background: 'inherit',
      reduceMotion: false
    }]))
  };

  let storageKey = '';
  let savedPreferences = clone(DEFAULTS);
  let draftPreferences = clone(DEFAULTS);
  let initialized = false;
  let statusKey = '';

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function isOneOf(value, allowed, fallback) {
    return allowed.includes(value) ? value : fallback;
  }

  function normalizePreferences(value) {
    const result = clone(DEFAULTS);
    if (!value || typeof value !== 'object' || Array.isArray(value)) return result;

    const global = value.global && typeof value.global === 'object' ? value.global : {};
    result.global.palette = isOneOf(global.palette, GLOBAL_PALETTES, result.global.palette);
    if (typeof global.primary === 'string' && COLOR_PATTERN.test(global.primary)) {
      result.global.primary = global.primary.toLowerCase();
    }
    if (typeof global.secondary === 'string' && COLOR_PATTERN.test(global.secondary)) {
      result.global.secondary = global.secondary.toLowerCase();
    }
    result.global.buttonShape = isOneOf(global.buttonShape, BUTTON_SHAPES, result.global.buttonShape);
    result.global.background = isOneOf(global.background, BACKGROUNDS, result.global.background);
    if (Number.isInteger(global.textScale) && global.textScale >= 85 && global.textScale <= 120 && global.textScale % 5 === 0) {
      result.global.textScale = global.textScale;
    }
    if (typeof global.animations === 'boolean') result.global.animations = global.animations;
    if (typeof global.highContrast === 'boolean') result.global.highContrast = global.highContrast;
    if (typeof global.reduceEffects === 'boolean') result.global.reduceEffects = global.reduceEffects;
    if (typeof global.largeTargets === 'boolean') result.global.largeTargets = global.largeTargets;
    if (typeof global.oneHanded === 'boolean') result.global.oneHanded = global.oneHanded;

    const sections = value.sections && typeof value.sections === 'object' ? value.sections : {};
    for (const section of Object.keys(SECTION_IDS)) {
      const current = sections[section] && typeof sections[section] === 'object' ? sections[section] : {};
      result.sections[section].accent = isOneOf(current.accent, SECTION_PALETTES, 'global');
      result.sections[section].background = isOneOf(current.background, SECTION_BACKGROUNDS, 'inherit');
      if (typeof current.reduceMotion === 'boolean') result.sections[section].reduceMotion = current.reduceMotion;
    }
    return result;
  }

  function getStorageKey() {
    let profile = 'default';
    try {
      if (typeof window.getPairingState === 'function') {
        const pairing = window.getPairingState();
        if (typeof pairing?.myCode === 'string' && pairing.myCode.trim()) {
          profile = pairing.myCode.trim().toUpperCase().replace(/[^A-Z0-9_-]/g, '');
        }
      }
    } catch (error) {
      console.error('Could not identify the visual preference profile.', error);
      setStatus('visual.storageError');
    }
    return `${STORAGE_PREFIX}${profile || 'default'}`;
  }

  function readPreferences() {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) return clone(DEFAULTS);
      return normalizePreferences(JSON.parse(raw));
    } catch (error) {
      console.error('Could not load visual preferences.', error);
      setStatus('visual.storageError');
      return clone(DEFAULTS);
    }
  }

  function savePreferences(preferences) {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(preferences));
      return true;
    } catch (error) {
      console.error('Could not save visual preferences.', error);
      setStatus('visual.storageError');
      return false;
    }
  }

  function getPaletteColors(name, theme, preferences) {
    if (name === 'custom') {
      return { primary: preferences.primary, secondary: preferences.secondary, accent: '#ffd166' };
    }
    if (name === 'original') {
      return theme === 'dark'
        ? { primary: '#ff8fb1', secondary: '#b692ff', accent: '#ffe29c' }
        : { primary: '#ff5e8a', secondary: '#a855f7', accent: '#ffd166' };
    }
    return PALETTES[name]?.[theme] || PALETTES.rose[theme];
  }

  function mixColors(color, target, amount) {
    const source = color.match(/[a-f\d]{2}/gi).map((part) => parseInt(part, 16));
    const destination = target.match(/[a-f\d]{2}/gi).map((part) => parseInt(part, 16));
    return `#${source.map((value, index) => Math.round(value + (destination[index] - value) * amount).toString(16).padStart(2, '0')).join('')}`;
  }

  function luminance(color) {
    const channels = color.match(/[a-f\d]{2}/gi).map((part) => parseInt(part, 16) / 255).map((channel) => (
      channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
    ));
    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
  }

  function contrast(first, second) {
    const values = [luminance(first), luminance(second)].sort((a, b) => b - a);
    return (values[0] + 0.05) / (values[1] + 0.05);
  }

  function setPalette(element, name, preferences) {
    const root = document.documentElement;
    const theme = root.dataset.theme === 'light' ? 'light' : 'dark';
    const original = name === 'original' || name === 'global';
    if (original) {
      ['--primary', '--primary-light', '--primary-dark', '--secondary', '--accent', '--primary-contrast'].forEach((property) => {
        element.style.removeProperty(property);
      });
      return;
    }

    const colors = getPaletteColors(name, theme, preferences);
    const ink = '#241926';
    const white = '#ffffff';
    const whiteContrast = Math.min(contrast(colors.primary, white), contrast(colors.secondary, white));
    const inkContrast = Math.min(contrast(colors.primary, ink), contrast(colors.secondary, ink));
    element.style.setProperty('--primary', colors.primary);
    element.style.setProperty('--primary-light', mixColors(colors.primary, white, 0.22));
    element.style.setProperty('--primary-dark', mixColors(colors.primary, '#000000', 0.2));
    element.style.setProperty('--secondary', colors.secondary);
    element.style.setProperty('--accent', colors.accent);
    element.style.setProperty('--primary-contrast', inkContrast > whiteContrast ? ink : white);
  }

  function getSectionTargets(section) {
    return SECTION_IDS[section].map((id) => document.getElementById(id)).filter(Boolean);
  }

  function applyPreferences(preferences) {
    const root = document.documentElement;
    setPalette(root, preferences.global.palette, preferences.global);

    if (preferences.global.buttonShape === 'original') delete root.dataset.visualButtonShape;
    else root.dataset.visualButtonShape = preferences.global.buttonShape;

    if (preferences.global.background === 'original') delete root.dataset.visualBackground;
    else root.dataset.visualBackground = preferences.global.background;

    if (preferences.global.textScale === 100) root.style.removeProperty('font-size');
    else root.style.fontSize = `${preferences.global.textScale}%`;

    root.dataset.visualAnimations = preferences.global.animations ? 'on' : 'off';
    if (preferences.global.highContrast) root.dataset.accessibilityContrast = 'high';
    else delete root.dataset.accessibilityContrast;
    if (preferences.global.reduceEffects) root.dataset.accessibilityEffects = 'reduced';
    else delete root.dataset.accessibilityEffects;
    if (preferences.global.largeTargets) root.dataset.accessibilityTargets = 'large';
    else delete root.dataset.accessibilityTargets;
    if (preferences.global.oneHanded) root.dataset.accessibilityOneHand = 'true';
    else delete root.dataset.accessibilityOneHand;

    for (const [section, settings] of Object.entries(preferences.sections)) {
      for (const target of getSectionTargets(section)) {
        setPalette(target, settings.accent, preferences.global);
        if (settings.background === 'inherit') delete target.dataset.visualSectionBg;
        else target.dataset.visualSectionBg = settings.background;
        if (settings.reduceMotion) target.dataset.visualReduceMotion = 'true';
        else delete target.dataset.visualReduceMotion;
      }
    }

    updatePreview(preferences);
  }

  function updatePreview(preferences) {
    const card = document.getElementById('visualPreviewCard');
    const button = document.getElementById('visualPreviewButton');
    if (!card || !button) return;
    card.style.setProperty('--visual-button-radius', {
      original: '999px',
      rounded: '14px',
      pill: '999px',
      square: '6px'
    }[preferences.global.buttonShape]);
  }

  function setStatus(key) {
    statusKey = key;
    document.querySelectorAll('[data-visual-status]').forEach((status) => {
      status.textContent = window.I18n?.t(key) || key;
    });
  }

  function updateStatusLanguage() {
    if (statusKey) setStatus(statusKey);
  }

  function getElements() {
    return {
      palette: document.getElementById('visualPalette'),
      primary: document.getElementById('visualPrimaryColor'),
      secondary: document.getElementById('visualSecondaryColor'),
      buttonShape: document.getElementById('visualButtonShape'),
      background: document.getElementById('visualBackground'),
      textScale: document.getElementById('visualTextScale'),
      textScaleOutput: document.getElementById('visualTextScaleOutput'),
      animations: document.getElementById('visualAnimations'),
      highContrast: document.getElementById('accessibilityContrast'),
      reduceEffects: document.getElementById('accessibilityEffects'),
      largeTargets: document.getElementById('accessibilityTargets'),
      oneHanded: document.getElementById('accessibilityOneHand'),
      apply: document.querySelectorAll('[data-visual-action="apply"]'),
      cancel: document.querySelectorAll('[data-visual-action="cancel"]'),
      restore: document.querySelectorAll('[data-visual-action="restore"]')
    };
  }

  function setControls(preferences) {
    const elements = getElements();
    elements.palette.value = preferences.global.palette;
    const theme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
    const colors = getPaletteColors(preferences.global.palette, theme, preferences.global);
    elements.primary.value = colors.primary;
    elements.secondary.value = colors.secondary;
    elements.buttonShape.value = preferences.global.buttonShape;
    elements.background.value = preferences.global.background;
    elements.textScale.value = String(preferences.global.textScale);
    elements.textScaleOutput.value = `${preferences.global.textScale}%`;
    elements.animations.checked = !preferences.global.animations;
    elements.highContrast.checked = preferences.global.highContrast;
    elements.reduceEffects.checked = preferences.global.reduceEffects;
    elements.largeTargets.checked = preferences.global.largeTargets;
    elements.oneHanded.checked = preferences.global.oneHanded;

    for (const [section, settings] of Object.entries(preferences.sections)) {
      const accent = document.querySelector(`[data-visual-accent="${section}"]`);
      const background = document.querySelector(`[data-visual-section-background="${section}"]`);
      const motion = document.querySelector(`[data-visual-reduce-motion="${section}"]`);
      if (accent) accent.value = settings.accent;
      if (background) background.value = settings.background;
      if (motion) motion.checked = settings.reduceMotion;
    }

    const hasChanges = JSON.stringify(preferences) !== JSON.stringify(savedPreferences);
    elements.apply.forEach((button) => { button.disabled = !hasChanges; });
    elements.cancel.forEach((button) => { button.disabled = !hasChanges; });
  }

  function readControls() {
    const elements = getElements();
    const result = clone(draftPreferences);
    result.global.palette = isOneOf(elements.palette.value, GLOBAL_PALETTES, 'original');
    result.global.primary = COLOR_PATTERN.test(elements.primary.value) ? elements.primary.value.toLowerCase() : DEFAULTS.global.primary;
    result.global.secondary = COLOR_PATTERN.test(elements.secondary.value) ? elements.secondary.value.toLowerCase() : DEFAULTS.global.secondary;
    result.global.buttonShape = isOneOf(elements.buttonShape.value, BUTTON_SHAPES, 'original');
    result.global.background = isOneOf(elements.background.value, BACKGROUNDS, 'original');
    result.global.textScale = Math.min(120, Math.max(85, Math.round(Number(elements.textScale.value) / 5) * 5));
    result.global.animations = !elements.animations.checked;
    result.global.highContrast = elements.highContrast.checked;
    result.global.reduceEffects = elements.reduceEffects.checked;
    result.global.largeTargets = elements.largeTargets.checked;
    result.global.oneHanded = elements.oneHanded.checked;

    for (const section of Object.keys(SECTION_IDS)) {
      const accent = document.querySelector(`[data-visual-accent="${section}"]`);
      const background = document.querySelector(`[data-visual-section-background="${section}"]`);
      const motion = document.querySelector(`[data-visual-reduce-motion="${section}"]`);
      result.sections[section] = {
        accent: isOneOf(accent?.value, SECTION_PALETTES, 'global'),
        background: isOneOf(background?.value, SECTION_BACKGROUNDS, 'inherit'),
        reduceMotion: !!motion?.checked
      };
    }
    return result;
  }

  function updateDraft() {
    draftPreferences = readControls();
    applyPreferences(draftPreferences);
    setControls(draftPreferences);
  }

  function applyPaletteSelection() {
    const elements = getElements();
    if (elements.palette.value !== 'custom') {
      const theme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
      const colors = getPaletteColors(elements.palette.value, theme, draftPreferences.global);
      elements.primary.value = colors.primary;
      elements.secondary.value = colors.secondary;
    }
    updateDraft();
  }

  function initialize() {
    if (initialized) return;
    const elements = getElements();
    if (!elements.palette || !elements.apply.length) return;

    initialized = true;
    storageKey = getStorageKey();
    savedPreferences = readPreferences();
    draftPreferences = clone(savedPreferences);
    setControls(draftPreferences);
    applyPreferences(draftPreferences);

    elements.palette.addEventListener('change', applyPaletteSelection);
    [elements.primary, elements.secondary].forEach((input) => {
      input.addEventListener('input', () => {
        elements.palette.value = 'custom';
        updateDraft();
      });
      input.addEventListener('change', () => {
        elements.palette.value = 'custom';
        updateDraft();
      });
    });

    [elements.buttonShape, elements.background, elements.textScale, elements.animations, elements.highContrast, elements.reduceEffects, elements.largeTargets, elements.oneHanded].forEach((control) => {
      control.addEventListener('input', updateDraft);
      control.addEventListener('change', updateDraft);
    });
    document.querySelectorAll('[data-visual-accent], [data-visual-section-background], [data-visual-reduce-motion]').forEach((control) => {
      control.addEventListener('input', updateDraft);
      control.addEventListener('change', updateDraft);
    });

    elements.apply.forEach((button) => button.addEventListener('click', () => {
      draftPreferences = readControls();
      if (!savePreferences(draftPreferences)) return;
      savedPreferences = clone(draftPreferences);
      applyPreferences(savedPreferences);
      setControls(draftPreferences);
      setStatus('visual.saved');
    }));

    elements.cancel.forEach((button) => button.addEventListener('click', () => {
      draftPreferences = clone(savedPreferences);
      setControls(draftPreferences);
      applyPreferences(draftPreferences);
      setStatus('visual.cancelled');
    }));

    elements.restore.forEach((button) => button.addEventListener('click', () => {
      const defaults = clone(DEFAULTS);
      setControls(defaults);
      applyPreferences(defaults);
      if (!savePreferences(defaults)) return;
      savedPreferences = defaults;
      draftPreferences = clone(defaults);
      setControls(draftPreferences);
      setStatus('visual.restored');
    }));

    window.addEventListener('carnet:themechange', () => {
      if (draftPreferences.global.palette !== 'custom') {
        const colors = getPaletteColors(draftPreferences.global.palette, document.documentElement.dataset.theme === 'light' ? 'light' : 'dark', draftPreferences.global);
        elements.primary.value = colors.primary;
        elements.secondary.value = colors.secondary;
      }
      applyPreferences(draftPreferences);
    });
    window.addEventListener('carnet:languagechange', updateStatusLanguage);
    window.addEventListener('storage', (event) => {
      if (event.key !== storageKey || JSON.stringify(draftPreferences) !== JSON.stringify(savedPreferences)) return;
      savedPreferences = readPreferences();
      draftPreferences = clone(savedPreferences);
      setControls(draftPreferences);
      applyPreferences(draftPreferences);
    });
  }

  window.VisualCustomizer = { initialize };
})(window, document);
