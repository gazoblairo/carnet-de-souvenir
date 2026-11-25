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

  const SUPPLEMENTAL_MESSAGES = {
    fr: {
      'settings.themeTitle': 'Thème de l’application', 'settings.themeAria': 'Sélection du thème', 'settings.nicknameToggle': 'Afficher les surnoms à la place des prénoms',
      'theme.dark': '🌙 Mode sombre', 'theme.light': '☀️ Mode clair', 'theme.auto': '🌗 Automatique',
      'theme.darkActivated': 'Mode sombre activé 🌙', 'theme.lightActivated': 'Mode clair activé ☀️', 'theme.autoActivated': 'Mode automatique activé 🌗',
      'theme.updated': 'Thème mis à jour', 'theme.changeToLight': 'Changer vers le mode clair', 'theme.changeToAuto': 'Changer vers le mode automatique',
      'theme.changeToDark': 'Changer vers le mode sombre', 'theme.change': 'Changer le thème',
      'chat.settingsOpen': 'Ouvrir les paramètres de la conversation', 'chat.avatarAlt': 'Photo de profil du partenaire',
      'chat.settingsMenu': 'Paramètres de la messagerie', 'chat.settingsTitle': 'Paramètres', 'chat.panelTitle': 'Paramètres de la conversation',
      'chat.closeSettings': 'Fermer les paramètres', 'chat.personalScope': 'Préférences personnelles · enregistrées sur cet appareil',
      'chat.tab.appearance': 'Apparence', 'chat.tab.notifications': 'Notifications', 'chat.tab.privacy': 'Confidentialité',
      'chat.tab.messages': 'Messages', 'chat.tab.organization': 'Organisation', 'chat.tab.media': 'Médias et fichiers',
      'chat.tab.conversation': 'Conversation', 'chat.tab.about': 'À propos de nous',
      'chat.appearance': 'Apparence', 'chat.background': 'Fond de discussion',
      'chat.backgroundHelp': 'Choisissez une ambiance pour votre écran de conversation.', 'chat.backgroundPalette': 'Couleurs et dégradés du fond de discussion',
      'chat.backgroundRose': 'Rose romantique', 'chat.backgroundViolet': 'Violet', 'chat.backgroundSky': 'Bleu ciel',
      'chat.backgroundMidnight': 'Noir élégant', 'chat.backgroundRuby': 'Rouge velours', 'chat.backgroundGarden': 'Vert sauge',
      'chat.backgroundBeige': 'Beige doux', 'chat.backgroundOcean': 'Bleu lagon', 'chat.backgroundChampagne': 'Champagne rosé',
      'chat.backgroundAurora': 'Aurore', 'chat.backgroundPreviewAlt': 'Aperçu du fond de discussion',
      'chat.backgroundPreview': 'Votre fond personnel', 'chat.backgroundSaving': 'Enregistrement de votre image…',
      'chat.backgroundChoose': '🖼️ Choisir dans ma galerie', 'chat.backgroundReplace': '🖼️ Remplacer mon image',
      'chat.backgroundApply': 'Utiliser cette image', 'chat.backgroundCancel': 'Annuler l’aperçu', 'chat.backgroundRemove': 'Supprimer mon image',
      'chat.themeLabel': 'Thème de l’application', 'chat.themeDark': 'Sombre', 'chat.themeLight': 'Clair', 'chat.themeAuto': 'Automatique',
      'chat.bubbleColorLabel': 'Couleur de vos bulles', 'chat.bubbleRose': 'Rose tendre', 'chat.bubblePlum': 'Prune',
      'chat.bubbleBerry': 'Framboise', 'chat.bubbleSage': 'Vert sauge', 'chat.restoreAppearance': 'Restaurer l’apparence par défaut',
      'chat.notifications': 'Notifications', 'chat.notificationsNote': 'Les notifications de conversation ne sont pas configurées dans cette version.',
      'chat.newMessageNotifications': 'Notifications de nouveaux messages', 'chat.notificationSounds': 'Sons de notification',
      'chat.newMessageAlerts': 'Alertes de nouveaux messages', 'chat.notAvailable': 'Notifications non disponibles',
      'chat.privacy': 'Confidentialité',
      'chat.privacyNote': 'Les confirmations de lecture sont gérées automatiquement. Les réglages de présence et d’indicateur de saisie ne sont pas disponibles.',
      'chat.onlineVisibility': 'Visibilité du statut en ligne', 'chat.readReceipts': 'Confirmations de lecture',
      'chat.typingIndicator': 'Indicateur de saisie', 'chat.presenceUnavailable': 'Réglage du statut non disponible',
      'chat.readReceiptsAutomatic': 'Confirmations de lecture activées automatiquement', 'chat.typingUnavailable': 'Indicateur de saisie non disponible',
      'chat.customization': 'Personnalisation des messages', 'chat.bubbleStyle': 'Style des bulles', 'chat.styleSoft': 'Doux',
      'chat.styleClassic': 'Classique', 'chat.styleCompact': 'Compact', 'chat.textSize': 'Taille du texte',
      'chat.quickReactions': 'Réactions rapides', 'chat.reactionsClassic': 'Classiques', 'chat.reactionsRomantic': 'Romantiques',
      'chat.reactionsPlayful': 'Complices', 'chat.showTimes': 'Afficher l’heure des messages',
      'chat.organization': 'Organisation', 'chat.viewFavorites': '⭐ Voir les favoris', 'chat.viewPinned': '📌 Voir les messages épinglés',
      'chat.searchConversation': '⌕ Rechercher dans la conversation', 'chat.searchPlaceholder': 'Un mot, un fichier…',
      'chat.organizationScope': 'Favoris et épingles sont associés aux messages de la conversation.',
      'chat.media': 'Médias et fichiers', 'chat.photos': '🖼️ Photos', 'chat.files': '📄 Fichiers', 'chat.videos': '🎞️ Vidéos',
      'chat.links': '🔗 Liens partagés',
      'chat.downloadNote': 'Les téléchargements sont conservés à leur emplacement d’origine; aucun gestionnaire de téléchargement n’est disponible.',
      'chat.conversationManagement': 'Gestion de la conversation',
      'chat.syncNote': 'Les messages sont synchronisés avec Supabase. L’historique n’est pas stocké séparément sur cet appareil.',
      'chat.exportConversation': '⇩ Exporter la conversation (JSON)', 'chat.clearLocalHistory': '🗑️ Effacer l’historique local',
      'chat.manageDownloads': '📥 Gérer les médias téléchargés', 'chat.unavailable': 'Indisponible',
      'chat.noDeleteNote': 'Aucune suppression de message n’est effectuée depuis ce panneau.', 'chat.about': 'À propos de nous',
      'chat.linkedSince': 'Conversation liée depuis', 'chat.dateUnavailable': 'Date indisponible', 'chat.messagesLoaded': 'Messages chargés',
      'chat.sharedPhotos': 'Photos partagées', 'chat.aboutQuote': '« Chaque message est un petit morceau de notre histoire. »',
      'chat.countsScope': 'Les compteurs reflètent uniquement les messages chargés depuis la conversation.',
      'chat.searchAndFilter': 'Rechercher et filtrer', 'chat.searchMessage': 'Rechercher dans la conversation...',
      'chat.searchMessageAria': 'Rechercher un message', 'chat.filterGroup': 'Filtres de messages', 'chat.filterAll': 'Tous',
      'chat.filterFavorites': 'Favoris', 'chat.filterPinned': 'Épinglés', 'chat.empty': 'Aucun message à afficher pour le moment.',
      'chat.emptyHelp': 'Commencez la conversation avec un doux mot.', 'chat.typing': 'Votre moitié est en train d’écrire…',
      'chat.composerPlaceholder': 'Message', 'chat.sendMessage': 'Envoyer le message', 'chat.insertEmoji': 'Insérer un emoji',
      'chat.insertReaction': 'Insérer une réaction', 'chat.insertHeart': 'Insérer un cœur', 'chat.insertLaugh': 'Insérer un rire',
      'chat.insertLoveFace': 'Insérer un visage amoureux', 'chat.insertThumb': 'Insérer un pouce',
      'chat.invitePartner': '❤️ Inviter mon partenaire', 'chat.joinPartner': '❤️ Rejoindre mon partenaire',
      'chat.pairingStatus': 'Préparation de la liaison entre deux comptes…',
      'chat.partnerCodePlaceholder': 'Saisissez le code de votre partenaire', 'chat.partnerCodeAria': 'Code de votre partenaire',
      'chat.validate': 'Valider', 'chat.pairingGate': 'Vous devez d’abord inviter ou rejoindre votre partenaire pour utiliser les messages.'
    },
    en: {
      'settings.themeTitle': 'App theme', 'settings.themeAria': 'Theme selection', 'settings.nicknameToggle': 'Show nicknames instead of first names',
      'theme.dark': '🌙 Dark mode', 'theme.light': '☀️ Light mode', 'theme.auto': '🌗 Automatic',
      'theme.darkActivated': 'Dark mode enabled 🌙', 'theme.lightActivated': 'Light mode enabled ☀️', 'theme.autoActivated': 'Automatic mode enabled 🌗',
      'theme.updated': 'Theme updated', 'theme.changeToLight': 'Switch to light mode', 'theme.changeToAuto': 'Switch to automatic mode',
      'theme.changeToDark': 'Switch to dark mode', 'theme.change': 'Change theme',
      'chat.settingsOpen': 'Open conversation settings', 'chat.avatarAlt': 'Partner profile photo', 'chat.settingsMenu': 'Messaging settings',
      'chat.settingsTitle': 'Settings', 'chat.panelTitle': 'Conversation settings', 'chat.closeSettings': 'Close settings',
      'chat.personalScope': 'Personal preferences · saved on this device', 'chat.tab.appearance': 'Appearance',
      'chat.tab.notifications': 'Notifications', 'chat.tab.privacy': 'Privacy', 'chat.tab.messages': 'Messages',
      'chat.tab.organization': 'Organization', 'chat.tab.media': 'Media and files', 'chat.tab.conversation': 'Conversation',
      'chat.tab.about': 'About us', 'chat.appearance': 'Appearance', 'chat.background': 'Chat background',
      'chat.backgroundHelp': 'Choose a look for your conversation screen.', 'chat.backgroundPalette': 'Chat background colors and gradients',
      'chat.backgroundRose': 'Romantic rose', 'chat.backgroundViolet': 'Violet', 'chat.backgroundSky': 'Sky blue',
      'chat.backgroundMidnight': 'Elegant midnight', 'chat.backgroundRuby': 'Velvet red', 'chat.backgroundGarden': 'Sage green',
      'chat.backgroundBeige': 'Soft beige', 'chat.backgroundOcean': 'Lagoon blue', 'chat.backgroundChampagne': 'Rosé champagne',
      'chat.backgroundAurora': 'Aurora', 'chat.backgroundPreviewAlt': 'Chat background preview', 'chat.backgroundPreview': 'Your personal background',
      'chat.backgroundSaving': 'Saving your image…', 'chat.backgroundChoose': '🖼️ Choose from my gallery', 'chat.backgroundReplace': '🖼️ Replace my image',
      'chat.backgroundApply': 'Use this image', 'chat.backgroundCancel': 'Cancel preview', 'chat.backgroundRemove': 'Remove my image',
      'chat.themeLabel': 'App theme', 'chat.themeDark': 'Dark', 'chat.themeLight': 'Light', 'chat.themeAuto': 'Automatic',
      'chat.bubbleColorLabel': 'Your bubble color', 'chat.bubbleRose': 'Soft rose', 'chat.bubblePlum': 'Plum',
      'chat.bubbleBerry': 'Berry', 'chat.bubbleSage': 'Sage green', 'chat.restoreAppearance': 'Restore default appearance',
      'chat.notifications': 'Notifications', 'chat.notificationsNote': 'Conversation notifications are not configured in this version.',
      'chat.newMessageNotifications': 'New message notifications', 'chat.notificationSounds': 'Notification sounds',
      'chat.newMessageAlerts': 'New message alerts', 'chat.notAvailable': 'Notifications unavailable', 'chat.privacy': 'Privacy',
      'chat.privacyNote': 'Read receipts are managed automatically. Presence and typing indicator settings are unavailable.',
      'chat.onlineVisibility': 'Online status visibility', 'chat.readReceipts': 'Read receipts', 'chat.typingIndicator': 'Typing indicator',
      'chat.presenceUnavailable': 'Status setting unavailable', 'chat.readReceiptsAutomatic': 'Read receipts enabled automatically',
      'chat.typingUnavailable': 'Typing indicator unavailable', 'chat.customization': 'Message customization', 'chat.bubbleStyle': 'Bubble style',
      'chat.styleSoft': 'Soft', 'chat.styleClassic': 'Classic', 'chat.styleCompact': 'Compact', 'chat.textSize': 'Text size',
      'chat.quickReactions': 'Quick reactions', 'chat.reactionsClassic': 'Classic', 'chat.reactionsRomantic': 'Romantic',
      'chat.reactionsPlayful': 'Playful', 'chat.showTimes': 'Show message times', 'chat.organization': 'Organization',
      'chat.viewFavorites': '⭐ View favorites', 'chat.viewPinned': '📌 View pinned messages', 'chat.searchConversation': '⌕ Search conversation',
      'chat.searchPlaceholder': 'A word, a file…', 'chat.organizationScope': 'Favorites and pins are linked to conversation messages.',
      'chat.media': 'Media and files', 'chat.photos': '🖼️ Photos', 'chat.files': '📄 Files', 'chat.videos': '🎞️ Videos',
      'chat.links': '🔗 Shared links', 'chat.downloadNote': 'Downloads stay in their original location; no download manager is available.',
      'chat.conversationManagement': 'Conversation management', 'chat.syncNote': 'Messages are synced with Supabase. History is not stored separately on this device.',
      'chat.exportConversation': '⇩ Export conversation (JSON)', 'chat.clearLocalHistory': '🗑️ Clear local history',
      'chat.manageDownloads': '📥 Manage downloaded media', 'chat.unavailable': 'Unavailable',
      'chat.noDeleteNote': 'Messages cannot be deleted from this panel.', 'chat.about': 'About us', 'chat.linkedSince': 'Conversation linked since',
      'chat.dateUnavailable': 'Date unavailable', 'chat.messagesLoaded': 'Messages loaded', 'chat.sharedPhotos': 'Shared photos',
      'chat.aboutQuote': '“Every message is a little piece of our story.”', 'chat.countsScope': 'Counts include only messages loaded from this conversation.',
      'chat.searchAndFilter': 'Search and filter', 'chat.searchMessage': 'Search this conversation...', 'chat.searchMessageAria': 'Search a message',
      'chat.filterGroup': 'Message filters', 'chat.filterAll': 'All', 'chat.filterFavorites': 'Favorites', 'chat.filterPinned': 'Pinned',
      'chat.empty': 'No messages to show yet.', 'chat.emptyHelp': 'Start the conversation with a kind message.',
      'chat.typing': 'Your partner is typing…', 'chat.composerPlaceholder': 'Message', 'chat.sendMessage': 'Send message',
      'chat.insertEmoji': 'Insert an emoji', 'chat.insertReaction': 'Insert a reaction', 'chat.insertHeart': 'Insert a heart',
      'chat.insertLaugh': 'Insert a laugh', 'chat.insertLoveFace': 'Insert a heart-eyes face', 'chat.insertThumb': 'Insert a thumbs-up',
      'chat.invitePartner': '❤️ Invite my partner', 'chat.joinPartner': '❤️ Join my partner', 'chat.pairingStatus': 'Preparing the connection between two accounts…',
      'chat.partnerCodePlaceholder': 'Enter your partner’s code', 'chat.partnerCodeAria': 'Partner code', 'chat.validate': 'Continue',
      'chat.pairingGate': 'Invite or join your partner to use messages.'
    },
    es: {
      'settings.themeTitle': 'Tema de la aplicación', 'settings.themeAria': 'Selección del tema', 'settings.nicknameToggle': 'Mostrar apodos en lugar de nombres',
      'theme.dark': '🌙 Modo oscuro', 'theme.light': '☀️ Modo claro', 'theme.auto': '🌗 Automático',
      'theme.darkActivated': 'Modo oscuro activado 🌙', 'theme.lightActivated': 'Modo claro activado ☀️', 'theme.autoActivated': 'Modo automático activado 🌗',
      'theme.updated': 'Tema actualizado', 'theme.changeToLight': 'Cambiar al modo claro', 'theme.changeToAuto': 'Cambiar al modo automático',
      'theme.changeToDark': 'Cambiar al modo oscuro', 'theme.change': 'Cambiar tema',
      'chat.settingsOpen': 'Abrir los ajustes de la conversación', 'chat.avatarAlt': 'Foto de perfil de la pareja', 'chat.settingsMenu': 'Ajustes de mensajes',
      'chat.settingsTitle': 'Ajustes', 'chat.panelTitle': 'Ajustes de la conversación', 'chat.closeSettings': 'Cerrar los ajustes',
      'chat.personalScope': 'Preferencias personales · guardadas en este dispositivo', 'chat.tab.appearance': 'Apariencia',
      'chat.tab.notifications': 'Notificaciones', 'chat.tab.privacy': 'Privacidad', 'chat.tab.messages': 'Mensajes',
      'chat.tab.organization': 'Organización', 'chat.tab.media': 'Archivos y medios', 'chat.tab.conversation': 'Conversación',
      'chat.tab.about': 'Sobre nosotros', 'chat.appearance': 'Apariencia', 'chat.background': 'Fondo del chat',
      'chat.backgroundHelp': 'Elige un ambiente para la pantalla de conversación.', 'chat.backgroundPalette': 'Colores y degradados del fondo del chat',
      'chat.backgroundRose': 'Rosa romántico', 'chat.backgroundViolet': 'Violeta', 'chat.backgroundSky': 'Azul cielo',
      'chat.backgroundMidnight': 'Medianoche elegante', 'chat.backgroundRuby': 'Rojo terciopelo', 'chat.backgroundGarden': 'Verde salvia',
      'chat.backgroundBeige': 'Beige suave', 'chat.backgroundOcean': 'Azul laguna', 'chat.backgroundChampagne': 'Champán rosado',
      'chat.backgroundAurora': 'Aurora', 'chat.backgroundPreviewAlt': 'Vista previa del fondo del chat', 'chat.backgroundPreview': 'Tu fondo personal',
      'chat.backgroundSaving': 'Guardando tu imagen…', 'chat.backgroundChoose': '🖼️ Elegir de mi galería', 'chat.backgroundReplace': '🖼️ Reemplazar mi imagen',
      'chat.backgroundApply': 'Usar esta imagen', 'chat.backgroundCancel': 'Cancelar vista previa', 'chat.backgroundRemove': 'Eliminar mi imagen',
      'chat.themeLabel': 'Tema de la aplicación', 'chat.themeDark': 'Oscuro', 'chat.themeLight': 'Claro', 'chat.themeAuto': 'Automático',
      'chat.bubbleColorLabel': 'Color de tus burbujas', 'chat.bubbleRose': 'Rosa suave', 'chat.bubblePlum': 'Ciruela',
      'chat.bubbleBerry': 'Frambuesa', 'chat.bubbleSage': 'Verde salvia', 'chat.restoreAppearance': 'Restaurar apariencia predeterminada',
      'chat.notifications': 'Notificaciones', 'chat.notificationsNote': 'Las notificaciones de conversación no están configuradas en esta versión.',
      'chat.newMessageNotifications': 'Notificaciones de mensajes nuevos', 'chat.notificationSounds': 'Sonidos de notificación',
      'chat.newMessageAlerts': 'Avisos de mensajes nuevos', 'chat.notAvailable': 'Notificaciones no disponibles', 'chat.privacy': 'Privacidad',
      'chat.privacyNote': 'Las confirmaciones de lectura se gestionan automáticamente. La presencia y el indicador de escritura no están disponibles.',
      'chat.onlineVisibility': 'Visibilidad del estado en línea', 'chat.readReceipts': 'Confirmaciones de lectura', 'chat.typingIndicator': 'Indicador de escritura',
      'chat.presenceUnavailable': 'Ajuste de estado no disponible', 'chat.readReceiptsAutomatic': 'Confirmaciones de lectura activadas automáticamente',
      'chat.typingUnavailable': 'Indicador de escritura no disponible', 'chat.customization': 'Personalización de mensajes', 'chat.bubbleStyle': 'Estilo de las burbujas',
      'chat.styleSoft': 'Suave', 'chat.styleClassic': 'Clásico', 'chat.styleCompact': 'Compacto', 'chat.textSize': 'Tamaño del texto',
      'chat.quickReactions': 'Reacciones rápidas', 'chat.reactionsClassic': 'Clásicas', 'chat.reactionsRomantic': 'Románticas',
      'chat.reactionsPlayful': 'Cómplices', 'chat.showTimes': 'Mostrar la hora de los mensajes', 'chat.organization': 'Organización',
      'chat.viewFavorites': '⭐ Ver favoritos', 'chat.viewPinned': '📌 Ver mensajes fijados', 'chat.searchConversation': '⌕ Buscar en la conversación',
      'chat.searchPlaceholder': 'Una palabra, un archivo…', 'chat.organizationScope': 'Los favoritos y fijados están asociados a los mensajes de la conversación.',
      'chat.media': 'Archivos y medios', 'chat.photos': '🖼️ Fotos', 'chat.files': '📄 Archivos', 'chat.videos': '🎞️ Vídeos',
      'chat.links': '🔗 Enlaces compartidos', 'chat.downloadNote': 'Las descargas se conservan en su ubicación original; no hay gestor de descargas.',
      'chat.conversationManagement': 'Gestión de la conversación', 'chat.syncNote': 'Los mensajes se sincronizan con Supabase. El historial no se guarda por separado en este dispositivo.',
      'chat.exportConversation': '⇩ Exportar conversación (JSON)', 'chat.clearLocalHistory': '🗑️ Borrar el historial local',
      'chat.manageDownloads': '📥 Gestionar medios descargados', 'chat.unavailable': 'No disponible',
      'chat.noDeleteNote': 'Este panel no elimina ningún mensaje.', 'chat.about': 'Sobre nosotros', 'chat.linkedSince': 'Conversación vinculada desde',
      'chat.dateUnavailable': 'Fecha no disponible', 'chat.messagesLoaded': 'Mensajes cargados', 'chat.sharedPhotos': 'Fotos compartidas',
      'chat.aboutQuote': '«Cada mensaje es un pequeño fragmento de nuestra historia.»', 'chat.countsScope': 'Los contadores solo incluyen los mensajes cargados de esta conversación.',
      'chat.searchAndFilter': 'Buscar y filtrar', 'chat.searchMessage': 'Buscar en la conversación...', 'chat.searchMessageAria': 'Buscar un mensaje',
      'chat.filterGroup': 'Filtros de mensajes', 'chat.filterAll': 'Todos', 'chat.filterFavorites': 'Favoritos', 'chat.filterPinned': 'Fijados',
      'chat.empty': 'Todavía no hay mensajes que mostrar.', 'chat.emptyHelp': 'Empieza la conversación con unas palabras bonitas.',
      'chat.typing': 'Tu pareja está escribiendo…', 'chat.composerPlaceholder': 'Mensaje', 'chat.sendMessage': 'Enviar mensaje',
      'chat.insertEmoji': 'Insertar un emoji', 'chat.insertReaction': 'Insertar una reacción', 'chat.insertHeart': 'Insertar un corazón',
      'chat.insertLaugh': 'Insertar una risa', 'chat.insertLoveFace': 'Insertar una cara enamorada', 'chat.insertThumb': 'Insertar un pulgar hacia arriba',
      'chat.invitePartner': '❤️ Invitar a mi pareja', 'chat.joinPartner': '❤️ Unirme a mi pareja', 'chat.pairingStatus': 'Preparando la conexión entre dos cuentas…',
      'chat.partnerCodePlaceholder': 'Introduce el código de tu pareja', 'chat.partnerCodeAria': 'Código de tu pareja', 'chat.validate': 'Validar',
      'chat.pairingGate': 'Invita a tu pareja o únete a ella para usar los mensajes.'
    },
    pt: {
      'settings.themeTitle': 'Tema da aplicação', 'settings.themeAria': 'Seleção do tema', 'settings.nicknameToggle': 'Mostrar alcunhas em vez dos nomes',
      'theme.dark': '🌙 Modo escuro', 'theme.light': '☀️ Modo claro', 'theme.auto': '🌗 Automático',
      'theme.darkActivated': 'Modo escuro ativado 🌙', 'theme.lightActivated': 'Modo claro ativado ☀️', 'theme.autoActivated': 'Modo automático ativado 🌗',
      'theme.updated': 'Tema atualizado', 'theme.changeToLight': 'Mudar para o modo claro', 'theme.changeToAuto': 'Mudar para o modo automático',
      'theme.changeToDark': 'Mudar para o modo escuro', 'theme.change': 'Mudar tema',
      'chat.settingsOpen': 'Abrir as definições da conversa', 'chat.avatarAlt': 'Fotografia de perfil do parceiro', 'chat.settingsMenu': 'Definições de mensagens',
      'chat.settingsTitle': 'Definições', 'chat.panelTitle': 'Definições da conversa', 'chat.closeSettings': 'Fechar as definições',
      'chat.personalScope': 'Preferências pessoais · guardadas neste dispositivo', 'chat.tab.appearance': 'Aparência',
      'chat.tab.notifications': 'Notificações', 'chat.tab.privacy': 'Privacidade', 'chat.tab.messages': 'Mensagens',
      'chat.tab.organization': 'Organização', 'chat.tab.media': 'Multimédia e ficheiros', 'chat.tab.conversation': 'Conversa',
      'chat.tab.about': 'Sobre nós', 'chat.appearance': 'Aparência', 'chat.background': 'Fundo da conversa',
      'chat.backgroundHelp': 'Escolha um ambiente para o ecrã da conversa.', 'chat.backgroundPalette': 'Cores e gradientes do fundo da conversa',
      'chat.backgroundRose': 'Rosa romântico', 'chat.backgroundViolet': 'Violeta', 'chat.backgroundSky': 'Azul-céu',
      'chat.backgroundMidnight': 'Meia-noite elegante', 'chat.backgroundRuby': 'Vermelho aveludado', 'chat.backgroundGarden': 'Verde-sálvia',
      'chat.backgroundBeige': 'Bege suave', 'chat.backgroundOcean': 'Azul-lagoa', 'chat.backgroundChampagne': 'Champanhe rosé',
      'chat.backgroundAurora': 'Aurora', 'chat.backgroundPreviewAlt': 'Pré-visualização do fundo da conversa', 'chat.backgroundPreview': 'O seu fundo pessoal',
      'chat.backgroundSaving': 'A guardar a sua imagem…', 'chat.backgroundChoose': '🖼️ Escolher da minha galeria', 'chat.backgroundReplace': '🖼️ Substituir a minha imagem',
      'chat.backgroundApply': 'Usar esta imagem', 'chat.backgroundCancel': 'Cancelar pré-visualização', 'chat.backgroundRemove': 'Remover a minha imagem',
      'chat.themeLabel': 'Tema da aplicação', 'chat.themeDark': 'Escuro', 'chat.themeLight': 'Claro', 'chat.themeAuto': 'Automático',
      'chat.bubbleColorLabel': 'Cor das suas bolhas', 'chat.bubbleRose': 'Rosa suave', 'chat.bubblePlum': 'Ameixa',
      'chat.bubbleBerry': 'Framboesa', 'chat.bubbleSage': 'Verde-sálvia', 'chat.restoreAppearance': 'Restaurar a aparência predefinida',
      'chat.notifications': 'Notificações', 'chat.notificationsNote': 'As notificações da conversa não estão configuradas nesta versão.',
      'chat.newMessageNotifications': 'Notificações de novas mensagens', 'chat.notificationSounds': 'Sons de notificação',
      'chat.newMessageAlerts': 'Alertas de novas mensagens', 'chat.notAvailable': 'Notificações indisponíveis', 'chat.privacy': 'Privacidade',
      'chat.privacyNote': 'As confirmações de leitura são geridas automaticamente. A presença e o indicador de escrita não estão disponíveis.',
      'chat.onlineVisibility': 'Visibilidade do estado online', 'chat.readReceipts': 'Confirmações de leitura', 'chat.typingIndicator': 'Indicador de escrita',
      'chat.presenceUnavailable': 'Definição de estado indisponível', 'chat.readReceiptsAutomatic': 'Confirmações de leitura ativadas automaticamente',
      'chat.typingUnavailable': 'Indicador de escrita indisponível', 'chat.customization': 'Personalização das mensagens', 'chat.bubbleStyle': 'Estilo das bolhas',
      'chat.styleSoft': 'Suave', 'chat.styleClassic': 'Clássico', 'chat.styleCompact': 'Compacto', 'chat.textSize': 'Tamanho do texto',
      'chat.quickReactions': 'Reações rápidas', 'chat.reactionsClassic': 'Clássicas', 'chat.reactionsRomantic': 'Românticas',
      'chat.reactionsPlayful': 'Cúmplices', 'chat.showTimes': 'Mostrar a hora das mensagens', 'chat.organization': 'Organização',
      'chat.viewFavorites': '⭐ Ver favoritos', 'chat.viewPinned': '📌 Ver mensagens fixadas', 'chat.searchConversation': '⌕ Pesquisar na conversa',
      'chat.searchPlaceholder': 'Uma palavra, um ficheiro…', 'chat.organizationScope': 'Os favoritos e as mensagens fixadas estão associados à conversa.',
      'chat.media': 'Multimédia e ficheiros', 'chat.photos': '🖼️ Fotografias', 'chat.files': '📄 Ficheiros', 'chat.videos': '🎞️ Vídeos',
      'chat.links': '🔗 Ligações partilhadas', 'chat.downloadNote': 'Os downloads ficam na localização original; não existe um gestor de downloads.',
      'chat.conversationManagement': 'Gestão da conversa', 'chat.syncNote': 'As mensagens são sincronizadas com o Supabase. O histórico não fica guardado separadamente neste dispositivo.',
      'chat.exportConversation': '⇩ Exportar conversa (JSON)', 'chat.clearLocalHistory': '🗑️ Apagar o histórico local',
      'chat.manageDownloads': '📥 Gerir multimédia transferida', 'chat.unavailable': 'Indisponível',
      'chat.noDeleteNote': 'Este painel não elimina mensagens.', 'chat.about': 'Sobre nós', 'chat.linkedSince': 'Conversa ligada desde',
      'chat.dateUnavailable': 'Data indisponível', 'chat.messagesLoaded': 'Mensagens carregadas', 'chat.sharedPhotos': 'Fotografias partilhadas',
      'chat.aboutQuote': '«Cada mensagem é um pequeno pedaço da nossa história.»', 'chat.countsScope': 'Os contadores incluem apenas as mensagens carregadas desta conversa.',
      'chat.searchAndFilter': 'Pesquisar e filtrar', 'chat.searchMessage': 'Pesquisar na conversa...', 'chat.searchMessageAria': 'Pesquisar uma mensagem',
      'chat.filterGroup': 'Filtros de mensagens', 'chat.filterAll': 'Todas', 'chat.filterFavorites': 'Favoritos', 'chat.filterPinned': 'Fixadas',
      'chat.empty': 'Ainda não há mensagens para apresentar.', 'chat.emptyHelp': 'Comece a conversa com uma palavra carinhosa.',
      'chat.typing': 'A sua cara-metade está a escrever…', 'chat.composerPlaceholder': 'Mensagem', 'chat.sendMessage': 'Enviar mensagem',
      'chat.insertEmoji': 'Inserir um emoji', 'chat.insertReaction': 'Inserir uma reação', 'chat.insertHeart': 'Inserir um coração',
      'chat.insertLaugh': 'Inserir uma gargalhada', 'chat.insertLoveFace': 'Inserir uma cara apaixonada', 'chat.insertThumb': 'Inserir um polegar para cima',
      'chat.invitePartner': '❤️ Convidar o meu parceiro', 'chat.joinPartner': '❤️ Juntar-me ao meu parceiro', 'chat.pairingStatus': 'A preparar a ligação entre duas contas…',
      'chat.partnerCodePlaceholder': 'Introduza o código do seu parceiro', 'chat.partnerCodeAria': 'Código do parceiro', 'chat.validate': 'Validar',
      'chat.pairingGate': 'Convide o seu parceiro ou junte-se a ele para usar as mensagens.'
    },
    de: {
      'settings.themeTitle': 'App-Design', 'settings.themeAria': 'Design auswählen', 'settings.nicknameToggle': 'Spitznamen statt Vornamen anzeigen',
      'theme.dark': '🌙 Dunkelmodus', 'theme.light': '☀️ Hellmodus', 'theme.auto': '🌗 Automatisch',
      'theme.darkActivated': 'Dunkelmodus aktiviert 🌙', 'theme.lightActivated': 'Hellmodus aktiviert ☀️', 'theme.autoActivated': 'Automatikmodus aktiviert 🌗',
      'theme.updated': 'Design aktualisiert', 'theme.changeToLight': 'Zum Hellmodus wechseln', 'theme.changeToAuto': 'Zum Automatikmodus wechseln',
      'theme.changeToDark': 'Zum Dunkelmodus wechseln', 'theme.change': 'Design ändern',
      'chat.settingsOpen': 'Gesprächseinstellungen öffnen', 'chat.avatarAlt': 'Profilfoto des Partners', 'chat.settingsMenu': 'Nachrichteneinstellungen',
      'chat.settingsTitle': 'Einstellungen', 'chat.panelTitle': 'Gesprächseinstellungen', 'chat.closeSettings': 'Einstellungen schließen',
      'chat.personalScope': 'Persönliche Einstellungen · auf diesem Gerät gespeichert', 'chat.tab.appearance': 'Darstellung',
      'chat.tab.notifications': 'Benachrichtigungen', 'chat.tab.privacy': 'Datenschutz', 'chat.tab.messages': 'Nachrichten',
      'chat.tab.organization': 'Organisation', 'chat.tab.media': 'Medien und Dateien', 'chat.tab.conversation': 'Gespräch',
      'chat.tab.about': 'Über uns', 'chat.appearance': 'Darstellung', 'chat.background': 'Chat-Hintergrund',
      'chat.backgroundHelp': 'Wähle eine Stimmung für deinen Gesprächsbildschirm.', 'chat.backgroundPalette': 'Farben und Verläufe des Chat-Hintergrunds',
      'chat.backgroundRose': 'Romantisches Rosa', 'chat.backgroundViolet': 'Violett', 'chat.backgroundSky': 'Himmelblau',
      'chat.backgroundMidnight': 'Elegante Mitternacht', 'chat.backgroundRuby': 'Samtrot', 'chat.backgroundGarden': 'Salbeigrün',
      'chat.backgroundBeige': 'Sanftes Beige', 'chat.backgroundOcean': 'Lagunenblau', 'chat.backgroundChampagne': 'Rosé-Champagner',
      'chat.backgroundAurora': 'Polarlicht', 'chat.backgroundPreviewAlt': 'Vorschau des Chat-Hintergrunds', 'chat.backgroundPreview': 'Dein persönlicher Hintergrund',
      'chat.backgroundSaving': 'Bild wird gespeichert…', 'chat.backgroundChoose': '🖼️ Aus meiner Galerie wählen', 'chat.backgroundReplace': '🖼️ Mein Bild ersetzen',
      'chat.backgroundApply': 'Dieses Bild verwenden', 'chat.backgroundCancel': 'Vorschau abbrechen', 'chat.backgroundRemove': 'Mein Bild entfernen',
      'chat.themeLabel': 'App-Design', 'chat.themeDark': 'Dunkel', 'chat.themeLight': 'Hell', 'chat.themeAuto': 'Automatisch',
      'chat.bubbleColorLabel': 'Farbe deiner Sprechblasen', 'chat.bubbleRose': 'Zartrosa', 'chat.bubblePlum': 'Pflaume',
      'chat.bubbleBerry': 'Beere', 'chat.bubbleSage': 'Salbeigrün', 'chat.restoreAppearance': 'Standarddarstellung wiederherstellen',
      'chat.notifications': 'Benachrichtigungen', 'chat.notificationsNote': 'Gesprächsbenachrichtigungen sind in dieser Version nicht eingerichtet.',
      'chat.newMessageNotifications': 'Benachrichtigungen bei neuen Nachrichten', 'chat.notificationSounds': 'Benachrichtigungstöne',
      'chat.newMessageAlerts': 'Hinweise auf neue Nachrichten', 'chat.notAvailable': 'Benachrichtigungen nicht verfügbar', 'chat.privacy': 'Datenschutz',
      'chat.privacyNote': 'Lesebestätigungen werden automatisch verwaltet. Anwesenheit und Tippanzeige sind nicht verfügbar.',
      'chat.onlineVisibility': 'Sichtbarkeit des Online-Status', 'chat.readReceipts': 'Lesebestätigungen', 'chat.typingIndicator': 'Tippanzeige',
      'chat.presenceUnavailable': 'Statuseinstellung nicht verfügbar', 'chat.readReceiptsAutomatic': 'Lesebestätigungen automatisch aktiviert',
      'chat.typingUnavailable': 'Tippanzeige nicht verfügbar', 'chat.customization': 'Nachrichten anpassen', 'chat.bubbleStyle': 'Sprechblasenstil',
      'chat.styleSoft': 'Sanft', 'chat.styleClassic': 'Klassisch', 'chat.styleCompact': 'Kompakt', 'chat.textSize': 'Textgröße',
      'chat.quickReactions': 'Schnellreaktionen', 'chat.reactionsClassic': 'Klassisch', 'chat.reactionsRomantic': 'Romantisch',
      'chat.reactionsPlayful': 'Verspielt', 'chat.showTimes': 'Nachrichtenzeit anzeigen', 'chat.organization': 'Organisation',
      'chat.viewFavorites': '⭐ Favoriten ansehen', 'chat.viewPinned': '📌 Angeheftete Nachrichten ansehen', 'chat.searchConversation': '⌕ Gespräch durchsuchen',
      'chat.searchPlaceholder': 'Ein Wort, eine Datei…', 'chat.organizationScope': 'Favoriten und Markierungen gehören zu den Gesprächsnachrichten.',
      'chat.media': 'Medien und Dateien', 'chat.photos': '🖼️ Fotos', 'chat.files': '📄 Dateien', 'chat.videos': '🎞️ Videos',
      'chat.links': '🔗 Geteilte Links', 'chat.downloadNote': 'Downloads bleiben am ursprünglichen Speicherort; ein Download-Manager ist nicht verfügbar.',
      'chat.conversationManagement': 'Gespräch verwalten', 'chat.syncNote': 'Nachrichten werden mit Supabase synchronisiert. Der Verlauf wird nicht separat auf diesem Gerät gespeichert.',
      'chat.exportConversation': '⇩ Gespräch exportieren (JSON)', 'chat.clearLocalHistory': '🗑️ Lokalen Verlauf löschen',
      'chat.manageDownloads': '📥 Heruntergeladene Medien verwalten', 'chat.unavailable': 'Nicht verfügbar',
      'chat.noDeleteNote': 'In diesem Bereich werden keine Nachrichten gelöscht.', 'chat.about': 'Über uns', 'chat.linkedSince': 'Gespräch verbunden seit',
      'chat.dateUnavailable': 'Datum nicht verfügbar', 'chat.messagesLoaded': 'Geladene Nachrichten', 'chat.sharedPhotos': 'Geteilte Fotos',
      'chat.aboutQuote': '„Jede Nachricht ist ein kleines Stück unserer Geschichte.“', 'chat.countsScope': 'Die Zähler umfassen nur geladene Nachrichten dieses Gesprächs.',
      'chat.searchAndFilter': 'Suchen und filtern', 'chat.searchMessage': 'Gespräch durchsuchen...', 'chat.searchMessageAria': 'Nachricht suchen',
      'chat.filterGroup': 'Nachrichtenfilter', 'chat.filterAll': 'Alle', 'chat.filterFavorites': 'Favoriten', 'chat.filterPinned': 'Angeheftet',
      'chat.empty': 'Noch keine Nachrichten vorhanden.', 'chat.emptyHelp': 'Beginne das Gespräch mit einer lieben Nachricht.',
      'chat.typing': 'Dein Lieblingsmensch schreibt…', 'chat.composerPlaceholder': 'Nachricht', 'chat.sendMessage': 'Nachricht senden',
      'chat.insertEmoji': 'Emoji einfügen', 'chat.insertReaction': 'Reaktion einfügen', 'chat.insertHeart': 'Herz einfügen',
      'chat.insertLaugh': 'Lachen einfügen', 'chat.insertLoveFace': 'Verliebtes Gesicht einfügen', 'chat.insertThumb': 'Daumen hoch einfügen',
      'chat.invitePartner': '❤️ Partner einladen', 'chat.joinPartner': '❤️ Partner beitreten', 'chat.pairingStatus': 'Verbindung zwischen zwei Konten wird vorbereitet…',
      'chat.partnerCodePlaceholder': 'Partnercode eingeben', 'chat.partnerCodeAria': 'Partnercode', 'chat.validate': 'Bestätigen',
      'chat.pairingGate': 'Lade deinen Partner ein oder tritt bei, um Nachrichten zu verwenden.'
    },
    it: {
      'settings.themeTitle': 'Tema dell’app', 'settings.themeAria': 'Selezione del tema', 'settings.nicknameToggle': 'Mostra i soprannomi al posto dei nomi',
      'theme.dark': '🌙 Modalità scura', 'theme.light': '☀️ Modalità chiara', 'theme.auto': '🌗 Automatica',
      'theme.darkActivated': 'Modalità scura attivata 🌙', 'theme.lightActivated': 'Modalità chiara attivata ☀️', 'theme.autoActivated': 'Modalità automatica attivata 🌗',
      'theme.updated': 'Tema aggiornato', 'theme.changeToLight': 'Passa alla modalità chiara', 'theme.changeToAuto': 'Passa alla modalità automatica',
      'theme.changeToDark': 'Passa alla modalità scura', 'theme.change': 'Cambia tema',
      'chat.settingsOpen': 'Apri le impostazioni della conversazione', 'chat.avatarAlt': 'Foto del profilo del partner', 'chat.settingsMenu': 'Impostazioni dei messaggi',
      'chat.settingsTitle': 'Impostazioni', 'chat.panelTitle': 'Impostazioni della conversazione', 'chat.closeSettings': 'Chiudi le impostazioni',
      'chat.personalScope': 'Preferenze personali · salvate su questo dispositivo', 'chat.tab.appearance': 'Aspetto',
      'chat.tab.notifications': 'Notifiche', 'chat.tab.privacy': 'Privacy', 'chat.tab.messages': 'Messaggi',
      'chat.tab.organization': 'Organizzazione', 'chat.tab.media': 'Media e file', 'chat.tab.conversation': 'Conversazione',
      'chat.tab.about': 'Chi siamo', 'chat.appearance': 'Aspetto', 'chat.background': 'Sfondo della chat',
      'chat.backgroundHelp': 'Scegli un’atmosfera per la schermata della conversazione.', 'chat.backgroundPalette': 'Colori e sfumature dello sfondo della chat',
      'chat.backgroundRose': 'Rosa romantico', 'chat.backgroundViolet': 'Viola', 'chat.backgroundSky': 'Azzurro cielo',
      'chat.backgroundMidnight': 'Mezzanotte elegante', 'chat.backgroundRuby': 'Rosso velluto', 'chat.backgroundGarden': 'Verde salvia',
      'chat.backgroundBeige': 'Beige delicato', 'chat.backgroundOcean': 'Blu laguna', 'chat.backgroundChampagne': 'Champagne rosé',
      'chat.backgroundAurora': 'Aurora', 'chat.backgroundPreviewAlt': 'Anteprima dello sfondo della chat', 'chat.backgroundPreview': 'Il tuo sfondo personale',
      'chat.backgroundSaving': 'Salvataggio dell’immagine…', 'chat.backgroundChoose': '🖼️ Scegli dalla mia galleria', 'chat.backgroundReplace': '🖼️ Sostituisci la mia immagine',
      'chat.backgroundApply': 'Usa questa immagine', 'chat.backgroundCancel': 'Annulla anteprima', 'chat.backgroundRemove': 'Rimuovi la mia immagine',
      'chat.themeLabel': 'Tema dell’app', 'chat.themeDark': 'Scuro', 'chat.themeLight': 'Chiaro', 'chat.themeAuto': 'Automatico',
      'chat.bubbleColorLabel': 'Colore delle tue bolle', 'chat.bubbleRose': 'Rosa tenue', 'chat.bubblePlum': 'Prugna',
      'chat.bubbleBerry': 'Lampone', 'chat.bubbleSage': 'Verde salvia', 'chat.restoreAppearance': 'Ripristina l’aspetto predefinito',
      'chat.notifications': 'Notifiche', 'chat.notificationsNote': 'Le notifiche della conversazione non sono configurate in questa versione.',
      'chat.newMessageNotifications': 'Notifiche di nuovi messaggi', 'chat.notificationSounds': 'Suoni di notifica',
      'chat.newMessageAlerts': 'Avvisi di nuovi messaggi', 'chat.notAvailable': 'Notifiche non disponibili', 'chat.privacy': 'Privacy',
      'chat.privacyNote': 'Le conferme di lettura sono gestite automaticamente. Presenza e indicatore di digitazione non sono disponibili.',
      'chat.onlineVisibility': 'Visibilità dello stato online', 'chat.readReceipts': 'Conferme di lettura', 'chat.typingIndicator': 'Indicatore di digitazione',
      'chat.presenceUnavailable': 'Impostazione dello stato non disponibile', 'chat.readReceiptsAutomatic': 'Conferme di lettura attivate automaticamente',
      'chat.typingUnavailable': 'Indicatore di digitazione non disponibile', 'chat.customization': 'Personalizzazione dei messaggi', 'chat.bubbleStyle': 'Stile delle bolle',
      'chat.styleSoft': 'Morbido', 'chat.styleClassic': 'Classico', 'chat.styleCompact': 'Compatto', 'chat.textSize': 'Dimensione del testo',
      'chat.quickReactions': 'Reazioni rapide', 'chat.reactionsClassic': 'Classiche', 'chat.reactionsRomantic': 'Romantiche',
      'chat.reactionsPlayful': 'Complici', 'chat.showTimes': 'Mostra l’ora dei messaggi', 'chat.organization': 'Organizzazione',
      'chat.viewFavorites': '⭐ Mostra i preferiti', 'chat.viewPinned': '📌 Mostra i messaggi fissati', 'chat.searchConversation': '⌕ Cerca nella conversazione',
      'chat.searchPlaceholder': 'Una parola, un file…', 'chat.organizationScope': 'Preferiti e messaggi fissati sono associati alla conversazione.',
      'chat.media': 'Media e file', 'chat.photos': '🖼️ Foto', 'chat.files': '📄 File', 'chat.videos': '🎞️ Video',
      'chat.links': '🔗 Link condivisi', 'chat.downloadNote': 'I download restano nella posizione originale; non è disponibile un gestore dei download.',
      'chat.conversationManagement': 'Gestione della conversazione', 'chat.syncNote': 'I messaggi sono sincronizzati con Supabase. La cronologia non è salvata separatamente su questo dispositivo.',
      'chat.exportConversation': '⇩ Esporta conversazione (JSON)', 'chat.clearLocalHistory': '🗑️ Cancella la cronologia locale',
      'chat.manageDownloads': '📥 Gestisci i media scaricati', 'chat.unavailable': 'Non disponibile',
      'chat.noDeleteNote': 'Da questo pannello non vengono eliminati messaggi.', 'chat.about': 'Chi siamo', 'chat.linkedSince': 'Conversazione collegata dal',
      'chat.dateUnavailable': 'Data non disponibile', 'chat.messagesLoaded': 'Messaggi caricati', 'chat.sharedPhotos': 'Foto condivise',
      'chat.aboutQuote': '«Ogni messaggio è un piccolo pezzo della nostra storia.»', 'chat.countsScope': 'I contatori includono solo i messaggi caricati da questa conversazione.',
      'chat.searchAndFilter': 'Cerca e filtra', 'chat.searchMessage': 'Cerca nella conversazione...', 'chat.searchMessageAria': 'Cerca un messaggio',
      'chat.filterGroup': 'Filtri dei messaggi', 'chat.filterAll': 'Tutti', 'chat.filterFavorites': 'Preferiti', 'chat.filterPinned': 'Fissati',
      'chat.empty': 'Nessun messaggio da mostrare per ora.', 'chat.emptyHelp': 'Inizia la conversazione con una parola gentile.',
      'chat.typing': 'La tua dolce metà sta scrivendo…', 'chat.composerPlaceholder': 'Messaggio', 'chat.sendMessage': 'Invia messaggio',
      'chat.insertEmoji': 'Inserisci un emoji', 'chat.insertReaction': 'Inserisci una reazione', 'chat.insertHeart': 'Inserisci un cuore',
      'chat.insertLaugh': 'Inserisci una risata', 'chat.insertLoveFace': 'Inserisci una faccina innamorata', 'chat.insertThumb': 'Inserisci un pollice in su',
      'chat.invitePartner': '❤️ Invita il mio partner', 'chat.joinPartner': '❤️ Unisciti al mio partner', 'chat.pairingStatus': 'Preparazione del collegamento tra due account…',
      'chat.partnerCodePlaceholder': 'Inserisci il codice del partner', 'chat.partnerCodeAria': 'Codice del partner', 'chat.validate': 'Conferma',
      'chat.pairingGate': 'Invita o raggiungi il tuo partner per usare i messaggi.'
    },
    ar: {
      'settings.themeTitle': 'سمة التطبيق', 'settings.themeAria': 'اختيار السمة', 'settings.nicknameToggle': 'عرض الألقاب بدلًا من الأسماء',
      'theme.dark': '🌙 الوضع الداكن', 'theme.light': '☀️ الوضع الفاتح', 'theme.auto': '🌗 تلقائي',
      'theme.darkActivated': 'تم تفعيل الوضع الداكن 🌙', 'theme.lightActivated': 'تم تفعيل الوضع الفاتح ☀️', 'theme.autoActivated': 'تم تفعيل الوضع التلقائي 🌗',
      'theme.updated': 'تم تحديث السمة', 'theme.changeToLight': 'التبديل إلى الوضع الفاتح', 'theme.changeToAuto': 'التبديل إلى الوضع التلقائي',
      'theme.changeToDark': 'التبديل إلى الوضع الداكن', 'theme.change': 'تغيير السمة',
      'chat.settingsOpen': 'فتح إعدادات المحادثة', 'chat.avatarAlt': 'الصورة الشخصية للشريك', 'chat.settingsMenu': 'إعدادات الرسائل',
      'chat.settingsTitle': 'الإعدادات', 'chat.panelTitle': 'إعدادات المحادثة', 'chat.closeSettings': 'إغلاق الإعدادات',
      'chat.personalScope': 'تفضيلات شخصية · محفوظة على هذا الجهاز', 'chat.tab.appearance': 'المظهر', 'chat.tab.notifications': 'الإشعارات',
      'chat.tab.privacy': 'الخصوصية', 'chat.tab.messages': 'الرسائل', 'chat.tab.organization': 'التنظيم', 'chat.tab.media': 'الوسائط والملفات',
      'chat.tab.conversation': 'المحادثة', 'chat.tab.about': 'من نحن', 'chat.appearance': 'المظهر', 'chat.background': 'خلفية المحادثة',
      'chat.backgroundHelp': 'اختر أجواءً لشاشة المحادثة.', 'chat.backgroundPalette': 'ألوان وتدرجات خلفية المحادثة',
      'chat.backgroundRose': 'وردي رومانسي', 'chat.backgroundViolet': 'بنفسجي', 'chat.backgroundSky': 'أزرق سماوي',
      'chat.backgroundMidnight': 'منتصف الليل الأنيق', 'chat.backgroundRuby': 'أحمر مخملي', 'chat.backgroundGarden': 'أخضر مريمي',
      'chat.backgroundBeige': 'بيج هادئ', 'chat.backgroundOcean': 'أزرق بحيري', 'chat.backgroundChampagne': 'شامبانيا وردي',
      'chat.backgroundAurora': 'الشفق القطبي', 'chat.backgroundPreviewAlt': 'معاينة خلفية المحادثة', 'chat.backgroundPreview': 'خلفيتك الشخصية',
      'chat.backgroundSaving': 'جارٍ حفظ صورتك…', 'chat.backgroundChoose': '🖼️ اختر من معرضي', 'chat.backgroundReplace': '🖼️ استبدل صورتي',
      'chat.backgroundApply': 'استخدم هذه الصورة', 'chat.backgroundCancel': 'إلغاء المعاينة', 'chat.backgroundRemove': 'إزالة صورتي',
      'chat.themeLabel': 'سمة التطبيق', 'chat.themeDark': 'داكن', 'chat.themeLight': 'فاتح', 'chat.themeAuto': 'تلقائي',
      'chat.bubbleColorLabel': 'لون فقاعاتك', 'chat.bubbleRose': 'وردي ناعم', 'chat.bubblePlum': 'برقوقي',
      'chat.bubbleBerry': 'توت العليق', 'chat.bubbleSage': 'أخضر مريمي', 'chat.restoreAppearance': 'استعادة المظهر الافتراضي',
      'chat.notifications': 'الإشعارات', 'chat.notificationsNote': 'إشعارات المحادثة غير مهيأة في هذا الإصدار.',
      'chat.newMessageNotifications': 'إشعارات الرسائل الجديدة', 'chat.notificationSounds': 'أصوات الإشعارات',
      'chat.newMessageAlerts': 'تنبيهات الرسائل الجديدة', 'chat.notAvailable': 'الإشعارات غير متاحة', 'chat.privacy': 'الخصوصية',
      'chat.privacyNote': 'تُدار تأكيدات القراءة تلقائيًا. إعدادات الحضور ومؤشر الكتابة غير متاحة.',
      'chat.onlineVisibility': 'ظهور حالة الاتصال', 'chat.readReceipts': 'تأكيدات القراءة', 'chat.typingIndicator': 'مؤشر الكتابة',
      'chat.presenceUnavailable': 'إعداد الحالة غير متاح', 'chat.readReceiptsAutomatic': 'تأكيدات القراءة مفعلة تلقائيًا',
      'chat.typingUnavailable': 'مؤشر الكتابة غير متاح', 'chat.customization': 'تخصيص الرسائل', 'chat.bubbleStyle': 'نمط الفقاعات',
      'chat.styleSoft': 'ناعم', 'chat.styleClassic': 'كلاسيكي', 'chat.styleCompact': 'مضغوط', 'chat.textSize': 'حجم النص',
      'chat.quickReactions': 'تفاعلات سريعة', 'chat.reactionsClassic': 'كلاسيكية', 'chat.reactionsRomantic': 'رومانسية',
      'chat.reactionsPlayful': 'مرحة', 'chat.showTimes': 'عرض وقت الرسائل', 'chat.organization': 'التنظيم',
      'chat.viewFavorites': '⭐ عرض المفضلة', 'chat.viewPinned': '📌 عرض الرسائل المثبتة', 'chat.searchConversation': '⌕ البحث في المحادثة',
      'chat.searchPlaceholder': 'كلمة أو ملف…', 'chat.organizationScope': 'ترتبط المفضلة والرسائل المثبتة برسائل المحادثة.',
      'chat.media': 'الوسائط والملفات', 'chat.photos': '🖼️ الصور', 'chat.files': '📄 الملفات', 'chat.videos': '🎞️ الفيديوهات',
      'chat.links': '🔗 الروابط المشتركة', 'chat.downloadNote': 'تبقى الملفات في مواقعها الأصلية؛ لا يتوفر مدير للتنزيلات.',
      'chat.conversationManagement': 'إدارة المحادثة', 'chat.syncNote': 'تتم مزامنة الرسائل مع Supabase. لا يُحفظ السجل منفصلًا على هذا الجهاز.',
      'chat.exportConversation': '⇩ تصدير المحادثة (JSON)', 'chat.clearLocalHistory': '🗑️ مسح السجل المحلي',
      'chat.manageDownloads': '📥 إدارة الوسائط التي تم تنزيلها', 'chat.unavailable': 'غير متاح',
      'chat.noDeleteNote': 'لا تُحذف أي رسائل من هذه اللوحة.', 'chat.about': 'من نحن', 'chat.linkedSince': 'المحادثة مرتبطة منذ',
      'chat.dateUnavailable': 'التاريخ غير متاح', 'chat.messagesLoaded': 'الرسائل المحملة', 'chat.sharedPhotos': 'الصور المشتركة',
      'chat.aboutQuote': '«كل رسالة جزء صغير من قصتنا.»', 'chat.countsScope': 'تعرض العدادات الرسائل المحملة من هذه المحادثة فقط.',
      'chat.searchAndFilter': 'بحث وتصفية', 'chat.searchMessage': 'البحث في المحادثة...', 'chat.searchMessageAria': 'البحث عن رسالة',
      'chat.filterGroup': 'تصفية الرسائل', 'chat.filterAll': 'الكل', 'chat.filterFavorites': 'المفضلة', 'chat.filterPinned': 'المثبتة',
      'chat.empty': 'لا توجد رسائل لعرضها الآن.', 'chat.emptyHelp': 'ابدأ المحادثة بكلمات لطيفة.', 'chat.typing': 'يكتب شريكك الآن…',
      'chat.composerPlaceholder': 'رسالة', 'chat.sendMessage': 'إرسال الرسالة', 'chat.insertEmoji': 'إدراج رمز تعبيري',
      'chat.insertReaction': 'إدراج تفاعل', 'chat.insertHeart': 'إدراج قلب', 'chat.insertLaugh': 'إدراج ضحكة',
      'chat.insertLoveFace': 'إدراج وجه عاشق', 'chat.insertThumb': 'إدراج إبهام للأعلى', 'chat.invitePartner': '❤️ دعوة شريكي',
      'chat.joinPartner': '❤️ الانضمام إلى شريكي', 'chat.pairingStatus': 'جارٍ إعداد الربط بين الحسابين…',
      'chat.partnerCodePlaceholder': 'أدخل رمز شريكك', 'chat.partnerCodeAria': 'رمز الشريك', 'chat.validate': 'تأكيد',
      'chat.pairingGate': 'ادعُ شريكك أو انضم إليه لاستخدام الرسائل.'
    },
    zh: {
      'settings.themeTitle': '应用主题', 'settings.themeAria': '主题选择', 'settings.nicknameToggle': '显示昵称而不是名字',
      'theme.dark': '🌙 深色模式', 'theme.light': '☀️ 浅色模式', 'theme.auto': '🌗 自动',
      'theme.darkActivated': '已启用深色模式 🌙', 'theme.lightActivated': '已启用浅色模式 ☀️', 'theme.autoActivated': '已启用自动模式 🌗',
      'theme.updated': '主题已更新', 'theme.changeToLight': '切换到浅色模式', 'theme.changeToAuto': '切换到自动模式',
      'theme.changeToDark': '切换到深色模式', 'theme.change': '更改主题',
      'chat.settingsOpen': '打开对话设置', 'chat.avatarAlt': '伴侣头像', 'chat.settingsMenu': '消息设置',
      'chat.settingsTitle': '设置', 'chat.panelTitle': '对话设置', 'chat.closeSettings': '关闭设置',
      'chat.personalScope': '个人偏好 · 保存在此设备上', 'chat.tab.appearance': '外观', 'chat.tab.notifications': '通知',
      'chat.tab.privacy': '隐私', 'chat.tab.messages': '消息', 'chat.tab.organization': '整理', 'chat.tab.media': '媒体和文件',
      'chat.tab.conversation': '对话', 'chat.tab.about': '关于我们', 'chat.appearance': '外观', 'chat.background': '聊天背景',
      'chat.backgroundHelp': '为聊天界面选择一种氛围。', 'chat.backgroundPalette': '聊天背景颜色和渐变',
      'chat.backgroundRose': '浪漫玫瑰', 'chat.backgroundViolet': '紫罗兰', 'chat.backgroundSky': '天蓝色',
      'chat.backgroundMidnight': '优雅午夜', 'chat.backgroundRuby': '丝绒红', 'chat.backgroundGarden': '鼠尾草绿',
      'chat.backgroundBeige': '柔和米色', 'chat.backgroundOcean': '湖蓝色', 'chat.backgroundChampagne': '玫瑰香槟',
      'chat.backgroundAurora': '极光', 'chat.backgroundPreviewAlt': '聊天背景预览', 'chat.backgroundPreview': '你的专属背景',
      'chat.backgroundSaving': '正在保存图片…', 'chat.backgroundChoose': '🖼️ 从我的相册选择', 'chat.backgroundReplace': '🖼️ 替换我的图片',
      'chat.backgroundApply': '使用此图片', 'chat.backgroundCancel': '取消预览', 'chat.backgroundRemove': '删除我的图片',
      'chat.themeLabel': '应用主题', 'chat.themeDark': '深色', 'chat.themeLight': '浅色', 'chat.themeAuto': '自动',
      'chat.bubbleColorLabel': '气泡颜色', 'chat.bubbleRose': '柔和玫瑰色', 'chat.bubblePlum': '梅紫色',
      'chat.bubbleBerry': '覆盆子色', 'chat.bubbleSage': '鼠尾草绿', 'chat.restoreAppearance': '恢复默认外观',
      'chat.notifications': '通知', 'chat.notificationsNote': '此版本尚未配置对话通知。',
      'chat.newMessageNotifications': '新消息通知', 'chat.notificationSounds': '通知声音', 'chat.newMessageAlerts': '新消息提醒',
      'chat.notAvailable': '通知不可用', 'chat.privacy': '隐私', 'chat.privacyNote': '已读回执由系统自动管理。在线状态和输入提示设置暂不可用。',
      'chat.onlineVisibility': '在线状态可见性', 'chat.readReceipts': '已读回执', 'chat.typingIndicator': '输入提示',
      'chat.presenceUnavailable': '状态设置不可用', 'chat.readReceiptsAutomatic': '已自动启用已读回执', 'chat.typingUnavailable': '输入提示不可用',
      'chat.customization': '消息个性化', 'chat.bubbleStyle': '气泡样式', 'chat.styleSoft': '柔和', 'chat.styleClassic': '经典',
      'chat.styleCompact': '紧凑', 'chat.textSize': '文字大小', 'chat.quickReactions': '快捷回应', 'chat.reactionsClassic': '经典',
      'chat.reactionsRomantic': '浪漫', 'chat.reactionsPlayful': '俏皮', 'chat.showTimes': '显示消息时间', 'chat.organization': '整理',
      'chat.viewFavorites': '⭐ 查看收藏', 'chat.viewPinned': '📌 查看置顶消息', 'chat.searchConversation': '⌕ 搜索对话',
      'chat.searchPlaceholder': '关键词或文件…', 'chat.organizationScope': '收藏和置顶状态与对话中的消息关联。',
      'chat.media': '媒体和文件', 'chat.photos': '🖼️ 照片', 'chat.files': '📄 文件', 'chat.videos': '🎞️ 视频',
      'chat.links': '🔗 共享链接', 'chat.downloadNote': '下载内容保留在原位置；当前没有下载管理器。',
      'chat.conversationManagement': '对话管理', 'chat.syncNote': '消息与 Supabase 同步。此设备不会单独保存聊天记录。',
      'chat.exportConversation': '⇩ 导出对话 (JSON)', 'chat.clearLocalHistory': '🗑️ 清除本地记录',
      'chat.manageDownloads': '📥 管理已下载媒体', 'chat.unavailable': '不可用', 'chat.noDeleteNote': '无法从此面板删除消息。',
      'chat.about': '关于我们', 'chat.linkedSince': '对话关联时间', 'chat.dateUnavailable': '日期不可用', 'chat.messagesLoaded': '已加载消息',
      'chat.sharedPhotos': '共享照片', 'chat.aboutQuote': '“每条消息都是我们故事的一小部分。”', 'chat.countsScope': '计数仅包含从此对话加载的消息。',
      'chat.searchAndFilter': '搜索和筛选', 'chat.searchMessage': '搜索此对话...', 'chat.searchMessageAria': '搜索消息',
      'chat.filterGroup': '消息筛选', 'chat.filterAll': '全部', 'chat.filterFavorites': '收藏', 'chat.filterPinned': '置顶',
      'chat.empty': '目前没有可显示的消息。', 'chat.emptyHelp': '用一句暖心的话开始聊天。', 'chat.typing': '你的伴侣正在输入…',
      'chat.composerPlaceholder': '消息', 'chat.sendMessage': '发送消息', 'chat.insertEmoji': '插入表情符号', 'chat.insertReaction': '插入回应',
      'chat.insertHeart': '插入爱心', 'chat.insertLaugh': '插入笑声', 'chat.insertLoveFace': '插入爱心眼表情', 'chat.insertThumb': '插入点赞',
      'chat.invitePartner': '❤️ 邀请伴侣', 'chat.joinPartner': '❤️ 加入伴侣', 'chat.pairingStatus': '正在准备关联两个账户…',
      'chat.partnerCodePlaceholder': '输入伴侣的邀请码', 'chat.partnerCodeAria': '伴侣邀请码', 'chat.validate': '确认',
      'chat.pairingGate': '邀请伴侣或加入伴侣后即可使用消息功能。'
    }
  };

  Object.entries(SUPPLEMENTAL_MESSAGES).forEach(([language, messages]) => {
    Object.assign(SUPPORTED[language].messages, messages);
  });

  const SUPPLEMENTAL_FEEDBACK = {
    fr: {
      'chat.backgroundInvalid': 'Choisissez un fichier image valide.',
      'chat.backgroundTooLarge': 'Cette image dépasse la limite de 20 Mo.',
      'chat.backgroundSavedPersistent': 'Votre fond personnel est enregistré durablement sur cet appareil.',
      'chat.backgroundSavedLocal': 'Votre fond est enregistré localement, mais le navigateur ne garantit pas sa conservation.',
      'chat.backgroundSaveFailed': 'Impossible d’enregistrer cette image sur cet appareil.',
      'chat.backgroundDeleted': 'Votre image de fond a été supprimée.',
      'chat.backgroundDeleteFailed': 'Impossible de supprimer cette image.',
      'chat.appearanceRestored': 'Apparence de la conversation restaurée.', 'chat.online': 'en ligne',
      'chat.onlineReady': 'En ligne • prêt à s’écrire', 'chat.linkedStatus': '✅ Compte lié à {code} — la messagerie est prête.',
      'chat.invitationCode': 'Code d’invitation', 'chat.backToHome': 'Retour à l’accueil',
      'chat.editPartnerPhoto': 'Modifier la photo de profil du partenaire', 'chat.editPartnerPhotoTitle': 'Modifier la photo de profil',
      'chat.photoPreviewTitle': 'Aperçu de la photo', 'chat.selectedPhotoAlt': 'Aperçu de la photo sélectionnée', 'chat.usePhoto': 'Utiliser cette photo',
      'chat.settingsCategories': 'Catégories des paramètres'
    },
    en: {
      'chat.backgroundInvalid': 'Choose a valid image file.', 'chat.backgroundTooLarge': 'This image exceeds the 20 MB limit.',
      'chat.backgroundSavedPersistent': 'Your personal background is securely saved on this device.',
      'chat.backgroundSavedLocal': 'Your background is saved locally, but the browser does not guarantee its retention.',
      'chat.backgroundSaveFailed': 'Could not save this image on this device.', 'chat.backgroundDeleted': 'Your background image was removed.',
      'chat.backgroundDeleteFailed': 'Could not remove this image.', 'chat.appearanceRestored': 'Conversation appearance restored.',
      'chat.online': 'online', 'chat.onlineReady': 'Online • ready to chat', 'chat.linkedStatus': '✅ Account linked to {code} — messaging is ready.',
      'chat.invitationCode': 'Invitation code', 'chat.backToHome': 'Back to home',
      'chat.editPartnerPhoto': 'Change partner profile photo', 'chat.editPartnerPhotoTitle': 'Edit profile photo',
      'chat.photoPreviewTitle': 'Photo preview', 'chat.selectedPhotoAlt': 'Preview of the selected photo', 'chat.usePhoto': 'Use this photo',
      'chat.settingsCategories': 'Settings categories'
    },
    es: {
      'chat.backgroundInvalid': 'Elige un archivo de imagen válido.', 'chat.backgroundTooLarge': 'La imagen supera el límite de 20 MB.',
      'chat.backgroundSavedPersistent': 'Tu fondo personal se ha guardado de forma persistente en este dispositivo.',
      'chat.backgroundSavedLocal': 'Tu fondo se ha guardado localmente, pero el navegador no garantiza que se conserve.',
      'chat.backgroundSaveFailed': 'No se pudo guardar esta imagen en este dispositivo.', 'chat.backgroundDeleted': 'Se ha eliminado tu imagen de fondo.',
      'chat.backgroundDeleteFailed': 'No se pudo eliminar esta imagen.', 'chat.appearanceRestored': 'Se ha restaurado la apariencia de la conversación.',
      'chat.online': 'en línea', 'chat.onlineReady': 'En línea • listo para conversar', 'chat.linkedStatus': '✅ Cuenta vinculada con {code} — los mensajes están listos.',
      'chat.invitationCode': 'Código de invitación', 'chat.backToHome': 'Volver al inicio',
      'chat.editPartnerPhoto': 'Cambiar la foto de perfil de la pareja', 'chat.editPartnerPhotoTitle': 'Editar foto de perfil',
      'chat.photoPreviewTitle': 'Vista previa de la foto', 'chat.selectedPhotoAlt': 'Vista previa de la foto seleccionada', 'chat.usePhoto': 'Usar esta foto',
      'chat.settingsCategories': 'Categorías de los ajustes'
    },
    pt: {
      'chat.backgroundInvalid': 'Escolha um ficheiro de imagem válido.', 'chat.backgroundTooLarge': 'A imagem excede o limite de 20 MB.',
      'chat.backgroundSavedPersistent': 'O seu fundo pessoal foi guardado de forma persistente neste dispositivo.',
      'chat.backgroundSavedLocal': 'O seu fundo foi guardado localmente, mas o navegador não garante a sua conservação.',
      'chat.backgroundSaveFailed': 'Não foi possível guardar esta imagem neste dispositivo.', 'chat.backgroundDeleted': 'A imagem de fundo foi removida.',
      'chat.backgroundDeleteFailed': 'Não foi possível remover esta imagem.', 'chat.appearanceRestored': 'A aparência da conversa foi restaurada.',
      'chat.online': 'online', 'chat.onlineReady': 'Online • pronto para conversar', 'chat.linkedStatus': '✅ Conta ligada a {code} — as mensagens estão prontas.',
      'chat.invitationCode': 'Código de convite', 'chat.backToHome': 'Voltar ao início',
      'chat.editPartnerPhoto': 'Alterar a fotografia de perfil do parceiro', 'chat.editPartnerPhotoTitle': 'Editar fotografia de perfil',
      'chat.photoPreviewTitle': 'Pré-visualização da fotografia', 'chat.selectedPhotoAlt': 'Pré-visualização da fotografia selecionada', 'chat.usePhoto': 'Usar esta fotografia',
      'chat.settingsCategories': 'Categorias das definições'
    },
    de: {
      'chat.backgroundInvalid': 'Wähle eine gültige Bilddatei aus.', 'chat.backgroundTooLarge': 'Dieses Bild überschreitet die Grenze von 20 MB.',
      'chat.backgroundSavedPersistent': 'Dein persönlicher Hintergrund ist dauerhaft auf diesem Gerät gespeichert.',
      'chat.backgroundSavedLocal': 'Dein Hintergrund ist lokal gespeichert, aber der Browser garantiert keine dauerhafte Aufbewahrung.',
      'chat.backgroundSaveFailed': 'Dieses Bild konnte nicht auf diesem Gerät gespeichert werden.', 'chat.backgroundDeleted': 'Dein Hintergrundbild wurde entfernt.',
      'chat.backgroundDeleteFailed': 'Dieses Bild konnte nicht entfernt werden.', 'chat.appearanceRestored': 'Gesprächsdarstellung wiederhergestellt.',
      'chat.online': 'online', 'chat.onlineReady': 'Online • bereit zum Schreiben', 'chat.linkedStatus': '✅ Konto mit {code} verbunden — Nachrichten sind bereit.',
      'chat.invitationCode': 'Einladungscode', 'chat.backToHome': 'Zurück zur Startseite',
      'chat.editPartnerPhoto': 'Profilfoto des Partners ändern', 'chat.editPartnerPhotoTitle': 'Profilfoto bearbeiten',
      'chat.photoPreviewTitle': 'Fotovorschau', 'chat.selectedPhotoAlt': 'Vorschau des ausgewählten Fotos', 'chat.usePhoto': 'Dieses Foto verwenden',
      'chat.settingsCategories': 'Einstellungskategorien'
    },
    it: {
      'chat.backgroundInvalid': 'Scegli un file immagine valido.', 'chat.backgroundTooLarge': 'L’immagine supera il limite di 20 MB.',
      'chat.backgroundSavedPersistent': 'Lo sfondo personale è stato salvato in modo persistente su questo dispositivo.',
      'chat.backgroundSavedLocal': 'Lo sfondo è salvato localmente, ma il browser non ne garantisce la conservazione.',
      'chat.backgroundSaveFailed': 'Impossibile salvare questa immagine su questo dispositivo.', 'chat.backgroundDeleted': 'L’immagine di sfondo è stata rimossa.',
      'chat.backgroundDeleteFailed': 'Impossibile rimuovere questa immagine.', 'chat.appearanceRestored': 'Aspetto della conversazione ripristinato.',
      'chat.online': 'online', 'chat.onlineReady': 'Online • pronto a scrivere', 'chat.linkedStatus': '✅ Account collegato a {code} — i messaggi sono pronti.',
      'chat.invitationCode': 'Codice di invito', 'chat.backToHome': 'Torna alla home',
      'chat.editPartnerPhoto': 'Modifica la foto del profilo del partner', 'chat.editPartnerPhotoTitle': 'Modifica la foto del profilo',
      'chat.photoPreviewTitle': 'Anteprima della foto', 'chat.selectedPhotoAlt': 'Anteprima della foto selezionata', 'chat.usePhoto': 'Usa questa foto',
      'chat.settingsCategories': 'Categorie delle impostazioni'
    },
    ar: {
      'chat.backgroundInvalid': 'اختر ملف صورة صالحًا.', 'chat.backgroundTooLarge': 'يتجاوز حجم الصورة الحد البالغ 20 ميغابايت.',
      'chat.backgroundSavedPersistent': 'تم حفظ خلفيتك الشخصية بشكل دائم على هذا الجهاز.',
      'chat.backgroundSavedLocal': 'تم حفظ الخلفية محليًا، لكن المتصفح لا يضمن الاحتفاظ بها.',
      'chat.backgroundSaveFailed': 'تعذر حفظ هذه الصورة على هذا الجهاز.', 'chat.backgroundDeleted': 'تم حذف صورة الخلفية.',
      'chat.backgroundDeleteFailed': 'تعذر حذف هذه الصورة.', 'chat.appearanceRestored': 'تمت استعادة مظهر المحادثة.',
      'chat.online': 'متصل', 'chat.onlineReady': 'متصل • جاهز للدردشة', 'chat.linkedStatus': '✅ تم ربط الحساب بـ {code} — الرسائل جاهزة.',
      'chat.invitationCode': 'رمز الدعوة', 'chat.backToHome': 'العودة إلى الرئيسية',
      'chat.editPartnerPhoto': 'تغيير الصورة الشخصية للشريك', 'chat.editPartnerPhotoTitle': 'تعديل الصورة الشخصية',
      'chat.photoPreviewTitle': 'معاينة الصورة', 'chat.selectedPhotoAlt': 'معاينة الصورة المحددة', 'chat.usePhoto': 'استخدم هذه الصورة',
      'chat.settingsCategories': 'فئات الإعدادات'
    },
    zh: {
      'chat.backgroundInvalid': '请选择有效的图片文件。', 'chat.backgroundTooLarge': '图片超过 20 MB 大小限制。',
      'chat.backgroundSavedPersistent': '专属背景已持久保存在此设备上。',
      'chat.backgroundSavedLocal': '背景已保存在本地，但浏览器不保证长期保留。',
      'chat.backgroundSaveFailed': '无法在此设备上保存图片。', 'chat.backgroundDeleted': '背景图片已删除。',
      'chat.backgroundDeleteFailed': '无法删除此图片。', 'chat.appearanceRestored': '对话外观已恢复。',
      'chat.online': '在线', 'chat.onlineReady': '在线 • 可以开始聊天', 'chat.linkedStatus': '✅ 已关联到账户 {code} — 消息已就绪。',
      'chat.invitationCode': '邀请代码', 'chat.backToHome': '返回首页',
      'chat.editPartnerPhoto': '修改伴侣头像', 'chat.editPartnerPhotoTitle': '编辑头像',
      'chat.photoPreviewTitle': '照片预览', 'chat.selectedPhotoAlt': '所选照片预览', 'chat.usePhoto': '使用此照片',
      'chat.settingsCategories': '设置类别'
    }
  };

  Object.entries(SUPPLEMENTAL_FEEDBACK).forEach(([language, messages]) => {
    Object.assign(SUPPORTED[language].messages, messages);
  });

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
        const datasetAttribute = attribute
          .split('-')
          .map(part => part[0].toUpperCase() + part.slice(1))
          .join('');
        const key = element.dataset[`i18n${datasetAttribute}`];
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
    window.dispatchEvent(new CustomEvent('carnet:languagechange', { detail: { language: activeLanguage } }));
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
