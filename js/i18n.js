(function (window, document) {
  const STORAGE_PREFIX = 'carnet_language:';
  const SUPPORTED = {
    fr: {
      dir: 'ltr',
      messages: {
        'nav.home': '❤️ Accueil', 'nav.messages': '💌 Messages ❤️', 'nav.memories': '📝 Souvenirs',
        'nav.media': '📷 Médias', 'nav.games': '🎮 Jeux', 'nav.more': '⚙️ Plus', 'nav.messagesShort': 'Messages',
        'common.install': 'Installer', 'settings.preferences': 'Préférences de l’application',
        'settings.preferencesHelp': 'Choisissez l’apparence de votre carnet.', 'settings.appearance': 'Apparence & préférences',
        'settings.appearanceHelp': 'Personnalisez l’affichage selon vos envies.', 'settings.language': 'Langue / Language',
        'settings.languageHelp': 'Ce choix est enregistré uniquement pour votre appareil et votre profil.',
        'settings.title': 'Paramètres', 'settings.backupHelp': 'Gardez une copie des données de votre carnet.',
        'settings.backupTitle': '💾 Sauvegarde & données',
        'settings.backupDescription': 'Exportez ou restaurez les données de l’application.',
        'settings.export': 'Exporter JSON', 'settings.import': 'Importer JSON',
        'settings.languageSaved': 'Langue mise à jour.', 'home.years': 'Années',
        'time.year.one': 'an', 'time.year.other': 'ans', 'time.month.one': 'mois', 'time.month.other': 'mois',
        'home.story': 'Notre histoire', 'home.together': 'Ensemble depuis', 'home.happyDays': 'jours de bonheur',
        'home.editDate': 'Modifier la date', 'home.challenge': 'Défi du jour', 'home.newChallenge': 'Nouveau défi',
        'home.completeChallenge': 'Marquer comme fait ✓', 'home.recentChallenges': 'Défis récents',
        'memories.add': '+ Ajouter', 'memories.search': 'Rechercher un souvenir...', 'memories.empty': "Aucun souvenir pour l'instant",
        'memories.emptyHelp': 'Commencez à écrire votre histoire !', 'memories.importantDates': 'Dates importantes',
        'memories.timeline': 'Chronologie de notre histoire', 'memories.stats': 'Statistiques',
        'media.gallery': 'Notre galerie', 'media.galleryIntro': 'Les instants précieux de notre histoire, réunis au même endroit.',
        'media.addPhoto': '+ Photo', 'media.noPhotos': "Aucune photo pour l'instant", 'media.music': 'Notre univers musical',
        'media.musicIntro': 'Les mélodies qui accompagnent votre histoire.', 'media.addTrack': '+ Ajouter',
        'game.truthOrDare': 'Action ou Vérité', 'game.romantic': '🟢 Romantique', 'game.funny': '🟡 Drôle',
        'game.bold': '🔴 Audacieux', 'game.spin': '❤️ FAIRE TOURNER',
        'modal.cancel': 'Annuler', 'modal.save': 'Enregistrer', 'modal.close': 'Fermer'
      }
    },
    en: {
      dir: 'ltr',
      messages: {
        'nav.home': '❤️ Home', 'nav.messages': '💌 Messages ❤️', 'nav.memories': '📝 Memories',
        'nav.media': '📷 Media', 'nav.games': '🎮 Games', 'nav.more': '⚙️ More', 'nav.messagesShort': 'Messages',
        'common.install': 'Install', 'settings.preferences': 'App preferences',
        'settings.preferencesHelp': 'Choose how your journal looks.', 'settings.appearance': 'Appearance & preferences',
        'settings.appearanceHelp': 'Customize the display to suit you.', 'settings.language': 'Language',
        'settings.languageHelp': 'This choice is saved only for your device and your profile.',
        'settings.title': 'Settings', 'settings.backupHelp': 'Keep a copy of your journal data.',
        'settings.backupTitle': '💾 Backup & data',
        'settings.backupDescription': 'Export or restore application data.',
        'settings.export': 'Export JSON', 'settings.import': 'Import JSON',
        'settings.languageSaved': 'Language updated.', 'home.years': 'Years',
        'time.year.one': 'year', 'time.year.other': 'years', 'time.month.one': 'month', 'time.month.other': 'months',
        'home.story': 'Our story', 'home.together': 'Together for', 'home.happyDays': 'days of happiness',
        'home.editDate': 'Edit date', 'home.challenge': 'Daily challenge', 'home.newChallenge': 'New challenge',
        'home.completeChallenge': 'Mark as done ✓', 'home.recentChallenges': 'Recent challenges',
        'memories.add': '+ Add', 'memories.search': 'Search memories...', 'memories.empty': 'No memories yet',
        'memories.emptyHelp': 'Start writing your story!', 'memories.importantDates': 'Important dates',
        'memories.timeline': 'Our story timeline', 'memories.stats': 'Statistics',
        'media.gallery': 'Our gallery', 'media.galleryIntro': 'Precious moments from our story, gathered in one place.',
        'media.addPhoto': '+ Photo', 'media.noPhotos': 'No photos yet', 'media.music': 'Our musical world',
        'media.musicIntro': 'The melodies that accompany your story.', 'media.addTrack': '+ Add track',
        'game.truthOrDare': 'Truth or Dare', 'game.romantic': '🟢 Romantic', 'game.funny': '🟡 Funny',
        'game.bold': '🔴 Daring', 'game.spin': '❤️ SPIN',
        'modal.cancel': 'Cancel', 'modal.save': 'Save', 'modal.close': 'Close'
      }
    },
    es: {
      dir: 'ltr',
      messages: {
        'nav.home': '❤️ Inicio', 'nav.messages': '💌 Mensajes ❤️', 'nav.memories': '📝 Recuerdos',
        'nav.media': '📷 Medios', 'nav.games': '🎮 Juegos', 'nav.more': '⚙️ Más', 'nav.messagesShort': 'Mensajes',
        'common.install': 'Instalar', 'settings.preferences': 'Preferencias de la aplicación',
        'settings.preferencesHelp': 'Elige el aspecto de tu diario.', 'settings.appearance': 'Apariencia y preferencias',
        'settings.appearanceHelp': 'Personaliza la visualización a tu gusto.', 'settings.language': 'Idioma / Language',
        'settings.languageHelp': 'Esta elección se guarda solo en tu dispositivo y en tu perfil.',
        'settings.title': 'Ajustes', 'settings.backupHelp': 'Guarda una copia de los datos de tu diario.',
        'settings.backupTitle': '💾 Copia de seguridad y datos',
        'settings.backupDescription': 'Exporta o restaura los datos de la aplicación.',
        'settings.export': 'Exportar JSON', 'settings.import': 'Importar JSON',
        'settings.languageSaved': 'Idioma actualizado.', 'home.years': 'Años',
        'time.year.one': 'año', 'time.year.other': 'años', 'time.month.one': 'mes', 'time.month.other': 'meses',
        'home.story': 'Nuestra historia', 'home.together': 'Juntos desde hace', 'home.happyDays': 'días de felicidad',
        'home.editDate': 'Cambiar fecha', 'home.challenge': 'Reto del día', 'home.newChallenge': 'Nuevo reto',
        'home.completeChallenge': 'Marcar como hecho ✓', 'home.recentChallenges': 'Retos recientes',
        'memories.add': '+ Añadir', 'memories.search': 'Buscar un recuerdo...', 'memories.empty': 'Aún no hay recuerdos',
        'memories.emptyHelp': '¡Empiecen a escribir su historia!', 'memories.importantDates': 'Fechas importantes',
        'memories.timeline': 'Cronología de nuestra historia', 'memories.stats': 'Estadísticas',
        'media.gallery': 'Nuestra galería', 'media.galleryIntro': 'Los momentos más especiales de nuestra historia, reunidos en un solo lugar.',
        'media.addPhoto': '+ Foto', 'media.noPhotos': 'Aún no hay fotos', 'media.music': 'Nuestro universo musical',
        'media.musicIntro': 'Las melodías que acompañan vuestra historia.', 'media.addTrack': '+ Añadir',
        'game.truthOrDare': 'Verdad o reto', 'game.romantic': '🟢 Romántico', 'game.funny': '🟡 Divertido',
        'game.bold': '🔴 Atrevido', 'game.spin': '❤️ GIRAR',
        'modal.cancel': 'Cancelar', 'modal.save': 'Guardar', 'modal.close': 'Cerrar'
      }
    },
    pt: {
      dir: 'ltr',
      messages: {
        'nav.home': '❤️ Início', 'nav.messages': '💌 Mensagens ❤️', 'nav.memories': '📝 Memórias',
        'nav.media': '📷 Multimédia', 'nav.games': '🎮 Jogos', 'nav.more': '⚙️ Mais', 'nav.messagesShort': 'Mensagens',
        'common.install': 'Instalar', 'settings.preferences': 'Preferências da aplicação',
        'settings.preferencesHelp': 'Escolha o aspeto do seu diário.', 'settings.appearance': 'Aparência e preferências',
        'settings.appearanceHelp': 'Personalize a apresentação ao seu gosto.', 'settings.language': 'Idioma / Language',
        'settings.languageHelp': 'Esta escolha fica guardada apenas no seu dispositivo e no seu perfil.',
        'settings.title': 'Definições', 'settings.backupHelp': 'Guarde uma cópia dos dados do seu diário.',
        'settings.backupTitle': '💾 Cópia de segurança e dados',
        'settings.backupDescription': 'Exporte ou restaure os dados da aplicação.',
        'settings.export': 'Exportar JSON', 'settings.import': 'Importar JSON',
        'settings.languageSaved': 'Idioma atualizado.', 'home.years': 'Anos',
        'time.year.one': 'ano', 'time.year.other': 'anos', 'time.month.one': 'mês', 'time.month.other': 'meses',
        'home.story': 'A nossa história', 'home.together': 'Juntos há', 'home.happyDays': 'dias de felicidade',
        'home.editDate': 'Alterar data', 'home.challenge': 'Desafio do dia', 'home.newChallenge': 'Novo desafio',
        'home.completeChallenge': 'Marcar como concluído ✓', 'home.recentChallenges': 'Desafios recentes',
        'memories.add': '+ Adicionar', 'memories.search': 'Procurar uma memória...', 'memories.empty': 'Ainda não há memórias',
        'memories.emptyHelp': 'Comecem a escrever a vossa história!', 'memories.importantDates': 'Datas importantes',
        'memories.timeline': 'Cronologia da nossa história', 'memories.stats': 'Estatísticas',
        'media.gallery': 'A nossa galeria', 'media.galleryIntro': 'Os momentos especiais da nossa história, reunidos num só lugar.',
        'media.addPhoto': '+ Foto', 'media.noPhotos': 'Ainda não há fotografias', 'media.music': 'O nosso universo musical',
        'media.musicIntro': 'As melodias que acompanham a vossa história.', 'media.addTrack': '+ Adicionar',
        'game.truthOrDare': 'Verdade ou desafio', 'game.romantic': '🟢 Romântico', 'game.funny': '🟡 Divertido',
        'game.bold': '🔴 Ousado', 'game.spin': '❤️ GIRAR',
        'modal.cancel': 'Cancelar', 'modal.save': 'Guardar', 'modal.close': 'Fechar'
      }
    },
    de: {
      dir: 'ltr',
      messages: {
        'nav.home': '❤️ Startseite', 'nav.messages': '💌 Nachrichten ❤️', 'nav.memories': '📝 Erinnerungen',
        'nav.media': '📷 Medien', 'nav.games': '🎮 Spiele', 'nav.more': '⚙️ Mehr', 'nav.messagesShort': 'Nachrichten',
        'common.install': 'Installieren', 'settings.preferences': 'App-Einstellungen',
        'settings.preferencesHelp': 'Wähle das Erscheinungsbild deines Tagebuchs.', 'settings.appearance': 'Darstellung & Einstellungen',
        'settings.appearanceHelp': 'Passe die Anzeige an deine Wünsche an.', 'settings.language': 'Sprache / Language',
        'settings.languageHelp': 'Diese Auswahl wird nur auf deinem Gerät und in deinem Profil gespeichert.',
        'settings.title': 'Einstellungen', 'settings.backupHelp': 'Bewahre eine Kopie deiner Tagebuchdaten auf.',
        'settings.backupTitle': '💾 Sicherung & Daten',
        'settings.backupDescription': 'Exportiere oder stelle App-Daten wieder her.',
        'settings.export': 'JSON exportieren', 'settings.import': 'JSON importieren',
        'settings.languageSaved': 'Sprache aktualisiert.', 'home.years': 'Jahre',
        'time.year.one': 'Jahr', 'time.year.other': 'Jahre', 'time.month.one': 'Monat', 'time.month.other': 'Monate',
        'home.story': 'Unsere Geschichte', 'home.together': 'Zusammen seit', 'home.happyDays': 'Tage voller Glück',
        'home.editDate': 'Datum ändern', 'home.challenge': 'Tagesaufgabe', 'home.newChallenge': 'Neue Aufgabe',
        'home.completeChallenge': 'Als erledigt markieren ✓', 'home.recentChallenges': 'Letzte Aufgaben',
        'memories.add': '+ Hinzufügen', 'memories.search': 'Erinnerung suchen...', 'memories.empty': 'Noch keine Erinnerungen',
        'memories.emptyHelp': 'Beginnt, eure Geschichte aufzuschreiben!', 'memories.importantDates': 'Wichtige Daten',
        'memories.timeline': 'Zeitstrahl unserer Geschichte', 'memories.stats': 'Statistiken',
        'media.gallery': 'Unsere Galerie', 'media.galleryIntro': 'Kostbare Momente unserer Geschichte an einem Ort.',
        'media.addPhoto': '+ Foto', 'media.noPhotos': 'Noch keine Fotos', 'media.music': 'Unsere Musikwelt',
        'media.musicIntro': 'Melodien, die eure Geschichte begleiten.', 'media.addTrack': '+ Hinzufügen',
        'game.truthOrDare': 'Wahrheit oder Pflicht', 'game.romantic': '🟢 Romantisch', 'game.funny': '🟡 Lustig',
        'game.bold': '🔴 Mutig', 'game.spin': '❤️ DREHEN',
        'modal.cancel': 'Abbrechen', 'modal.save': 'Speichern', 'modal.close': 'Schließen'
      }
    },
    it: {
      dir: 'ltr',
      messages: {
        'nav.home': '❤️ Home', 'nav.messages': '💌 Messaggi ❤️', 'nav.memories': '📝 Ricordi',
        'nav.media': '📷 Media', 'nav.games': '🎮 Giochi', 'nav.more': '⚙️ Altro', 'nav.messagesShort': 'Messaggi',
        'common.install': 'Installa', 'settings.preferences': 'Preferenze dell’app',
        'settings.preferencesHelp': 'Scegli l’aspetto del tuo diario.', 'settings.appearance': 'Aspetto e preferenze',
        'settings.appearanceHelp': 'Personalizza la visualizzazione come preferisci.', 'settings.language': 'Lingua / Language',
        'settings.languageHelp': 'La scelta viene salvata solo sul tuo dispositivo e nel tuo profilo.',
        'settings.title': 'Impostazioni', 'settings.backupHelp': 'Conserva una copia dei dati del tuo diario.',
        'settings.backupTitle': '💾 Backup e dati',
        'settings.backupDescription': 'Esporta o ripristina i dati dell’applicazione.',
        'settings.export': 'Esporta JSON', 'settings.import': 'Importa JSON',
        'settings.languageSaved': 'Lingua aggiornata.', 'home.years': 'Anni',
        'time.year.one': 'anno', 'time.year.other': 'anni', 'time.month.one': 'mese', 'time.month.other': 'mesi',
        'home.story': 'La nostra storia', 'home.together': 'Insieme da', 'home.happyDays': 'giorni di felicità',
        'home.editDate': 'Modifica data', 'home.challenge': 'Sfida del giorno', 'home.newChallenge': 'Nuova sfida',
        'home.completeChallenge': 'Segna come completata ✓', 'home.recentChallenges': 'Sfide recenti',
        'memories.add': '+ Aggiungi', 'memories.search': 'Cerca un ricordo...', 'memories.empty': 'Ancora nessun ricordo',
        'memories.emptyHelp': 'Iniziate a scrivere la vostra storia!', 'memories.importantDates': 'Date importanti',
        'memories.timeline': 'Cronologia della nostra storia', 'memories.stats': 'Statistiche',
        'media.gallery': 'La nostra galleria', 'media.galleryIntro': 'I momenti più preziosi della nostra storia, raccolti in un unico posto.',
        'media.addPhoto': '+ Foto', 'media.noPhotos': 'Ancora nessuna foto', 'media.music': 'Il nostro universo musicale',
        'media.musicIntro': 'Le melodie che accompagnano la vostra storia.', 'media.addTrack': '+ Aggiungi',
        'game.truthOrDare': 'Obbligo o verità', 'game.romantic': '🟢 Romantico', 'game.funny': '🟡 Divertente',
        'game.bold': '🔴 Audace', 'game.spin': '❤️ GIRA',
        'modal.cancel': 'Annulla', 'modal.save': 'Salva', 'modal.close': 'Chiudi'
      }
    },
    ar: {
      dir: 'rtl',
      messages: {
        'nav.home': '❤️ الرئيسية', 'nav.messages': '💌 الرسائل ❤️', 'nav.memories': '📝 الذكريات',
        'nav.media': '📷 الوسائط', 'nav.games': '🎮 الألعاب', 'nav.more': '⚙️ المزيد', 'nav.messagesShort': 'الرسائل',
        'common.install': 'تثبيت', 'settings.preferences': 'تفضيلات التطبيق',
        'settings.preferencesHelp': 'اختر مظهر دفتر يومياتكما.', 'settings.appearance': 'المظهر والتفضيلات',
        'settings.appearanceHelp': 'خصّص طريقة العرض كما تحب.', 'settings.language': 'اللغة / Language',
        'settings.languageHelp': 'يُحفظ هذا الاختيار على جهازك وفي ملفك الشخصي فقط.',
        'settings.title': 'الإعدادات', 'settings.backupHelp': 'احتفظ بنسخة من بيانات دفتر يومياتكما.',
        'settings.backupTitle': '💾 النسخ الاحتياطي والبيانات',
        'settings.backupDescription': 'صدّر بيانات التطبيق أو استعدها.',
        'settings.export': 'تصدير JSON', 'settings.import': 'استيراد JSON',
        'settings.languageSaved': 'تم تحديث اللغة.', 'home.years': 'سنوات',
        'time.year.one': 'سنة', 'time.year.other': 'سنوات', 'time.month.one': 'شهر', 'time.month.other': 'أشهر',
        'home.story': 'قصتنا', 'home.together': 'معًا منذ', 'home.happyDays': 'أيام من السعادة',
        'home.editDate': 'تعديل التاريخ', 'home.challenge': 'تحدي اليوم', 'home.newChallenge': 'تحدٍ جديد',
        'home.completeChallenge': 'وضع علامة تم ✓', 'home.recentChallenges': 'التحديات الأخيرة',
        'memories.add': '+ إضافة', 'memories.search': 'ابحث عن ذكرى...', 'memories.empty': 'لا توجد ذكريات بعد',
        'memories.emptyHelp': 'ابدآ بكتابة قصتكما!', 'memories.importantDates': 'تواريخ مهمة',
        'memories.timeline': 'الخط الزمني لقصتنا', 'memories.stats': 'الإحصاءات',
        'media.gallery': 'معرض صورنا', 'media.galleryIntro': 'لحظات ثمينة من قصتنا، مجتمعة في مكان واحد.',
        'media.addPhoto': '+ صورة', 'media.noPhotos': 'لا توجد صور بعد', 'media.music': 'عالمنا الموسيقي',
        'media.musicIntro': 'الألحان التي ترافق قصتكما.', 'media.addTrack': '+ إضافة',
        'game.truthOrDare': 'حقيقة أم جرأة', 'game.romantic': '🟢 رومانسي', 'game.funny': '🟡 مضحك',
        'game.bold': '🔴 جريء', 'game.spin': '❤️ أدر العجلة',
        'modal.cancel': 'إلغاء', 'modal.save': 'حفظ', 'modal.close': 'إغلاق'
      }
    },
    zh: {
      dir: 'ltr',
      messages: {
        'nav.home': '❤️ 首页', 'nav.messages': '💌 消息 ❤️', 'nav.memories': '📝 回忆',
        'nav.media': '📷 媒体', 'nav.games': '🎮 游戏', 'nav.more': '⚙️ 更多', 'nav.messagesShort': '消息',
        'common.install': '安装', 'settings.preferences': '应用偏好设置',
        'settings.preferencesHelp': '选择日记本的外观。', 'settings.appearance': '外观与偏好设置',
        'settings.appearanceHelp': '按你的喜好自定义显示效果。', 'settings.language': '语言 / Language',
        'settings.languageHelp': '此选择仅保存在你的设备和个人资料中。',
        'settings.title': '设置', 'settings.backupHelp': '保留日记本数据的副本。',
        'settings.backupTitle': '💾 备份与数据',
        'settings.backupDescription': '导出或恢复应用数据。',
        'settings.export': '导出 JSON', 'settings.import': '导入 JSON',
        'settings.languageSaved': '语言已更新。', 'home.years': '年',
        'time.year.one': '年', 'time.year.other': '年', 'time.month.one': '个月', 'time.month.other': '个月',
        'home.story': '我们的故事', 'home.together': '我们相伴已有', 'home.happyDays': '个幸福的日子',
        'home.editDate': '修改日期', 'home.challenge': '今日挑战', 'home.newChallenge': '新挑战',
        'home.completeChallenge': '标记为已完成 ✓', 'home.recentChallenges': '最近的挑战',
        'memories.add': '+ 添加', 'memories.search': '搜索回忆...', 'memories.empty': '还没有回忆',
        'memories.emptyHelp': '开始记录你们的故事吧！', 'memories.importantDates': '重要日期',
        'memories.timeline': '我们的故事时间线', 'memories.stats': '统计',
        'media.gallery': '我们的相册', 'media.galleryIntro': '把故事中的珍贵瞬间汇集于此。',
        'media.addPhoto': '+ 照片', 'media.noPhotos': '还没有照片', 'media.music': '我们的音乐世界',
        'media.musicIntro': '陪伴你们故事的旋律。', 'media.addTrack': '+ 添加',
        'game.truthOrDare': '真心话大冒险', 'game.romantic': '🟢 浪漫', 'game.funny': '🟡 有趣',
        'game.bold': '🔴 大胆', 'game.spin': '❤️ 开始转动',
        'modal.cancel': '取消', 'modal.save': '保存', 'modal.close': '关闭'
      }
    }
  };

  const languageNames = {
    fr: 'Français', en: 'English', es: 'Español', pt: 'Português',
    de: 'Deutsch', it: 'Italiano', ar: 'العربية', zh: '中文'
  };
  let activeLanguage = 'fr';
  let activeUserId = null;

  function isSupported(language) {
    return Object.prototype.hasOwnProperty.call(SUPPORTED, language);
  }

  function preferenceKey(userId) {
    let localIdentity = 'guest';
    if (!userId) {
      try {
        const pairing = JSON.parse(localStorage.getItem('carnet_pairing_state') || 'null');
        if (pairing?.myCode) localIdentity = `device:${pairing.myCode}`;
      } catch (error) {
        // Use the guest preference when the existing pairing record is unavailable.
      }
    }
    return `${STORAGE_PREFIX}${userId || localIdentity}`;
  }

  function readLocal(userId) {
    try {
      const value = JSON.parse(localStorage.getItem(preferenceKey(userId)) || 'null');
      return value && isSupported(value.language) ? value : null;
    } catch (error) {
      return null;
    }
  }

  function writeLocal(language, userId = activeUserId) {
    const preference = { language, updatedAt: Date.now() };
    try {
      localStorage.setItem(preferenceKey(userId), JSON.stringify(preference));
    } catch (error) {
      console.warn('Could not save language preference locally.', error);
    }
    return preference;
  }

  function translateDom() {
    const messages = SUPPORTED[activeLanguage].messages;
    document.documentElement.lang = activeLanguage;
    document.documentElement.dir = SUPPORTED[activeLanguage].dir;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const translation = messages[element.dataset.i18n];
      if (translation) element.textContent = translation;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(element => {
      element.dataset.i18nAttr.split(',').forEach(attribute => {
        const key = element.dataset[`i18n${attribute[0].toUpperCase()}${attribute.slice(1)}`];
        if (key && messages[key]) element.setAttribute(attribute, messages[key]);
      });
    });
    const selector = document.getElementById('languageSelect');
    if (selector) selector.value = activeLanguage;
    document.title = ({
      fr: 'Carnet — Notre Histoire', en: 'Our Journal — Our Story', es: 'Nuestro Diario — Nuestra Historia',
      pt: 'O Nosso Diário — A Nossa História', de: 'Unser Tagebuch — Unsere Geschichte',
      it: 'Il Nostro Diario — La Nostra Storia', ar: 'دفترنا — قصتنا', zh: '我们的日记 — 我们的故事'
    })[activeLanguage];
  }

  function getClient() {
    return window.supabaseClient && window.supabaseClient.auth ? window.supabaseClient : null;
  }

  async function getSessionUser() {
    const client = getClient();
    if (!client) return null;
    try {
      const { data, error } = await client.auth.getSession();
      if (error) throw error;
      return data.session?.user || null;
    } catch (error) {
      console.warn('Could not read the Supabase session; using local language preference.', error.message);
      return null;
    }
  }

  async function syncRemote(preference, userId = activeUserId) {
    const client = getClient();
    if (!client || !userId || !preference || !isSupported(preference.language)) return;
    try {
      const { error } = await client.from('user_preferences').upsert({
        user_id: userId,
        language: preference.language,
        updated_at: new Date(preference.updatedAt).toISOString()
      }, { onConflict: 'user_id' });
      if (error) throw error;
    } catch (error) {
      console.warn('Language preference remains saved locally; Supabase sync is unavailable.', error.message);
    }
  }

  async function loadForUser(userId) {
    const localPreference = readLocal(userId);
    const client = getClient();
    if (!client || !userId) {
      activeUserId = userId || null;
      const guestPreference = readLocal(null);
      if (guestPreference) activeLanguage = guestPreference.language;
      translateDom();
      return;
    }

    try {
      const { data, error } = await client.from('user_preferences')
        .select('language, updated_at').eq('user_id', userId).maybeSingle();
      if (error) throw error;
      if (activeUserId !== userId) return;
      const remoteTimestamp = data?.updated_at ? Date.parse(data.updated_at) : 0;
      const localTimestamp = localPreference?.updatedAt || 0;
      if (data && isSupported(data.language) && remoteTimestamp >= localTimestamp) {
        activeLanguage = data.language;
        writeLocal(data.language, userId);
      } else if (localPreference) {
        activeLanguage = localPreference.language;
        await syncRemote(localPreference, userId);
      }
    } catch (error) {
      if (localPreference) activeLanguage = localPreference.language;
      console.warn('Could not load the Supabase language preference; using local fallback.', error.message);
    }
    translateDom();
  }

  function setLanguage(language) {
    if (!isSupported(language)) return false;
    activeLanguage = language;
    const preference = writeLocal(language);
    translateDom();
    syncRemote(preference).catch(() => {});
    window.dispatchEvent(new CustomEvent('carnet:languagechange', { detail: { language } }));
    return true;
  }

  async function init() {
    const localPreference = readLocal(null);
    if (localPreference) activeLanguage = localPreference.language;
    translateDom();

    const selector = document.getElementById('languageSelect');
    selector?.addEventListener('change', event => {
      if (setLanguage(event.target.value) && typeof window.showToast === 'function') {
        window.showToast(SUPPORTED[activeLanguage].messages['settings.languageSaved']);
      }
    });

    const user = await getSessionUser();
    activeUserId = user?.id || null;
    const personalPreference = readLocal(activeUserId);
    if (personalPreference) activeLanguage = personalPreference.language;
    translateDom();
    if (activeUserId) loadForUser(activeUserId);

    const client = getClient();
    client?.auth.onAuthStateChange((_event, session) => {
      const nextUserId = session?.user?.id || null;
      if (nextUserId === activeUserId) return;
      activeUserId = nextUserId;
      const preference = readLocal(nextUserId);
      activeLanguage = preference?.language || readLocal(null)?.language || 'fr';
      translateDom();
      if (nextUserId) loadForUser(nextUserId);
    });
    window.addEventListener('online', () => {
      const preference = readLocal(activeUserId);
      if (preference) syncRemote(preference);
    });
  }

  window.I18n = {
    init,
    t: (key) => SUPPORTED[activeLanguage].messages[key] || SUPPORTED.fr.messages[key] || key,
    setLanguage,
    getLanguage: () => activeLanguage,
    getLocale: () => ({ fr: 'fr-FR', en: 'en-GB', es: 'es-ES', pt: 'pt-PT', de: 'de-DE', it: 'it-IT', ar: 'ar-SA', zh: 'zh-CN' }[activeLanguage]),
    formatNumber: (value) => new Intl.NumberFormat(({ fr: 'fr-FR', en: 'en-GB', es: 'es-ES', pt: 'pt-PT', de: 'de-DE', it: 'it-IT', ar: 'ar-SA', zh: 'zh-CN' })[activeLanguage]).format(value),
    getLanguages: () => Object.entries(languageNames).map(([code, name]) => ({ code, name, dir: SUPPORTED[code].dir }))
  };
})(window, document);
