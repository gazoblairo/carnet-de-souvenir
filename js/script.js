/* ===== Carnet PWA — Application Logic ===== */

const STORAGE_KEYS = {
  settings: 'carnet_settings',
  memories: 'carnet_memories',
  gallery: 'carnet_gallery',
  audios: 'carnet_audios',
  challenge: 'carnet_challenge',
  challengeHistory: 'carnet_challenge_history',
  gameState: 'carnet_game_state',
  messages: 'carnet_messages',
  messageSettings: 'carnet_message_settings',
  dates: 'carnet_dates',
  goals: 'carnet_goals',
  places: 'carnet_places'
};

const GAME_CATEGORIES = {
  romantique: {
    label: '🟢 Romantique',
    labelKey: 'game.romantic',
    actions: [
      'Envoie un texto tendre à ton partenaire avec un mot doux et un cœur.',
      'Prépare un café ou un thé à deux et partage un moment sans téléphone.',
      'Fais un compliment sincère à ton partenaire en plein milieu de la journée.',
      'Organise une petite surprise avec une fleur, un mot ou une gourmandise.',
      'Propose une promenade romantique à la tombée de la nuit.',
      'Échangez vos plus beaux souvenirs de la première rencontre.',
      'Fais une carte manuscrite avec trois raisons pour lesquelles tu l’aimes.',
      'Prépare un dîner à la lumière des bougies, même en semaine.',
      'Offre un câlin d’au moins 30 secondes sans parler.',
      'Prends une photo de vous deux et publie-la avec un joli message.',
      'Lance un défi de câlin à chaque fois que l’un de vous dit “j’aime”.',
      'Écrivez ensemble une liste de 10 rêves de couple à réaliser.',
      'Choisissez une chanson romantique et dansez ensemble dans le salon.',
      'Préparez une mini escape game romantique à la maison.',
      'Faites une promenade main dans la main en silence pendant 10 minutes.',
      'Offrez un petit cadeau symbolique sans raison particulière.',
      'Échangez un compliment sur la façon dont l’autre vous fait rire.',
      'Créez une playlist spéciale “notre histoire”.',
      'Planifiez une date surprise pour le week-end prochain.',
      'Faites un “moment sans écran” pendant une heure entière.',
      'Écrivez une lettre d’amour et glissez-la dans sa poche.',
      'Envoyez un message vocal tendre au milieu de la journée.',
      'Faites une séance photo spontanée avec votre meilleur sourire.',
      'Organisez une soirée cuisine à deux avec un dessert spécial.',
      'Partagez un secret doux que vous n’avez jamais dit à voix haute.',
      'Choisissez un souvenir marquant et racontez-le comme si c’était un film.',
      'Proposez un rituel du soir à deux après le dîner.',
      'Mettez une musique romantique et faites une sieste blottie.',
      'Échangez vos plus beaux mots d’amour avant de dormir.',
      'Préparez une petite surprise cachée à découvrir demain.',
      'Faites un dessin de votre couple et offrez-le en cadeau.',
      'Mettez un post-it avec une phrase tendre sur le miroir.',
      'Racontez à l’autre ce qui vous fait le plus craquer chez lui ou elle.',
      'Prenez un moment pour remercier votre partenaire pour sa présence.',
      'Faites une promenade au coucher du soleil et prenez une photo.',
      'Offrez un baiser surprise quand l’autre s’y attend le moins.',
      'Écrivez un “merci” pour un geste souvent oublié.',
      'Planifiez un mini voyage en imagination pour ce soir.',
      'Organisez une soirée jeux de société à deux.',
      'Proposez une “date de la semaine” à garder dans votre agenda.',
      'Faites une déclaration romantique en utilisant un mot rare.',
      'Préparez un snack spécial pour votre partenaire à son retour.',
      'Renseignez-vous sur ses rêves de couple et partagez les vôtres.',
      'Échangez une carte “pour aujourd’hui” avec une phrase sincère.',
      'Faites un rituel de gratitude devant un verre de vin ou de thé.',
      'Partagez une chanson qui vous rappelle la première fois que vous vous êtes vus.',
      'Trouvez un moyen original de dire “je pense à toi”.',
      'Prenez un moment pour vous écouter sans interruption.',
      'Préparez un petit mot doux à glisser dans son sac ou sa poche.',
      'Faites un compliment sur sa façon de vous aider au quotidien.',
      'Proposez une “date de la pluie” avec musique, chocolat et câlins.',
      'Offrez un moment de calme sans plan, juste à deux.',
      'Invitez votre partenaire à raconter un rêve romantique qu’il aimerait vivre.',
      'Faites un cœur avec vos mains et offrez-le en silence.',
      'Mettez une phrase tendre en fond d’écran de votre téléphone.',
      'Préparez une surprise à base de dessert et de musique.',
      'Choisissez un endroit où vous voulez aller ensemble et discutez-en.',
      'Partagez un souvenir de votre première fête ou première escapade.',
      'Écrivez un petit poème à votre partenaire.',
      'Aidez l’autre à réaliser un petit geste de confort aujourd’hui.',
      'Faites un moment “juste nous” avec un thé et une chanson.',
      'Enregistrez un audio où vous dites ce que vous aimez chez lui ou elle.',
      'Dites “je suis fier de nous” au moins une fois aujourd’hui.',
      'Passez une heure à regarder des photos de vous deux.',
      'Faites un bilan doux de votre semaine à deux.',
      'Mettez un bouquet de fleurs ou un élément décoratif sur la table.',
      'Préparez un moment de détente avec un masque ou un soin.',
      'Échangez une caresse douce comme une petite marque d’amour.',
      'Faites un “merci” pour quelque chose de simple et quotidien.',
      'Choisissez un souvenir à mettre dans votre carnet de couple.',
      'Répétez à voix haute une phrase d’amour en regardant l’autre.',
      'Prenez le temps d’écouter ce qui vous a touché cette semaine.',
      'Proposez un moment de tendresse sans aucune autre attente.',
      'Faites un “jeu du compliment” pendant 5 minutes.',
      'Préparez une mini liste de “petits bonheurs à deux”.',
      'Donnez un petit baiser comme un signe de tendresse.',
      'Réveillez-vous un peu plus tôt pour un moment calme ensemble.',
      'Installez une ambiance douce avec des bougies ou de la lumière.',
      'Parlez de votre avenir comme si vous étiez déjà en train de le construire.',
      'Faites un rituel de “bonne nuit” avec un mot tendre.',
      'Préparez un événement simple mais spécial à partager ce soir.',
      'Dites à votre partenaire ce que vous appréciez vraiment chez lui ou elle.',
      'Faites un rituel de “bonjour” avec un sourire plus long que d’habitude.',
      'Préparez un mini goûter à deux et profitez du moment.',
      'Faites un souvenir avec une image ou une photo d’aujourd’hui.',
      'Invitez votre partenaire à choisir une activité romantique pour demain.',
      'Écrivez un message rempli d’amour et de gratitude.',
      'Échangez un câlin plus longtemps que d’habitude.',
      'Offrez un moment d’attention complète sans téléphone.',
      'Faites un “compliment surprise” à chaque fois que vous vous voyez.',
      'Prenez une photo de votre main dans la sienne.',
      'Mettez une musique douce et profitez d’un silence doux.',
      'Proposez une date improvisée à deux avec un thème romantique.',
      'Dites à voix haute ce que vous aimez dans votre relation.',
      'Faites un moment de complicité juste pour vous deux.',
      'Échangez un petit mot avec des mots que vous n’utilisez pas souvent.',
      'Faites une surprise au moment du repas pour rendre la journée plus belle.',
      'Mettez votre relation au centre d’un moment calme.',
      'Racontez un moment tendre de votre histoire à l’autre.',
      'Laissez un mot doux sur le téléphone de votre partenaire.',
      'Créez une image mentale de votre futur plus beau.',
      'Proposez une danse lente pour une chanson préférée.',
      'Choisissez un thème romantique et organisez une petite date.',
      'Faites un regard complice et partagez un sourire.',
      'Organisez un “moment de douceur” en fin de soirée.',
      'Offrez une petite attention sans même en parler.',
      'Demandez à l’autre ce qui lui ferait plaisir aujourd’hui.',
      'Faites un échange de compliments pendant cinq minutes.',
      'Partagez encore une fois votre plus beau souvenir.',
      'Mettez un mot doux sur sa serviette ou son oreiller.',
      'Prenez le temps de vous dire “je suis content de toi”.',
      'Faites un rituel avec votre parfum, votre chanson ou votre boisson préférée.',
      'Écrivez une citation qui vous représente tous les deux.',
      'Organisez un moment de calme avec un thé ou un chocolat chaud.',
      'Racontez le moment où vous vous êtes sentis le plus proches.',
      'Faites une petite surprise qu’il ou elle ne verra pas venir.',
      'Invitez l’autre à un moment jusqu’à la fin de la soirée.',
      'Dites à voix haute ce qui vous rend heureux dans votre couple.',
      'Échangez un mot doux à chacun de vos passages dans la journée.',
      'Écrivez un court texte qui pourrait devenir une carte de vœux.',
      'Proposez une nouvelle tradition romantique pour votre couple.',
      'Prenez un instant pour vous rappeler pourquoi vous êtes ensemble.',
      'Soyez attentif à une petite joie de votre partenaire aujourd’hui.',
      'Faites un petit dessin ou une carte improvisée.',
      'Dites “je t’aime” avec un regard tranquille et sincère.',
      'Passez un moment à rêver ensemble à un endroit spécial.',
      'Préparez un petit mot qui vous ressemble tous les deux.',
      'Racontez vous-même un épisode romantique de votre histoire.',
      'Choisissez une chanson et faites un échange de pensées.',
      'Faites un moment de tendresse avant de vous séparer.',
      'Revisitez un souvenir que vous aimez particulièrement.',
      'Proposez une activité à deux sans pression ni contrainte.',
      'Sortez un instant pour respirer et vous regarder.',
      'Faites une surprise simple mais pleine de douceur.',
      'Partagez un rêve futur de couple avec un grand sourire.',
      'Mettez une petite attention sur le téléphone de l’autre.',
      'Faites un geste tendre au bon moment, sans prévoir grand chose.',
      'Partagez un moment de calme à deux avant de dormir.',
      'Offrez un compliment sur quelque chose de rare chez votre partenaire.',
      'Écrivez aujourd’hui “ce que j’aime chez toi”.',
      'Choisissez un mot de tendresse à utiliser ce soir.',
      'Faites un échange de regards complice pendant quelques minutes.'
    ],
    truths: [
      'Quelle est la chose la plus romantique que vous ayez déjà faite ensemble ?',
      'Quel souvenir de notre histoire vous fait sourire quand vous y pensez ?',
      'Quel geste d’affection vous rend vraiment heureux ?',
      'Quelle qualité chez votre partenaire vous attire le plus ?',
      'Quel endroit vous ferait rêver pour une date parfaite ?',
      'Quel est votre plus beau souvenir de la dernière fois où vous vous êtes vus ?',
      'Quel mot ou phrase vous fait toujours craquer ?',
      'Que souhaitez-vous que votre partenaire fasse plus souvent ?',
      'Quel rêve de couple aimeriez-vous réaliser ensemble ?',
      'Qu’est-ce qui vous rend fier de votre relation ?',
      'Quelle chanson vous rappelle le plus votre histoire ?',
      'Quelle petite attention vous ferait le plus plaisir ?',
      'Comment aimeriez-vous vous sentir chouchouté ce week-end ?',
      'Quel moment de votre relation vous a le plus marqué ?',
      'Qu’est-ce qui vous a le plus surpris chez l’autre au début ?',
      'Quel souvenir de votre vie à deux vous voudriez garder éternellement ?',
      'Quel type de surprise vous plaît le plus ?',
      'Que souhaiteriez-vous partager d’unique avec l’autre ?',
      'Quel rêve romantique vous avez envie de concrétiser ?',
      'Quel petit rituel de couple aimeriez-vous créer ?',
      'Quelle place tient l’amour dans votre quotidien ?',
      'Quel compliment aimeriez-vous entendre aujourd’hui ?',
      'Quelle qualité chez l’autre vous apaise le plus ?',
      'Quel geste de tendresse vous fait vous sentir aimé ?',
      'Quel souvenir vous donne envie de revivre encore ?',
      'Quelle aventure romantique rêvez-vous de vivre ?',
      'Quelle tendance de couple aimeriez-vous essayer ?',
      'Quel moment de la journée vous semble le plus magique à deux ?',
      'Qu’est-ce qui vous fait rire quand vous pensez à votre partenaire ?',
      'Quelle chanson ferait le parfait fond sonore de votre relation ?',
      'Quel mot doux aimeriez-vous entendre aujourd’hui ?',
      'Quelle petite chose simple vous fait un grand bien ?',
      'Quel souvenir vous donne envie de raconter à vos enfants un jour ?',
      'Quel geste de couple vous semble particulièrement beau ?',
      'Quel rêve de futur aimeriez-vous partager ?',
      'Quelle qualité chez l’autre vous inspire le plus ?',
      'Quel moment à deux vous a rendu le plus heureux ?',
      'Quel objet de la maison vous rappelle le plus votre couple ?',
      'Quel endroit vous ferait vous sentir en paix à deux ?',
      'Quelle phrase de l’autre vous reste encore en tête ?',
      'Quel petit plaisir aimez-vous partager ensemble ?',
      'Quelle surprise simple vous ferait fondre ?',
      'Quelle aventure à deux avez-vous envie de refaire ?',
      'Quel souvenir d’une date spéciale vous reste gravé ?',
      'Comment aimeriez-vous célébrer votre prochain anniversaire ?',
      'Quel moment de votre histoire vous fait dire “on a de la chance” ?',
      'Quel endroit vous ferait vivre un moment romantique parfait ?',
      'Quelle petite attention vous rappelle que vous êtes aimé ?',
      'Quel rêve de couple voulez-vous garder secret ?',
      'Quel geste vous fait sentir à l’aise dans la relation ?',
      'Quel souvenir vous fait encore rougir ?',
      'Quel détail chez votre partenaire vous fait craquer ?',
      'Comment vous imaginez-vous dans 10 ans à deux ?',
      'Quelle belle tradition aimeriez-vous instaurer ?',
      'Quel moment à deux vous a donné la plus grande confiance ?',
      'Qu’est-ce qu’un “jour parfait” à deux pour vous ?',
      'Quel souvenir vous paraît encore plus beau au fil du temps ?',
      'Quelle phrase d’amour vous voudriez pouvoir dire aujourd’hui ?',
      'Qu’est-ce qui vous rend unique en couple ?',
      'Quel type de date vous plaît le plus ?',
      'Quelle sensation vous avez quand vous êtes avec l’autre ?',
      'Quel objet symbolise le mieux votre relation ?',
      'Quel moment à deux vous a rendu le plus nostalgique ?',
      'Quel geste d’amour aimeriez-vous recevoir aujourd’hui ?',
      'Quelle histoire de couple aimeriez-vous raconter à quelqu’un ?',
      'Quel moment à deux vous fait croire au destin ?',
      'Quelle surprise romantique vous souhaiteriez vivre ?',
      'Quelle étape de votre histoire vous semble la plus précieuse ?',
      'Quelle phrase simple vous représente tous les deux ?',
      'Quel sentiment vous voulez faire grandir dans votre couple ?',
      'Quel souvenir vous fait sourire à chaque fois ?',
      'Quel moment de tendresse à deux aimeriez-vous revivre ?',
      'Quelle idée de date vous semble parfaite pour le prochain week-end ?',
      'Quel geste d’amour vous plaît infiniment ?',
      'Quel rêve simple aimeriez-vous partager aujourd’hui ?',
      'Comment définiriez-vous votre amour en une phrase ?'
    ]
  },
  drole: {
    label: '🟡 Drôle',
    labelKey: 'game.funny',
    actions: [
      'Fais une imitation de ton partenaire pendant 30 secondes sans rire.',
      'Chante une chanson de votre choix en mode “téléphone portable au maximum”.',
      'Fais une petite danse de la victoire dès que l’autre entre dans la pièce.',
      'Raconte une blague romantique et fais semblant d’être sérieux.',
      'Joue à la “voix de robot” pendant 2 minutes pendant la préparation du repas.',
      'Fais un “discours” très solennel pour annoncer qu’un biscuit est devenu magique.',
      'Fais un “coup de théâtre” en entrant dans la pièce avec une serviette sur la tête.',
      'Invente une phrase de motivation ultra dramatique pour une tâche simple.',
      'Pense à un surnom ridicule pour l’autre pendant toute la journée.',
      'Fais un mini sketch sur la façon dont vous avez “gagné” votre relation.',
      'Réalise un moment de complicité à deux avec un petit mot doux et un câlin.',
      'Joue le rôle du chef cuisinier et donne un nom très dramatique à un sandwich.',
      'Fais une pose de mannequin à l’entrée du salon et laisse l’autre te prendre en photo.',
      'Prends une photo de toi en train de faire une “face de héros” après une tâche simple.',
      'Imite un personnage de film romantique pendant une minute entière.',
      'Fais une déclaration d’amour en mode “annonce de l’événement du siècle”.',
      'Fais un petit discours de remerciement à votre café du matin.',
      'Joue à l’agent secret qui doit protéger le dernier biscuit.',
      'Raconte une histoire absurde en partant d’un détail banal du quotidien.',
      'Fais un “quiz” de 3 questions sur l’autre avec des réponses très drôles.',
      'Fais une “publicité” hilarante pour votre partenaire.',
      'Fais un saut de joie à chaque fois que l’autre dit “ok”.',
      'Invente un slogan pour votre couple avec un ton absolument sérieux.',
      'Fais un mini “interview” de votre partenaire avec des questions ridicules.',
      'Joue au “chef” et sert un plat fait de tout ce qui est à portée de main.',
      'Fais un “speech” d’acceptation pour avoir été choisi comme partenaire.',
      'Imite un célèbre couple de films pendant 30 secondes.',
      'Fais une très grande révérence avant de donner un compliment.',
      'Joue au personnage d’un détective qui enquête sur un “mystère du linge”.',
      'Rends un objet banal “mystérieux” et fais une annonce très sérieuse.',
      'Fais une petite chanson sur le repas du soir.',
      'Propose un “prix” ridicule à l’autre pour sa journée.',
      'Fais un “tour de magie” avec un mouchoir et un objet quelconque.',
      'Joue à “ce qui est caché dans la boîte” avec un objet absolument normal.',
      'Fais une très grande description de quelqu’un qui a juste posé un verre.',
      'Invente une mission secrète pour la journée à partir d’une petite tâche.',
      'Déclame une phrase romantique avec une voix de super-héros.',
      'Fais une petite parade quand l’autre revient à la maison.',
      'Fais une “conférence” sur les avantages de la sieste en couple.',
      'Imite un animal adorable pendant 20 secondes à chaque fois que l’autre parle.',
      'Fais un “remake” comique d’une scène romantique classique.',
      'Organise une séance photo de “vous deux en mode sérieux”.',
      'Joue à la “personne la plus importante du monde” pour une minute.',
      'Fais une petite déclaration d’amour depuis la cuisine.',
      'Essaie de donner un titre grandiose à une action banale du quotidien.',
      'Fais un “discours du champion” à propos du dernier morceau de chocolat.',
      'Invente un nouveau mot pour un geste simple comme ouvrir une porte.',
      'Fais une petite bataille de coussins en mode “mission importante”.',
      'Fais un résumé très dramatique de votre journée en une phrase.',
      'Raconte une anecdote ridicule en gardant le visage très sérieux.',
      'Fais une imitation d’un personnage célèbre qui vous adore tous les deux.',
      'Donne un nom héroïque à une simple casserole.',
      'Fais une interview imaginaire de votre partenaire sur sa vie de héros.',
      'Cree un slogan comique pour votre routine du soir.',
      'Fais semblant de faire une annonce officielle sur votre “réunion romantique”.',
      'Joue à la “personne de la journée” avec un air solennel.',
      'Fais une petite chanson avec 3 mots sur votre journée.',
      'Fais un “tour de magie” avec une chaussette et un autre objet.',
      'Raconte l’histoire de votre couple comme une saga de super-héros.',
      'Fais comme si tu étais un critique de cinéma en parlant d’un repas de tous les jours.',
      'Fais une déclaration très élégante sur la dernière boisson que vous avez partagée.',
      'Fais une mini bataille d’éclats de rire pendant une minute.',
      'Imite la voix d’un présentateur de télévision pour annoncer une bonne nouvelle.',
      'Dis une phrase très importante avec le plus grand sérieux possible.',
      'Fais une “réunion d’urgence” pour décider qui a le meilleur goût de biscuits.',
      'Invente une devise drôle pour votre couple à partager ce soir.',
      'Fais une scène de “rendez-vous très officiel” en mode exagéré.',
      'Fais un mini concours de “mieux faire une face d’amoureux”.',
      'Dis une phrase complètement absurde avec le visage le plus sérieux possible.',
      'Fais une “campagne de promotion” pour votre partenaire.',
      'Joue à la “voix de narrateur” pour décrire votre dernière journée.',
      'Prépare une blague “très sérieuse” sur le dernier repas.',
      'Fais un mini “show” avec un geste de danse pour un objet banal.',
      'Dites à votre partenaire une phrase très dramatique sur son goût pour le café.',
      'Invente un “rituel comique” à faire à chaque fois que l’autre arrive.',
      'Fais une imitation de quelqu’un qui croit avoir une mission importante.',
      'Raconte les grandes aventures du canapé comme s’il s’agissait d’un héros.',
      'Fais un “appel d’urgence” pour une petite gourmandise.',
      'Fais une mini présentation de votre partenaire comme s’il s’agissait d’un produit exceptionnel.',
      'Imite un narrateur de documentaire sur votre relation.',
      'Fais un “toast” très sérieux à une tâche simple du quotidien.',
      'Fais une “sérieuse” déclaration sur le mérite du linge propre.',
      'Présente la dernière chose que vous avez mangée comme un chef-d’œuvre.',
      'Fais un “secret” étrange sur votre journée à l’autre.',
      'Invente une équipe de super-héros pour votre couple.',
      'Fais une petite scène théâtrale avec la phrase “c’est la vie”.',
      'Fais une “publication officielle” sur votre dernier moment ensemble.',
      'Raconte votre journée comme si c’était un épisode de série.',
      'Fais une petite guerre de regards complice pour 30 secondes.',
      'Dites un compliment de façon tellement exagérée que ça devient drôle.',
      'Fais un mini “documentaire” sur le canapé de votre salon.',
      'Fais comme si tu étais un chef étoilé et décris un repas très simple.',
      'Organise un “prix du plus grand sourire” pour ce soir.',
      'Réalise une petite “annonce officielle” pour une tasse de café.',
      'Fais une petite improvisation drôle en deux phrases sur la vie de couple.',
      'Dis une phrase très importante avec la plus grande gravité possible.',
      'Fais les gestes d’un personnage de film sur une action simple.'
    ],
    truths: [
      'Quelle est la chose la plus drôle que vous ayez faite ensemble sans le vouloir ?',
      'Quel moment de votre relation vous a fait éclater de rire ?',
      'Quel petit détail du quotidien vous fait toujours rire ?',
      'Quel souvenir comique vous racontez encore souvent ?',
      'Quelle anecdote embarrassante de l’autre vous fait rire ?',
      'Quel mot ou expression de votre partenaire vous fait toujours sourire ?',
      'Quel serait le titre du film de votre relation ?',
      'Quel serait votre slogan de couple le plus absurde ?',
      'Quel est le plus gros “gag” de votre quotidien ?',
      'Quel moment à deux vous a fait perdre votre sérieux ?',
      'Quel comportement de l’autre vous fait rire malgré vous ?',
      'Quelle phrase drôle vous aimez le plus chez l’autre ?',
      'Quel serait votre “super pouvoir” de couple le plus ridicule ?',
      'Quel petit détail du quotidien vous paraît hilarant ?',
      'Quel souvenir de votre première rencontre vous fait encore rire ?',
      'Quelle blague de votre partenaire vous a le plus fait rire ?',
      'Quel serait votre meilleur titre de chanson de couple ?',
      'Quelle scène de film romantique vous ferait rire en vrai ?',
      'Quel petit rituel absurde aimeriez-vous instaurer ?',
      'Quel moment ridicule de votre journée vous a surpris ?',
      'Quel mot drôle votre partenaire emploie souvent ?',
      'Quel serait le plus grand “malaise” romantique de votre vie ?',
      'Quel objet du quotidien vous fait rire en le voyant ?',
      'Quelle situation de couple vous a déjà fait vous demander “mais pourquoi ?” ?',
      'Quelle action de l’autre vous fait rire chaque fois ?',
      'Quel scénario de film de couple vous paraîtrait trop ridicule ?',
      'Quelle petite dispute de routine vous fait rire ensuite ?',
      'Quel moment de votre aventure à deux serait un excellent sketch ?',
      'Quel serait l’intrigue d’un film sur votre quotidien ?',
      'Quel détail de la vie de couple vous semble comique à la fin ?',
      'Quel moment à deux aurait besoin d’une musique de comédie ?',
      'Quelle anecdote drôle raconteriez-vous à vos amis ?',
      'Quel serait le titre du chapitre comique de votre histoire ?',
      'Quel petit “incident” de couple vous fait encore rire ?',
      'Quel moment de votre relation vous a fait croire à la folie ?',
      'Quel slogan comique de couple vous voudriez tester ?',
      'Quelle petite chose vous fait rire à chaque fois que vous la voyez ?',
      'Quel moment à deux semble sortir d’un film de comédie ?',
      'Quel serait votre “geste de couple” le plus ridicule mais adorable ?',
      'Quel petit mot incroyable vous a déjà fait rire ?',
      'Quel souvenir de vous deux aurait fait rire un public ?'
    ]
  },
  audacieux: {
    label: '🔴 Audacieux',
    labelKey: 'game.bold',
    actions: [
      'Propose à votre partenaire un baiser surprise avec un thème mystérieux.',
      'Créez un “rituel secret” à deux pour cette soirée.',
      'Faites une petite déclaration d’amour en plein milieu d’un lieu public.',
      'Organisez une mini-date en dehors de votre routine habituelle.',
      'Faites une surprise qui sort de l’ordinaire ce soir.',
      'Prenez un moment pour échanger un compliment très intime.',
      'Invitez l’autre à partager un secret dont personne ne sait rien.',
      'Faites une petite expérience de couple hors de votre zone de confort.',
      'Proposez un “murmure romantique” à l’oreille du partenaire.',
      'Prenez un moment pour vous regarder avec un regard plus intense.',
      'Faites une déclaration très sérieuse mais pleine de tendresse.',
      'Organisez une surprise de type “mystère” avec un petit détail secret.',
      'Proposez une date qui sort de l’ordinaire et qui vous fait vibrer.',
      'Offrez à l’autre un moment où les barrières tombent un peu plus.',
      'Choisissez une chanson et laissez-la vous guider pour une danse intense.',
      'Dites à votre partenaire ce que vous voudriez explorer ensemble.',
      'Proposez un moment unique et un peu osé dans un cadre différent.',
      'Faites une petite expérience audacieuse avec un thème de surprise.',
      'Partagez une envie que vous n’avez jamais osé dire à voix haute.',
      'Ayez un échange très sincère sur vos fantasmes de couple.',
      'Créer un moment de complicité où vous vous laissez porter.',
      'Faites un geste de tendresse qui sort vraiment de l’ordinaire.',
      'Invitez l’autre à un moment de confiance et de vulnérabilité.',
      'Proposez un thème de date qui vous fait sortir de la routine.',
      'Faites une surprise plus intense qu’un simple mot doux.',
      'Testez un petit rituel de couple très inattendu.',
      'Partagez une émotion profonde à voix haute sans vous cacher.',
      'Organisez un échange de mots en pleine nuit pour renforcer la connexion.',
      'Faites un geste qui marque la relation avec un peu d’audace.',
      'Proposez un moment de partage plus intime qu’à l’habitude.',
      'Offrez à votre partenaire une expérience pleine de tension et de douceur.',
      'Faites un moment de proximité plus intense que d’habitude.',
      'Choisissez un cadre original pour une petite déclaration émouvante.',
      'Proposez une surprise à laquelle l’autre ne s’attendait pas du tout.',
      'Privilégiez un échange sincère au lieu d’un simple petit mot.',
      'Faites un geste qui vous rend un peu plus vulnérables.',
      'Créez un moment qui vous fait sortir du quotidien.',
      'Proposez une expérience de couple plus osée que d’habitude.',
      'Faites une surprise qui demande un peu de courage.',
      'Choisissez un moment de la journée pour vous rapprocher davantage.',
      'Parlez franchement de ce que vous voudriez vivre ensemble.',
      'Faites un geste romantique qui demande un peu de bravoure.',
      'Créez un échange intime qui vous rapproche vraiment.',
      'Offrez un instant de confiance et de surprise à votre partenaire.',
      'Faites un “oui” plus audacieux à une idée de couple.',
      'Trouvez un moment pour dire ce que vous ressentez vraiment.',
      'Choisissez un cadre plus intense que d’habitude pour votre date.',
      'Faites un petit pas au-delà de votre confort.',
      'Proposez un moment de partage plus intime et plus sensuel.',
      'Mettez un peu de mystère dans votre prochain geste de tendresse.',
      'Créez un moment où votre relation devient plus intense.',
      'Invitez l’autre à se laisser porter par un moment audacieux.',
      'Faites une surprise plus spontanée, plus directe et plus sincère.',
      'Organisez un échange de mots et de regards plus profond.',
      'Faites un geste très doux mais très osé.',
      'Proposez une expérience qui fait battre le cœur plus fort.',
      'Choisissez un instant pour vous rapprocher vraiment sans filtre.',
      'Faites une surprise qui demande une vraie présence.',
      'Échangez un compliment qui va droit au cœur.',
      'Défiez votre timidité pour un moment de complicité.',
      'Proposez un moment de tendresse un peu plus intense.',
      'Faites une confidence qui vous rend plus ouvert.',
      'Créer un moment de couple qui sort du tout-venant.',
      'Faites un geste qui montre votre envie de vous rapprocher.',
      'Partagez une émotion qui vous tient vraiment à cœur.',
      'Donnez à l’autre une preuve d’attachement plus aventureuse.',
      'Faites une surprise qui reflète vraiment votre désir de connexion.',
      'Prenez un risque tendre pour un moment plus fort.',
      'Faites un pas de plus dans votre confiance à deux.',
      'Proposez quelque chose de plus libre et plus intime.',
      'Mettez un peu de magie dans un geste très simple.',
      'Rendez votre prochain moment à deux plus intense que d’habitude.'
    ],
    truths: [
      'Quel est le moment où vous vous êtes sentis le plus proches l’un de l’autre ?',
      'Quelle envie intime aimeriez-vous partager avec votre partenaire ?',
      'Quel sujet de conversation vous rapproche le plus profondément ?',
      'Quel geste de confiance aimeriez-vous recevoir aujourd’hui ?',
      'Quel moment de votre relation vous a fait sentir une vraie connexion ?',
      'Quelle émotion profonde aimeriez-vous faire émerger entre vous ?',
      'Quel rêve de couple vous fait vibrer ?',
      'Quel endroit vous ferait vous sentir vraiment libres à deux ?',
      'Qu’est-ce que vous aimeriez explorer ensemble de façon plus intense ?',
      'Quel type de surprise vous ferait vraiment ressentir l’amour ?',
      'Quel secret doux aimeriez-vous partager ?',
      'Quelle envie de proximité vous voulez exprimer aujourd’hui ?',
      'Quelles sensations vous voulez faire naître entre vous ?',
      'Quel moment de vulnérabilité vous aimeriez partager ?',
      'Quelle chose vous attire le plus dans l’intimité de votre relation ?',
      'Qu’est-ce qui vous rend vraiment libre avec l’autre ?',
      'Quelle profondeur de votre relation vous voulez explorer ?',
      'Quel geste vous pourrait rapprocher encore davantage ?',
      'Quelle aventure sentimentale vous inspire le plus ?',
      'Quel rêve de complicité vous avez envie de vivre ?',
      'Quelle émotion aimeriez-vous faire naître ce soir ?',
      'Quel moment de tendresse vous aimeriez revivre ?',
      'Qu’est-ce qui vous fait sentir vraiment vivant dans votre relation ?',
      'Quelle envie de connexion vous voulez exprimer aujourd’hui ?',
      'Quel passage de votre histoire vous semble le plus intense ?',
      'Quel souhait profond avez-vous pour votre couple ?',
      'Quelle profondeur aimeriez-vous donner à votre prochain moment à deux ?',
      'Quelle confession vous aimeriez faire à l’autre aujourd’hui ?',
      'Qu’est-ce que vous aimeriez transformer en souvenir marquant ?',
      'Quel sentiment de confiance voulez-vous renforcer ?',
      'Quelle aventure intérieure aimeriez-vous vivre avec l’autre ?',
      'Quel moment de complicité vous ferait progresser dans votre relation ?'
    ]
  }
};

const GAME_STORAGE_KEY = STORAGE_KEYS.gameState;
const GAME_HISTORY_LIMIT = 20;
let activeGameSpin = false;
let lastGameLoveMessageIndex = -1;
let lastGameResult = null;

function getGameState() {
  return load(GAME_STORAGE_KEY, { category: 'romantique', history: [], recent: [] });
}

function saveGameState(state) {
  save(GAME_STORAGE_KEY, state);
}

function getGamePool(category) {
  return GAME_CATEGORIES[category] || GAME_CATEGORIES.romantique;
}

function getGameCategoryLabel(category) {
  const pool = getGamePool(category);
  return window.I18n?.t(pool.labelKey) || pool.label;
}

function updateGameStatus(category, spinning = false) {
  const status = document.getElementById('gameStatus');
  if (!status) return;
  if (spinning) {
    status.textContent = window.I18n?.t('game.wheelSpinning') || 'Roulette en mouvement…';
    return;
  }

  let selectedLabel = document.getElementById('selectedCategoryLabel');
  if (!selectedLabel) {
    selectedLabel = document.createElement('span');
    selectedLabel.id = 'selectedCategoryLabel';
  }
  selectedLabel.textContent = getGameCategoryLabel(category);
  status.replaceChildren(
    document.createTextNode(`${window.I18n?.t('game.statusSelected') || 'Catégorie sélectionnée :'} `),
    selectedLabel
  );
}

function updateGameLanguage() {
  const category = document.querySelector('.category-btn.active')?.dataset.category || 'romantique';
  updateGameStatus(category, activeGameSpin);
  const spinButton = document.getElementById('spinGameBtn');
  if (spinButton && !activeGameSpin) {
    spinButton.textContent = window.I18n?.t('game.spin') || '❤️ FAIRE TOURNER';
  } else if (spinButton) {
    spinButton.textContent = window.I18n?.t('game.spinSpinning') || '✨ Roue en mouvement…';
  }

  if (!lastGameResult) return;
  document.getElementById('gameResultBadge').textContent = window.I18n?.t(
    lastGameResult.isAction ? 'game.action' : 'game.truth'
  ) || (lastGameResult.isAction ? '❤️ Action' : '💬 Vérité');
  document.getElementById('gameResultTitle').textContent = window.I18n?.t(
    lastGameResult.isAction ? 'game.actionChosen' : 'game.truthChosen'
  ) || (lastGameResult.isAction ? 'Action choisie' : 'Vérité choisie');
  document.getElementById('gameResultCategory').textContent = getGameCategoryLabel(lastGameResult.category);
  document.getElementById('gameResultLove').textContent = window.I18n?.t(
    `game.love.${lastGameResult.loveIndex}`
  ) || '';
}

function pickGameItem(category, isAction) {
  const pool = getGamePool(category);
  const state = getGameState();
  const recent = state.recent || [];
  const items = isAction ? pool.actions : pool.truths;
  const available = items.filter(item => !recent.includes(item));
  const source = available.length ? available : items;
  return source[Math.floor(Math.random() * source.length)];
}

function createConfettiBurst(container) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!container) return;

  const burst = document.createElement('div');
  burst.className = 'confetti-burst';
  const colors = ['#ff5e8a', '#ffd166', '#7ee787', '#8f7fff', '#44c4ff', '#ff7b54'];

  for (let i = 0; i < 20; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.setProperty('--confetti-color', colors[i % colors.length]);
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `${Math.random() * 20 + 10}%`;
    piece.style.setProperty('--drift', `${(Math.random() - 0.5) * 220}px`);
    piece.style.animationDelay = `${Math.random() * 0.12}s`;
    burst.appendChild(piece);
  }

  for (let i = 0; i < 10; i += 1) {
    const sparkle = document.createElement('span');
    sparkle.className = 'result-sparkle';
    sparkle.textContent = i % 2 === 0 ? '✦' : '·';
    sparkle.style.setProperty('--spark-angle', `${i * 36}deg`);
    sparkle.style.setProperty('--spark-distance', `${48 + (i % 3) * 18}px`);
    sparkle.style.animationDelay = `${i * 35}ms`;
    burst.appendChild(sparkle);
  }

  container.appendChild(burst);
  setTimeout(() => burst.remove(), 1400);
}

function getGameLoveMessage() {
  const available = Array.from({ length: 12 }, (_, index) => index + 1)
    .filter(index => index !== lastGameLoveMessageIndex);
  lastGameLoveMessageIndex = available[Math.floor(Math.random() * available.length)] || 1;
  return window.I18n?.t(`game.love.${lastGameLoveMessageIndex}`) || '';
}

function createWheelSparkles(wrapper) {
  const layer = document.createElement('div');
  layer.className = 'wheel-sparkles';
  layer.setAttribute('aria-hidden', 'true');

  for (let i = 0; i < 14; i += 1) {
    const sparkle = document.createElement('span');
    sparkle.className = 'wheel-sparkle';
    sparkle.textContent = i % 3 === 0 ? '✦' : '·';
    sparkle.style.setProperty('--spark-angle', `${Math.random() * 360}deg`);
    sparkle.style.setProperty('--spark-distance', `${42 + Math.random() * 52}px`);
    sparkle.style.animationDelay = `${Math.random() * 180}ms`;
    layer.appendChild(sparkle);
  }

  wrapper.appendChild(layer);
  window.setTimeout(() => layer.remove(), 1300);
}

function spinWheel(category, direction = 1) {
  if (activeGameSpin) return;
  const wheel = document.getElementById('gameWheel');
  const wrapper = document.getElementById('wheelWrapper');
  const resultDialog = document.getElementById('gameResultDialog');
  const resultCard = document.getElementById('gameResultCard');
  const resultBadge = document.getElementById('gameResultBadge');
  const resultTitle = document.getElementById('gameResultTitle');
  const resultLove = document.getElementById('gameResultLove');
  const resultText = document.getElementById('gameResultText');
  const resultCategory = document.getElementById('gameResultCategory');
  const spinButton = document.getElementById('spinGameBtn');
  const categoryButtons = document.querySelectorAll('.category-btn');
  if (!wheel || !wrapper || !resultDialog || !resultCard || !spinButton) return;

  const state = getGameState();
  const isAction = Math.random() > 0.5;
  const chosen = pickGameItem(category, isAction);
  const segmentIndexes = isAction ? [0, 2, 4, 6] : [1, 3, 5, 7];
  const targetSegment = segmentIndexes[Math.floor(Math.random() * segmentIndexes.length)];
  const segmentCenter = targetSegment * 45 + 22.5;
  const desiredRotation = (360 - segmentCenter + 360) % 360;
  const baseRotation = parseFloat(wheel.dataset.rotation || '0');
  const normalizedBase = ((baseRotation % 360) + 360) % 360;
  const spinDirection = direction < 0 ? -1 : 1;
  const alignmentDelta = spinDirection > 0
    ? (desiredRotation - normalizedBase + 360) % 360
    : -((normalizedBase - desiredRotation + 360) % 360);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const spinTurns = reducedMotion ? 1 : 4 + Math.floor(Math.random() * 3);
  const spinDuration = reducedMotion ? 240 : 3300 + (spinTurns - 4) * 180;
  const targetRotation = baseRotation + spinDirection * spinTurns * 360 + alignmentDelta;

  activeGameSpin = true;
  resultCard.classList.remove('show');
  resultCard.hidden = true;
  let completionTimer;
  const finishSpin = () => {
    window.clearTimeout(completionTimer);
    wheel.removeEventListener('transitionend', onWheelTransitionEnd);

    const recent = state.recent || [];
    const updatedRecent = [chosen, ...recent].slice(0, GAME_HISTORY_LIMIT);
    state.recent = updatedRecent;
    saveGameState(state);

    wrapper.classList.remove('is-spinning');
    wheel.classList.remove('is-spinning');

    const loveMessage = getGameLoveMessage();
    lastGameResult = { isAction, category, loveIndex: lastGameLoveMessageIndex };
    resultBadge.textContent = window.I18n?.t(isAction ? 'game.action' : 'game.truth') || (isAction ? '❤️ Action' : '💬 Vérité');
    resultTitle.textContent = window.I18n?.t(isAction ? 'game.actionChosen' : 'game.truthChosen') || (isAction ? 'Action choisie' : 'Vérité choisie');
    if (resultLove) resultLove.textContent = loveMessage;
    resultText.removeAttribute('data-i18n');
    resultText.textContent = chosen;
    resultCategory.textContent = getGameCategoryLabel(category);
    updateGameStatus(category);
    resultCard.hidden = false;
    resultCard.classList.add('show');
    createConfettiBurst(resultDialog);
    resultDialog.showModal();
    activeGameSpin = false;
    categoryButtons.forEach(button => { button.disabled = false; });
    spinButton.disabled = false;
    spinButton.textContent = window.I18n?.t('game.spin') || '❤️ FAIRE TOURNER';
  };
  const onWheelTransitionEnd = event => {
    if (event.target === wheel && event.propertyName === 'transform') finishSpin();
  };
  wheel.addEventListener('transitionend', onWheelTransitionEnd);
  wheel.dataset.rotation = String(targetRotation);
  wheel.style.setProperty('--wheel-spin-duration', `${spinDuration}ms`);
  wheel.style.transform = `rotate(${targetRotation}deg)`;
  wrapper.classList.add('is-spinning');
  wheel.classList.add('is-spinning');
  categoryButtons.forEach(button => { button.disabled = true; });
  updateGameStatus(category, true);
  spinButton.disabled = true;
  spinButton.textContent = window.I18n?.t('game.spinSpinning') || '✨ Roue en mouvement…';
  createWheelSparkles(wrapper);
  if (!reducedMotion) {
    window.setTimeout(() => {
      if (activeGameSpin) createWheelSparkles(wrapper);
    }, Math.round(spinDuration * 0.62));
  }

  completionTimer = window.setTimeout(finishSpin, spinDuration + 1000);
}

function renderGameHistory() {
  const list = document.getElementById('gameHistoryList');
  if (!list) return;

  const state = getGameState();
  const items = (state.recent || []).slice(0, GAME_HISTORY_LIMIT);
  list.replaceChildren(...items.map(item => {
    const entry = document.createElement('li');
    entry.textContent = item;
    return entry;
  }));
}

function initGame() {
  const categoryButtons = document.querySelectorAll('.category-btn');
  const spinButton = document.getElementById('spinGameBtn');
  const resultDialog = document.getElementById('gameResultDialog');
  const resultCard = document.getElementById('gameResultCard');
  const closeResult = () => resultDialog.close();
  const wheel = document.getElementById('gameWheel');
  const wrapper = document.getElementById('wheelWrapper');
  let currentCategory = 'romantique';
  let dragState = null;

  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      updateGameStatus(currentCategory);
    });
  });

  spinButton.addEventListener('click', () => {
    spinWheel(currentCategory);
  });

  document.getElementById('gameResultClose').addEventListener('click', closeResult);
  document.getElementById('gameResultCloseAction').addEventListener('click', closeResult);
  document.getElementById('gameResultReplay').addEventListener('click', () => {
    closeResult();
    spinWheel(currentCategory);
  });
  window.addEventListener('carnet:languagechange', updateGameLanguage);
  updateGameLanguage();
  resultDialog.addEventListener('click', event => {
    if (event.target === resultDialog) closeResult();
  });
  resultDialog.addEventListener('close', () => {
    resultCard.hidden = true;
    resultCard.classList.remove('show');
  });

  wheel.addEventListener('pointerdown', event => {
    if (activeGameSpin || (event.pointerType === 'mouse' && event.button !== 0)) return;
    if (event.target.closest('.wheel-center')) return;
    const bounds = wheel.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const startAngle = Math.atan2(event.clientY - centerY, event.clientX - centerX) * 180 / Math.PI;
    const startRadius = Math.hypot(event.clientX - centerX, event.clientY - centerY);
    const diameter = wheel.offsetWidth;
    if (startRadius < diameter * 0.24 || startRadius > diameter * 0.52) return;

    dragState = {
      pointerId: event.pointerId,
      centerX,
      centerY,
      lastAngle: startAngle,
      lastX: event.clientX,
      lastY: event.clientY,
      delta: 0,
      distance: 0,
      startRadius,
      maxRadiusDeviation: 0
    };
    wheel.setPointerCapture(event.pointerId);
    event.preventDefault();
  });

  wheel.addEventListener('pointermove', event => {
    if (!dragState || dragState.pointerId !== event.pointerId) return;
    const angle = Math.atan2(event.clientY - dragState.centerY, event.clientX - dragState.centerX) * 180 / Math.PI;
    let delta = angle - dragState.lastAngle;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    dragState.delta += delta;
    dragState.lastAngle = angle;
    dragState.distance += Math.hypot(event.clientX - dragState.lastX, event.clientY - dragState.lastY);
    const radius = Math.hypot(event.clientX - dragState.centerX, event.clientY - dragState.centerY);
    dragState.maxRadiusDeviation = Math.max(dragState.maxRadiusDeviation, Math.abs(radius - dragState.startRadius));
    dragState.lastX = event.clientX;
    dragState.lastY = event.clientY;
  });

  const endWheelDrag = event => {
    if (!dragState || dragState.pointerId !== event.pointerId) return;
    const { delta, distance, maxRadiusDeviation } = dragState;
    dragState = null;
    if (Math.abs(delta) >= 42 && distance >= 40 && maxRadiusDeviation <= wheel.offsetWidth * 0.12) {
      spinWheel(currentCategory, Math.sign(delta));
    } else if (distance <= 8) {
      spinWheel(currentCategory);
    }
  };
  wheel.addEventListener('pointerup', endWheelDrag);
  wheel.addEventListener('pointercancel', event => {
    if (dragState?.pointerId === event.pointerId) dragState = null;
  });
}

const CHALLENGES = [
  { icon: '💌', text: 'Écrivez une lettre d\'amour à votre moitié et glissez-la dans sa poche.' },
  { icon: '🍳', text: 'Préparez le petit-déjeuner au lit pour surprendre votre partenaire.' },
  { icon: '🌅', text: 'Levez-vous tôt pour regarder le lever du soleil ensemble.' },
  { icon: '🎵', text: 'Créez une playlist de chansons qui racontent votre histoire.' },
  { icon: '📸', text: 'Prenez une photo créative et amusante à deux.' },
  { icon: '🍽️', text: 'Cuisinez un repas spécial ensemble, mains dans la main.' },
  { icon: '💃', text: 'Organisez une soirée danse dans le salon, juste tous les deux.' },
  { icon: '🌹', text: 'Offrez une fleur ou un petit geste attentionné sans raison particulière.' },
  { icon: '🎬', text: 'Regardez le film de votre premier rendez-vous ou un classique romantique.' },
  { icon: '📝', text: 'Listez 10 choses que vous aimez chez l\'autre et partagez-les ce soir.' },
  { icon: '🚶', text: 'Faites une promenade main dans la main dans un endroit que vous n\'avez jamais exploré.' },
  { icon: '🎁', text: 'Préparez une petite surprise cachée que votre partenaire découvrira dans la journée.' },
  { icon: '☕', text: 'Prenez un café ou un thé ensemble, loin des écrans, en parlant de vos rêves.' },
  { icon: '🌙', text: 'Contemplez les étoiles ensemble et faites un vœu pour votre couple.' },
  { icon: '🎨', text: 'Peignez ou dessinez quelque chose l\'un pour l\'autre.' },
  { icon: '💬', text: 'Racontez votre version de votre première rencontre — comparez les souvenirs !' },
  { icon: '🧁', text: 'Faites des gâteaux ou des cookies ensemble et décorez-les avec amour.' },
  { icon: '📱', text: 'Envoyez un message vocal tendre à votre moitié en pleine journée.' },
  { icon: '🛁', text: 'Préparez un bain relaxant avec des bougies et de la musique douce.' },
  { icon: '✨', text: 'Planifiez ensemble votre prochaine escapade romantique, même symbolique.' }
];

const DEFAULT_SETTINGS = {
  firstName1: 'Marie',
  firstName2: 'Thomas',
  nickname1: '',
  nickname2: '',
  showNicknames: false,
  coupleQuote: '« L\'amour ne consiste pas à se regarder l\'un l\'autre, mais à regarder ensemble dans la même direction. »',
  startDate: '2023-06-14',
  couplePhoto: 'assets/images/couple.svg',
  photo1: 'assets/images/couple.svg',
  photo2: 'assets/images/couple.svg',
  theme: 'dark'
};

const MESSAGE_HEADER_STORAGE_KEY = 'carnet_message_header';
const PAIRING_STORAGE_KEY = 'carnet_pairing_state';
const MESSAGE_BACKGROUND_LEGACY_ID = 'conversation-background';
const MESSAGE_SETTINGS_MIGRATED_KEY = 'carnet_message_settings_migrated';

let currentLightboxId = null;
let lightboxZoom = 1;
let lightboxRotation = 0;
let lightboxSlideshowTimer = null;
let lightboxSlideshowPaused = false;
let lightboxCloseTimer = null;
let galleryLongPressTimer = null;
let galleryLongPressStart = null;
let suppressGalleryClickUntil = 0;
let galleryContextPhotoId = null;
let lightboxReturnFocus = null;
let deferredPrompt = null;
let settingsPhotoDataUrl1 = null;
let settingsPhotoDataUrl2 = null;
let onboardingPhotoDataUrl = null;
let mediaDb = null;
let messageBackgroundDb = null;
let messageBackgroundDbPromise = null;
let messageBackgroundObjectUrl = null;
let hasStoredMessageBackground = false;
let pendingMessageBackgroundFile = null;
let previewMessageBackgroundUrl = null;
let messageBackgroundLoadId = 0;
let messageBackgroundSelectionId = 0;
let messageBackgroundSaving = false;
let profilePhotoDialogInitialized = false;
let profilePhotoTargets = new Map();
let activeProfilePhotoTarget = null;
let profilePhotoEditorImage = null;
let profilePhotoEditorObjectUrl = null;
let profilePhotoEditorLoadId = 0;
let profilePhotoPickerReturnsToViewer = false;
let profilePhotoEditorReturnsToViewer = false;
let profilePhotoViewerZoom = 1;
let profilePhotoEditorState = { zoom: 1, rotation: 0, offsetX: 0, offsetY: 0, shape: 'circle' };
let profilePhotoDragState = null;
const PROFILE_PHOTO_PREVIEW_SIZE = 720;
let playlistTracks = [];
let currentTrackIndex = -1;
let currentAudio = null;
let currentAudioObjectUrl = null;
let artworkCacheTrackId = null;
let artworkCacheBlob = null;
let artworkCachePromise = null;
let playerArtworkDb = null;
let playerArtworkDbPromise = null;
let customPlayerArtworkBlob = null;
let customPlayerArtworkObjectUrl = null;
let customPlayerArtworkObjectUrlBlob = null;
let playerArtworkPreviewObjectUrl = null;
let customVinylCenterArtworkBlob = null;
let customVinylCenterArtworkObjectUrl = null;
let customVinylCenterArtworkObjectUrlBlob = null;
let vinylCenterArtworkPreviewObjectUrl = null;
let immersiveArtworkRequestId = 0;
let vinylRotationAnimation = null;
let vinylDecelerationFrame = null;
let vinylDecelerationToken = 0;
const MEDIA_SETTINGS_STORAGE_KEY = 'carnet_media_preferences';
const MEDIA_SETTINGS_DEFAULTS = {
  animations: true,
  glass: true,
  density: 'comfortable',
  photoLayout: 'grid',
  photoSize: 'medium',
  photoEffect: 'zoom',
  showFavorites: true,
  autoNext: true,
  shuffle: false,
  repeat: 'all',
  playerStyle: 'signature',
  recordAnimation: true,
  lockScreen: true,
  visualizer: true,
  playlistOrder: 'added',
  slideshowEnabled: false,
  slideshowInterval: '3',
  customSlideshowSeconds: 5,
  favoriteTrackIds: []
};

/* ===== Storage Helpers ===== */

function load(key, fallback) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function generatePairingCode() {
  const prefix = 'CARNET';
  const suffix = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `${prefix}-${suffix}`;
}

function openMediaDatabase() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('IndexedDB non pris en charge par ce navigateur.'));
      return;
    }

    const request = indexedDB.open('carnet-media-db', 1);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('audios')) {
        db.createObjectStore('audios', { keyPath: 'id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function openPlayerArtworkDatabase() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('IndexedDB non pris en charge par ce navigateur.'));
      return;
    }

    const request = indexedDB.open('carnet-player-artwork-db', 1);
    request.onupgradeneeded = event => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('artworks')) {
        db.createObjectStore('artworks', { keyPath: 'id' });
      }
    };
    request.onsuccess = () => {
      playerArtworkDb = request.result;
      playerArtworkDb.onversionchange = () => {
        playerArtworkDb.close();
        playerArtworkDb = null;
      };
      resolve(playerArtworkDb);
    };
    request.onerror = () => reject(request.error);
  });
}

async function getPlayerArtworkDatabase() {
  if (playerArtworkDb) return playerArtworkDb;
  if (!playerArtworkDbPromise) {
    playerArtworkDbPromise = openPlayerArtworkDatabase().finally(() => {
      playerArtworkDbPromise = null;
    });
  }
  return playerArtworkDbPromise;
}

function getPlayerArtworkRecordId() {
  return getMediaPreferencesStorageKey();
}

async function savePlayerArtwork(blob) {
  const db = await getPlayerArtworkDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('artworks', 'readwrite');
    tx.objectStore('artworks').put({
      id: getPlayerArtworkRecordId(),
      blob: blob.slice(0, blob.size, blob.type || 'application/octet-stream'),
      type: blob.type || 'image/*',
      updatedAt: Date.now()
    });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error || new Error('Échec de l’enregistrement de la photo du lecteur.'));
  });
}

async function getPlayerArtwork() {
  const db = await getPlayerArtworkDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('artworks', 'readonly');
    const request = tx.objectStore('artworks').get(getPlayerArtworkRecordId());
    request.onsuccess = () => resolve(request.result?.blob instanceof Blob ? request.result.blob : null);
    request.onerror = () => reject(request.error);
  });
}

async function deletePlayerArtwork() {
  const db = await getPlayerArtworkDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('artworks', 'readwrite');
    tx.objectStore('artworks').delete(getPlayerArtworkRecordId());
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error || new Error('Échec de la suppression de la photo du lecteur.'));
  });
}

function getVinylCenterArtworkRecordId() {
  return `${getMediaPreferencesStorageKey()}:vinyl-center`;
}

async function saveVinylCenterArtwork(blob) {
  const db = await getPlayerArtworkDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('artworks', 'readwrite');
    tx.objectStore('artworks').put({
      id: getVinylCenterArtworkRecordId(),
      blob: blob.slice(0, blob.size, blob.type || 'application/octet-stream'),
      type: blob.type || 'image/*',
      updatedAt: Date.now()
    });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error || new Error('Échec de l’enregistrement de la photo du disque.'));
  });
}

async function getVinylCenterArtwork() {
  const db = await getPlayerArtworkDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('artworks', 'readonly');
    const request = tx.objectStore('artworks').get(getVinylCenterArtworkRecordId());
    request.onsuccess = () => resolve(request.result?.blob instanceof Blob ? request.result.blob : null);
    request.onerror = () => reject(request.error);
  });
}

async function deleteVinylCenterArtwork() {
  const db = await getPlayerArtworkDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('artworks', 'readwrite');
    tx.objectStore('artworks').delete(getVinylCenterArtworkRecordId());
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error || new Error('Échec de la suppression de la photo du disque.'));
  });
}

async function getMediaDatabase() {
  if (mediaDb) return mediaDb;
  mediaDb = await openMediaDatabase();
  return mediaDb;
}

function getSupportedAudioFile(file) {
  const name = (file.name || '').toLowerCase();
  const type = (file.type || '').toLowerCase();
  const allowed = ['.mp3', '.wav', '.ogg', '.m4a'];
  return allowed.some(ext => name.endsWith(ext)) || ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/mp4'].includes(type);
}

async function saveAudioRecord(record) {
  const db = await getMediaDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('audios', 'readwrite');
    const store = tx.objectStore('audios');
    const request = store.put(record);
    request.onsuccess = () => resolve(record);
    request.onerror = () => reject(request.error);
  });
}

async function getStoredAudios() {
  const db = await getMediaDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('audios', 'readonly');
    const store = tx.objectStore('audios');
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

async function deleteAudioRecord(id) {
  const db = await getMediaDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('audios', 'readwrite');
    const store = tx.objectStore('audios');
    const request = store.delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

function openMessageBackgroundDatabase() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('IndexedDB non pris en charge par ce navigateur.'));
      return;
    }
    const request = indexedDB.open('carnet-message-background-db', 1);
    request.onupgradeneeded = event => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('backgrounds')) {
        db.createObjectStore('backgrounds', { keyPath: 'id' });
      }
    };
    request.onsuccess = () => {
      messageBackgroundDb = request.result;
      messageBackgroundDb.onversionchange = () => {
        messageBackgroundDb.close();
        messageBackgroundDb = null;
      };
      resolve(messageBackgroundDb);
    };
    request.onerror = () => reject(request.error);
  });
}

async function getMessageBackgroundDatabase() {
  if (messageBackgroundDb) return messageBackgroundDb;
  if (!messageBackgroundDbPromise) {
    messageBackgroundDbPromise = openMessageBackgroundDatabase().finally(() => {
      messageBackgroundDbPromise = null;
    });
  }
  return messageBackgroundDbPromise;
}

async function saveMessageBackgroundImage(file, selectionId, recordId) {
  let persistentStorageGranted = false;
  if (navigator.storage?.persist) {
    try {
      persistentStorageGranted = await navigator.storage.persist();
      if (!persistentStorageGranted) {
        console.warn('Le navigateur n’a pas accordé le stockage persistant; le fond reste enregistré localement.');
      }
    } catch (error) {
      console.warn('Impossible de demander le stockage persistant pour le fond de discussion.', error);
    }
  }

  if (selectionId !== messageBackgroundSelectionId) {
    return { saved: false, persistentStorageGranted, recordId };
  }

  const db = await getMessageBackgroundDatabase();
  if (selectionId !== messageBackgroundSelectionId) {
    return { saved: false, persistentStorageGranted, recordId };
  }

  return new Promise((resolve, reject) => {
    const tx = db.transaction('backgrounds', 'readwrite');
    tx.objectStore('backgrounds').put({
      id: recordId,
      blob: file.slice(0, file.size, file.type || 'application/octet-stream'),
      name: file.name || 'background-image',
      type: file.type || 'image/*',
      updatedAt: Date.now()
    });
    tx.oncomplete = () => resolve({ saved: true, persistentStorageGranted, recordId });
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error || new Error('Échec de l’enregistrement de l’image.'));
  });
}

async function getMessageBackgroundImage() {
  const recordId = getMessageBackgroundRecordId();
  const db = await getMessageBackgroundDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('backgrounds', 'readwrite');
    const store = tx.objectStore('backgrounds');
    let record = null;
    const request = store.get(recordId);
    request.onsuccess = () => {
      if (request.result) {
        record = request.result;
        return;
      }

      const legacyRequest = store.get(MESSAGE_BACKGROUND_LEGACY_ID);
      legacyRequest.onsuccess = () => {
        if (!legacyRequest.result) return;
        record = { ...legacyRequest.result, id: recordId };
        store.put(record);
        store.delete(MESSAGE_BACKGROUND_LEGACY_ID);
      };
      legacyRequest.onerror = () => reject(legacyRequest.error);
    };
    request.onerror = () => reject(request.error);
    tx.oncomplete = () => resolve(record);
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error || new Error('Échec du chargement de l’image de fond.'));
  });
}

async function deleteMessageBackgroundImage() {
  const recordId = getMessageBackgroundRecordId();
  const db = await getMessageBackgroundDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('backgrounds', 'readwrite');
    tx.objectStore('backgrounds').delete(recordId);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error || new Error('Échec de la suppression de l’image.'));
  });
}

function getMessageBackgroundRecordId() {
  const myCode = getPairingState().myCode.trim().toUpperCase();
  return `${MESSAGE_BACKGROUND_LEGACY_ID}:${myCode}`;
}

function formatMediaTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '00:00';
  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

/* ===== Toast ===== */

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ===== Messages / Dates / Goals / Places ===== */

let activeReplyMessageId = null;
let activeEditMessageId = null;
let messageTypingTimer = null;
let activeMessageView = 'all';
let activeMessageMediaType = null;
let isSendingMessage = false;
const MESSAGE_SETTINGS_DEFAULTS = {
  background: 'sunset',
  backgroundMode: 'preset',
  bubbleColor: 'rose',
  bubbleStyle: 'soft',
  theme: DEFAULT_SETTINGS.theme,
  textSize: 16,
  reactionSet: 'classic',
  showTimes: true
};
const MESSAGE_REACTION_SETS = {
  classic: ['❤️', '😂', '😍', '👍'],
  romantic: ['❤️', '🥰', '😘', '💕'],
  playful: ['😂', '🤭', '😜', '✨']
};

function getMessageSettings() {
  const storageKey = getMessageSettingsStorageKey();
  let stored = load(storageKey, null);
  if (stored === null) {
    const legacy = load(STORAGE_KEYS.messageSettings || 'carnet_message_settings', null);
    if (legacy && typeof legacy === 'object' && !Array.isArray(legacy)) {
      stored = legacy;
      localStorage.removeItem(STORAGE_KEYS.messageSettings || 'carnet_message_settings');
    } else if (!load(MESSAGE_SETTINGS_MIGRATED_KEY, false)) {
      stored = { ...MESSAGE_SETTINGS_DEFAULTS, theme: getSettings().theme || DEFAULT_SETTINGS.theme };
    }
    if (stored) save(storageKey, stored);
    save(MESSAGE_SETTINGS_MIGRATED_KEY, true);
  }
  if (!load(MESSAGE_SETTINGS_MIGRATED_KEY, false)) {
    save(MESSAGE_SETTINGS_MIGRATED_KEY, true);
  }
  return {
    ...MESSAGE_SETTINGS_DEFAULTS,
    ...(stored && typeof stored === 'object' ? stored : {})
  };
}

function getMessageSettingsStorageKey() {
  const myCode = getPairingState().myCode.trim().toUpperCase();
  return `${STORAGE_KEYS.messageSettings}:${myCode}`;
}

function saveMessageSettings(settings) {
  const next = { ...getMessageSettings(), ...settings };
  save(getMessageSettingsStorageKey(), next);
  applyMessageSettings();
  return next;
}

function getMessageHeaderState() {
  const stored = load(MESSAGE_HEADER_STORAGE_KEY, {});
  const settings = getSettings();
  return {
    photo1: stored.photo1 || settings.photo1 || settings.couplePhoto || DEFAULT_SETTINGS.photo1,
    photo2: stored.photo2 || settings.photo2 || settings.couplePhoto || DEFAULT_SETTINGS.photo2,
    firstName1: settings.firstName1 || stored.firstName1 || DEFAULT_SETTINGS.firstName1,
    firstName2: settings.firstName2 || stored.firstName2 || DEFAULT_SETTINGS.firstName2,
    nickname1: settings.nickname1 || stored.nickname1 || '',
    nickname2: settings.nickname2 || stored.nickname2 || '',
    showNicknames: typeof settings.showNicknames === 'boolean' ? settings.showNicknames : !!stored.showNicknames
  };
}

function saveMessageHeaderState(partial = {}) {
  const current = getMessageHeaderState();
  const next = { ...current, ...partial };
  save(MESSAGE_HEADER_STORAGE_KEY, next);
  return next;
}

function updateMessageHeader() {
  const title = document.getElementById('messagesCoupleNames');
  const subtitle = document.getElementById('messagesStatusText');
  const avatarPrimary = document.getElementById('messageAvatarPrimary');
  const avatarSecondary = document.getElementById('messageAvatarSecondary');
  const partnerName = document.getElementById('messagesPartnerName');
  const partnerAvatar = document.getElementById('messagePartnerAvatar');
  const settings = getSettings();
  const state = getMessageHeaderState();
  const firstName1 = settings.firstName1 || state.firstName1 || DEFAULT_SETTINGS.firstName1;
  const firstName2 = settings.firstName2 || state.firstName2 || DEFAULT_SETTINGS.firstName2;
  const nickname1 = settings.nickname1 || state.nickname1 || '';
  const nickname2 = settings.nickname2 || state.nickname2 || '';
  const displayPartnerName = settings.showNicknames && nickname2 ? nickname2 : firstName2;

  if (title) {
    if (settings.showNicknames && (nickname1 || nickname2)) {
      title.textContent = `${nickname1 || firstName1} & ${nickname2 || firstName2}`;
    } else {
      title.textContent = `${firstName1} & ${firstName2}`;
    }
  }

  if (subtitle) {
    const onlineLabel = window.I18n?.t('chat.online') || 'en ligne';
    const detail = nickname2
      ? `${nickname2} • ${onlineLabel}`
      : window.I18n?.t('chat.onlineReady') || 'En ligne • prêt à s’écrire';
    subtitle.textContent = detail;
  }

  if (avatarPrimary) {
    avatarPrimary.src = state.photo1 || settings.photo1 || settings.couplePhoto || DEFAULT_SETTINGS.photo1;
  }

  if (avatarSecondary) {
    avatarSecondary.src = state.photo2 || settings.photo2 || settings.couplePhoto || DEFAULT_SETTINGS.photo2;
  }

  if (partnerName) {
    partnerName.textContent = displayPartnerName;
  }

  if (partnerAvatar) {
    partnerAvatar.src = state.photo2 || settings.photo2 || settings.couplePhoto || DEFAULT_SETTINGS.photo2;
  }

  saveMessageHeaderState({
    firstName1,
    firstName2,
    nickname1,
    nickname2,
    showNicknames: !!settings.showNicknames
  });
}

function getPairingState() {
  const stored = load(PAIRING_STORAGE_KEY, {});
  const baseState = {
    myCode: stored.myCode || generatePairingCode(),
    linked: !!stored.linked,
    partnerCode: stored.partnerCode || '',
    linkedAt: stored.linkedAt || null
  };

  if (!stored.myCode || stored.myCode !== baseState.myCode) {
    save(PAIRING_STORAGE_KEY, baseState);
  }

  return baseState;
}

function savePairingState(partial = {}) {
  const current = getPairingState();
  const next = { ...current, ...partial };
  save(PAIRING_STORAGE_KEY, next);
  return next;
}

function updateMessagesPairingUI() {
  const state = getPairingState();
  const pairingBlock = document.getElementById('messagesPairingBlock');
  const pairingStatus = document.getElementById('pairingStatus');
  const pairingJoinSection = document.getElementById('pairingJoinSection');
  const pairingCodeDisplay = document.getElementById('pairingCodeDisplay');
  const pairingGate = document.getElementById('messagesPairingGate');
  const thread = document.getElementById('modernMessagesList');
  const composer = document.getElementById('messageComposer');
  const sendButton = document.getElementById('messageSendBtn');
  const searchInput = document.getElementById('messageSearch');
  const videoCallButton = document.getElementById('messageVideoCallBtn');
  const inviteButton = document.getElementById('invitePartnerBtn');
  const joinTriggerButton = document.getElementById('joinPartnerTriggerBtn');
  const joinSubmitButton = document.getElementById('joinPartnerSubmitBtn');
  const partnerCodeInput = document.getElementById('partnerCodeInput');
  const isLinked = !!state.linked;

  if (pairingStatus) {
    pairingStatus.textContent = isLinked
      ? (window.I18n?.t('chat.linkedStatus') || '✅ Compte lié à {code} — la messagerie est prête.')
        .replace('{code}', state.partnerCode || 'votre partenaire')
      : window.I18n?.t('chat.pairingGate') || 'Vous devez d\'abord inviter ou rejoindre votre partenaire pour utiliser les messages.';
  }

  if (pairingJoinSection) {
    pairingJoinSection.hidden = isLinked;
  }

  if (pairingCodeDisplay) {
    pairingCodeDisplay.hidden = isLinked;
    if (!isLinked) {
      const invitationLabel = window.I18n?.t('chat.invitationCode') || 'Code d’invitation';
      pairingCodeDisplay.innerHTML = `<strong>${escapeHtml(invitationLabel)}</strong><div>${escapeHtml(state.myCode)}</div>`;
    }
  }

  if (pairingGate) {
    pairingGate.hidden = true;
  }

  if (pairingBlock) {
    pairingBlock.hidden = isLinked;
  }

  if (thread) {
    thread.hidden = !isLinked;
  }

  if (composer) {
    composer.disabled = false;
    composer.placeholder = activeEditMessageId ? composer.placeholder : 'Message';
  }

  if (sendButton) {
    sendButton.disabled = false;
  }

  if (searchInput) {
    searchInput.disabled = !isLinked;
  }

  if (videoCallButton) {
    videoCallButton.disabled = !isLinked;
    videoCallButton.title = isLinked ? 'Appel vidéo' : 'Liez votre compte pour activer l’appel vidéo';
  }

  if (inviteButton) {
    inviteButton.disabled = isLinked;
  }

  if (joinTriggerButton) {
    joinTriggerButton.disabled = isLinked;
  }

  if (joinSubmitButton && partnerCodeInput) {
    joinSubmitButton.disabled = isLinked;
  }
}

function applyMessageSettings() {
  const thread = document.getElementById('modernMessagesList');
  const settings = getMessageSettings();

  if (thread) {
    thread.dataset.background = settings.background;
    thread.dataset.bubbleColor = settings.bubbleColor;
    thread.dataset.bubbleStyle = settings.bubbleStyle;
    thread.dataset.textSize = String(settings.textSize);
    thread.dataset.showTimes = String(settings.showTimes);
    thread.style.setProperty('--message-text-size', `${settings.textSize}px`);
    const shell = thread.closest('.messages-v2-shell');
    if (shell) shell.dataset.background = settings.background;
    applyMessageBackgroundToThread(settings);
  }

  document.querySelectorAll('.message-quick-reaction').forEach((button, index) => {
    const reactions = MESSAGE_REACTION_SETS[settings.reactionSet] || MESSAGE_REACTION_SETS.classic;
    button.dataset.emoji = reactions[index] || reactions[0];
    button.textContent = button.dataset.emoji;
    button.setAttribute('aria-label', `Insérer ${button.dataset.emoji}`);
  });

  const themeMode = ['dark', 'light', 'auto'].includes(settings.theme) ? settings.theme : DEFAULT_SETTINGS.theme;
  applyTheme(themeMode, false, false);
  updateMessageSettingsControls(settings);
  updateMessageSettingsSummary();
}

function setMessageThreadBackgroundImage(url) {
  const shell = document.querySelector('#messages .messages-v2-shell');
  if (!shell) return;
  shell.classList.toggle('has-custom-background', !!url);
  shell.style.backgroundImage = url ? `url("${url}")` : '';
  if (url) {
    shell.style.backgroundSize = 'cover';
    shell.style.backgroundPosition = 'center';
    shell.style.backgroundRepeat = 'no-repeat';
  } else {
    shell.style.removeProperty('background-size');
    shell.style.removeProperty('background-position');
    shell.style.removeProperty('background-repeat');
  }
}

async function applyMessageBackgroundToThread(settings = getMessageSettings()) {
  const requestId = ++messageBackgroundLoadId;
  if (previewMessageBackgroundUrl) {
    setMessageThreadBackgroundImage(previewMessageBackgroundUrl);
    return;
  }
  if (settings.backgroundMode !== 'image') {
    setMessageThreadBackgroundImage('');
    return;
  }
  if (messageBackgroundObjectUrl) {
    setMessageThreadBackgroundImage(messageBackgroundObjectUrl);
    return;
  }

  setMessageThreadBackgroundImage('');
  try {
    const record = await getMessageBackgroundImage();
    if (requestId !== messageBackgroundLoadId || getMessageSettings().backgroundMode !== 'image') return;
    hasStoredMessageBackground = !!record?.blob;
    if (!record?.blob) {
      updateMessageBackgroundControls();
      return;
    }
    messageBackgroundObjectUrl = URL.createObjectURL(record.blob);
    setMessageThreadBackgroundImage(messageBackgroundObjectUrl);
    updateMessageBackgroundControls();
  } catch (error) {
    console.warn('Impossible de charger le fond personnel; le fond prédéfini reste actif.', error);
  }
}

async function loadStoredMessageBackgroundState() {
  if (getMessageSettings().backgroundMode === 'image') return applyMessageBackgroundToThread();
  try {
    const record = await getMessageBackgroundImage();
    hasStoredMessageBackground = !!record?.blob;
    updateMessageBackgroundControls();
  } catch (error) {
    console.warn('Impossible de vérifier le fond personnel enregistré.', error);
  }
}

function applyMessageBackground() {
  applyMessageSettings();
}

function updateMessageSettingsControls(settings = getMessageSettings()) {
  const controls = {
    conversationThemeSelect: settings.theme,
    messageBubbleColorSelect: settings.bubbleColor,
    messageBubbleStyleSelect: settings.bubbleStyle,
    messageTextSize: String(settings.textSize),
    messageReactionSet: settings.reactionSet
  };
  Object.entries(controls).forEach(([id, value]) => {
    const control = document.getElementById(id);
    if (control) control.value = value;
  });
  const timeToggle = document.getElementById('messageTimeToggle');
  if (timeToggle) timeToggle.checked = !!settings.showTimes;
  const sizeValue = document.getElementById('messageTextSizeValue');
  if (sizeValue) sizeValue.textContent = `${settings.textSize} px`;
  document.querySelectorAll('[data-message-background]').forEach(button => {
    const selected = settings.backgroundMode !== 'image' && button.dataset.messageBackground === settings.background;
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  updateMessageBackgroundControls(settings);
}

function updateMessageBackgroundControls(settings = getMessageSettings()) {
  const preview = document.getElementById('conversationBackgroundPreview');
  const previewImage = document.getElementById('conversationBackgroundPreviewImage');
  const previewLabel = document.getElementById('conversationBackgroundPreviewLabel');
  const chooseButton = document.getElementById('chooseConversationBackground');
  const applyButton = document.getElementById('applyConversationBackground');
  const cancelButton = document.getElementById('cancelConversationBackground');
  const removeButton = document.getElementById('removeConversationBackground');
  const previewUrl = previewMessageBackgroundUrl || ((settings.backgroundMode === 'image') ? messageBackgroundObjectUrl : null);
  const hasPendingImage = !!pendingMessageBackgroundFile && !!previewMessageBackgroundUrl;
  const hasSavedImage = settings.backgroundMode === 'image' && hasStoredMessageBackground;

  if (preview) preview.hidden = !previewUrl;
  if (previewImage && previewUrl && previewImage.src !== previewUrl) previewImage.src = previewUrl;
  if (previewLabel) {
    previewLabel.textContent = messageBackgroundSaving
      ? window.I18n?.t('chat.backgroundSaving') || 'Enregistrement de votre image…'
      : window.I18n?.t('chat.backgroundPreview') || 'Votre fond personnel';
  }
  if (chooseButton) chooseButton.textContent = window.I18n?.t(hasSavedImage ? 'chat.backgroundReplace' : 'chat.backgroundChoose')
    || (hasSavedImage ? '🖼️ Remplacer mon image' : '🖼️ Choisir dans ma galerie');
  if (applyButton) applyButton.hidden = !hasPendingImage;
  if (cancelButton) cancelButton.hidden = !hasPendingImage;
  if (removeButton) removeButton.hidden = !hasStoredMessageBackground && !hasPendingImage;
}

function getSettingsConversationMessages() {
  const state = window.MessageModule?.getState?.();
  return state?.ready ? window.MessageModule.getMessages() : [];
}

function updateMessageSettingsSummary() {
  const messages = getSettingsConversationMessages().filter(message => !message.deletedForEveryone && !message.deletedForMe);
  const counts = {
    settingsFavoriteCount: messages.filter(message => message.favorite).length,
    settingsPinnedCount: messages.filter(message => message.pinned).length,
    settingsPhotoCount: messages.filter(message => message.type === 'image').length,
    settingsSharedPhotoCount: messages.filter(message => message.type === 'image').length,
    settingsFileCount: messages.filter(message => ['document', 'music', 'voice'].includes(message.type)).length,
    settingsVideoCount: messages.filter(message => message.type === 'video').length,
    settingsLinkCount: messages.filter(message => /https?:\/\//i.test(message.text || '')).length,
    settingsMessageCount: messages.length
  };
  Object.entries(counts).forEach(([id, count]) => {
    const target = document.getElementById(id);
    if (target) target.textContent = window.I18n?.formatNumber(count) || String(count);
  });

  const createdDate = document.getElementById('settingsConversationDate');
  if (createdDate) createdDate.textContent = window.I18n?.t('chat.dateUnavailable') || 'Date indisponible';
}

async function removeMessageBackgroundFromSettings() {
  messageBackgroundSelectionId += 1;
  messageBackgroundSaving = false;
  try {
    await deleteMessageBackgroundImage();
    if (previewMessageBackgroundUrl) URL.revokeObjectURL(previewMessageBackgroundUrl);
    if (messageBackgroundObjectUrl) URL.revokeObjectURL(messageBackgroundObjectUrl);
    previewMessageBackgroundUrl = null;
    messageBackgroundObjectUrl = null;
    pendingMessageBackgroundFile = null;
    hasStoredMessageBackground = false;
    saveMessageSettings({ backgroundMode: 'preset' });
    updateMessageBackgroundControls();
    showToast(window.I18n?.t('chat.backgroundDeleted') || 'Votre image de fond a été supprimée.');
    return true;
  } catch (error) {
    console.error('Échec de la suppression du fond personnel.', error);
    showToast(window.I18n?.t('chat.backgroundDeleteFailed') || 'Impossible de supprimer cette image.');
    return false;
  }
}

window.removeMessageBackgroundFromSettings = removeMessageBackgroundFromSettings;

function initMessageSettingsPanel() {
  const details = document.querySelector('.messages-settings-menu');
  if (!details) return;

  const tabs = Array.from(details.querySelectorAll('[data-settings-tab]'));
  const panels = Array.from(details.querySelectorAll('[data-settings-panel]'));
  const search = document.getElementById('settingsConversationSearch');
  const legacySearch = document.getElementById('messageSearch');
  const closeButton = document.getElementById('messagesSettingsClose');
  const summary = details.querySelector(':scope > summary');
  const panel = details.querySelector('.messages-settings-panel');
  const chatHeader = details.closest('.messages-chat-header');
  const chatIdentity = chatHeader?.querySelector('.messages-chat-identity');
  let closeTimer = null;

  const closePanel = (returnFocus = false) => {
    if (!details.open) return;
    panel?.classList.add('is-closing');
    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(() => {
      details.open = false;
      panel?.classList.remove('is-closing');
      if (returnFocus) summary?.focus();
    }, 160);
  };

  const openPanel = () => {
    if (details.open) return;
    details.open = true;
    updateMessageSettingsSummary();
  };

  chatHeader?.addEventListener('click', event => {
    if (event.target.closest('.messages-chat-avatar, .messages-settings-menu, button, a, input, select, textarea')) return;
    if (!details.open) openPanel();
  });
  chatIdentity?.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    openPanel();
  });

  const activateTab = (tab, focus = false) => {
    const category = tab.dataset.settingsTab;
    tabs.forEach(item => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
    });
    panels.forEach(panel => {
      const active = panel.dataset.settingsPanel === category;
      panel.hidden = !active;
      panel.classList.toggle('is-active', active);
    });
    if (focus) tab.focus();
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', event => {
      const directions = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
      if (!directions[event.key]) return;
      event.preventDefault();
      const nextIndex = (index + directions[event.key] + tabs.length) % tabs.length;
      activateTab(tabs[nextIndex], true);
    });
  });
  if (tabs[0]) activateTab(tabs[0]);

  summary?.addEventListener('click', event => {
    if (!details.open) return;
    event.preventDefault();
    closePanel();
  });
  closeButton?.addEventListener('click', () => closePanel(true));
  details.addEventListener('toggle', () => {
    if (details.open && !panel?.classList.contains('is-closing')) updateMessageSettingsSummary();
  });
  document.addEventListener('pointerdown', event => {
    if (details.open && !details.contains(event.target)) closePanel();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && details.open) {
      closePanel(true);
    }
  });

  const bindSelect = (id, setting) => {
    document.getElementById(id)?.addEventListener('change', event => {
      saveMessageSettings({ [setting]: event.target.value });
    });
  };
  details.querySelectorAll('[data-message-background]').forEach(button => {
    button.addEventListener('click', () => {
      messageBackgroundSelectionId += 1;
      messageBackgroundSaving = false;
      if (previewMessageBackgroundUrl) URL.revokeObjectURL(previewMessageBackgroundUrl);
      previewMessageBackgroundUrl = null;
      pendingMessageBackgroundFile = null;
      saveMessageSettings({ background: button.dataset.messageBackground, backgroundMode: 'preset' });
    });
  });

  const backgroundInput = document.getElementById('conversationBackgroundInput');
  const chooseBackgroundButton = document.getElementById('chooseConversationBackground');
  const removeBackgroundButton = document.getElementById('removeConversationBackground');
  chooseBackgroundButton?.addEventListener('click', () => backgroundInput?.click());
  backgroundInput?.addEventListener('change', async () => {
    const file = backgroundInput.files?.[0];
    backgroundInput.value = '';
    if (!file) return;
    const looksLikeImage = (file.type || '').startsWith('image/') || /\.(avif|gif|jpe?g|png|webp)$/i.test(file.name);
    if (!looksLikeImage) {
      showToast(window.I18n?.t('chat.backgroundInvalid') || 'Choisissez un fichier image valide.');
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      showToast(window.I18n?.t('chat.backgroundTooLarge') || 'Cette image dépasse la limite de 20 Mo.');
      return;
    }
    const selectionId = ++messageBackgroundSelectionId;
    const recordId = getMessageBackgroundRecordId();
    if (previewMessageBackgroundUrl) URL.revokeObjectURL(previewMessageBackgroundUrl);
    pendingMessageBackgroundFile = null;
    previewMessageBackgroundUrl = URL.createObjectURL(file);
    messageBackgroundSaving = true;
    setMessageThreadBackgroundImage(previewMessageBackgroundUrl);
    updateMessageBackgroundControls();
    try {
      const saveResult = await saveMessageBackgroundImage(file, selectionId, recordId);
      if (selectionId !== messageBackgroundSelectionId || !saveResult.saved) return;
      if (recordId !== getMessageBackgroundRecordId()) {
        throw new Error('Le profil a changé pendant l’enregistrement de l’image.');
      }
      if (messageBackgroundObjectUrl && messageBackgroundObjectUrl !== previewMessageBackgroundUrl) {
        URL.revokeObjectURL(messageBackgroundObjectUrl);
      }
      messageBackgroundObjectUrl = previewMessageBackgroundUrl;
      previewMessageBackgroundUrl = null;
      hasStoredMessageBackground = true;
      messageBackgroundSaving = false;
      saveMessageSettings({ backgroundMode: 'image' });
      updateMessageBackgroundControls();
      showToast(saveResult.persistentStorageGranted
        ? window.I18n?.t('chat.backgroundSavedPersistent') || 'Votre fond personnel est enregistré durablement sur cet appareil.'
        : window.I18n?.t('chat.backgroundSavedLocal') || 'Votre fond est enregistré localement, mais le navigateur ne garantit pas sa conservation.');
    } catch (error) {
      if (selectionId !== messageBackgroundSelectionId) return;
      console.error('Échec de l’enregistrement du fond personnel.', error);
      if (previewMessageBackgroundUrl) URL.revokeObjectURL(previewMessageBackgroundUrl);
      previewMessageBackgroundUrl = null;
      pendingMessageBackgroundFile = null;
      messageBackgroundSaving = false;
      applyMessageSettings();
      updateMessageBackgroundControls();
      showToast(window.I18n?.t('chat.backgroundSaveFailed') || 'Impossible d’enregistrer cette image sur cet appareil.');
    }
  });
  removeBackgroundButton?.addEventListener('click', removeMessageBackgroundFromSettings);
  loadStoredMessageBackgroundState();

  bindSelect('messageBubbleColorSelect', 'bubbleColor');
  bindSelect('messageBubbleStyleSelect', 'bubbleStyle');
  bindSelect('messageReactionSet', 'reactionSet');
  document.getElementById('conversationThemeSelect')?.addEventListener('change', event => {
    saveSettings({ theme: event.target.value });
    saveMessageSettings({ theme: event.target.value });
  });
  document.getElementById('messageTextSize')?.addEventListener('input', event => {
    saveMessageSettings({ textSize: Number(event.target.value) });
  });
  document.getElementById('messageTimeToggle')?.addEventListener('change', event => {
    saveMessageSettings({ showTimes: event.target.checked });
  });
  document.getElementById('restoreMessageAppearance')?.addEventListener('click', () => {
    saveSettings({ theme: DEFAULT_SETTINGS.theme });
    saveMessageSettings({ ...MESSAGE_SETTINGS_DEFAULTS, theme: DEFAULT_SETTINGS.theme });
    showToast(window.I18n?.t('chat.appearanceRestored') || 'Apparence de la conversation restaurée.');
  });

  search?.addEventListener('input', () => {
    if (legacySearch) legacySearch.value = search.value;
    activeMessageView = 'all';
    activeMessageMediaType = null;
    renderMessages(search.value);
  });
  details.querySelectorAll('[data-message-filter]').forEach(button => {
    button.addEventListener('click', () => {
      activeMessageView = button.dataset.messageFilter;
      activeMessageMediaType = null;
      if (search) search.value = '';
      if (legacySearch) legacySearch.value = '';
      document.querySelectorAll('.message-filter-chip').forEach(item => {
        item.classList.toggle('active', item.dataset.view === activeMessageView);
      });
      renderMessages();
      closePanel();
    });
  });
  details.querySelectorAll('[data-media-filter]').forEach(button => {
    button.addEventListener('click', () => {
      if (button.disabled) return;
      activeMessageView = 'all';
      activeMessageMediaType = button.dataset.mediaFilter === 'document' ? 'file' : button.dataset.mediaFilter;
      if (search) search.value = '';
      if (legacySearch) legacySearch.value = '';
      renderMessages();
      closePanel();
    });
  });

  document.getElementById('exportConversationBtn')?.addEventListener('click', () => {
    const state = window.MessageModule?.getState?.();
    if (!state?.ready || !state.conversationCode) {
      showToast(window.I18n?.t('chat.notLoaded') || 'La conversation n’est pas encore chargée.');
      return;
    }
    const payload = {
      exportedAt: new Date().toISOString(),
      messages: getSettingsConversationMessages().filter(message => !message.deletedForEveryone && !message.deletedForMe)
    };
    const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `notre-carnet-conversation-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  });

  applyMessageSettings();
}

function normalizeMessage(message, index = 0) {
  if (!message || typeof message !== 'object') {
    return {
      id: generateId(),
      sender: 'me',
      text: '',
      type: 'text',
      createdAt: Date.now() + index,
      time: '',
      status: 'read',
      reactions: {},
      pinned: false,
      favorite: false,
      edited: false,
      replyTo: null,
      deletedForMe: false,
      deletedForEveryone: false,
      metadata: null,
      author: 'Vous'
    };
  }

  const createdAt = message.createdAt || message.date || Date.now() + index;
  const sender = message.sender || (message.author === 'Vous' ? 'me' : 'partner');
  return {
    id: message.id || generateId(),
    sender,
    text: message.text || message.title || '',
    type: message.type || 'text',
    createdAt,
    time: message.time || new Date(createdAt).toLocaleTimeString(window.I18n?.getLocale() || 'fr-FR', { hour: '2-digit', minute: '2-digit' }),
    status: message.status || (sender === 'me' ? 'read' : 'sent'),
    reactions: message.reactions || {},
    pinned: !!message.pinned,
    favorite: !!message.favorite,
    edited: !!message.edited,
    replyTo: message.replyTo || null,
    deletedForMe: !!message.deletedForMe,
    deletedForEveryone: !!message.deletedForEveryone,
    metadata: message.metadata || null,
    author: message.author || (sender === 'me' ? 'Vous' : 'Votre moitié')
  };
}

function getMessages() {
  if (window.MessageModule && typeof window.MessageModule.getMessages === 'function') {
    return window.MessageModule.getMessages();
  }
  return [];
}

function saveMessages(messages) {
  const normalized = messages.map((message, index) => normalizeMessage(message, index));
  renderMessages();
  renderTimeline();
  updateStats();
}

function getMessageDisplayName(sender) {
  const settings = getSettings();
  return sender === 'me' ? (settings.firstName1 || 'Vous') : (settings.firstName2 || 'Votre moitié');
}

function getMessageContentMarkup(message, allMessages) {
  if (message.type === 'image' && message.metadata?.src) {
    return `<div class="message-attachment"><img src="${message.metadata.src}" alt="Photo envoyée"></div>`;
  }

  if (message.type === 'music' && message.metadata?.name) {
    return `<div class="message-attachment">🎵 <strong>${escapeHtml(message.metadata.name)}</strong></div>`;
  }

  if (message.type === 'document' && message.metadata?.name) {
    return `<div class="message-attachment">📄 <strong>${escapeHtml(message.metadata.name)}</strong></div>`;
  }

  if (message.type === 'voice' && message.metadata?.name) {
    return `<div class="message-attachment">🎤 <strong>${escapeHtml(message.metadata.name)}</strong></div>`;
  }

  const replyMarkup = message.replyTo ? (() => {
    const replied = allMessages.find(item => item.id === message.replyTo);
    return replied ? `<div class="reply-preview">↩ ${escapeHtml(replied.text || 'Pièce jointe')}</div>` : '';
  })() : '';

  return `${replyMarkup}<div>${escapeHtml(message.text || 'Message')}</div>`;
}

function renderMessages(filter = '', sortValue = 'date_desc', preserveScroll = false) {
  const messages = getMessages();
  const list = document.getElementById('modernMessagesList');
  const empty = document.getElementById('modernMessagesEmpty');
  const previousScrollTop = preserveScroll ? list?.scrollTop : null;
  const search = document.getElementById('messageSearch');
  const searchValue = (filter || search?.value || '').toLowerCase();
  const typing = document.getElementById('typingIndicator');
  const thread = document.getElementById('modernMessagesList');
  const settings = getMessageSettings();

  if (thread) {
    thread.setAttribute('data-background', settings.background || 'sunset');
    const shell = thread.closest('.messages-v2-shell');
    if (shell) shell.dataset.background = settings.background || 'sunset';
  }

  const visible = messages
    .filter(message => {
      if (message.deletedForEveryone) return false;
      if (message.deletedForMe && message.sender === 'me') return false;
      if (activeMessageView === 'favorites' && !message.favorite) return false;
      if (activeMessageView === 'pinned' && !message.pinned) return false;
      if (activeMessageMediaType === 'file' && !['document', 'music', 'voice'].includes(message.type)) return false;
      if (activeMessageMediaType && activeMessageMediaType !== 'file' && message.type !== activeMessageMediaType) return false;
      if (!searchValue) return true;
      const haystack = `${message.text || ''} ${message.metadata?.name || ''} ${message.author || ''}`.toLowerCase();
      return haystack.includes(searchValue);
    })
    .sort((a, b) => {
      return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
    });

  if (!list) return;
  list.innerHTML = '';

  if (visible.length === 0) {
    empty.hidden = false;
    if (typing) typing.hidden = true;
    return;
  }

  empty.hidden = true;

  let previousDate = '';
  visible.forEach(message => {
    const messageDate = new Date(message.createdAt || Date.now());
    const dateKey = `${messageDate.getFullYear()}-${messageDate.getMonth()}-${messageDate.getDate()}`;
    if (dateKey !== previousDate) {
      const separator = document.createElement('div');
      separator.className = 'message-date-separator';
      separator.textContent = messageDate.toLocaleDateString(window.I18n?.getLocale() || 'fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      list.appendChild(separator);
      previousDate = dateKey;
    }

    const bubble = document.createElement('article');
    bubble.className = `message-bubble ${message.sender === 'me' ? 'message-bubble--mine' : 'message-bubble--their'}${message.pinned ? ' is-pinned' : ''}${message.favorite ? ' is-favorite' : ''}`;
    bubble.dataset.messageId = message.id;
    const reactions = Object.entries(message.reactions || {})
      .map(([emoji, count]) => `<button class="message-reaction-chip" type="button" data-action="react" data-reaction="${emoji}" data-message-id="${message.id}">${emoji} ${count}</button>`)
      .join('');
    const attachmentMarkup = getMessageContentMarkup(message, messages);
    const readStatus = message.sender !== 'me'
      ? ''
      : message.status === 'read'
        ? '<span aria-label="Lu">✓✓</span>'
        : message.status === 'delivered'
          ? '<span aria-label="Distribué">✓</span>'
          : '<span aria-label="En attente">◷</span>';
    bubble.innerHTML = `
      <div class="message-bubble-header">
        <span>${message.edited ? 'Modifié' : ''}</span>
        <details class="message-more-actions">
          <summary aria-label="Actions du message" title="Actions">•••</summary>
          <div class="message-bubble-actions">
            <button class="message-action-btn" type="button" data-action="reply" data-message-id="${message.id}">↩ Répondre</button>
            <button class="message-action-btn" type="button" data-action="edit" data-message-id="${message.id}">✏️ Modifier</button>
            <button class="message-action-btn" type="button" data-action="pin" data-message-id="${message.id}">${message.pinned ? '📌 Désépingler' : '📍 Épingler'}</button>
            <button class="message-action-btn" type="button" data-action="favorite" data-message-id="${message.id}">${message.favorite ? '⭐ Retirer des favoris' : '☆ Ajouter aux favoris'}</button>
            <button class="message-action-btn" type="button" data-action="delete-for-me" data-message-id="${message.id}">🗑️ Supprimer</button>
            <div class="message-action-reactions" aria-label="Réagir au message">
              ${['❤️', '😂', '😍', '👍'].map(emoji => `<button class="message-reaction-chip" type="button" data-action="react" data-reaction="${emoji}" data-message-id="${message.id}" aria-label="Réagir ${emoji}">${emoji}</button>`).join('')}
            </div>
          </div>
        </details>
      </div>
      <div class="message-bubble-content">${attachmentMarkup}</div>
      <div class="message-reactions">${reactions}</div>
      <div class="message-bubble-footer">
        <span>${readStatus}</span>
        <span>${escapeHtml(message.time || '')}</span>
      </div>
    `;
    list.appendChild(bubble);
  });

  list.scrollTop = preserveScroll ? previousScrollTop : list.scrollHeight;
}

function updateComposerState() {
  const preview = document.getElementById('replyPreview');
  const composer = document.getElementById('messageComposer');
  if (!preview) return;

  if (activeReplyMessageId) {
    const target = getMessages().find(message => message.id === activeReplyMessageId);
    preview.hidden = false;
    preview.innerHTML = `↩ Réponse à <strong>${escapeHtml(target?.text || 'ce message')}</strong>`;
  } else {
    preview.hidden = true;
    preview.innerHTML = '';
  }

  if (composer && activeEditMessageId) {
    const target = getMessages().find(message => message.id === activeEditMessageId);
    composer.placeholder = `Modifier : ${target?.text || 'votre message'}`;
  } else if (composer) {
    composer.placeholder = 'Message';
  }

  if (composer) resizeMessageComposer(composer);
}

function resizeMessageComposer(composer) {
  composer.style.height = 'auto';
  composer.style.height = `${Math.min(composer.scrollHeight, 140)}px`;
}

function setTypingIndicator(active, label = 'Thomas est en train d\'écrire...') {
  const typing = document.getElementById('typingIndicator');
  const typingText = document.getElementById('typingText');
  if (!typing) return;
  if (typingText) typingText.textContent = label;
  typing.hidden = !active;
}

function createMessagePayload(text, type = 'text', metadata = null, replyId = null) {
  return {
    id: generateId(),
    sender: 'me',
    text: text || '',
    type,
    createdAt: Date.now(),
    time: new Date().toLocaleTimeString(window.I18n?.getLocale() || 'fr-FR', { hour: '2-digit', minute: '2-digit' }),
    status: 'read',
    reactions: {},
    pinned: false,
    favorite: false,
    edited: false,
    replyTo: replyId,
    deletedForMe: false,
    deletedForEveryone: false,
    metadata,
    author: 'Vous'
  };
}

async function handleMessageAction(action, messageId, reaction = null) {
  const messages = getMessages();
  const target = messages.find(message => message.id === messageId);
  if (!target) return;

  if (action === 'reply') {
    activeReplyMessageId = messageId;
    updateComposerState();
    showToast(window.I18n?.t('chat.replyPrepared') || 'Réponse préparée ✨');
    return;
  }

  if (action === 'edit') {
    if (target.sender !== 'me') {
      showToast(window.I18n?.t('chat.ownMessageEditOnly') || 'Seuls vos messages peuvent être modifiés');
      return;
    }
    activeEditMessageId = messageId;
    const composer = document.getElementById('messageComposer');
    if (composer) {
      composer.value = target.text || '';
      composer.focus();
    }
    updateComposerState();
    showToast(window.I18n?.t('chat.editingEnabled') || 'Édition activée');
    return;
  }

  if (action === 'copy') {
    const text = target.text || target.metadata?.name || '';
    if (text) {
      navigator.clipboard?.writeText(text).catch(() => {});
      showToast(window.I18n?.t('chat.messageCopied') || 'Message copié');
    }
    return;
  }

  if (action === 'pin') {
    const next = { pinned: !target.pinned };
    if (window.MessageModule && window.MessageModule.getState && window.MessageModule.getState().ready) {
      await window.MessageModule.updateMessage(messageId, next);
    } else {
      target.pinned = !target.pinned;
      saveMessages(messages);
    }
    showToast(window.I18n?.t(next.pinned ? 'chat.messagePinned' : 'chat.messageUnpinned'));
    return;
  }

  if (action === 'favorite') {
    const next = { favorite: !target.favorite };
    if (window.MessageModule && window.MessageModule.getState && window.MessageModule.getState().ready) {
      await window.MessageModule.updateMessage(messageId, next);
    } else {
      target.favorite = !target.favorite;
      saveMessages(messages);
    }
    showToast(window.I18n?.t(next.favorite ? 'chat.addedToFavorites' : 'chat.removedFromFavorites'));
    return;
  }

  if (action === 'react') {
    const selectedReaction = reaction || '❤️';
    if (window.MessageModule && window.MessageModule.getState && window.MessageModule.getState().ready) {
      await window.MessageModule.addReaction(messageId, selectedReaction);
    } else {
      target.reactions[selectedReaction] = (target.reactions[selectedReaction] || 0) + 1;
      saveMessages(messages);
    }
    showToast(`Réaction ${selectedReaction} ajoutée`);
    return;
  }

  if (action === 'delete-for-me') {
    if (window.MessageModule && window.MessageModule.getState && window.MessageModule.getState().ready) {
      await window.MessageModule.deleteMessage(messageId, false);
    } else {
      target.deletedForMe = true;
      saveMessages(messages);
    }
    showToast(window.I18n?.t('chat.deletedForYou') || 'Supprimé pour vous');
    return;
  }

  if (action === 'delete-for-everyone') {
    if (window.MessageModule && window.MessageModule.getState && window.MessageModule.getState().ready) {
      await window.MessageModule.deleteMessage(messageId, true);
    } else {
      target.deletedForEveryone = true;
      saveMessages(messages);
    }
    showToast(window.I18n?.t('chat.deletedForEveryone') || 'Supprimé pour tout le monde');
  }
}

function triggerMessageHeartBurst() {
  const burst = document.getElementById('messageHeartBurst');
  if (!burst) return;
  const hearts = ['💗', '💖', '💕'];
  burst.innerHTML = '';
  hearts.forEach((emoji, index) => {
    const heart = document.createElement('span');
    heart.textContent = emoji;
    heart.style.left = `${12 + index * 10}px`;
    heart.style.top = `${-6 + index * 6}px`;
    burst.appendChild(heart);
  });
  setTimeout(() => { burst.innerHTML = ''; }, 900);
}

async function sendTextMessage(text) {
  const trimmed = text.trim();
  if (!trimmed || isSendingMessage) return;

  const composer = document.getElementById('messageComposer');
  const pairing = getPairingState();
  if (!pairing.linked) {
    showToast(window.I18n?.t('chat.linkPartnerToSend') || 'Liez votre compte à votre partenaire pour envoyer des messages.');
    return;
  }

  const messageModuleReady = window.MessageModule
    && window.MessageModule.getState
    && window.MessageModule.getState().ready;
  if (!messageModuleReady || !window.supabaseClient) {
    showToast(window.I18n?.t('chat.connectionSendError') || 'La messagerie n’est pas connectée. Votre message n’a pas été envoyé.');
    return;
  }

  isSendingMessage = true;
  const sendButton = document.getElementById('messageSendBtn');
  if (sendButton) sendButton.disabled = true;
  if (activeEditMessageId) {
    const messages = getMessages();
    const target = messages.find(message => message.id === activeEditMessageId);
    if (!target) {
      isSendingMessage = false;
      if (sendButton) sendButton.disabled = false;
      showToast(window.I18n?.t('chat.messageUnavailable') || 'Ce message n’est plus disponible.');
      return;
    }

    try {
      const updated = await window.MessageModule.updateMessage(activeEditMessageId, {
        text: trimmed,
        edited: true,
        time: new Date().toLocaleTimeString(window.I18n?.getLocale() || 'fr-FR', { hour: '2-digit', minute: '2-digit' })
      });
      if (!updated) throw new Error('Message update failed');
      activeEditMessageId = null;
      showToast(window.I18n?.t('chat.messageEdited') || 'Message modifié ✨');
    } finally {
      isSendingMessage = false;
      if (sendButton) sendButton.disabled = false;
    }
  } else {
    try {
      await window.MessageModule.sendTextMessage(trimmed, activeReplyMessageId);
      showToast(window.I18n?.t('chat.messageSent') || 'Message envoyé ✨');
    } finally {
      isSendingMessage = false;
      if (sendButton) sendButton.disabled = false;
    }
  }

  triggerMessageHeartBurst();
  activeReplyMessageId = null;
  if (composer) {
    composer.value = '';
    resizeMessageComposer(composer);
  }
  updateComposerState();
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

async function attachMedia(type, inputId, fallbackText) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.click();
  input.onchange = async () => {
    const file = input.files?.[0];
    if (!file) return;
    const messages = getMessages();
    let metadata = null;
    let messageText = fallbackText;

    if (type === 'photo') {
      const src = await readFileAsDataUrl(file);
      metadata = { src, name: file.name, mimeType: file.type };
      messageText = '📷 Photo envoyée';
    } else if (type === 'music') {
      const src = await readFileAsDataUrl(file);
      metadata = { src, name: file.name, mimeType: file.type };
      messageText = '🎵 Musique envoyée';
    } else if (type === 'document') {
      metadata = { name: file.name, mimeType: file.type };
      messageText = '📄 Document envoyé';
    } else if (type === 'voice') {
      const src = await readFileAsDataUrl(file);
      metadata = { src, name: file.name, mimeType: file.type };
      messageText = '🎤 Note vocale envoyée';
    }

    messages.push(createMessagePayload(messageText, type, metadata, activeReplyMessageId));
    saveMessages(messages);
    showToast(window.I18n?.t('chat.attachmentSent') || 'Pièce jointe envoyée');
    activeReplyMessageId = null;
    updateComposerState();
  };
}

function ensureDefaultMessages(messages) {
  if (messages.length > 0) return messages;
  const initialMessages = [
    createMessagePayload('Bonjour mon cœur 💕', 'text', null, null),
    createMessagePayload('Je pensais à toi et à notre histoire.', 'text', null, null),
    createMessagePayload('On a déjà tant de beaux moments à partager.', 'text', null, null)
  ];
  initialMessages[0].sender = 'partner';
  initialMessages[0].author = 'Votre moitié';
  initialMessages[0].status = 'delivered';
  initialMessages[1].sender = 'me';
  initialMessages[1].author = 'Vous';
  initialMessages[2].sender = 'partner';
  initialMessages[2].author = 'Votre moitié';
  initialMessages[2].status = 'delivered';
  return initialMessages;
}

async function deleteTimelineItem(id, type) {
  if (!window.confirm(window.I18n?.t('timeline.deleteConfirm') || 'Supprimer cet élément de la chronologie ?')) return;

  if (type === 'Souvenir') {
    const memories = getMemories().filter(memory => memory.id !== id);
    saveMemories(memories);
  } else if (type === 'Message') {
    if (window.MessageModule && window.MessageModule.getState && window.MessageModule.getState().ready) {
      await window.MessageModule.deleteMessage(id, true);
    } else {
      const messages = getMessages().filter(message => message.id !== id);
      saveMessages(messages);
    }
  } else if (type === 'Événement') {
    const dates = getDates().filter(entry => entry.id !== id);
    saveDates(dates);
  }

  showToast(window.I18n?.t('timeline.deleted') || '✅ Événement supprimé.');
}

function getDates() {
  return load(STORAGE_KEYS.dates, []);
}

function saveDates(dates) {
  save(STORAGE_KEYS.dates, dates);
  renderDates();
  renderTimeline();
  updateStats();
}

function renderDates() {
  const dates = getDates();
  const list = document.getElementById('datesList');
  const empty = document.getElementById('datesEmpty');

  list.innerHTML = '';

  if (dates.length === 0) {
    empty.hidden = false;
    return;
  }

  empty.hidden = true;

  dates
    .slice()
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .forEach(entry => {
      const card = document.createElement('div');
      card.className = 'memory-card';
      card.innerHTML = `
        <span class="memory-mood">📅</span>
        <div class="memory-content">
          <div class="memory-title">${escapeHtml(entry.title)}</div>
          <div class="memory-date">${formatDate(entry.date)}</div>
        </div>
        <div class="memory-actions">
          <button data-action="delete-date" data-id="${entry.id}" title="${window.I18n?.t('gallery.delete') || 'Supprimer'}">🗑️</button>
        </div>
      `;
      list.appendChild(card);
    });

  list.querySelectorAll('[data-action="delete-date"]').forEach(btn => {
    btn.addEventListener('click', () => deleteDate(btn.dataset.id));
  });
}

function addDateEntry() {
  const title = window.prompt(window.I18n?.t('dates.titlePrompt') || 'Nom de l’événement', '');
  if (title === null) return;
  const date = window.prompt(window.I18n?.t('dates.datePrompt') || 'Date (AAAA-MM-JJ)', new Date().toISOString().split('T')[0]);
  if (date === null) return;
  if (!title.trim() || !date.trim()) return;

  const dates = getDates();
  dates.push({ id: generateId(), title: title.trim(), date: date.trim() });
  saveDates(dates);
  showToast(window.I18n?.t('dates.added') || 'Événement ajouté 📅');
}

function deleteDate(id) {
  if (!window.confirm(window.I18n?.t('dates.deleteConfirm') || 'Supprimer cet événement ?')) return;
  const dates = getDates().filter(entry => entry.id !== id);
  saveDates(dates);
  showToast(window.I18n?.t('dates.deleted') || 'Événement supprimé');
}

function getGoals() {
  return load(STORAGE_KEYS.goals, []);
}

function saveGoals(goals) {
  save(STORAGE_KEYS.goals, goals);
  renderGoals();
  updateStats();
}

function renderGoals() {
  const goals = getGoals();
  const list = document.getElementById('goalsList');
  const completedEl = document.getElementById('goalsCompleted');
  const totalEl = document.getElementById('goalsTotal');
  const progressEl = document.getElementById('goalsProgress');

  if (!list) return;

  const completed = goals.filter(goal => goal.completed).length;
  const total = goals.length;
  completedEl.textContent = completed;
  totalEl.textContent = total;
  progressEl.style.width = total ? `${(completed / total) * 100}%` : '0%';

  list.innerHTML = '';

  if (goals.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = `<span class="empty-icon">🎯</span><p>${window.I18n?.t('goals.empty') || 'Aucun objectif pour l’instant'}</p><p class="empty-sub">${window.I18n?.t('goals.emptyHelp') || 'Ajoutez vos rêves de couple.'}</p>`;
    list.appendChild(empty);
    return;
  }

  goals.forEach(goal => {
    const item = document.createElement('div');
    item.className = 'memory-card';
    item.innerHTML = `
      <span class="memory-mood">${goal.completed ? '✅' : '🎯'}</span>
      <div class="memory-content">
        <div class="memory-title">${escapeHtml(goal.title)}</div>
      </div>
      <div class="memory-actions">
        <button data-action="toggle-goal" data-id="${goal.id}" title="${window.I18n?.t('goals.markDone') || 'Marquer comme fait'}">✓</button>
        <button data-action="delete-goal" data-id="${goal.id}" title="${window.I18n?.t('gallery.delete') || 'Supprimer'}">🗑️</button>
      </div>
    `;
    list.appendChild(item);
  });

  list.querySelectorAll('[data-action="toggle-goal"]').forEach(btn => {
    btn.addEventListener('click', () => toggleGoal(btn.dataset.id));
  });

  list.querySelectorAll('[data-action="delete-goal"]').forEach(btn => {
    btn.addEventListener('click', () => deleteGoal(btn.dataset.id));
  });
}

function addGoal() {
  const title = window.prompt(window.I18n?.t('goals.newPrompt') || 'Nouvel objectif', '');
  if (title === null) return;
  const value = title.trim();
  if (!value) return;

  const goals = getGoals();
  goals.push({ id: generateId(), title: value, completed: false });
  saveGoals(goals);
  showToast(window.I18n?.t('goals.added') || 'Objectif ajouté 🎯');
}

function toggleGoal(id) {
  const goals = getGoals().map(goal => goal.id === id ? { ...goal, completed: !goal.completed } : goal);
  saveGoals(goals);
}

function deleteGoal(id) {
  if (!window.confirm(window.I18n?.t('goals.deleteConfirm') || 'Supprimer cet objectif ?')) return;
  const goals = getGoals().filter(goal => goal.id !== id);
  saveGoals(goals);
  showToast(window.I18n?.t('goals.deleted') || 'Objectif supprimé');
}

function getPlaces() {
  return load(STORAGE_KEYS.places, []);
}

function savePlaces(places) {
  save(STORAGE_KEYS.places, places);
  renderPlaces();
}

function renderPlaces() {
  const container = document.getElementById('mapContainer');
  const places = getPlaces();
  if (!container) return;

  if (places.length === 0) {
    container.innerHTML = `<div class="empty-state"><span class="empty-icon">🗺️</span><p>${window.I18n?.t('places.empty') || 'Aucun lieu enregistré'}</p><p class="empty-sub">${window.I18n?.t('places.emptyHelp') || 'Ajoutez vos endroits préférés.'}</p></div>`;
    return;
  }

  container.innerHTML = '';
  const list = document.createElement('div');
  list.className = 'dates-grid';
  places.forEach(place => {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.innerHTML = `
      <span class="memory-mood">📍</span>
      <div class="memory-content">
        <div class="memory-title">${escapeHtml(place.name)}</div>
        <div class="memory-date">${escapeHtml(place.note || window.I18n?.t('places.defaultName') || 'Lieu')}</div>
      </div>
    `;
    list.appendChild(card);
  });
  container.appendChild(list);
}

function addPlace() {
  const name = window.prompt(window.I18n?.t('places.namePrompt') || 'Nom du lieu', '');
  if (name === null) return;
  const note = window.prompt(window.I18n?.t('places.notePrompt') || 'Note ou souvenir associé', '');
  if (note === null) return;
  const places = getPlaces();
  places.push({ id: generateId(), name: name.trim() || window.I18n?.t('places.defaultName') || 'Lieu', note: note.trim() || '' });
  savePlaces(places);
  showToast(window.I18n?.t('places.added') || 'Lieu ajouté 📍');
}

function renderTimeline() {
  const list = document.getElementById('timelineList');
  if (!list) return;

  const items = [
    ...getMemories().map(memory => ({ id: memory.id, title: memory.title, date: memory.date, type: 'Souvenir', icon: '📝' })),
    ...getMessages().map(message => ({ id: message.id, title: message.text || message.title || 'Message', date: message.createdAt || Date.now(), type: 'Message', icon: '💌' })),
    ...getDates().map(entry => ({ id: entry.id, title: entry.title, date: entry.date || Date.now(), type: 'Événement', icon: '📅' }))
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  list.innerHTML = '';

  if (items.length === 0) {
    list.innerHTML = `<div class="empty-state"><span class="empty-icon">⏳</span><p>${window.I18n?.t('timeline.empty') || 'Votre histoire commence ici.'}</p><p class="empty-sub">${window.I18n?.t('timeline.emptyHelp') || 'Ajoutez des souvenirs, messages ou dates.'}</p></div>`;
    return;
  }

  items.forEach(item => {
    const entry = document.createElement('div');
    entry.className = 'memory-card';
    entry.innerHTML = `
      <span class="memory-mood">${item.icon}</span>
      <div class="memory-content">
        <div class="memory-title">${escapeHtml(item.title)}</div>
        <div class="memory-date">${escapeHtml(window.I18n?.t(
          item.type === 'Souvenir' ? 'timeline.typeMemory'
            : item.type === 'Message' ? 'timeline.typeMessage' : 'timeline.typeEvent'
        ) || item.type)} · ${formatDate(item.date)}</div>
      </div>
      <div class="memory-actions">
        <button type="button" data-action="delete-timeline-item" data-id="${item.id}" data-type="${item.type}" title="${window.I18n?.t('gallery.delete') || 'Supprimer'}">🗑️</button>
      </div>
    `;
    list.appendChild(entry);
  });

  list.querySelectorAll('[data-action="delete-timeline-item"]').forEach(btn => {
    btn.addEventListener('click', () => deleteTimelineItem(btn.dataset.id, btn.dataset.type));
  });
}

function updateStats() {
  const settings = getSettings();
  const memories = getMemories();
  const photos = getGallery();
  const messages = getMessages();
  const dates = getDates();
  const goals = getGoals();
  const challengeHistory = load(STORAGE_KEYS.challengeHistory, []);

  const start = new Date(settings.startDate || DEFAULT_SETTINGS.startDate);
  const days = Math.max(0, Math.floor((new Date() - start) / (1000 * 60 * 60 * 24)));

  const elements = [
    ['statDays', days],
    ['statMemoriesCount', memories.length],
    ['statPhotoCount', photos.length],
    ['statMessagesCount', messages.length],
    ['statChallengesCount', challengeHistory.length],
    ['statGoalsCount', goals.filter(goal => goal.completed).length],
    ['statDatesCount', dates.length]
  ];

  elements.forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });
}

function bindEnterToFormSubmit(form) {
  if (!form) return;

  form.addEventListener('keydown', (event) => {
    const target = event.target;
    const isInputField = target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
    const isFileInput = target && target.tagName === 'INPUT' && target.type === 'file';

    if (!isInputField || isFileInput || event.key !== 'Enter' || event.shiftKey || event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    event.preventDefault();
    if (typeof form.requestSubmit === 'function') {
      form.requestSubmit();
    } else {
      form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  });
}

function profilePhotoText(key, fallback) {
  return window.I18n?.t(`profilePhoto.${key}`) || fallback;
}

function discardProfilePhotoEditorImage() {
  profilePhotoEditorLoadId += 1;
  if (profilePhotoEditorObjectUrl) URL.revokeObjectURL(profilePhotoEditorObjectUrl);
  profilePhotoEditorObjectUrl = null;
  profilePhotoEditorImage = null;
}

function updateProfilePhotoDialogTitle(editing) {
  const title = document.getElementById('profilePhotoDialogTitle');
  if (title) {
    title.textContent = editing
      ? profilePhotoText('editTitle', 'Recadrer et ajuster')
      : profilePhotoText('viewTitle', 'Photo de profil');
  }
}

function drawProfilePhotoCrop(context, size, offsetScale = 1) {
  if (!profilePhotoEditorImage) return;

  const imageWidth = profilePhotoEditorImage.naturalWidth;
  const imageHeight = profilePhotoEditorImage.naturalHeight;
  const radians = profilePhotoEditorState.rotation * Math.PI / 180;
  const cosine = Math.abs(Math.cos(radians));
  const sine = Math.abs(Math.sin(radians));
  const rotatedWidth = imageWidth * cosine + imageHeight * sine;
  const rotatedHeight = imageHeight * cosine + imageWidth * sine;
  const coverScale = Math.max(size / rotatedWidth, size / rotatedHeight);

  context.clearRect(0, 0, size, size);
  context.save();
  if (profilePhotoEditorState.shape === 'circle') {
    context.beginPath();
    context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    context.clip();
  }
  context.translate(
    size / 2 + profilePhotoEditorState.offsetX * offsetScale,
    size / 2 + profilePhotoEditorState.offsetY * offsetScale
  );
  context.rotate(radians);
  context.scale(coverScale * profilePhotoEditorState.zoom, coverScale * profilePhotoEditorState.zoom);
  context.drawImage(profilePhotoEditorImage, -imageWidth / 2, -imageHeight / 2);
  context.restore();
}

function renderProfilePhotoCrop() {
  const canvas = document.getElementById('profilePhotoEditorCanvas');
  const context = canvas?.getContext('2d');
  if (!canvas || !context || !profilePhotoEditorImage) return;
  canvas.width = PROFILE_PHOTO_PREVIEW_SIZE;
  canvas.height = PROFILE_PHOTO_PREVIEW_SIZE;
  drawProfilePhotoCrop(context, PROFILE_PHOTO_PREVIEW_SIZE);
}

function setProfilePhotoCropShape(shape) {
  profilePhotoEditorState.shape = shape;
  const stage = document.getElementById('profilePhotoEditorStage');
  const freeButton = document.getElementById('profilePhotoCropFree');
  const circleButton = document.getElementById('profilePhotoCropCircle');
  stage?.classList.toggle('is-circular', shape === 'circle');
  freeButton?.setAttribute('aria-pressed', String(shape === 'free'));
  circleButton?.setAttribute('aria-pressed', String(shape === 'circle'));
  renderProfilePhotoCrop();
}

function openProfilePhotoViewer(target) {
  activeProfilePhotoTarget = target;
  profilePhotoPickerReturnsToViewer = false;
  profilePhotoViewerZoom = 1;
  document.getElementById('profilePhotoViewer').hidden = false;
  document.getElementById('profilePhotoEditor').hidden = true;
  document.getElementById('profilePhotoDeleteConfirmation').hidden = true;
  updateProfilePhotoDialogTitle(false);
  const image = document.getElementById('profilePhotoViewerImage');
  image.src = target.read();
  image.style.transform = 'scale(1)';
  document.getElementById('profilePhotoViewerZoomValue').textContent = '100%';
  const dialog = document.getElementById('profilePhotoDialog');
  if (!dialog.open) dialog.showModal();
}

function openProfilePhotoPicker(target, returnToViewer = false) {
  const input = document.querySelector(`[data-profile-photo-input="${target.id}"]`);
  if (!input) return;
  activeProfilePhotoTarget = target;
  profilePhotoPickerReturnsToViewer = returnToViewer;
  input.click();
}

function openProfilePhotoEditor(target, source, returnToViewer = false) {
  const loadId = ++profilePhotoEditorLoadId;
  const objectUrl = source instanceof Blob ? URL.createObjectURL(source) : null;
  const src = objectUrl || source;
  if (profilePhotoEditorObjectUrl) URL.revokeObjectURL(profilePhotoEditorObjectUrl);
  profilePhotoEditorObjectUrl = objectUrl;
  activeProfilePhotoTarget = target;
  profilePhotoEditorReturnsToViewer = returnToViewer;

  const image = new Image();
  image.onload = () => {
    if (loadId !== profilePhotoEditorLoadId) return;
    if (!image.naturalWidth || !image.naturalHeight) {
      image.onerror();
      return;
    }
    profilePhotoEditorImage = image;
    profilePhotoEditorState = { zoom: 1, rotation: 0, offsetX: 0, offsetY: 0, shape: 'circle' };
    document.getElementById('profilePhotoViewer').hidden = true;
    document.getElementById('profilePhotoEditor').hidden = false;
    document.getElementById('profilePhotoDeleteConfirmation').hidden = true;
    document.getElementById('profilePhotoEditorZoom').value = '1';
    setProfilePhotoCropShape('circle');
    updateProfilePhotoDialogTitle(true);
    const dialog = document.getElementById('profilePhotoDialog');
    if (!dialog.open) dialog.showModal();
    document.getElementById('profilePhotoEditorCancel').focus();
  };
  image.onerror = () => {
    if (loadId !== profilePhotoEditorLoadId) return;
    discardProfilePhotoEditorImage();
    console.error('Impossible de décoder la photo de profil sélectionnée.');
    showToast(profilePhotoText('readError', 'Impossible d’ouvrir cette image avec ce navigateur.'));
  };
  image.src = src;
}

function closeProfilePhotoDialog() {
  const dialog = document.getElementById('profilePhotoDialog');
  if (dialog?.open) dialog.close();
  discardProfilePhotoEditorImage();
  profilePhotoDragState = null;
  profilePhotoPickerReturnsToViewer = false;
  profilePhotoEditorReturnsToViewer = false;
  activeProfilePhotoTarget = null;
}

function updateProfilePhotoViewerZoom(amount) {
  profilePhotoViewerZoom = Math.max(0.5, Math.min(5, profilePhotoViewerZoom + amount));
  document.getElementById('profilePhotoViewerImage').style.transform = `scale(${profilePhotoViewerZoom})`;
  document.getElementById('profilePhotoViewerZoomValue').textContent = `${Math.round(profilePhotoViewerZoom * 100)}%`;
}

function updateProfilePhotoEditorZoom(value) {
  const zoom = document.getElementById('profilePhotoEditorZoom');
  const nextZoom = Number(value);
  if (!zoom || !Number.isFinite(nextZoom)) return;
  profilePhotoEditorState.zoom = Math.max(Number(zoom.min), Math.min(Number(zoom.max), nextZoom));
  zoom.value = String(profilePhotoEditorState.zoom);
  renderProfilePhotoCrop();
}

function initializeProfilePhotoDialog() {
  if (profilePhotoDialogInitialized) return;
  profilePhotoDialogInitialized = true;

  const dialog = document.getElementById('profilePhotoDialog');
  const editorStage = document.getElementById('profilePhotoEditorStage');
  const closeButton = document.getElementById('profilePhotoClose');
  closeButton.addEventListener('click', closeProfilePhotoDialog);
  dialog.addEventListener('cancel', event => {
    event.preventDefault();
    closeProfilePhotoDialog();
  });
  dialog.addEventListener('click', event => {
    if (event.target === dialog) closeProfilePhotoDialog();
  });
  window.addEventListener('carnet:languagechange', () => {
    if (dialog.open) updateProfilePhotoDialogTitle(!document.getElementById('profilePhotoEditor').hidden);
  });

  document.getElementById('profilePhotoEdit').addEventListener('click', () => {
    if (activeProfilePhotoTarget) {
      openProfilePhotoEditor(activeProfilePhotoTarget, activeProfilePhotoTarget.read(), true);
    }
  });
  document.getElementById('profilePhotoReplace').addEventListener('click', () => {
    if (activeProfilePhotoTarget) openProfilePhotoPicker(activeProfilePhotoTarget, true);
  });
  document.getElementById('profilePhotoViewerZoomOut').addEventListener('click', () => updateProfilePhotoViewerZoom(-0.2));
  document.getElementById('profilePhotoViewerZoomIn').addEventListener('click', () => updateProfilePhotoViewerZoom(0.2));
  document.getElementById('profilePhotoDelete').addEventListener('click', () => {
    document.getElementById('profilePhotoDeleteConfirmation').hidden = false;
    document.getElementById('profilePhotoDeleteCancel').focus();
  });
  document.getElementById('profilePhotoDeleteCancel').addEventListener('click', () => {
    document.getElementById('profilePhotoDeleteConfirmation').hidden = true;
    document.getElementById('profilePhotoDelete').focus();
  });
  document.getElementById('profilePhotoDeleteConfirm').addEventListener('click', () => {
    if (!activeProfilePhotoTarget) return;
    try {
      activeProfilePhotoTarget.reset();
      closeProfilePhotoDialog();
      showToast(profilePhotoText('deleted', 'Photo de profil supprimée.'));
    } catch (error) {
      console.error('Impossible de supprimer la photo de profil.', error);
      showToast(profilePhotoText('saveError', 'Impossible d’enregistrer cette modification.'));
    }
  });

  document.getElementById('profilePhotoCropFree').addEventListener('click', () => setProfilePhotoCropShape('free'));
  document.getElementById('profilePhotoCropCircle').addEventListener('click', () => setProfilePhotoCropShape('circle'));
  document.getElementById('profilePhotoEditorZoom').addEventListener('input', event => updateProfilePhotoEditorZoom(event.target.value));
  document.getElementById('profilePhotoEditorZoomOut').addEventListener('click', () => updateProfilePhotoEditorZoom(profilePhotoEditorState.zoom - 0.1));
  document.getElementById('profilePhotoEditorZoomIn').addEventListener('click', () => updateProfilePhotoEditorZoom(profilePhotoEditorState.zoom + 0.1));
  document.getElementById('profilePhotoRotateLeft').addEventListener('click', () => {
    profilePhotoEditorState.rotation = (profilePhotoEditorState.rotation - 90 + 360) % 360;
    renderProfilePhotoCrop();
  });
  document.getElementById('profilePhotoRotateRight').addEventListener('click', () => {
    profilePhotoEditorState.rotation = (profilePhotoEditorState.rotation + 90) % 360;
    renderProfilePhotoCrop();
  });
  document.getElementById('profilePhotoReset').addEventListener('click', () => {
    profilePhotoEditorState = { zoom: 1, rotation: 0, offsetX: 0, offsetY: 0, shape: 'circle' };
    document.getElementById('profilePhotoEditorZoom').value = '1';
    setProfilePhotoCropShape('circle');
  });
  document.getElementById('profilePhotoEditorCancel').addEventListener('click', () => {
    const returnToViewer = profilePhotoEditorReturnsToViewer;
    const target = activeProfilePhotoTarget;
    discardProfilePhotoEditorImage();
    if (returnToViewer && target) openProfilePhotoViewer(target);
    else closeProfilePhotoDialog();
  });
  document.getElementById('profilePhotoSave').addEventListener('click', () => {
    if (!activeProfilePhotoTarget || !profilePhotoEditorImage) return;
    try {
      const size = Math.floor(Math.min(
        PROFILE_PHOTO_PREVIEW_SIZE,
        profilePhotoEditorImage.naturalWidth,
        profilePhotoEditorImage.naturalHeight
      ));
      if (!size) throw new Error('L’image sélectionnée ne contient aucun pixel lisible.');
      const output = document.createElement('canvas');
      output.width = size;
      output.height = size;
      const context = output.getContext('2d');
      if (!context) throw new Error('Le navigateur ne permet pas de recadrer cette image.');
      drawProfilePhotoCrop(context, size, size / PROFILE_PHOTO_PREVIEW_SIZE);
      const dataUrl = output.toDataURL('image/webp', 0.9);
      if (!dataUrl.startsWith('data:image/')) {
        throw new Error('Le navigateur ne peut pas produire un aperçu de cette résolution.');
      }
      const target = activeProfilePhotoTarget;
      const returnToViewer = profilePhotoEditorReturnsToViewer;
      target.write(dataUrl);
      if (target.read() !== dataUrl) {
        throw new Error('La photo de profil enregistrée ne peut pas être relue.');
      }
      const targetImage = document.getElementById(target.imageId);
      if (!targetImage) throw new Error('L’emplacement de la photo de profil est introuvable.');
      targetImage.src = dataUrl;
      discardProfilePhotoEditorImage();
      if (returnToViewer) openProfilePhotoViewer(target);
      else closeProfilePhotoDialog();
      showToast(profilePhotoText('saved', 'Photo de profil mise à jour.'));
    } catch (error) {
      console.error('Impossible d’enregistrer la photo de profil recadrée.', error);
      showToast(profilePhotoText('saveError', 'Impossible d’enregistrer cette modification.'));
    }
  });

  editorStage.addEventListener('pointerdown', event => {
    if (!profilePhotoEditorImage || event.button !== 0) return;
    profilePhotoDragState = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      offsetX: profilePhotoEditorState.offsetX,
      offsetY: profilePhotoEditorState.offsetY
    };
    editorStage.setPointerCapture(event.pointerId);
  });
  editorStage.addEventListener('pointermove', event => {
    if (!profilePhotoDragState || profilePhotoDragState.pointerId !== event.pointerId) return;
    const bounds = editorStage.getBoundingClientRect();
    const scaleX = PROFILE_PHOTO_PREVIEW_SIZE / bounds.width;
    const scaleY = PROFILE_PHOTO_PREVIEW_SIZE / bounds.height;
    profilePhotoEditorState.offsetX = profilePhotoDragState.offsetX + (event.clientX - profilePhotoDragState.x) * scaleX;
    profilePhotoEditorState.offsetY = profilePhotoDragState.offsetY + (event.clientY - profilePhotoDragState.y) * scaleY;
    renderProfilePhotoCrop();
  });
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => {
    editorStage.addEventListener(type, () => { profilePhotoDragState = null; });
  });
}

function registerProfilePhotoTarget(target) {
  if (profilePhotoTargets.has(target.id)) return;
  initializeProfilePhotoDialog();
  profilePhotoTargets.set(target.id, target);

  const image = document.getElementById(target.imageId);
  if (image) {
    image.addEventListener('click', () => openProfilePhotoViewer(target));
    image.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openProfilePhotoViewer(target);
    });
    if (target.id.startsWith('home-')) {
      image.addEventListener('error', () => {
        image.src = createPlaceholderSVG('💕');
      });
    }
  }

  document.querySelectorAll(`[data-profile-photo-picker="${target.id}"]`).forEach(button => {
    button.addEventListener('click', () => openProfilePhotoPicker(target));
  });
  document.querySelectorAll(`[data-profile-photo-input="${target.id}"]`).forEach(input => {
    input.addEventListener('change', () => {
      const file = input.files?.[0];
      input.value = '';
      if (!file) {
        profilePhotoPickerReturnsToViewer = false;
        return;
      }
      const returnToViewer = profilePhotoPickerReturnsToViewer && activeProfilePhotoTarget?.id === target.id;
      profilePhotoPickerReturnsToViewer = false;
      openProfilePhotoEditor(target, file, returnToViewer);
    });
  });
}

function initMessageProfilePhotos() {
  registerProfilePhotoTarget({
    id: 'messages-partner',
    imageId: 'messagePartnerAvatar',
    read: () => getMessageHeaderState().photo2,
    write: dataUrl => {
      saveMessageHeaderState({ photo2: dataUrl });
      updateMessageHeader();
    },
    reset: () => {
      saveMessageHeaderState({ photo2: DEFAULT_SETTINGS.photo2 });
      updateMessageHeader();
    }
  });
}

async function initMessages() {
  const btn = document.getElementById('messageSendBtn');
  const search = document.getElementById('messageSearch');
  const composer = document.getElementById('messageComposer');
  const emojiButtons = document.querySelectorAll('.message-quick-reaction');
  const thread = document.getElementById('modernMessagesList');
  const filterButtons = document.querySelectorAll('.message-filter-chip');
  const inviteButton = document.getElementById('invitePartnerBtn');
  const joinTriggerButton = document.getElementById('joinPartnerTriggerBtn');
  const joinSubmitButton = document.getElementById('joinPartnerSubmitBtn');
  const partnerCodeInput = document.getElementById('partnerCodeInput');
  const pairingJoinSection = document.getElementById('pairingJoinSection');

  document.getElementById('messagesBackBtn')?.addEventListener('click', () => {
    navigateBackInApp();
  });

  if (btn) {
    btn.addEventListener('click', async () => {
      const state = getPairingState();
      if (!state.linked) {
        showToast(window.I18n?.t('profile.pairRequired') || 'Vous devez d\'abord lier votre compte à votre partenaire.');
        return;
      }
      if (composer?.value.trim()) {
        try {
          await sendTextMessage(composer.value);
        } catch (error) {
          console.warn('Failed to send message', error);
          showToast(window.I18n?.t('profile.sendFailed') || 'Impossible d\'envoyer le message.');
        }
      } else {
        composer?.focus();
      }
    });
  }

  if (composer) {
    composer.addEventListener('keydown', async (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        try {
          await sendTextMessage(composer.value);
        } catch (error) {
          console.warn('Failed to send message', error);
          showToast(window.I18n?.t('profile.sendFailed') || 'Impossible d\'envoyer le message.');
        }
      }
    });
    composer.addEventListener('input', () => resizeMessageComposer(composer));
    composer.addEventListener('focus', () => {
      requestAnimationFrame(() => composer.scrollIntoView({ block: 'nearest' }));
    });
  }

  const updateMessagesViewportHeight = () => {
    const viewport = window.visualViewport;
    document.documentElement.style.setProperty('--messages-visual-height', `${viewport?.height || window.innerHeight}px`);
    document.documentElement.style.setProperty('--messages-visual-offset-top', `${viewport?.offsetTop || 0}px`);
  };
  updateMessagesViewportHeight();
  window.visualViewport?.addEventListener('resize', updateMessagesViewportHeight);
  window.visualViewport?.addEventListener('scroll', updateMessagesViewportHeight);
  window.addEventListener('resize', updateMessagesViewportHeight);

  if (search) {
    search.addEventListener('input', (e) => renderMessages(e.target.value));
  }

  emojiButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (composer) {
        composer.value += button.dataset.emoji || '';
        resizeMessageComposer(composer);
        composer.focus();
      }
      button.closest('.message-emoji-picker')?.removeAttribute('open');
    });
  });

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      activeMessageView = button.dataset.view || 'all';
      filterButtons.forEach(item => item.classList.toggle('active', item === button));
      renderMessages(search?.value || '');
    });
  });

  if (thread) {
    thread.addEventListener('click', (event) => {
      const button = event.target.closest('[data-action]');
      if (!button) return;
      const { action, messageId, reaction } = button.dataset;
      handleMessageAction(action, messageId, reaction);
    });
  }

  if (inviteButton) {
    inviteButton.addEventListener('click', async () => {
      const state = savePairingState({ linked: false, partnerCode: '', linkedAt: null });
      const code = state.myCode;
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(code);
          showToast(window.I18n?.t('profile.invitationCopied') || 'Code d’invitation copié');
        } else {
          showToast(window.I18n?.t('profile.invitationReady') || 'Code d’invitation prêt à partager');
        }
      } catch (error) {
        showToast(window.I18n?.t('profile.invitationReady') || 'Code d’invitation prêt à partager');
      }
      updateMessagesPairingUI();
    });
  }

  if (joinTriggerButton) {
    joinTriggerButton.addEventListener('click', () => {
      if (pairingJoinSection) {
        pairingJoinSection.hidden = !pairingJoinSection.hidden;
      }
      if (partnerCodeInput) {
        partnerCodeInput.focus();
      }
    });
  }

  if (joinSubmitButton && partnerCodeInput) {
    joinSubmitButton.addEventListener('click', async () => {
      const code = partnerCodeInput.value.trim().toUpperCase();
      const currentState = getPairingState();
      const validCodePattern = /^CARNET-[A-Z0-9]{6}$/;

      if (!code) {
        console.warn('⚠️  No code entered');
        showToast(window.I18n?.t('profile.enterValidCode') || 'Saisissez un code valide.');
        return;
      }

      if (!validCodePattern.test(code)) {
        console.warn('⚠️  Invalid code format:', code);
        showToast(window.I18n?.t('profile.invalidCodeFormat') || 'Code invalide. Vérifiez le format.');
        return;
      }

      if (code === currentState.myCode.toUpperCase()) {
        console.warn('⚠️  User entered their own code');
        showToast(window.I18n?.t('profile.enterPartnerCode') || 'Entrez le code fourni par votre partenaire.');
        return;
      }

      // Validate with Supabase
      console.log('🔍 Validating code with Supabase:', code);
      const conversationCode = [currentState.myCode, code]
        .map(c => c.trim().toUpperCase())
        .sort()
        .join('::');

      try {
        // Check if conversation exists (Partner A created it)
        if (!window.supabaseClient) {
          console.error('❌ Supabase client not available');
          showToast(window.I18n?.t('profile.backendUnavailable') || 'Erreur : Supabase indisponible');
          return;
        }

        const { data: conversation, error: selectError } = await window.supabaseClient
          .from('conversations')
          .select('*')
          .eq('code', conversationCode)
          .limit(1)
          .maybeSingle();

        if (selectError) {
          console.error('❌ Supabase validation error:', selectError.message);
          showToast(window.I18n?.t('profile.validationFailed') || 'Erreur lors de la validation du code');
          return;
        }

        if (!conversation) {
          console.error('❌ Conversation not found. Partner A must create their profile first');
          showToast(window.I18n?.t('profile.partnerProfileRequired') || 'Code invalide. Votre partenaire doit créer son profil en premier.');
          return;
        }

        console.log('✅ Code validated successfully in Supabase');
        savePairingState({ linked: true, partnerCode: code, linkedAt: new Date().toISOString() });
        updateMessagesPairingUI();
        
        if (window.MessageModule && typeof window.MessageModule.initialize === 'function') {
          await window.MessageModule.initialize();
        }
        
        showToast(window.I18n?.t('profile.pairingEstablished') || '✅ Liaison établie avec votre partenaire !');
        partnerCodeInput.value = '';  // Clear input after success
      } catch (error) {
        console.error('❌ Linking error:', error);
        showToast(window.I18n?.t('profile.pairingFailed') || 'Erreur lors de la liaison');
      }
    });
  }

  if (partnerCodeInput) {
    partnerCodeInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        joinSubmitButton?.click();
      }
    });
  }

  window.addEventListener('storage', async (event) => {
    if (event.key === PAIRING_STORAGE_KEY) {
      updateMessagesPairingUI();
      if (window.MessageModule && typeof window.MessageModule.initialize === 'function') {
        await window.MessageModule.initialize();
      }
    }
    if (event.key === getMessageSettingsStorageKey() || event.key === STORAGE_KEYS.messageSettings) {
      applyMessageBackground();
    }
  });

  initMessageProfilePhotos();
  updateComposerState();
  updateMessageHeader();
  applyMessageBackground();
  initMessageSettingsPanel();
  updateMessagesPairingUI();

  if (window.MessageModule && typeof window.MessageModule.initialize === 'function') {
    await window.MessageModule.initialize();
  }

  if (window.MessageModule && typeof window.MessageModule.onMessagesUpdated === 'function') {
    window.MessageModule.onMessagesUpdated(() => {
      renderMessages('', 'date_desc', true);
      renderTimeline();
      updateStats();
      updateMessageSettingsSummary();
    });
  }

  updateMessageSettingsSummary();
  renderMessages();
}

function initDates() {
  const btn = document.getElementById('addDateBtn');
  if (btn) {
    btn.addEventListener('click', addDateEntry);
  }
  bindEnterToFormSubmit(document.getElementById('dateForm'));
  renderDates();
  renderTimeline();
}

function initGoals() {
  const btn = document.getElementById('addGoalBtn');
  if (btn) {
    btn.addEventListener('click', addGoal);
  }
  renderGoals();
}

function initPlaces() {
  const btn = document.getElementById('addPlaceBtn');
  if (btn) {
    btn.addEventListener('click', addPlace);
  }
  renderPlaces();
}

function initBackup() {
  const exportBtn = document.getElementById('exportBtn');
  const importBtn = document.getElementById('importBtn');
  const importInput = document.getElementById('importInput');

  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const payload = {
        settings: getSettings(),
        memories: getMemories(),
        gallery: getGallery(),
        messages: getMessages(),
        messageSettings: getMessageSettings(),
        dates: getDates(),
        goals: getGoals(),
        challenge: load(STORAGE_KEYS.challenge, null),
        challengeHistory: load(STORAGE_KEYS.challengeHistory, []),
        gameState: load(STORAGE_KEYS.gameState, { category: 'romantique', history: [], recent: [] })
      };

      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'carnet-export.json';
      link.click();
      URL.revokeObjectURL(url);
      showToast(window.I18n?.t('profile.exportReady') || 'Export JSON prêt à télécharger');
    });
  }

  if (importBtn && importInput) {
    importBtn.addEventListener('click', () => importInput.click());
    importInput.addEventListener('change', async () => {
      const file = importInput.files?.[0];
      if (!file) return;

      try {
        const text = await file.text();
        const payload = JSON.parse(text);
        if (payload.settings) save(STORAGE_KEYS.settings, payload.settings);
        if (payload.memories) save(STORAGE_KEYS.memories, payload.memories);
        if (payload.gallery) save(STORAGE_KEYS.gallery, payload.gallery);
        if (payload.messages) save(STORAGE_KEYS.messages, payload.messages);
        if (payload.messageSettings) saveMessageSettings(payload.messageSettings);
        if (payload.dates) save(STORAGE_KEYS.dates, payload.dates);
        if (payload.goals) save(STORAGE_KEYS.goals, payload.goals);
        if (payload.challenge) save(STORAGE_KEYS.challenge, payload.challenge);
        if (payload.challengeHistory) save(STORAGE_KEYS.challengeHistory, payload.challengeHistory);
        if (payload.gameState) save(STORAGE_KEYS.gameState, payload.gameState);

        renderCoupleInfo(getSettings());
        populateSettingsForm(getSettings());
        renderMemories();
        renderGallery();
        renderMessages();
        renderDates();
        renderGoals();
        renderTimeline();
        renderChallenge();
        renderGameHistory();
        updateStats();
        showToast(window.I18n?.t('profile.importSuccess') || 'Import JSON réussi');
      } catch (error) {
        console.error('Erreur lors de l’import JSON', error);
        showToast(window.I18n?.t('profile.invalidImport') || 'Fichier JSON invalide');
      } finally {
        importInput.value = '';
      }
    });
  }
}

/* ===== Settings ===== */

function getSettings() {
  return { ...DEFAULT_SETTINGS, ...load(STORAGE_KEYS.settings, {}) };
}

function saveSettings(partial) {
  const current = getSettings();
  save(STORAGE_KEYS.settings, { ...current, ...partial });
}

function initSettings() {
  const settings = getSettings();
  renderCoupleInfo(settings);
  populateSettingsForm(settings);
}

function getDisplayNames(settings) {
  const first1 = settings.firstName1?.trim() || 'Moi';
  const first2 = settings.firstName2?.trim() || 'Toi';
  const nick1 = settings.nickname1?.trim() || first1;
  const nick2 = settings.nickname2?.trim() || first2;

  if (settings.showNicknames && (settings.nickname1?.trim() || settings.nickname2?.trim())) {
    return `${nick1} & ${nick2}`;
  }

  return `${first1} & ${first2}`;
}

function renderCoupleInfo(settings) {
  document.getElementById('coupleNames').textContent = getDisplayNames(settings);
  document.getElementById('coupleQuote').textContent = settings.coupleQuote || DEFAULT_SETTINGS.coupleQuote;

  const photo1 = settings.photo1 || settings.couplePhoto || DEFAULT_SETTINGS.photo1;
  const photo2 = settings.photo2 || settings.couplePhoto || DEFAULT_SETTINGS.photo2;

  const heroPhoto1 = document.getElementById('partnerPhoto1');
  const heroPhoto2 = document.getElementById('partnerPhoto2');
  if (heroPhoto1) heroPhoto1.src = photo1;
  if (heroPhoto2) heroPhoto2.src = photo2;

  document.getElementById('showNicknames').checked = !!settings.showNicknames;

  const settingsPreview1 = document.getElementById('settingsPhotoPreview1')?.querySelector('img');
  const settingsPreview2 = document.getElementById('settingsPhotoPreview2')?.querySelector('img');
  if (settingsPreview1) settingsPreview1.src = photo1;
  if (settingsPreview2) settingsPreview2.src = photo2;

  const onboardingPreview = document.querySelector('#onboardingPhotoPreview img');
  if (onboardingPreview) onboardingPreview.src = photo1 || DEFAULT_SETTINGS.photo1;
  updateCounter(settings.startDate);
  updateMessageHeader();
}

function openOnboardingModal() {
  const modal = document.getElementById('onboardingModal');
  const settings = getSettings();

  document.getElementById('onboardFirstName1').value = settings.firstName1 || '';
  document.getElementById('onboardFirstName2').value = settings.firstName2 || '';
  document.getElementById('onboardNickname1').value = settings.nickname1 || '';
  document.getElementById('onboardNickname2').value = settings.nickname2 || '';
  document.getElementById('onboardStartDate').value = settings.startDate || DEFAULT_SETTINGS.startDate;
  onboardingPhotoDataUrl = settings.photo1 || settings.photo2 || settings.couplePhoto || DEFAULT_SETTINGS.photo1;
  const preview = document.querySelector('#onboardingPhotoPreview img');
  if (preview) preview.src = onboardingPhotoDataUrl;

  modal.hidden = false;
}

function initOnboarding() {
  const modal = document.getElementById('onboardingModal');
  const form = document.getElementById('onboardingForm');
  const photoInput = document.getElementById('onboardingPhotoInput');
  const photoBtn = document.getElementById('onboardingPhotoBtn');
  const preview = document.querySelector('#onboardingPhotoPreview img');

  photoBtn.addEventListener('click', () => photoInput.click());
  photoInput.addEventListener('change', () => {
    const file = photoInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      onboardingPhotoDataUrl = e.target.result;
      if (preview) preview.src = onboardingPhotoDataUrl;
    };
    reader.readAsDataURL(file);
    photoInput.value = '';
  });

  bindEnterToFormSubmit(form);

  bindEnterToFormSubmit(form);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const settings = {
      firstName1: document.getElementById('onboardFirstName1').value.trim(),
      firstName2: document.getElementById('onboardFirstName2').value.trim(),
      nickname1: document.getElementById('onboardNickname1').value.trim(),
      nickname2: document.getElementById('onboardNickname2').value.trim(),
      startDate: document.getElementById('onboardStartDate').value,
      photo1: onboardingPhotoDataUrl || DEFAULT_SETTINGS.photo1,
      photo2: onboardingPhotoDataUrl || DEFAULT_SETTINGS.photo2,
      couplePhoto: onboardingPhotoDataUrl || DEFAULT_SETTINGS.couplePhoto,
      showNicknames: false
    };

    saveSettings(settings);
    renderCoupleInfo(getSettings());
    populateSettingsForm(getSettings());
    modal.hidden = true;
    showToast(window.I18n?.t('profile.welcomeSaved') || 'Bienvenue ! Vos informations ont été enregistrées 💕');
  });

  const stored = load(STORAGE_KEYS.settings, null);
  if (!stored || !stored.firstName1 || !stored.firstName2) {
    openOnboardingModal();
  }
}

function populateSettingsForm(settings) {
  document.getElementById('firstName1').value = settings.firstName1 || '';
  document.getElementById('firstName2').value = settings.firstName2 || '';
  document.getElementById('nickname1').value = settings.nickname1 || '';
  document.getElementById('nickname2').value = settings.nickname2 || '';
  document.getElementById('showNicknames').checked = !!settings.showNicknames;

  settingsPhotoDataUrl1 = settings.photo1 || settings.couplePhoto || DEFAULT_SETTINGS.photo1;
  settingsPhotoDataUrl2 = settings.photo2 || settings.couplePhoto || DEFAULT_SETTINGS.photo2;

  const preview1 = document.getElementById('settingsPhotoPreview1')?.querySelector('img');
  const preview2 = document.getElementById('settingsPhotoPreview2')?.querySelector('img');
  if (preview1) preview1.src = settingsPhotoDataUrl1;
  if (preview2) preview2.src = settingsPhotoDataUrl2;

  const themeMode = settings.theme || DEFAULT_SETTINGS.theme;
  const hiddenInput = document.getElementById('themeModeInput');
  if (hiddenInput) {
    hiddenInput.value = themeMode;
  }
  updateThemeControls(themeMode);
}

function initEditableFields() {
  const quoteEl = document.getElementById('coupleQuote');

  quoteEl.addEventListener('blur', () => {
    saveSettings({ coupleQuote: quoteEl.textContent.trim() });
  });

  quoteEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); quoteEl.blur(); }
  });
}

/* ===== Days Counter ===== */

function updateCounter(startDate) {
  const start = new Date(startDate);
  const now = new Date();
  const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  const days = Math.max(0, diff);

  document.getElementById('daysCounter').textContent = window.I18n?.formatNumber(days) || days.toLocaleString('fr-FR');

  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  let sub = window.I18n?.t('home.happyDays') || 'jours de bonheur';
  if (years > 0) {
    const unit = window.I18n?.t(years === 1 ? 'time.year.one' : 'time.year.other') || (years === 1 ? 'an' : 'ans');
    sub += ` · ${window.I18n?.formatNumber(years) || years} ${unit}`;
  }
  if (months > 0) {
    const unit = window.I18n?.t(months === 1 ? 'time.month.one' : 'time.month.other') || 'mois';
    sub += ` · ${window.I18n?.formatNumber(months) || months} ${unit}`;
  }
  document.getElementById('counterSub').textContent = sub;
  document.getElementById('statYears').textContent = years;
}

function initDateModal() {
  const modal = document.getElementById('dateModal');
  const form = document.getElementById('dateForm');

  document.getElementById('editDateBtn').addEventListener('click', () => {
    document.getElementById('startDate').value = getSettings().startDate;
    modal.hidden = false;
  });

  document.getElementById('closeDateModal').addEventListener('click', () => { modal.hidden = true; });
  document.getElementById('cancelDateBtn').addEventListener('click', () => { modal.hidden = true; });

  bindEnterToFormSubmit(form);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const date = document.getElementById('startDate').value;
    saveSettings({ startDate: date });
    renderCoupleInfo(getSettings());
    modal.hidden = true;
    showToast(window.I18n?.t('profile.startDateUpdated') || 'Date de rencontre mise à jour 💕');
  });
}

/* ===== Couple Photo ===== */

function initCouplePhoto() {
  registerProfilePhotoTarget({
    id: 'home-first',
    imageId: 'partnerPhoto1',
    read: () => {
      const settings = getSettings();
      return settings.photo1 || settings.couplePhoto || DEFAULT_SETTINGS.photo1;
    },
    write: dataUrl => {
      saveSettings({ photo1: dataUrl });
      renderCoupleInfo(getSettings());
    },
    reset: () => {
      saveSettings({ photo1: DEFAULT_SETTINGS.photo1 });
      renderCoupleInfo(getSettings());
    }
  });
  registerProfilePhotoTarget({
    id: 'home-second',
    imageId: 'partnerPhoto2',
    read: () => {
      const settings = getSettings();
      return settings.photo2 || settings.couplePhoto || DEFAULT_SETTINGS.photo2;
    },
    write: dataUrl => {
      saveSettings({ photo2: dataUrl });
      renderCoupleInfo(getSettings());
    },
    reset: () => {
      saveSettings({ photo2: DEFAULT_SETTINGS.photo2 });
      renderCoupleInfo(getSettings());
    }
  });
}

function createPlaceholderSVG(emoji) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <rect width="200" height="200" fill="#fd79a8" rx="100"/>
    <text x="100" y="115" font-size="60" text-anchor="middle">${emoji}</text>
  </svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

/* ===== Navigation ===== */

function getSettingsCategoryPage() {
  return document.querySelector('[data-settings-category-page]:not([hidden])');
}

function refreshSettingsCategoryIndicators() {
  const activeSettings = {
    notifications: !!document.getElementById('notificationAllEnabled')?.checked,
    privacy: !!document.getElementById('appLockEnabled')?.checked
  };
  document.querySelectorAll('[data-settings-indicator]').forEach(indicator => {
    const active = !!activeSettings[indicator.dataset.settingsIndicator];
    indicator.hidden = !active;
    indicator.textContent = active ? (window.I18n?.t('settingsHub.active') || 'Enabled') : '';
  });
}

function closeSettingsCategoryPage(returnFocus = true) {
  const page = getSettingsCategoryPage();
  if (!page) return false;
  const category = page.dataset.settingsCategoryPage;
  page.hidden = true;
  page.inert = true;
  const hub = document.getElementById('settingsCategoryHub');
  if (hub) {
    hub.hidden = false;
    hub.inert = false;
  }
  refreshSettingsCategoryIndicators();
  if (returnFocus) {
    document.querySelector(`[data-settings-open-category="${category}"]`)?.focus();
  }
  return true;
}

function openSettingsCategory(category, focusHeading = true) {
  const page = document.querySelector(`[data-settings-category-page="${category}"]`);
  const hub = document.getElementById('settingsCategoryHub');
  if (!page || !hub) return false;

  document.querySelectorAll('[data-settings-category-page]').forEach(item => {
    item.hidden = item !== page;
    item.inert = item !== page;
  });
  hub.hidden = true;
  hub.inert = true;
  refreshSettingsCategoryIndicators();
  if (focusHeading) page.querySelector('[id$="Title"]')?.focus();
  syncAppBackSentinel();
  return true;
}

function initSettingsNavigation() {
  const hub = document.getElementById('settingsCategoryHub');
  const notificationPanel = document.getElementById('settingsPanelNotifications');
  const notificationHost = document.getElementById('settingsNotificationsContent');
  if (!hub) return;

  if (notificationPanel && notificationHost) {
    const shortcut = document.createElement('section');
    shortcut.className = 'messages-settings-view';
    shortcut.id = 'settingsPanelNotifications';
    shortcut.dataset.settingsPanel = 'notifications';
    shortcut.setAttribute('role', 'tabpanel');
    shortcut.setAttribute('aria-labelledby', 'settingsTabNotifications');
    shortcut.hidden = true;

    const heading = document.createElement('h4');
    const note = document.createElement('p');
    note.className = 'messages-settings-note';
    const button = document.createElement('button');
    button.className = 'messages-settings-secondary';
    button.type = 'button';
    button.dataset.settingsOpenCategory = 'notifications';
    shortcut.append(heading, note, button);

    const renderShortcut = () => {
      heading.textContent = window.I18n?.t('chat.notifications') || 'Notifications';
      note.textContent = window.I18n?.t('settingsHub.notificationShortcutHelp') || 'Manage notification preferences in Settings.';
      button.textContent = window.I18n?.t('settingsHub.openNotifications') || 'Manage notifications';
    };
    renderShortcut();
    window.addEventListener('carnet:languagechange', renderShortcut);

    notificationPanel.replaceWith(shortcut);
    notificationPanel.id = 'appNotificationSettings';
    notificationPanel.classList.remove('messages-settings-view', 'is-active');
    notificationPanel.removeAttribute('role');
    notificationPanel.removeAttribute('aria-labelledby');
    notificationPanel.removeAttribute('data-settings-panel');
    notificationPanel.hidden = false;
    notificationPanel.querySelector('.messages-settings-note')?.classList.add('notification-settings-note');

    const card = document.createElement('div');
    card.className = 'feature-card plus-feature-card';
    card.append(notificationPanel);
    notificationHost.append(card);
  } else {
    console.error('The notification settings panel could not be moved into the settings category.');
  }

  document.addEventListener('click', event => {
    const openButton = event.target.closest('[data-settings-open-category]');
    if (openButton) {
      event.preventDefault();
      const messageSettings = openButton.closest('.messages-settings-menu');
      if (messageSettings) messageSettings.open = false;
      if (getAppCurrentSection() !== 'plus') {
        recordAppSection('plus');
        setAppActiveSection('plus');
      }
      openSettingsCategory(openButton.dataset.settingsOpenCategory);
      return;
    }

    const backButton = event.target.closest('[data-settings-back]');
    if (backButton && closeSettingsCategoryPage()) syncAppBackSentinel();
  });

  document.getElementById('notificationAllEnabled')?.addEventListener('change', refreshSettingsCategoryIndicators);
  document.getElementById('appLockEnabled')?.addEventListener('change', refreshSettingsCategoryIndicators);
  window.addEventListener('carnet:languagechange', refreshSettingsCategoryIndicators);
  refreshSettingsCategoryIndicators();
}

const APP_BACK_SENTINEL_KEY = '__notreCarnetBackSentinel';
const VINYL_FULLSCREEN_HISTORY_KEY = '__notreCarnetVinylFullscreen';
let appBackSentinelActive = false;
let appBackSurfaceObserver = null;
let appLastHomeBackAt = 0;
let appBackExitPending = false;
let vinylImmersivePreviousHistoryState = null;
let vinylImmersivePreviousUrl = '';
let vinylImmersivePreviousFocus = null;
let vinylImmersiveExitTimer = null;
let vinylImmersiveLastTap = null;
let vinylImmersiveScrollPosition = null;
let vinylImmersivePreviousScrollOffsets = null;

function getAppCurrentSection() {
  return document.querySelector('.section.active')?.id || 'accueil';
}

function updateSmartNavigation(activeSection = getAppCurrentSection()) {
  const link = document.getElementById('smartNavLink');
  if (!link) return;

  const destination = activeSection === 'multimedia' ? 'jeux' : 'multimedia';
  const labelKey = destination === 'jeux' ? 'nav.smartGames' : 'nav.smartMedia';
  const fallbackLabel = destination === 'jeux' ? 'Jeux' : 'Médias';
  const label = link.querySelector('.nav-smart-label');
  const text = window.I18n?.t?.(labelKey) || fallbackLabel;
  if (!label || (link.dataset.destination === destination && label.textContent === text)) return;

  link.classList.add('is-changing');
  link.href = `#${destination}`;
  link.dataset.section = destination;
  link.dataset.destination = destination;
  label.textContent = text;
  link.setAttribute('aria-label', text);
  link.title = text;
  requestAnimationFrame(() => requestAnimationFrame(() => link.classList.remove('is-changing')));
}

function updateNavMenuForActiveSection() {
  const activeSection = getAppCurrentSection();
  document.querySelectorAll('#navLinks a.nav-link[data-section]').forEach(link => {
    const item = link.closest('li');
    if (item) item.hidden = link.dataset.section === activeSection;
  });
}

function getOpenBackSurface() {
  const appLockScreen = document.getElementById('appLockScreen');
  if (appLockScreen && (
    document.documentElement.dataset.appLockBoot === 'locked' ||
    (!appLockScreen.hidden && appLockScreen.classList.contains('is-locked'))
  )) {
    return { type: 'app-lock', element: appLockScreen };
  }
  if (appLockScreen && !appLockScreen.hidden) {
    return { type: 'app-lock-configuration', element: appLockScreen };
  }

  const dialog = document.querySelector('dialog[open]');
  if (dialog) return { type: 'dialog', element: dialog };

  const galleryMenu = document.getElementById('galleryActionMenu');
  if (galleryMenu && !galleryMenu.hidden) return { type: 'gallery-menu', element: galleryMenu };

  const overlays = Array.from(document.querySelectorAll(
    '.lightbox:not([hidden]):not(.is-closing), .modal-overlay:not([hidden])'
  ));
  if (overlays.length) {
    overlays.sort((left, right) => {
      const leftZ = Number.parseInt(getComputedStyle(left).zIndex, 10) || 0;
      const rightZ = Number.parseInt(getComputedStyle(right).zIndex, 10) || 0;
      return leftZ - rightZ;
    });
    return { type: 'overlay', element: overlays[overlays.length - 1] };
  }

  const navLinks = document.getElementById('navLinks');
  if (navLinks?.classList.contains('open')) return { type: 'navigation', element: navLinks };

  const openDetails = Array.from(document.querySelectorAll('details[open]'))
    .filter(details => !details.closest('[hidden], [inert]'));
  if (openDetails.length) return { type: 'details', element: openDetails[openDetails.length - 1] };

  const settingsPage = getSettingsCategoryPage();
  if (settingsPage && getAppCurrentSection() === 'plus') {
    return { type: 'settings-category', element: settingsPage };
  }

  return null;
}

function closeTopmostBackSurface() {
  const surface = getOpenBackSurface();
  if (!surface) return false;

  if (surface.type === 'dialog') {
    if (surface.element.id === 'profilePhotoDialog') {
      closeProfilePhotoDialog();
    } else {
      surface.element.close();
    }
  } else if (surface.type === 'app-lock') {
    return true;
  } else if (surface.type === 'app-lock-configuration') {
    document.getElementById('appLockCancel')?.click();
  } else if (surface.type === 'gallery-menu') {
    closeGalleryActionMenu(true);
  } else if (surface.type === 'overlay') {
    if (surface.element.id === 'lightbox') {
      closeLightbox();
    } else {
      surface.element.hidden = true;
    }
  } else if (surface.type === 'details') {
    surface.element.open = false;
  } else if (surface.type === 'settings-category') {
    closeSettingsCategoryPage();
  } else {
    surface.element.classList.remove('open');
    document.getElementById('navToggle')?.setAttribute('aria-expanded', 'false');
  }

  return true;
}

function setAppActiveSection(target) {
  if (!document.getElementById(target)?.classList.contains('section')) return;
  appLastHomeBackAt = 0;
  appBackExitPending = false;
  if (target !== 'plus') closeSettingsCategoryPage(false);

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === target);
  });
  document.querySelectorAll('.section').forEach(section => {
    section.classList.toggle('active', section.id === target);
  });
  updateNavMenuForActiveSection();
  updateSmartNavigation(target);
  document.body.classList.toggle('messages-open', target === 'messages');

  const navLinks = document.getElementById('navLinks');
  navLinks?.classList.remove('open');
  document.getElementById('navToggle')?.setAttribute('aria-expanded', 'false');
}

function initMediaPageNavigation() {
  const viewport = document.querySelector('#multimedia .media-pages-viewport');
  const track = document.getElementById('mediaPagesTrack');
  const tablist = document.querySelector('#multimedia .media-page-tabs');
  const tabs = Array.from(tablist?.querySelectorAll('[data-media-page]') || []);
  const pages = Object.fromEntries(
    tabs.map(tab => [tab.dataset.mediaPage, document.getElementById(tab.getAttribute('aria-controls'))])
  );
  if (!viewport || !track || tabs.length !== 2 || Object.values(pages).some(page => !page)) return;

  const mediaNavigation = document.querySelector('#multimedia .media-navigation');
  const navigationSentinel = document.querySelector('#multimedia .media-navigation-sentinel');
  if ('IntersectionObserver' in window && mediaNavigation && navigationSentinel) {
    const stickyTop = getComputedStyle(mediaNavigation).top;
    const stickyObserver = new IntersectionObserver(([entry]) => {
      mediaNavigation.classList.toggle('is-stuck', !entry.isIntersecting);
    }, { rootMargin: `-${stickyTop} 0px 0px 0px` });
    stickyObserver.observe(navigationSentinel);
  }

  let activePage = 'photos';
  let pointerStart = null;
  let suppressSwipeClick = false;

  const updateViewportHeight = () => {
    const page = pages[activePage];
    if (page) viewport.style.height = `${page.scrollHeight}px`;
  };

  const selectPage = (pageName, focusTab = false) => {
    if (!pages[pageName]) return;
    activePage = pageName;
    track.dataset.activePage = pageName;
    tabs.forEach(tab => {
      const selected = tab.dataset.mediaPage === pageName;
      tab.classList.toggle('is-active', selected);
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && focusTab) tab.focus();
    });
    Object.entries(pages).forEach(([name, page]) => {
      const selected = name === pageName;
      page.classList.toggle('is-active', selected);
      page.setAttribute('aria-hidden', String(!selected));
      page.inert = !selected;
    });
    updateViewportHeight();
  };

  tabs.forEach(tab => tab.addEventListener('click', () => selectPage(tab.dataset.mediaPage)));
  tablist.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const nextPage = event.key === 'Home' ? 'photos'
      : event.key === 'End' ? 'music'
        : event.key === 'ArrowRight' ? 'music' : 'photos';
    selectPage(nextPage, true);
  });

  viewport.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0 ||
      event.target.closest('button, input, select, textarea, a, [contenteditable="true"], audio, video, [role="button"], [role="slider"]')) return;
    pointerStart = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      target: event.target
    };
    if (event.pointerType === 'mouse') viewport.classList.add('is-dragging');
  });

  window.addEventListener('pointerup', event => {
    viewport.classList.remove('is-dragging');
    if (!pointerStart || event.pointerId !== pointerStart.id) return;
    const deltaX = event.clientX - pointerStart.x;
    const deltaY = event.clientY - pointerStart.y;
    if (Math.abs(deltaX) > 56 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25) {
      if (activePage === 'photos' && deltaX < 0) selectPage('music');
      else if (activePage === 'music' && deltaX > 0) selectPage('photos');
      else {
        pointerStart = null;
        return;
      }
      suppressSwipeClick = true;
      window.setTimeout(() => { suppressSwipeClick = false; }, 0);
    }
    pointerStart = null;
  });

  window.addEventListener('pointercancel', () => {
    pointerStart = null;
    viewport.classList.remove('is-dragging');
  });

  document.addEventListener('click', event => {
    if (!suppressSwipeClick || !event.target.closest('#multimedia')) return;
    event.preventDefault();
    event.stopImmediatePropagation();
  }, true);

  if ('ResizeObserver' in window) {
    const resizeObserver = new ResizeObserver(updateViewportHeight);
    Object.values(pages).forEach(page => resizeObserver.observe(page));
  }
  selectPage('photos');
}

function ensureAppBackSentinel() {
  if (appBackSentinelActive || !window.history?.pushState) return;
  const state = history.state && typeof history.state === 'object' ? { ...history.state } : {};
  state[APP_BACK_SENTINEL_KEY] = true;
  history.pushState(state, '', location.href);
  appBackSentinelActive = true;
}

function syncAppBackSentinel() {
  if (appBackExitPending && !getOpenBackSurface()) return;
  appBackExitPending = false;
  ensureAppBackSentinel();
}

function resumeAppBackNavigation() {
  if (!appBackExitPending) return;
  appBackExitPending = false;
  syncAppBackSentinel();
}

function isStandaloneApp() {
  const displayMode = window.matchMedia?.('(display-mode: standalone)').matches;
  return displayMode === true || window.navigator.standalone === true;
}

function requestAppClose() {
  try {
    window.close();
  } catch (error) {
    console.warn('The browser did not allow the app window to close.', error);
  }
}

function handleHomeBack() {
  const now = Date.now();
  if (appLastHomeBackAt && now - appLastHomeBackAt <= 2000) {
    appLastHomeBackAt = 0;
    appBackExitPending = isStandaloneApp();
    const toast = document.getElementById('toast');
    const exitPrompt = window.I18n?.t?.('navigation.exitPrompt') || 'Appuyez encore une fois pour quitter';
    if (toast.textContent === exitPrompt) {
      toast.classList.remove('show');
      toast.textContent = '';
    }
    requestAppClose();
    if (!appBackExitPending) syncAppBackSentinel();
    return;
  }

  appLastHomeBackAt = now;
  showToast(window.I18n?.t?.('navigation.exitPrompt') || 'Appuyez encore une fois pour quitter');
  syncAppBackSentinel();
}

function navigateBackInApp() {
  if (document.getElementById('playlistPlayer')?.classList.contains('is-vinyl-fullscreen')) {
    toggleVinylFullscreen(false, { instant: true });
    syncAppBackSentinel();
    return;
  }
  if (closeTopmostBackSurface()) {
    appLastHomeBackAt = 0;
    syncAppBackSentinel();
    return;
  }
  if (getAppCurrentSection() !== 'accueil') {
    setAppActiveSection('accueil');
    syncAppBackSentinel();
    return;
  }
  handleHomeBack();
}

function initNavigation() {
  const links = document.querySelectorAll('.nav-link');
  const navLinks = document.getElementById('navLinks');
  const navToggle = document.getElementById('navToggle');
  appBackSentinelActive = !!history.state?.[APP_BACK_SENTINEL_KEY];
  updateNavMenuForActiveSection();
  updateSmartNavigation();
  window.addEventListener('carnet:languagechange', () => updateSmartNavigation());

  window.addEventListener('popstate', event => {
    const player = document.getElementById('playlistPlayer');
    if (player?.classList.contains('is-vinyl-fullscreen')) {
      appBackSentinelActive = !!event.state?.[APP_BACK_SENTINEL_KEY];
      toggleVinylFullscreen(false, { instant: true });
      if (!appBackSentinelActive) syncAppBackSentinel();
      return;
    }

    if (event.state?.[VINYL_FULLSCREEN_HISTORY_KEY]) {
      const restoredState = vinylImmersivePreviousHistoryState
        && typeof vinylImmersivePreviousHistoryState === 'object'
        ? vinylImmersivePreviousHistoryState
        : { ...event.state };
      if (restoredState && typeof restoredState === 'object') {
        delete restoredState[VINYL_FULLSCREEN_HISTORY_KEY];
      }
      history.replaceState(restoredState, '', vinylImmersivePreviousUrl || location.href);
      appBackSentinelActive = !!restoredState?.[APP_BACK_SENTINEL_KEY];
      vinylImmersivePreviousHistoryState = null;
      vinylImmersivePreviousUrl = '';
      return;
    }

    if (!appBackSentinelActive) {
      if (appBackExitPending && event.state?.[APP_BACK_SENTINEL_KEY]) {
        history.back();
      } else if (event.state?.[APP_BACK_SENTINEL_KEY]) {
        appBackSentinelActive = true;
      }
      return;
    }

    appBackSentinelActive = false;
    navigateBackInApp();
  });

  if (!appBackSurfaceObserver && document.body) {
    appBackSurfaceObserver = new MutationObserver(syncAppBackSentinel);
    appBackSurfaceObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ['class', 'hidden', 'open'],
      subtree: true
    });
  }

  syncAppBackSentinel();

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.dataset.section;
      setAppActiveSection(target);
      syncAppBackSentinel();
    });
  });

  navToggle?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  document.addEventListener('keydown', resumeAppBackNavigation);
  document.addEventListener('pointerdown', event => {
    resumeAppBackNavigation();
    if (!navLinks?.classList.contains('open')) return;
    if (navLinks.contains(event.target) || navToggle?.contains(event.target)) return;
    navLinks.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
}

/* ===== Theme Toggle ===== */

function getThemeModePreference() {
  const saved = getSettings().theme;
  return saved && ['dark', 'light', 'auto'].includes(saved) ? saved : DEFAULT_SETTINGS.theme;
}

function getEffectiveTheme(themeMode = getThemeModePreference()) {
  if (themeMode === 'auto') {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? 'light' : 'dark';
  }
  return themeMode === 'light' ? 'light' : 'dark';
}

function applyTheme(themeMode, persist = true, notify = false) {
  const safeMode = ['dark', 'light', 'auto'].includes(themeMode) ? themeMode : DEFAULT_SETTINGS.theme;
  const effectiveTheme = getEffectiveTheme(safeMode);

  document.documentElement.setAttribute('data-theme', effectiveTheme);
  document.documentElement.setAttribute('data-theme-mode', safeMode);
  window.dispatchEvent(new CustomEvent('carnet:themechange', {
    detail: { mode: safeMode, theme: effectiveTheme }
  }));

  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', effectiveTheme === 'dark' ? '#2b1537' : '#fff8f8');
  }

  updateThemeControls(safeMode);
  updateThemeToggleButton(safeMode);

  if (persist) {
    saveSettings({ theme: safeMode });
  }

  if (notify) {
    const messages = {
      dark: window.I18n?.t('theme.darkActivated') || 'Mode sombre activé 🌙',
      light: window.I18n?.t('theme.lightActivated') || 'Mode clair activé ☀️',
      auto: window.I18n?.t('theme.autoActivated') || 'Mode automatique activé 🌗'
    };
    showToast(messages[safeMode] || window.I18n?.t('theme.updated') || 'Thème mis à jour');
  }
}

function updateThemeControls(themeMode) {
  document.querySelectorAll('.theme-option').forEach(button => {
    const isActive = button.dataset.themeChoice === themeMode;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  const hiddenInput = document.getElementById('themeModeInput');
  if (hiddenInput) {
    hiddenInput.value = themeMode;
  }
}

function updateThemeToggleButton(themeMode) {
  const button = document.getElementById('themeToggle');
  if (!button) return;

  const labels = {
    dark: window.I18n?.t('theme.changeToLight') || 'Changer vers le mode clair',
    light: window.I18n?.t('theme.changeToAuto') || 'Changer vers le mode automatique',
    auto: window.I18n?.t('theme.changeToDark') || 'Changer vers le mode sombre'
  };

  button.setAttribute('aria-label', labels[themeMode] || window.I18n?.t('theme.change') || 'Changer le thème');
  const lightIcon = button.querySelector('.theme-icon-light');
  const darkIcon = button.querySelector('.theme-icon-dark');

  if (lightIcon && darkIcon) {
    if (themeMode === 'light') {
      lightIcon.textContent = '☀️';
      darkIcon.textContent = '🌗';
    } else if (themeMode === 'auto') {
      lightIcon.textContent = '🌗';
      darkIcon.textContent = '🌙';
    } else {
      lightIcon.textContent = '☀️';
      darkIcon.textContent = '🌙';
    }
  }
}

function initTheme() {
  const button = document.getElementById('themeToggle');
  if (button) {
    button.addEventListener('click', () => {
      const currentMode = document.documentElement.getAttribute('data-theme-mode') || getThemeModePreference();
      const order = ['dark', 'light', 'auto'];
      const currentIndex = order.indexOf(currentMode);
      const nextMode = order[(currentIndex + 1) % order.length];
      applyTheme(nextMode, true, true);
    });
  }

  document.querySelectorAll('.theme-option').forEach(button => {
    button.onclick = () => {
      const nextMode = button.dataset.themeChoice;
      applyTheme(nextMode, true, true);
    };
  });

  const themeMode = getThemeModePreference();
  applyTheme(themeMode, false, false);
  updateThemeControls(themeMode);
}

function initSettingsForm() {
  const form = document.getElementById('profileForm');
  const modal = document.getElementById('profileModal');
  const showNicknames = document.getElementById('showNicknames');

  document.getElementById('editCoupleProfileBtn').addEventListener('click', () => {
    populateSettingsForm(getSettings());
    modal.hidden = false;
  });
  document.getElementById('closeProfileModal').addEventListener('click', () => { modal.hidden = true; });
  document.getElementById('cancelProfileBtn').addEventListener('click', () => { modal.hidden = true; });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const settings = {
      firstName1: document.getElementById('firstName1').value.trim(),
      firstName2: document.getElementById('firstName2').value.trim(),
      nickname1: document.getElementById('nickname1').value.trim(),
      nickname2: document.getElementById('nickname2').value.trim()
    };

    saveSettings(settings);
    renderCoupleInfo(getSettings());
    populateSettingsForm(getSettings());
    modal.hidden = true;
    showToast(window.I18n?.t('profile.coupleUpdated') || 'Informations du couple mises à jour 💕');
  });

  showNicknames.addEventListener('change', () => {
    saveSettings({ showNicknames: showNicknames.checked });
    renderCoupleInfo(getSettings());
  });
}


/* ===== Memories CRUD ===== */

function getMemories() {
  return load(STORAGE_KEYS.memories, []);
}

function saveMemories(memories) {
  save(STORAGE_KEYS.memories, memories);
  document.getElementById('statMemories').textContent = memories.length;
  renderMemories();
  renderTimeline();
  updateStats();
}

function renderMemories(filter = '') {
  const memories = getMemories();
  const list = document.getElementById('memoriesList');
  const empty = document.getElementById('memoriesEmpty');

  const filtered = filter
    ? memories.filter(m =>
        m.title.toLowerCase().includes(filter.toLowerCase()) ||
        m.text.toLowerCase().includes(filter.toLowerCase())
      )
    : memories;

  list.innerHTML = '';

  if (filtered.length === 0) {
    empty.hidden = false;
    return;
  }

  empty.hidden = true;

  filtered
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .forEach(memory => {
      const card = document.createElement('div');
      card.className = 'memory-card';
      card.innerHTML = `
        <span class="memory-mood">${memory.mood}</span>
        <div class="memory-content">
          <div class="memory-title">${escapeHtml(memory.title)}</div>
          <div class="memory-date">${formatDate(memory.date)}</div>
          <div class="memory-text">${escapeHtml(memory.text)}</div>
        </div>
        <div class="memory-actions">
          <button data-action="edit" data-id="${memory.id}" title="${window.I18n?.t('memories.editAction') || 'Modifier'}">✏️</button>
          <button data-action="delete" data-id="${memory.id}" title="${window.I18n?.t('gallery.delete') || 'Supprimer'}">🗑️</button>
        </div>
      `;
      list.appendChild(card);
    });

  list.querySelectorAll('[data-action="edit"]').forEach(btn => {
    btn.addEventListener('click', () => openMemoryModal(btn.dataset.id));
  });

  list.querySelectorAll('[data-action="delete"]').forEach(btn => {
    btn.addEventListener('click', () => deleteMemory(btn.dataset.id));
  });
}

function openMemoryModal(id = null) {
  const modal = document.getElementById('memoryModal');
  const form = document.getElementById('memoryForm');
  form.reset();

  if (id) {
    const memory = getMemories().find(m => m.id === id);
    if (!memory) return;
    const title = document.getElementById('memoryModalTitle');
    title.dataset.i18n = 'memories.editTitle';
    title.textContent = window.I18n?.t('memories.editTitle') || 'Modifier le souvenir';
    document.getElementById('memoryId').value = memory.id;
    document.getElementById('memoryTitle').value = memory.title;
    document.getElementById('memoryDate').value = memory.date;
    document.getElementById('memoryText').value = memory.text;
    document.getElementById('memoryMood').value = memory.mood;
  } else {
    const title = document.getElementById('memoryModalTitle');
    title.dataset.i18n = 'memories.newTitle';
    title.textContent = window.I18n?.t('memories.newTitle') || 'Nouveau souvenir';
    document.getElementById('memoryId').value = '';
    document.getElementById('memoryDate').value = new Date().toISOString().split('T')[0];
  }

  modal.hidden = false;
}

function closeMemoryModal() {
  document.getElementById('memoryModal').hidden = true;
}

function deleteMemory(id) {
  if (!confirm(window.I18n?.t('memories.deleteConfirm') || 'Supprimer ce souvenir ?')) return;
  const memories = getMemories().filter(m => m.id !== id);
  saveMemories(memories);
  renderMemories();
  showToast(window.I18n?.t('memories.deleted') || 'Souvenir supprimé');
}

function initMemories() {
  document.getElementById('addMemoryBtn').addEventListener('click', () => openMemoryModal());
  document.getElementById('closeMemoryModal').addEventListener('click', closeMemoryModal);
  document.getElementById('cancelMemoryBtn').addEventListener('click', closeMemoryModal);

  const memoryForm = document.getElementById('memoryForm');
  bindEnterToFormSubmit(memoryForm);
  memoryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('memoryId').value;
    const memory = {
      id: id || generateId(),
      title: document.getElementById('memoryTitle').value.trim(),
      date: document.getElementById('memoryDate').value,
      text: document.getElementById('memoryText').value.trim(),
      mood: document.getElementById('memoryMood').value
    };

    let memories = getMemories();
    if (id) {
      memories = memories.map(m => m.id === id ? memory : m);
      showToast(window.I18n?.t('memories.updated') || 'Souvenir modifié ✏️');
    } else {
      memories.push(memory);
      showToast(window.I18n?.t('memories.added') || 'Souvenir ajouté 💕');
    }

    saveMemories(memories);
    renderMemories();
    closeMemoryModal();
  });

  document.getElementById('memorySearch').addEventListener('input', (e) => {
    renderMemories(e.target.value);
  });

  renderMemories();
}

/* ===== Gallery ===== */

const GALLERY_IMPORT_SAVE_BATCH_SIZE = 5;
let galleryImportInProgress = false;

function getGallery() {
  return load(STORAGE_KEYS.gallery, []);
}

function saveGallery(photos) {
  save(STORAGE_KEYS.gallery, photos);
  document.getElementById('statPhotos').textContent = photos.length;
}

function renderGallery() {
  const photos = getGallery();
  const grid = document.getElementById('galleryGrid');
  const empty = document.getElementById('galleryEmpty');

  grid.innerHTML = '';
  renderFavoriteGallery(photos);

  if (photos.length === 0) {
    empty.hidden = false;
    return;
  }

  empty.hidden = true;

  photos.forEach(photo => grid.appendChild(createGalleryItem(photo)));
}

function createGalleryItem(photo) {
  const item = document.createElement('article');
  item.className = 'gallery-item';
  item.dataset.id = photo.id;
  item.tabIndex = 0;
  item.setAttribute('role', 'button');
  item.setAttribute('aria-label', galleryText('openImage'));

  const image = document.createElement('img');
  image.src = photo.src;
  image.alt = galleryText('openImage');
  image.loading = 'lazy';
  item.appendChild(image);

  const openPhoto = () => {
    if (Date.now() < suppressGalleryClickUntil) return;
    openLightbox(photo.id);
  };
  item.addEventListener('click', openPhoto);
  item.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    openPhoto();
  });
  item.addEventListener('contextmenu', event => {
    event.preventDefault();
    openGalleryActionMenu(photo.id, { x: event.clientX, y: event.clientY });
  });
  item.addEventListener('pointerdown', event => {
    if (event.button !== 0 || !['touch', 'pen'].includes(event.pointerType)) return;
    const startX = event.clientX;
    const startY = event.clientY;
    galleryLongPressStart = { x: startX, y: startY };
    clearTimeout(galleryLongPressTimer);
    galleryLongPressTimer = setTimeout(() => {
      suppressGalleryClickUntil = Date.now() + 700;
      openGalleryActionMenu(photo.id, { x: startX, y: startY });
    }, 560);
  });
  item.addEventListener('pointermove', event => {
    if (galleryLongPressStart && (Math.abs(event.clientX - galleryLongPressStart.x) > 10 || Math.abs(event.clientY - galleryLongPressStart.y) > 10)) {
      clearTimeout(galleryLongPressTimer);
    }
  });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach(type => {
    item.addEventListener(type, () => {
      clearTimeout(galleryLongPressTimer);
      galleryLongPressStart = null;
    });
  });
  return item;
}

function galleryText(key) {
  return window.I18n?.t(`gallery.${key}`) || key;
}

function renderFavoriteGallery(photos = getGallery()) {
  const favorites = photos.filter(photo => photo.favorite === true);
  const grid = document.getElementById('favoriteGalleryGrid');
  const empty = document.getElementById('favoriteGalleryEmpty');
  const count = document.getElementById('favoritePhotoCount');

  grid.innerHTML = '';
  count.textContent = galleryText('favoriteCount').replace('{count}', window.I18n?.formatNumber(favorites.length) ?? String(favorites.length));
  empty.hidden = favorites.length > 0;
  favorites.forEach(photo => grid.appendChild(createGalleryItem(photo)));
}

function togglePhotoFavorite(id) {
  const photos = getGallery();
  const photo = photos.find(item => item.id === id);
  if (!photo) return;

  photo.favorite = photo.favorite !== true;
  saveGallery(photos);
  renderGallery();
  if (currentLightboxId === id) renderLightboxPhoto();
}

function openLightbox(id) {
  const photos = getGallery();
  const photo = photos.find(p => p.id === id);
  if (!photo) return;

  clearTimeout(lightboxCloseTimer);
  stopGallerySlideshow();
  currentLightboxId = id;
  lightboxReturnFocus = document.activeElement;
  lightboxZoom = 1;
  lightboxRotation = 0;
  lightboxSlideshowPaused = false;
  document.getElementById('lightbox').classList.remove('is-closing');
  renderLightboxPhoto();
  const lightbox = document.getElementById('lightbox');
  lightbox.hidden = false;
  lightbox.classList.remove('is-opening');
  void lightbox.offsetWidth;
  lightbox.classList.add('is-opening');
  updateGallerySlideshowButton();
  startGallerySlideshow();
  document.getElementById('lightboxClose').focus();
}

function renderLightboxPhoto() {
  const photos = getGallery();
  const index = photos.findIndex(photo => photo.id === currentLightboxId);
  if (index < 0) return;

  const photo = photos[index];
  const image = document.getElementById('lightboxImg');
  image.classList.remove('media-photo-transition');
  image.src = photo.src;
  image.alt = photo.name || galleryText('openImage');
  updateLightboxTransform();
  if (getMediaPreferences().photoEffect !== 'none') {
    void image.offsetWidth;
    image.classList.add('media-photo-transition');
  }
  document.getElementById('lightboxCounter').textContent = `${index + 1} / ${photos.length}`;
  updateGalleryActionLabels(photo);
  updateGallerySlideshowButton();
}

function navigateLightbox(direction) {
  const photos = getGallery();
  const index = photos.findIndex(photo => photo.id === currentLightboxId);
  if (index < 0 || photos.length < 2) return;
  const nextIndex = (index + direction + photos.length) % photos.length;
  currentLightboxId = photos[nextIndex].id;
  lightboxZoom = 1;
  lightboxRotation = 0;
  renderLightboxPhoto();
  startGallerySlideshow();
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox.hidden) return;
  stopGallerySlideshow();
  closeGalleryActionMenu();
  document.getElementById('galleryInfoDialog').close();
  lightbox.classList.remove('is-opening');
  lightbox.classList.add('is-closing');
  currentLightboxId = null;
  lightboxZoom = 1;
  lightboxRotation = 0;
  lightboxCloseTimer = setTimeout(() => {
    lightbox.hidden = true;
    lightbox.classList.remove('is-closing');
    lightboxReturnFocus?.focus?.();
    lightboxReturnFocus = null;
  }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 220);
  document.getElementById('galleryViewerMenuTrigger').setAttribute('aria-expanded', 'false');
}

function deletePhoto(id) {
  const originalIndex = getGallery().findIndex(photo => photo.id === id);
  const photos = getGallery().filter(p => p.id !== id);
  saveGallery(photos);
  renderGallery();
  if (currentLightboxId === id) {
    if (photos.length) {
      currentLightboxId = photos[Math.min(Math.max(originalIndex, 0), photos.length - 1)].id;
      renderLightboxPhoto();
      startGallerySlideshow();
    } else {
      closeLightbox();
    }
  }
  showToast(`✅ ${galleryText('deleted')}`);
}

function openGalleryActionMenu(photoId, position, inViewer = false) {
  const photo = getGallery().find(item => item.id === photoId);
  const menu = document.getElementById('galleryActionMenu');
  if (!photo || !menu) return;
  galleryContextPhotoId = photoId;
  menu.querySelectorAll('[data-gallery-action^="zoom"], [data-gallery-action="rotate"], [data-gallery-action="reset"]')
    .forEach(button => { button.hidden = !inViewer; });
  updateGalleryActionLabels(photo);
  menu.hidden = false;

  const trigger = document.getElementById('galleryViewerMenuTrigger');
  if (inViewer) {
    trigger.setAttribute('aria-expanded', 'true');
    const bounds = trigger.getBoundingClientRect();
    menu.style.left = `${Math.max(8, bounds.right - menu.offsetWidth)}px`;
    menu.style.top = `${bounds.bottom + 8}px`;
  } else {
    menu.style.left = `${position.x}px`;
    menu.style.top = `${position.y}px`;
  }
  const bounds = menu.getBoundingClientRect();
  menu.style.left = `${Math.max(8, Math.min(bounds.left, innerWidth - bounds.width - 8))}px`;
  menu.style.top = `${Math.max(8, Math.min(bounds.top, innerHeight - bounds.height - 8))}px`;
  menu.querySelector('[role="menuitem"]:not([hidden])')?.focus();
}

function updateGalleryActionLabels(photo = getGallery().find(item => item.id === galleryContextPhotoId)) {
  if (!photo) return;
  const favoriteAction = document.querySelector('[data-gallery-action="favorite"]');
  if (favoriteAction) favoriteAction.textContent = galleryText(photo.favorite ? 'removeFavorite' : 'addFavorite');
}

function closeGalleryActionMenu(returnFocus = false) {
  const menu = document.getElementById('galleryActionMenu');
  if (!menu || menu.hidden) return;
  menu.hidden = true;
  document.getElementById('galleryViewerMenuTrigger').setAttribute('aria-expanded', 'false');
  if (returnFocus) {
    if (!document.getElementById('lightbox').hidden) document.getElementById('galleryViewerMenuTrigger').focus();
    else Array.from(document.querySelectorAll('.gallery-item')).find(item => item.dataset.id === galleryContextPhotoId)?.focus();
  }
}

function updateLightboxTransform() {
  const image = document.getElementById('lightboxImg');
  image.style.transform = `scale(${lightboxZoom}) rotate(${lightboxRotation}deg)`;
  image.classList.toggle('is-zoomed', lightboxZoom !== 1);
}

function gallerySlideshowDelay() {
  const preferences = getMediaPreferences();
  const selected = preferences.slideshowInterval === 'custom'
    ? preferences.customSlideshowSeconds
    : Number(preferences.slideshowInterval);
  return Math.max(1, Math.min(3600, Number(selected) || 3)) * 1000;
}

function stopGallerySlideshow(resetPause = true) {
  clearTimeout(lightboxSlideshowTimer);
  lightboxSlideshowTimer = null;
  if (resetPause) lightboxSlideshowPaused = false;
}

function startGallerySlideshow() {
  stopGallerySlideshow(false);
  const photos = getGallery();
  if (!currentLightboxId || !getMediaPreferences().slideshowEnabled || lightboxSlideshowPaused || photos.length < 2) return;
  lightboxSlideshowTimer = setTimeout(() => navigateLightbox(1), gallerySlideshowDelay());
}

function updateGallerySlideshowButton() {
  const button = document.getElementById('gallerySlideshowToggle');
  if (!button) return;
  const enabled = getMediaPreferences().slideshowEnabled;
  button.hidden = !enabled || !currentLightboxId;
  const action = lightboxSlideshowPaused ? 'resume' : 'pause';
  const icon = lightboxSlideshowPaused ? '▶' : 'Ⅱ';
  button.innerHTML = `${icon} <span>${galleryText(action)}</span>`;
  button.setAttribute('aria-label', galleryText(action));
}

function showGalleryInfo(photoId) {
  const photo = getGallery().find(item => item.id === photoId);
  if (!photo) return;
  const dialog = document.getElementById('galleryInfoDialog');
  const details = document.getElementById('galleryInfoDetails');
  details.replaceChildren();
  const rawSize = photo.src?.split(',')[1] || '';
  const approxBytes = photo.src?.includes(';base64,')
    ? Math.max(0, Math.floor(rawSize.length * 3 / 4) - (rawSize.endsWith('==') ? 2 : rawSize.endsWith('=') ? 1 : 0))
    : new TextEncoder().encode(rawSize).length;
  const date = photo.added ? new Date(photo.added) : null;
  const rows = [
    ['imageName', photo.name || `${galleryText('openImage')} ${photo.id}`],
    ['imageDate', date && !Number.isNaN(date.valueOf()) ? new Intl.DateTimeFormat(window.I18n?.getLocale() || undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(date) : galleryText('no')],
    ['imageSize', approxBytes ? `${(approxBytes / 1024).toFixed(1)} KB` : galleryText('no')],
    ['imageFavorite', galleryText(photo.favorite ? 'yes' : 'no')]
  ];
  rows.forEach(([key, value]) => {
    const term = document.createElement('dt');
    term.textContent = galleryText(key);
    const description = document.createElement('dd');
    description.textContent = value;
    details.append(term, description);
  });
  dialog.showModal();
}

function readGalleryFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== 'string') {
        reject(new Error(`Le fichier ${file.name} n’a pas pu être lu comme une image.`));
        return;
      }
      resolve(reader.result);
    };
    reader.onerror = () => reject(reader.error || new Error(`Impossible de lire le fichier ${file.name}.`));
    reader.onabort = () => reject(new Error(`La lecture du fichier ${file.name} a été interrompue.`));
    reader.readAsDataURL(file);
  });
}

function updateGalleryImportProgress(current, total) {
  const progress = document.getElementById('galleryImportProgress');
  const bar = document.getElementById('galleryImportProgressBar');
  const text = document.getElementById('galleryImportProgressText');
  if (!progress || !bar || !text) return;

  progress.hidden = false;
  bar.max = total;
  bar.value = current;
  text.textContent = window.I18n?.t('gallery.importProgress', { current, total })
    || `Importation des images : ${current} / ${total}`;
}

async function importGalleryFiles(files, input, addPhotoButton) {
  if (!files.length || galleryImportInProgress) return;
  galleryImportInProgress = true;
  input.value = '';
  if (addPhotoButton) addPhotoButton.disabled = true;
  updateGalleryImportProgress(0, files.length);

  const originalPhotos = getGallery();
  const photos = originalPhotos.slice();
  let savedPhotoCount = 0;
  let pendingBatchCount = 0;
  let failedCount = 0;
  let storageError = null;

  try {
    for (let index = 0; index < files.length; index += 1) {
      const file = files[index];
      try {
        const src = await readGalleryFile(file);
        photos.push({ id: generateId(), src, name: file.name, added: Date.now() });
        pendingBatchCount += 1;
      } catch (error) {
        failedCount += 1;
        console.error(`Erreur lors de la lecture de l’image ${file.name} :`, error);
      }

      updateGalleryImportProgress(index + 1, files.length);
      await new Promise(resolve => setTimeout(resolve, 0));

      if (pendingBatchCount >= GALLERY_IMPORT_SAVE_BATCH_SIZE || index === files.length - 1) {
        if (!pendingBatchCount) continue;
        try {
          saveGallery(photos);
          savedPhotoCount = photos.length - originalPhotos.length;
          pendingBatchCount = 0;
        } catch (error) {
          console.error('Erreur lors de l’enregistrement des images de la galerie :', error);
          photos.length = originalPhotos.length + savedPhotoCount;
          storageError = error;
          break;
        }
      }
    }

    renderGallery();
    if (storageError) {
      showToast(window.I18n?.t('gallery.importStorageError', { count: savedPhotoCount })
        || `Import arrêté : stockage indisponible. ${savedPhotoCount} image(s) enregistrée(s).`);
    } else if (failedCount) {
      showToast(window.I18n?.t('gallery.importSummary', { count: savedPhotoCount, failed: failedCount })
        || `${savedPhotoCount} image(s) ajoutée(s), ${failedCount} impossible(s) à lire.`);
    } else if (savedPhotoCount) {
      showToast(window.I18n?.t('gallery.photosAdded', { count: savedPhotoCount })
        || `${savedPhotoCount} photo${savedPhotoCount > 1 ? 's' : ''} ajoutée${savedPhotoCount > 1 ? 's' : ''} 🖼️`);
    }
  } finally {
    galleryImportInProgress = false;
    if (addPhotoButton) addPhotoButton.disabled = false;
    const progress = document.getElementById('galleryImportProgress');
    if (progress) progress.hidden = true;
  }
}

async function shareGalleryPhoto(photoId) {
  const photo = getGallery().find(item => item.id === photoId);
  if (!photo) return;
  try {
    const dataUrl = /^data:([^;,]+)?(;base64)?,([\s\S]*)$/.exec(photo.src || '');
    if (!dataUrl) throw new Error('Le format de cette image ne peut pas être partagé.');
    const mimeType = dataUrl[1] || 'image/png';
    const imageBytes = dataUrl[2]
      ? Uint8Array.from(atob(dataUrl[3]), character => character.charCodeAt(0))
      : new TextEncoder().encode(decodeURIComponent(dataUrl[3]));
    const blob = new Blob([imageBytes], { type: mimeType });
    const extension = ({ 'image/jpeg': 'jpg', 'image/png': 'png', 'image/gif': 'gif', 'image/webp': 'webp', 'image/svg+xml': 'svg', 'image/avif': 'avif' })[mimeType] || 'img';
    const file = new File([blob], `${photo.name || `souvenir-${photo.id}`}.${extension}`, { type: blob.type || 'image/png' });
    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file], title: galleryText('shareTitle') });
      showToast(galleryText('shareSuccess'));
      return;
    }
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = file.name;
    link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    showToast(galleryText('shareUnsupported'));
  } catch (error) {
    if (error.name === 'AbortError') return;
    console.error('Erreur lors du partage de l’image :', error);
    showToast(galleryText('shareError'));
  }
}

function performGalleryAction(action) {
  const photoId = galleryContextPhotoId || currentLightboxId;
  if (!photoId) return;
  closeGalleryActionMenu();
  if (action === 'favorite') {
    togglePhotoFavorite(photoId);
  } else if (action === 'delete') {
    if (confirm(galleryText('confirmDelete'))) deletePhoto(photoId);
  } else if (action === 'share') {
    shareGalleryPhoto(photoId);
  } else if (action === 'info') {
    showGalleryInfo(photoId);
  } else if (action === 'zoomIn') {
    lightboxZoom = Math.min(3, lightboxZoom + 0.25);
    updateLightboxTransform();
  } else if (action === 'zoomOut') {
    lightboxZoom = Math.max(1, lightboxZoom - 0.25);
    updateLightboxTransform();
  } else if (action === 'rotate') {
    lightboxRotation = (lightboxRotation + 90) % 360;
    updateLightboxTransform();
  } else if (action === 'reset') {
    lightboxZoom = 1;
    lightboxRotation = 0;
    updateLightboxTransform();
  }
}

function initGallery() {
  const input = document.getElementById('galleryInput');
  const addPhotoButton = document.getElementById('addPhotoBtn');

  input.addEventListener('change', () => {
    const files = Array.from(input.files || []);
    if (files.length) void importGalleryFiles(files, input, addPhotoButton);
  });

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('galleryViewerMenuTrigger').addEventListener('click', event => {
    if (document.getElementById('galleryActionMenu').hidden) {
      openGalleryActionMenu(currentLightboxId, null, true);
    } else {
      closeGalleryActionMenu();
    }
    event.stopPropagation();
  });
  document.getElementById('gallerySlideshowToggle').addEventListener('click', () => {
    lightboxSlideshowPaused = !lightboxSlideshowPaused;
    updateGallerySlideshowButton();
    startGallerySlideshow();
  });
  document.getElementById('lightboxPrev').addEventListener('click', () => navigateLightbox(-1));
  document.getElementById('lightboxNext').addEventListener('click', () => navigateLightbox(1));
  document.getElementById('galleryActionMenu').addEventListener('click', event => {
    const action = event.target.closest('[data-gallery-action]')?.dataset.galleryAction;
    if (action) performGalleryAction(action);
  });
  document.getElementById('galleryInfoClose').addEventListener('click', () => {
    document.getElementById('galleryInfoDialog').close();
  });
  const galleryInfoDialog = document.getElementById('galleryInfoDialog');
  galleryInfoDialog.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    event.preventDefault();
    event.stopPropagation();
    galleryInfoDialog.close();
  });
  galleryInfoDialog.addEventListener('click', event => {
    if (event.target === event.currentTarget) event.currentTarget.close();
  });
  document.addEventListener('pointerdown', event => {
    const menu = document.getElementById('galleryActionMenu');
    const trigger = document.getElementById('galleryViewerMenuTrigger');
    if (!menu.hidden && !menu.contains(event.target) && event.target !== trigger) closeGalleryActionMenu();
  });

  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !document.getElementById('galleryActionMenu').hidden) {
      event.preventDefault();
      event.stopPropagation();
      closeGalleryActionMenu(true);
      return;
    }
    if (document.getElementById('lightbox').hidden || document.getElementById('galleryInfoDialog').open) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') navigateLightbox(-1);
    if (event.key === 'ArrowRight') navigateLightbox(1);
  });

  document.getElementById('galleryActionMenu').addEventListener('keydown', event => {
    const items = Array.from(event.currentTarget.querySelectorAll('[role="menuitem"]:not([hidden])'));
    const index = items.indexOf(document.activeElement);
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0
      : event.key === 'End' ? items.length - 1
        : (index + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
    items[next]?.focus();
  });

  window.addEventListener('carnet:languagechange', () => {
    renderGallery();
    if (currentLightboxId) renderLightboxPhoto();
    updateGalleryActionLabels();
    updateGallerySlideshowButton();
  });

  renderGallery();
}

function getMediaPreferencesStorageKey() {
  const profileCode = getPairingState().myCode.trim().toUpperCase();
  return `${MEDIA_SETTINGS_STORAGE_KEY}:${profileCode}`;
}

function getMediaPreferences() {
  const stored = load(getMediaPreferencesStorageKey(), {});
  const preferences = {
    ...MEDIA_SETTINGS_DEFAULTS,
    ...(stored && typeof stored === 'object' && !Array.isArray(stored) ? stored : {})
  };
  const booleanPreferences = ['animations', 'glass', 'showFavorites', 'autoNext', 'shuffle', 'recordAnimation', 'lockScreen', 'visualizer', 'slideshowEnabled'];
  const validOptions = {
    density: ['comfortable', 'compact'],
    photoLayout: ['grid', 'mosaic'],
    photoSize: ['small', 'medium', 'large'],
    photoEffect: ['zoom', 'fade', 'none'],
    repeat: ['off', 'one', 'all'],
    playerStyle: ['signature', 'compact'],
    playlistOrder: ['added', 'title', 'recent'],
    slideshowInterval: ['3', '5', '10', 'custom']
  };

  booleanPreferences.forEach(name => {
    if (typeof preferences[name] !== 'boolean') preferences[name] = MEDIA_SETTINGS_DEFAULTS[name];
  });
  Object.entries(validOptions).forEach(([name, options]) => {
    if (!options.includes(preferences[name])) preferences[name] = MEDIA_SETTINGS_DEFAULTS[name];
  });
  preferences.favoriteTrackIds = Array.isArray(preferences.favoriteTrackIds)
    ? [...new Set(preferences.favoriteTrackIds.filter(id => typeof id === 'string' && id.length > 0))]
    : [];
  const customSeconds = Number(preferences.customSlideshowSeconds);
  preferences.customSlideshowSeconds = Number.isFinite(customSeconds)
    ? Math.max(1, Math.min(3600, Math.round(customSeconds)))
    : MEDIA_SETTINGS_DEFAULTS.customSlideshowSeconds;
  return preferences;
}

function applyMediaPreferences(preferences = getMediaPreferences()) {
  const media = document.getElementById('multimedia');
  if (!media) return;

  media.dataset.mediaAnimations = String(preferences.animations);
  media.dataset.mediaGlass = String(preferences.glass);
  media.dataset.mediaDensity = preferences.density;
  media.dataset.mediaPhotoLayout = preferences.photoLayout;
  media.dataset.mediaPhotoSize = preferences.photoSize;
  media.dataset.mediaShowFavorites = String(preferences.showFavorites);
  media.dataset.mediaPlayerStyle = preferences.playerStyle;
  media.dataset.mediaRecordAnimation = String(preferences.recordAnimation);
  media.dataset.mediaLockScreen = String(preferences.lockScreen);
  media.dataset.mediaVisualizer = String(preferences.visualizer);
  document.documentElement.dataset.mediaPhotoEffect = preferences.photoEffect;
  document.documentElement.dataset.mediaAnimations = String(preferences.animations);
  document.documentElement.dataset.mediaGlass = String(preferences.glass);
  updateVinylRotation(Boolean(playlistTracks[currentTrackIndex] && currentAudio && !currentAudio.paused));
  configureMediaSessionActions(preferences.lockScreen);
  updateMediaSessionMetadata();
  updatePlayerPlaybackState();
  const customIntervalRow = document.getElementById('galleryCustomIntervalRow');
  if (customIntervalRow) customIntervalRow.hidden = preferences.slideshowInterval !== 'custom';

  document.querySelectorAll('[data-media-setting]').forEach(control => {
    const value = preferences[control.dataset.mediaSetting];
    if (control.type === 'checkbox') control.checked = value;
    else control.value = value;
  });
  updateCurrentTrackFavoriteSetting();
  updateGallerySlideshowButton();
  startGallerySlideshow();
}

function updateCurrentTrackFavoriteSetting() {
  const button = document.getElementById('mediaCurrentTrackFavorite');
  const trackName = document.getElementById('mediaCurrentTrackName');
  if (!button || !trackName) return;

  const track = playlistTracks[currentTrackIndex];
  const isFavorite = Boolean(track && getMediaPreferences().favoriteTrackIds.includes(track.id));
  const labelKey = isFavorite ? 'media.removeFavoriteTrack' : 'media.favoriteTrack';
  const label = window.I18n?.t(labelKey) || (isFavorite ? 'Retirer des favoris' : 'Ajouter la piste aux favoris');
  button.disabled = !track;
  button.classList.toggle('is-favorite', isFavorite);
  button.setAttribute('aria-pressed', String(isFavorite));
  button.setAttribute('aria-label', label);
  button.title = label;
  button.textContent = isFavorite ? `⭐ ${label}` : `☆ ${label}`;
  trackName.textContent = track
    ? getTrackMetadata(track).title
    : window.I18n?.t('media.emptyTrack') || 'Aucune musique sélectionnée';
}

function toggleCurrentTrackFavorite() {
  const track = playlistTracks[currentTrackIndex];
  if (!track) {
    showToast(window.I18n?.t('media.addTrackHelp') || 'Ajoutez une piste pour commencer');
    return;
  }

  const preferences = getMediaPreferences();
  const favoriteTrackIds = new Set(preferences.favoriteTrackIds);
  const wasFavorite = favoriteTrackIds.has(track.id);
  if (wasFavorite) favoriteTrackIds.delete(track.id);
  else favoriteTrackIds.add(track.id);

  try {
    save(getMediaPreferencesStorageKey(), { ...preferences, favoriteTrackIds: [...favoriteTrackIds] });
  } catch (error) {
    console.error('Erreur lors de l’enregistrement du favori musical :', error);
    showToast(window.I18n?.t('media.favoriteError') || 'Impossible d’enregistrer ce favori.');
    return;
  }

  updateCurrentTrackFavoriteSetting();
  showToast(window.I18n?.t(wasFavorite ? 'media.favoriteRemoved' : 'media.favoriteAdded'));
}

function updatePlayerArtworkPreview(blob) {
  const image = document.getElementById('mediaPlayerPhotoPreview');
  const placeholder = document.getElementById('mediaPlayerPhotoPlaceholder');
  const removeButton = document.getElementById('mediaPlayerPhotoRemove');
  if (!image || !placeholder || !removeButton) return;

  if (playerArtworkPreviewObjectUrl) URL.revokeObjectURL(playerArtworkPreviewObjectUrl);
  playerArtworkPreviewObjectUrl = blob ? URL.createObjectURL(blob) : null;
  image.hidden = !playerArtworkPreviewObjectUrl;
  placeholder.hidden = Boolean(playerArtworkPreviewObjectUrl);
  removeButton.disabled = !customPlayerArtworkBlob;
  if (playerArtworkPreviewObjectUrl) image.src = playerArtworkPreviewObjectUrl;
  else image.removeAttribute('src');
}

function setPlayerArtworkDraftState(isDraft) {
  document.getElementById('mediaPlayerPhotoSave').hidden = !isDraft;
  document.getElementById('mediaPlayerPhotoCancel').hidden = !isDraft;
  document.getElementById('mediaPlayerPhotoChoose').disabled = isDraft;
}

function updateVinylCenterArtworkPreview(blob) {
  const image = document.getElementById('mediaVinylPhotoPreview');
  const placeholder = document.getElementById('mediaVinylPhotoPlaceholder');
  const removeButton = document.getElementById('mediaVinylPhotoRemove');
  const chooseButton = document.getElementById('mediaVinylPhotoChoose');
  if (!image || !placeholder || !removeButton || !chooseButton) return;

  if (vinylCenterArtworkPreviewObjectUrl) URL.revokeObjectURL(vinylCenterArtworkPreviewObjectUrl);
  vinylCenterArtworkPreviewObjectUrl = blob ? URL.createObjectURL(blob) : null;
  image.hidden = !vinylCenterArtworkPreviewObjectUrl;
  placeholder.hidden = Boolean(vinylCenterArtworkPreviewObjectUrl);
  removeButton.disabled = !customVinylCenterArtworkBlob;
  const chooseLabelKey = customVinylCenterArtworkBlob
    ? 'mediaSettings.replacePlayerPhoto'
    : 'mediaSettings.choosePlayerPhoto';
  chooseButton.dataset.i18n = chooseLabelKey;
  chooseButton.textContent = window.I18n?.t(chooseLabelKey) || 'Choisir une photo';
  if (vinylCenterArtworkPreviewObjectUrl) image.src = vinylCenterArtworkPreviewObjectUrl;
  else image.removeAttribute('src');
}

function setVinylCenterArtworkDraftState(isDraft) {
  document.getElementById('mediaVinylPhotoSave').hidden = !isDraft;
  document.getElementById('mediaVinylPhotoCancel').hidden = !isDraft;
  document.getElementById('mediaVinylPhotoChoose').disabled = isDraft;
}

function updateVinylCenterArtwork() {
  const image = document.getElementById('vinylCenterArtwork');
  if (!image) return;

  if (!customVinylCenterArtworkBlob) {
    image.hidden = true;
    image.removeAttribute('src');
    if (customVinylCenterArtworkObjectUrl) URL.revokeObjectURL(customVinylCenterArtworkObjectUrl);
    customVinylCenterArtworkObjectUrl = null;
    customVinylCenterArtworkObjectUrlBlob = null;
    return;
  }

  if (customVinylCenterArtworkObjectUrlBlob !== customVinylCenterArtworkBlob) {
    if (customVinylCenterArtworkObjectUrl) URL.revokeObjectURL(customVinylCenterArtworkObjectUrl);
    customVinylCenterArtworkObjectUrl = URL.createObjectURL(customVinylCenterArtworkBlob);
    customVinylCenterArtworkObjectUrlBlob = customVinylCenterArtworkBlob;
  }
  image.src = customVinylCenterArtworkObjectUrl;
  image.hidden = false;
}

function initVinylCenterArtworkSetting() {
  const input = document.getElementById('mediaVinylPhotoInput');
  const chooseButton = document.getElementById('mediaVinylPhotoChoose');
  const saveButton = document.getElementById('mediaVinylPhotoSave');
  const cancelButton = document.getElementById('mediaVinylPhotoCancel');
  const removeButton = document.getElementById('mediaVinylPhotoRemove');
  if (!input || !chooseButton || !saveButton || !cancelButton || !removeButton) return;

  let pendingArtwork = null;
  const cancelDraft = () => {
    pendingArtwork = null;
    input.value = '';
    updateVinylCenterArtworkPreview(customVinylCenterArtworkBlob);
    setVinylCenterArtworkDraftState(false);
  };

  chooseButton.addEventListener('click', () => input.click());
  input.addEventListener('change', () => {
    const file = input.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      input.value = '';
      showToast(window.I18n?.t('media.vinylPhotoInvalid') || 'Choisissez un fichier image valide.');
      return;
    }

    pendingArtwork = file.slice(0, file.size, file.type);
    updateVinylCenterArtworkPreview(pendingArtwork);
    setVinylCenterArtworkDraftState(true);
  });

  saveButton.addEventListener('click', async () => {
    if (!pendingArtwork) return;
    try {
      await saveVinylCenterArtwork(pendingArtwork);
      customVinylCenterArtworkBlob = pendingArtwork;
      cancelDraft();
      updateTrackArtwork(playlistTracks[currentTrackIndex]);
      showToast(window.I18n?.t('media.vinylPhotoSaved') || 'Photo du disque enregistrée.');
    } catch (error) {
      console.error('Erreur lors de l’enregistrement de la photo du disque :', error);
      showToast(window.I18n?.t('media.vinylPhotoError') || 'Impossible d’enregistrer la photo du disque.');
    }
  });

  cancelButton.addEventListener('click', cancelDraft);
  removeButton.addEventListener('click', async () => {
    try {
      await deleteVinylCenterArtwork();
      customVinylCenterArtworkBlob = null;
      cancelDraft();
      updateTrackArtwork(playlistTracks[currentTrackIndex]);
      showToast(window.I18n?.t('media.vinylPhotoRemoved') || 'Photo du disque supprimée.');
    } catch (error) {
      console.error('Erreur lors de la suppression de la photo du disque :', error);
      showToast(window.I18n?.t('media.vinylPhotoError') || 'Impossible de supprimer la photo du disque.');
    }
  });

  getVinylCenterArtwork()
    .then(blob => {
      customVinylCenterArtworkBlob = blob;
      updateVinylCenterArtworkPreview(blob);
      updateTrackArtwork(playlistTracks[currentTrackIndex]);
    })
    .catch(error => {
      console.error('Erreur lors du chargement de la photo du disque :', error);
      showToast(window.I18n?.t('media.vinylPhotoError') || 'Impossible de charger la photo du disque.');
    });
}

function initPlayerArtworkSetting() {
  const input = document.getElementById('mediaPlayerPhotoInput');
  const chooseButton = document.getElementById('mediaPlayerPhotoChoose');
  const saveButton = document.getElementById('mediaPlayerPhotoSave');
  const cancelButton = document.getElementById('mediaPlayerPhotoCancel');
  const removeButton = document.getElementById('mediaPlayerPhotoRemove');
  if (!input || !chooseButton || !saveButton || !cancelButton || !removeButton) return;

  let pendingArtwork = null;
  const cancelDraft = () => {
    pendingArtwork = null;
    input.value = '';
    updatePlayerArtworkPreview(customPlayerArtworkBlob);
    setPlayerArtworkDraftState(false);
  };

  chooseButton.addEventListener('click', () => input.click());
  input.addEventListener('change', () => {
    const file = input.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      input.value = '';
      showToast(window.I18n?.t('media.playerPhotoInvalid') || 'Choisissez un fichier image valide.');
      return;
    }

    pendingArtwork = file.slice(0, file.size, file.type);
    updatePlayerArtworkPreview(pendingArtwork);
    setPlayerArtworkDraftState(true);
  });

  saveButton.addEventListener('click', async () => {
    if (!pendingArtwork) return;
    try {
      await savePlayerArtwork(pendingArtwork);
      customPlayerArtworkBlob = pendingArtwork;
      cancelDraft();
      updateImmersiveArtwork();
      showToast(window.I18n?.t('media.playerPhotoSaved') || 'Photo du lecteur enregistrée.');
    } catch (error) {
      console.error('Erreur lors de l’enregistrement de la photo du lecteur :', error);
      showToast(window.I18n?.t('media.playerPhotoError') || 'Impossible d’enregistrer la photo du lecteur.');
    }
  });

  cancelButton.addEventListener('click', cancelDraft);
  removeButton.addEventListener('click', async () => {
    try {
      await deletePlayerArtwork();
      customPlayerArtworkBlob = null;
      cancelDraft();
      updateImmersiveArtwork();
      showToast(window.I18n?.t('media.playerPhotoRemoved') || 'Photo du lecteur supprimée.');
    } catch (error) {
      console.error('Erreur lors de la suppression de la photo du lecteur :', error);
      showToast(window.I18n?.t('media.playerPhotoError') || 'Impossible de supprimer la photo du lecteur.');
    }
  });

  getPlayerArtwork()
    .then(blob => {
      customPlayerArtworkBlob = blob;
      updatePlayerArtworkPreview(blob);
      updateImmersiveArtwork();
    })
    .catch(error => {
      console.error('Erreur lors du chargement de la photo du lecteur :', error);
      showToast(window.I18n?.t('media.playerPhotoError') || 'Impossible de charger la photo du lecteur.');
    });
}

function initMediaSettings() {
  const dialog = document.getElementById('mediaSettingsDialog');
  const openButton = document.getElementById('mediaSettingsOpen');
  const closeButton = document.getElementById('mediaSettingsClose');
  const doneButton = document.getElementById('mediaSettingsDone');
  const tabs = Array.from(document.querySelectorAll('[data-media-settings-tab]'));
  if (!dialog || !openButton || !tabs.length) return;

  initPlayerArtworkSetting();
  initVinylCenterArtworkSetting();
  let activeCategory = 'general';
  const selectCategory = (category, focus = false) => {
    activeCategory = category;
    tabs.forEach(tab => {
      const selected = tab.dataset.mediaSettingsTab === category;
      tab.classList.toggle('is-active', selected);
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && focus) tab.focus();
    });
    document.querySelectorAll('[data-media-settings-panel]').forEach(panel => {
      const selected = panel.dataset.mediaSettingsPanel === category;
      panel.hidden = !selected;
      panel.classList.toggle('is-active', selected);
    });
  };

  tabs.forEach(tab => tab.addEventListener('click', () => selectCategory(tab.dataset.mediaSettingsTab)));
  dialog.querySelector('.media-settings-tabs')?.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const nextCategory = event.key === 'Home' ? 'general'
      : event.key === 'End' ? 'music'
        : event.key === 'ArrowRight' ? 'photos' : 'general';
    const currentIndex = tabs.findIndex(tab => tab.dataset.mediaSettingsTab === activeCategory);
    const orderedCategories = tabs.map(tab => tab.dataset.mediaSettingsTab);
    const nextIndex = event.key === 'ArrowRight'
      ? (currentIndex + 1) % tabs.length
      : event.key === 'ArrowLeft'
        ? (currentIndex - 1 + tabs.length) % tabs.length
        : orderedCategories.indexOf(nextCategory);
    selectCategory(orderedCategories[nextIndex], true);
  });

  openButton.addEventListener('click', () => {
    applyMediaPreferences();
    dialog.showModal();
    tabs.find(tab => tab.dataset.mediaSettingsTab === activeCategory)?.focus();
  });
  closeButton?.addEventListener('click', () => dialog.close());
  doneButton?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => openButton.focus());

  dialog.querySelectorAll('[data-media-setting]').forEach(control => {
    control.addEventListener('change', () => {
      const name = control.dataset.mediaSetting;
      const value = control.type === 'checkbox'
        ? control.checked
        : control.type === 'number'
          ? Math.max(1, Math.min(3600, Math.round(Number(control.value) || MEDIA_SETTINGS_DEFAULTS[name])))
          : control.value;
      const preferences = { ...getMediaPreferences(), [name]: value };
      save(getMediaPreferencesStorageKey(), preferences);
      applyMediaPreferences(preferences);

      if (name === 'photoEffect' && !document.getElementById('lightbox').hidden) {
        renderLightboxPhoto();
      }
      if (name === 'playlistOrder') {
        renderPlaylist();
      }
    });
  });

  window.addEventListener('storage', event => {
    if (event.key === getMediaPreferencesStorageKey()) applyMediaPreferences();
  });

  selectCategory(activeCategory);
  applyMediaPreferences();
}

function sortPlaylistTracks(tracks, order = getMediaPreferences().playlistOrder) {
  const sortedTracks = [...tracks];
  if (order === 'title') {
    sortedTracks.sort((left, right) => left.name.localeCompare(right.name, undefined, { sensitivity: 'base' }));
  } else if (order === 'recent') {
    sortedTracks.sort((left, right) => (right.added || 0) - (left.added || 0));
  } else {
    sortedTracks.sort((left, right) => (left.added || 0) - (right.added || 0));
  }
  return sortedTracks;
}

async function renderPlaylist() {
  try {
    const currentTrackId = playlistTracks[currentTrackIndex]?.id;
    playlistTracks = sortPlaylistTracks(await getStoredAudios());
    if (currentTrackId) {
      currentTrackIndex = playlistTracks.findIndex(track => track.id === currentTrackId);
    }
    const tracks = playlistTracks;
    const list = document.getElementById('playlistList');

    if (!tracks.length) {
      list.innerHTML = `<div class="empty-state"><span class="empty-icon">🎵</span><p>${window.I18n?.t('media.noTracks') || 'Aucune musique pour l\'instant'}</p><p class="empty-sub">${window.I18n?.t('media.addTrackHelp') || 'Ajoutez vos pistes préférées !'}</p></div>`;
      updatePlayerPlaybackState();
      return;
    }

    list.innerHTML = '';
    tracks.forEach((track, index) => {
      const item = document.createElement('div');
      item.className = 'playlist-item';
      item.classList.toggle('is-current', index === currentTrackIndex);
      item.classList.toggle('is-playing', index === currentTrackIndex && Boolean(currentAudio && !currentAudio.paused));
      item.innerHTML = `
        <div class="playlist-info">
          <span class="playlist-icon">🎶</span>
          <div>
            <div class="playlist-title">${escapeHtml(track.name)}</div>
            <div class="playlist-meta">${escapeHtml(track.type || window.I18n?.t('media.audioFile') || 'Fichier audio')}</div>
          </div>
        </div>
        <div class="playlist-actions">
          <button class="btn-secondary btn-sm" data-play-index="${index}">${window.I18n?.t('media.listen') || 'Écouter'}</button>
          <button class="playlist-delete-btn" type="button" data-delete-track-id="${track.id}" aria-label="${window.I18n?.t('media.deleteTrack') || 'Supprimer la musique'}">🗑️</button>
        </div>
      `;
      list.appendChild(item);
    });

    list.querySelectorAll('[data-play-index]').forEach(btn => {
      btn.addEventListener('click', () => playTrack(Number(btn.dataset.playIndex)));
    });

    list.querySelectorAll('[data-delete-track-id]').forEach(btn => {
      btn.addEventListener('click', (event) => {
        if (!confirm(window.I18n?.t('media.confirmDeleteTrack') || 'Voulez-vous vraiment supprimer cette musique ?')) return;
        const trackId = event.currentTarget.dataset.deleteTrackId;
        const deleteItem = event.currentTarget.closest('.playlist-item');
        deleteItem?.classList.add('is-removing');
        setTimeout(() => {
          if (deleteItem?.isConnected) {
            deleteTrack(trackId);
          }
        }, 180);
      });
    });
  } catch (error) {
    console.error('Erreur lors du chargement de la playlist :', error);
  }
}

async function deleteTrack(id) {
  const trackIndex = playlistTracks.findIndex(track => track.id === id);
  if (trackIndex === -1) return;

  const wasCurrentTrack = currentTrackIndex === trackIndex;
  const audio = currentAudio;

  try {
    await deleteAudioRecord(id);
  } catch (error) {
    console.error('Erreur lors de la suppression de la musique :', error);
    showToast(window.I18n?.t('media.deleteTrackError') || 'Impossible de supprimer cette piste.');
    return;
  }

  const preferences = getMediaPreferences();
  if (preferences.favoriteTrackIds.includes(id)) {
    try {
      save(getMediaPreferencesStorageKey(), {
        ...preferences,
        favoriteTrackIds: preferences.favoriteTrackIds.filter(trackId => trackId !== id)
      });
    } catch (error) {
      console.error('Erreur lors du nettoyage du favori musical :', error);
      showToast(window.I18n?.t('media.favoriteError') || 'Impossible d’enregistrer ce favori.');
    }
  }

  const refreshedTracks = sortPlaylistTracks(await getStoredAudios());
  playlistTracks = refreshedTracks;

  if (wasCurrentTrack) {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      audio.src = '';
      audio.load();
    }

    if (playlistTracks.length === 0) {
      currentTrackIndex = -1;
      if (currentAudioObjectUrl) URL.revokeObjectURL(currentAudioObjectUrl);
      currentAudioObjectUrl = null;
      updatePlayerUI();
    } else {
      const nextIndex = trackIndex < playlistTracks.length ? trackIndex : playlistTracks.length - 1;
      currentTrackIndex = nextIndex;
      await playTrack(nextIndex);
    }
  } else {
    if (currentTrackIndex > trackIndex) {
      currentTrackIndex -= 1;
    }
    updatePlayerUI();
  }

  await renderPlaylist();
  showToast(`✅ ${window.I18n?.t('media.deleted') || 'Musique supprimée avec succès.'}`);
}

function updatePlayerUI() {
  const track = playlistTracks[currentTrackIndex];
  const titleEl = document.getElementById('trackTitle');
  const artistEl = document.getElementById('trackArtist');
  const albumEl = document.getElementById('trackAlbum');
  const progressEl = document.getElementById('trackProgress');
  const timeEl = document.getElementById('trackTime');
  updatePlayerPlaybackState();

  if (!track) {
    toggleVinylFullscreen(false);
    titleEl.textContent = window.I18n?.t('media.emptyTrack') || 'Aucune musique sélectionnée';
    artistEl.textContent = window.I18n?.t('media.addTrackHelp') || 'Ajoutez une piste pour commencer';
    albumEl.textContent = window.I18n?.t('media.albumDefault') || 'Notre Carnet';
    progressEl.value = 0;
    timeEl.textContent = '00:00 / 00:00';
    updatePlayerProgressDisplays();
    updateTrackArtwork(null);
    updateCurrentTrackFavoriteSetting();
    updateImmersiveArtwork(null);
    updateMediaSessionMetadata();
    return;
  }

  const metadata = getTrackMetadata(track);
  titleEl.textContent = metadata.title;
  artistEl.textContent = metadata.artist;
  albumEl.textContent = metadata.album;
  updateCurrentTrackFavoriteSetting();
  progressEl.value = 0;
  timeEl.textContent = '00:00 / 00:00';
  updatePlayerProgressDisplays();
  updateTrackArtwork(track);
  updateImmersiveArtwork(track);
  updatePlayerVolumeDisplay();
  updateMediaSessionMetadata();
  toggleVinylFullscreen(document.getElementById('playlistPlayer').classList.contains('is-vinyl-fullscreen'));
}

function updatePlayerPlaybackState() {
  const isPlaying = Boolean(playlistTracks[currentTrackIndex] && currentAudio && !currentAudio.paused);
  document.getElementById('playlistPlayer').classList.toggle('is-playing', isPlaying);
  updateVinylRotation(isPlaying);
  document.querySelectorAll('#playlistList .playlist-item').forEach((item, index) => {
    const isCurrent = index === currentTrackIndex;
    item.classList.toggle('is-current', isCurrent);
    item.classList.toggle('is-playing', isCurrent && isPlaying);
  });
  const button = document.getElementById('playPauseBtn');
  button.classList.toggle('is-playing', isPlaying);
  const actionLabel = window.I18n?.t(isPlaying ? 'media.pauseTrack' : 'media.playTrack')
    || (isPlaying ? 'Mettre la piste en pause' : 'Lire la piste');
  button.setAttribute('aria-label', actionLabel);
  button.title = actionLabel;
  const session = navigator.mediaSession;
  if (session) {
    session.playbackState = !getMediaPreferences().lockScreen
      ? 'none'
      : isPlaying ? 'playing' : playlistTracks[currentTrackIndex] ? 'paused' : 'none';
    if (getMediaPreferences().lockScreen) updateMediaSessionPosition();
  }
}

function getTrackMetadata(track) {
  const filename = (track?.name || '').replace(/\.[^.]+$/, '');
  const artistTitle = filename.match(/^(.+?)\s+[-–—]\s+(.+)$/);
  return {
    title: artistTitle ? artistTitle[2] : filename,
    artist: artistTitle ? artistTitle[1] : (window.I18n?.t('media.unknownArtist') || 'Artiste inconnu'),
    album: track?.album || window.I18n?.t('media.albumDefault') || 'Notre Carnet'
  };
}

function updatePlayerProgressDisplays() {
  const trackProgress = document.getElementById('trackProgress');
  const trackTime = document.getElementById('trackTime');
  const elapsedDisplay = document.getElementById('trackElapsed');
  const remainingDisplay = document.getElementById('trackRemaining');
  if (!trackTime || !elapsedDisplay || !remainingDisplay) return;

  const duration = currentAudio?.duration;
  if (!Number.isFinite(duration) || duration <= 0) {
    elapsedDisplay.textContent = '00:00';
    remainingDisplay.textContent = '−00:00';
    trackTime.textContent = '00:00 / 00:00';
    if (trackProgress && !currentAudio) trackProgress.value = 0;
    return;
  }

  const currentTime = Math.min(currentAudio.currentTime, duration);
  if (trackProgress) trackProgress.value = String((currentTime / duration) * 100);
  elapsedDisplay.textContent = formatMediaTime(currentTime);
  remainingDisplay.textContent = `−${formatMediaTime(duration - currentTime)}`;
  trackTime.textContent = `${formatMediaTime(currentTime)} / ${formatMediaTime(duration)}`;
}

function updatePlayerVolumeDisplay() {
  const volumeControl = document.getElementById('trackVolume');
  if (volumeControl) volumeControl.value = String(currentAudio?.volume ?? 1);
}

function getTrackArtworkDataUrl(track) {
  if (!track?.artwork || !(track.artwork instanceof Blob)) return Promise.resolve(null);
  if (artworkCacheTrackId === track.id && artworkCacheBlob === track.artwork) return artworkCachePromise;

  artworkCacheTrackId = track.id;
  artworkCacheBlob = track.artwork;
  artworkCachePromise = new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : null);
    reader.onerror = () => reject(reader.error || new Error('Impossible de lire la pochette.'));
    reader.readAsDataURL(track.artwork);
  });
  return artworkCachePromise;
}

function updateImmersiveArtwork(track = playlistTracks[currentTrackIndex]) {
  const image = document.getElementById('immersiveArtwork');
  const backdrop = document.getElementById('immersiveBackdropArtwork');
  const placeholder = document.getElementById('immersiveArtworkPlaceholder');
  if (!image || !backdrop || !placeholder) return;

  const requestId = ++immersiveArtworkRequestId;
  const setSource = source => {
    if (requestId !== immersiveArtworkRequestId) return;
    if (source) {
      image.src = source;
      backdrop.src = source;
      image.hidden = false;
      placeholder.hidden = true;
    } else {
      image.removeAttribute('src');
      backdrop.removeAttribute('src');
      image.hidden = true;
      placeholder.hidden = false;
    }
  };

  if (customPlayerArtworkBlob) {
    if (customPlayerArtworkObjectUrlBlob !== customPlayerArtworkBlob) {
      if (customPlayerArtworkObjectUrl) URL.revokeObjectURL(customPlayerArtworkObjectUrl);
      customPlayerArtworkObjectUrl = URL.createObjectURL(customPlayerArtworkBlob);
      customPlayerArtworkObjectUrlBlob = customPlayerArtworkBlob;
    }
    setSource(customPlayerArtworkObjectUrl);
    return;
  }
  if (customPlayerArtworkObjectUrl) URL.revokeObjectURL(customPlayerArtworkObjectUrl);
  customPlayerArtworkObjectUrl = null;
  customPlayerArtworkObjectUrlBlob = null;

  if (!track?.artwork) {
    setSource(null);
    return;
  }

  getTrackArtworkDataUrl(track)
    .then(setSource)
    .catch(error => {
      console.error('Erreur lors du chargement de la pochette immersive :', error);
      setSource(null);
    });
}

function updateTrackArtwork(track) {
  const image = document.getElementById('trackArtwork');
  const vinylImage = document.getElementById('vinylCenterArtwork');
  const label = document.getElementById('trackLabel');
  const cover = document.getElementById('trackCover');
  if (!image || !label || !cover) return;

  if (customVinylCenterArtworkBlob) {
    image.hidden = true;
    label.hidden = true;
    if (vinylImage) {
      updateVinylCenterArtwork();
      cover.setAttribute('aria-label', window.I18n?.t('media.vinylCenterArtwork') || 'Photo personnalisée du disque');
    }
    return;
  }
  if (vinylImage) updateVinylCenterArtwork();
  cover.setAttribute('aria-label', window.I18n?.t('media.trackArtworkFallback') || 'Illustration de la piste');

  if (!track?.artwork) {
    image.hidden = true;
    image.removeAttribute('src');
    label.hidden = false;
    cover.setAttribute('aria-label', window.I18n?.t('media.trackArtworkFallback') || 'Illustration de la piste');
    return;
  }

  getTrackArtworkDataUrl(track).then(dataUrl => {
    if (!dataUrl || customVinylCenterArtworkBlob || playlistTracks[currentTrackIndex] !== track) return;
    image.src = dataUrl;
    image.hidden = false;
    label.hidden = true;
    cover.setAttribute('aria-label', window.I18n?.t('media.trackArtwork') || 'Pochette de la piste');
  }).catch(error => {
    console.error('Erreur lors du chargement de la pochette :', error);
    if (customVinylCenterArtworkBlob || playlistTracks[currentTrackIndex] !== track) return;
    image.hidden = true;
    label.hidden = false;
  });
}

function updateMediaSessionMetadata() {
  const session = navigator.mediaSession;
  if (!session) return;

  const track = playlistTracks[currentTrackIndex];
  if (!getMediaPreferences().lockScreen || !track || typeof window.MediaMetadata !== 'function') {
    session.metadata = null;
    return;
  }

  const details = getTrackMetadata(track);
  const metadata = { title: details.title, artist: details.artist, album: details.album };
  session.metadata = new window.MediaMetadata(metadata);

  getTrackArtworkDataUrl(track).then(artwork => {
    if (!artwork || playlistTracks[currentTrackIndex] !== track || !getMediaPreferences().lockScreen) return;
    session.metadata = new window.MediaMetadata({
      ...metadata,
      artwork: [{ src: artwork, sizes: '512x512', type: track.artwork.type || 'image/jpeg' }]
    });
  }).catch(error => {
    console.error('Erreur lors de la préparation de la pochette Media Session :', error);
  });
}

function configureMediaSessionActions(enabled) {
  const session = navigator.mediaSession;
  if (!session || typeof session.setActionHandler !== 'function') return;

  const handlers = enabled ? {
    play: playMediaSessionTrack,
    pause: () => {
      if (currentTrackIndex >= 0) getAudioPlayer().pause();
    },
    previoustrack: playPreviousTrack,
    nexttrack: playNextTrack,
    seekto: details => {
      const audio = getAudioPlayer();
      if (Number.isFinite(details.seekTime) && Number.isFinite(audio.duration)) {
        audio.currentTime = Math.max(0, Math.min(audio.duration, details.seekTime));
      }
    }
  } : {};

  ['play', 'pause', 'previoustrack', 'nexttrack', 'seekto'].forEach(action => {
    try {
      session.setActionHandler(action, handlers[action] || null);
    } catch (error) {
      if (error.name !== 'NotSupportedError') {
        console.error(`Impossible d’enregistrer la commande Media Session "${action}" :`, error);
      }
    }
  });
}

function playMediaSessionTrack() {
  if (currentTrackIndex < 0) {
    playTrack(0);
    return;
  }
  const audio = getAudioPlayer();
  if (audio.paused) {
    audio.play().catch(() => showToast(window.I18n?.t('media.playbackError') || 'Lecture impossible pour cette piste.'));
  }
}

function updateMediaSessionPosition() {
  const session = navigator.mediaSession;
  const audio = currentAudio;
  if (!session || typeof session.setPositionState !== 'function' || !audio || !Number.isFinite(audio.duration) || audio.duration <= 0) return;
  try {
    session.setPositionState({
      duration: audio.duration,
      playbackRate: audio.playbackRate || 1,
      position: Math.min(audio.currentTime, audio.duration)
    });
  } catch (error) {
    if (error.name !== 'TypeError') console.error('Impossible de synchroniser la position Media Session :', error);
  }
}

function pushVinylFullscreenHistoryEntry() {
  if (!window.history?.pushState) return;
  ensureAppBackSentinel();
  vinylImmersivePreviousHistoryState = history.state;
  vinylImmersivePreviousUrl = location.href;
  history.pushState(
    { ...(history.state && typeof history.state === 'object' ? history.state : {}), [VINYL_FULLSCREEN_HISTORY_KEY]: true },
    '',
    location.href
  );
}

function lockVinylImmersiveScroll() {
  const body = document.body;
  const root = document.documentElement;
  vinylImmersiveScrollPosition = { x: window.scrollX, y: window.scrollY };
  vinylImmersivePreviousScrollOffsets = {
    top: body.style.getPropertyValue('--vinyl-immersive-scroll-top'),
    topPriority: body.style.getPropertyPriority('--vinyl-immersive-scroll-top'),
    left: body.style.getPropertyValue('--vinyl-immersive-scroll-left'),
    leftPriority: body.style.getPropertyPriority('--vinyl-immersive-scroll-left')
  };
  body.style.setProperty('--vinyl-immersive-scroll-top', `${-vinylImmersiveScrollPosition.y}px`);
  body.style.setProperty('--vinyl-immersive-scroll-left', `${-vinylImmersiveScrollPosition.x}px`);
  root.classList.add('is-vinyl-immersive');
  body.classList.add('is-vinyl-immersive');
}

function restoreVinylImmersiveScroll() {
  const position = vinylImmersiveScrollPosition;
  const previousOffsets = vinylImmersivePreviousScrollOffsets;
  const body = document.body;
  body.classList.remove('is-vinyl-immersive');
  document.documentElement.classList.remove('is-vinyl-immersive');
  if (previousOffsets) {
    if (previousOffsets.top) {
      body.style.setProperty('--vinyl-immersive-scroll-top', previousOffsets.top, previousOffsets.topPriority);
    } else {
      body.style.removeProperty('--vinyl-immersive-scroll-top');
    }
    if (previousOffsets.left) {
      body.style.setProperty('--vinyl-immersive-scroll-left', previousOffsets.left, previousOffsets.leftPriority);
    } else {
      body.style.removeProperty('--vinyl-immersive-scroll-left');
    }
  }
  vinylImmersiveScrollPosition = null;
  vinylImmersivePreviousScrollOffsets = null;
  if (position) {
    const root = document.documentElement;
    const previousBehavior = root.style.getPropertyValue('scroll-behavior');
    const previousBehaviorPriority = root.style.getPropertyPriority('scroll-behavior');
    root.style.setProperty('scroll-behavior', 'auto', 'important');
    window.scrollTo(position.x, position.y);
    if (previousBehavior) {
      root.style.setProperty('scroll-behavior', previousBehavior, previousBehaviorPriority);
    } else {
      root.style.removeProperty('scroll-behavior');
    }
  }
}

function toggleVinylFullscreen(forceState, options = {}) {
  const player = document.getElementById('playlistPlayer');
  if (!player) return;

  const isFullscreen = forceState ?? !player.classList.contains('is-vinyl-fullscreen');
  const wasFullscreen = player.classList.contains('is-vinyl-fullscreen');
  const body = document.body;

  if (isFullscreen && !wasFullscreen) {
    if (vinylImmersiveExitTimer !== null) {
      window.clearTimeout(vinylImmersiveExitTimer);
      vinylImmersiveExitTimer = null;
    }
    player.classList.remove('is-vinyl-immersive-exiting');
    body.classList.remove('is-vinyl-immersive-exiting');
    vinylImmersivePreviousFocus = document.activeElement;
    pushVinylFullscreenHistoryEntry();
    vinylImmersiveLastTap = null;
    lockVinylImmersiveScroll();
    player.classList.add('is-vinyl-fullscreen');
  } else if (!isFullscreen && wasFullscreen) {
    if (player.classList.contains('is-vinyl-immersive-exiting')) return;

    if (history.state?.[VINYL_FULLSCREEN_HISTORY_KEY]) {
      history.replaceState(vinylImmersivePreviousHistoryState, '', vinylImmersivePreviousUrl || location.href);
      vinylImmersivePreviousHistoryState = null;
      vinylImmersivePreviousUrl = '';
    }

    const finishExit = () => {
      vinylImmersiveExitTimer = null;
      player.classList.remove('is-vinyl-fullscreen', 'is-vinyl-immersive-exiting');
      body.classList.remove('is-vinyl-immersive-exiting');
      restoreVinylImmersiveScroll();
      if (vinylImmersivePreviousFocus instanceof HTMLElement && vinylImmersivePreviousFocus.isConnected) {
        vinylImmersivePreviousFocus.focus({ preventScroll: true });
      }
      vinylImmersivePreviousFocus = null;
    };

    player.classList.add('is-vinyl-immersive-exiting');
    body.classList.add('is-vinyl-immersive-exiting');
    const media = document.getElementById('multimedia');
    const motionReduced = media?.dataset.mediaAnimations === 'false'
      || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (options.instant || motionReduced) {
      finishExit();
    } else {
      vinylImmersiveExitTimer = window.setTimeout(finishExit, 220);
    }
    return;
  } else if (isFullscreen && wasFullscreen && player.classList.contains('is-vinyl-immersive-exiting')) {
    if (vinylImmersiveExitTimer !== null) {
      window.clearTimeout(vinylImmersiveExitTimer);
      vinylImmersiveExitTimer = null;
    }
    player.classList.remove('is-vinyl-immersive-exiting');
    body.classList.remove('is-vinyl-immersive-exiting');
    if (!history.state?.[VINYL_FULLSCREEN_HISTORY_KEY]) pushVinylFullscreenHistoryEntry();
  } else {
    return;
  }
}

function handleVinylImmersivePointerDown(event) {
  const player = document.getElementById('playlistPlayer');
  if (!player || event.button !== 0 || !event.isPrimary) return;
  if (player.classList.contains('is-vinyl-immersive-exiting')) {
    vinylImmersiveLastTap = null;
    return;
  }

  const isFullscreen = player.classList.contains('is-vinyl-fullscreen');
  const targetSelector = isFullscreen ? '.immersive-artwork-frame' : '#trackCover';
  const toggleTarget = event.target instanceof Element ? event.target.closest(targetSelector) : null;
  if (!toggleTarget || (!isFullscreen && !playlistTracks[currentTrackIndex])) {
    vinylImmersiveLastTap = null;
    return;
  }

  const mode = isFullscreen ? 'fullscreen' : 'normal';
  const now = performance.now();
  if (vinylImmersiveLastTap?.mode === mode && now - vinylImmersiveLastTap.time <= 450) {
    vinylImmersiveLastTap = null;
    event.preventDefault();
    event.stopImmediatePropagation();
    toggleVinylFullscreen(!isFullscreen);
    return;
  }
  vinylImmersiveLastTap = { mode, time: now };
}

function updateVinylRotation(isPlaying) {
  const cover = document.getElementById('trackCover');
  const media = document.getElementById('multimedia');
  if (!cover || !media) return;

  const motionAllowed = media.dataset.mediaAnimations !== 'false'
    && media.dataset.mediaRecordAnimation !== 'false'
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!motionAllowed) {
    vinylDecelerationToken += 1;
    if (vinylDecelerationFrame !== null) cancelAnimationFrame(vinylDecelerationFrame);
    vinylDecelerationFrame = null;
    vinylRotationAnimation?.cancel();
    vinylRotationAnimation = null;
    cover.classList.remove('is-rotating');
    return;
  }

  if (typeof cover.animate !== 'function') {
    cover.classList.toggle('is-rotating', isPlaying);
    return;
  }

  if (isPlaying) {
    vinylDecelerationToken += 1;
    if (vinylDecelerationFrame !== null) cancelAnimationFrame(vinylDecelerationFrame);
    vinylDecelerationFrame = null;
    if (!vinylRotationAnimation || vinylRotationAnimation.playState === 'idle') {
      vinylRotationAnimation = cover.animate(
        [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
        { duration: 18000, iterations: Infinity, easing: 'linear' }
      );
      vinylRotationAnimation.pause();
    }
    vinylRotationAnimation.playbackRate = 1;
    vinylRotationAnimation.play();
    return;
  }

  if (!vinylRotationAnimation || vinylRotationAnimation.playState !== 'running' || vinylDecelerationFrame !== null) return;

  const animation = vinylRotationAnimation;
  const initialRate = animation.playbackRate;
  const startTime = performance.now();
  const token = ++vinylDecelerationToken;
  const decelerate = now => {
    if (token !== vinylDecelerationToken) return;
    const progress = Math.min((now - startTime) / 750, 1);
    animation.playbackRate = initialRate * (1 - progress) ** 2;
    if (progress < 1) {
      vinylDecelerationFrame = requestAnimationFrame(decelerate);
    } else {
      animation.pause();
      animation.playbackRate = 1;
      vinylDecelerationFrame = null;
    }
  };
  vinylDecelerationFrame = requestAnimationFrame(decelerate);
}

function getAudioPlayer() {
  if (!currentAudio) {
    currentAudio = new Audio();
    currentAudio.addEventListener('ended', () => playNextTrack(true));
    currentAudio.addEventListener('play', updatePlayerPlaybackState);
    currentAudio.addEventListener('pause', updatePlayerPlaybackState);
    currentAudio.addEventListener('volumechange', updatePlayerVolumeDisplay);
    currentAudio.addEventListener('timeupdate', () => {
      updatePlayerProgressDisplays();
      updateMediaSessionPosition();
    });
    currentAudio.addEventListener('loadedmetadata', () => {
      updatePlayerProgressDisplays();
      const currentTrack = playlistTracks[currentTrackIndex];
      if (currentTrack) {
        const metadata = getTrackMetadata(currentTrack);
        document.getElementById('trackArtist').textContent = metadata.artist;
        document.getElementById('trackAlbum').textContent = metadata.album;
      }
      updateMediaSessionPosition();
    });
  }
  return currentAudio;
}

async function playTrack(index) {
  if (!playlistTracks.length) return;
  if (index < 0 || index >= playlistTracks.length) return;

  currentTrackIndex = index;
  const track = playlistTracks[index];
  const audio = getAudioPlayer();
  const objectUrl = URL.createObjectURL(track.file);
  audio.src = objectUrl;
  audio.load();
  if (currentAudioObjectUrl) URL.revokeObjectURL(currentAudioObjectUrl);
  currentAudioObjectUrl = objectUrl;
  updatePlayerUI();
  await audio.play().catch(() => {
    showToast(window.I18n?.t('media.playbackError') || 'Lecture impossible pour cette piste.');
  });
}

function playPauseTrack() {
  if (!playlistTracks.length) return;
  if (currentTrackIndex === -1) {
    playTrack(0);
    return;
  }

  const audio = getAudioPlayer();
  if (audio.paused) {
    audio.play().catch(() => showToast(window.I18n?.t('media.playbackError') || 'Lecture impossible pour cette piste.'));
  } else {
    audio.pause();
  }
  updatePlayerUI();
}

function playNextTrack(automatic = false) {
  if (!playlistTracks.length) return;
  const preferences = getMediaPreferences();
  if (automatic && preferences.repeat === 'one') {
    const audio = getAudioPlayer();
    audio.currentTime = 0;
    audio.play().catch(() => showToast(window.I18n?.t('media.playbackError') || 'Lecture impossible pour cette piste.'));
    return;
  }
  if (automatic && !preferences.autoNext) {
    updatePlayerPlaybackState();
    return;
  }
  if (automatic && currentTrackIndex >= playlistTracks.length - 1 && preferences.repeat !== 'all') {
    updatePlayerPlaybackState();
    return;
  }

  let nextIndex;
  if (preferences.shuffle && playlistTracks.length > 1) {
    const offset = Math.floor(Math.random() * (playlistTracks.length - 1)) + 1;
    nextIndex = currentTrackIndex < 0 ? Math.floor(Math.random() * playlistTracks.length) : (currentTrackIndex + offset) % playlistTracks.length;
  } else {
    nextIndex = currentTrackIndex >= playlistTracks.length - 1 ? 0 : currentTrackIndex + 1;
  }
  playTrack(nextIndex);
}

function playPreviousTrack() {
  if (!playlistTracks.length) return;
  const previousIndex = currentTrackIndex <= 0 ? playlistTracks.length - 1 : currentTrackIndex - 1;
  playTrack(previousIndex);
}

async function initMedia() {
  const photoInput = document.getElementById('galleryInput');
  const audioInput = document.getElementById('audioInput');
  const addPhotoBtn = document.getElementById('addPhotoBtn');
  const addTrackBtn = document.getElementById('addTrackBtn');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const prevTrackBtn = document.getElementById('prevTrackBtn');
  const nextTrackBtn = document.getElementById('nextTrackBtn');
  const trackProgress = document.getElementById('trackProgress');
  const trackVolume = document.getElementById('trackVolume');
  const trackFavoriteButton = document.getElementById('mediaCurrentTrackFavorite');

  if (addPhotoBtn && photoInput) {
    addPhotoBtn.onclick = () => photoInput.click();
  }

  if (addTrackBtn && audioInput) {
    addTrackBtn.onclick = () => audioInput.click();
    audioInput.addEventListener('change', async () => {
      const files = Array.from(audioInput.files || []);
      if (!files.length) return;

      const validFiles = files.filter(file => {
        if (!getSupportedAudioFile(file)) {
          showToast(window.I18n?.t('media.unsupportedFormat', { name: file.name }) || `Format non pris en charge : ${file.name}`);
          return false;
        }
        return true;
      });
      if (!validFiles.length) return;

      try {
        for (const file of validFiles) {
          const record = { id: generateId(), name: file.name, type: file.type || 'audio/mpeg', file, added: Date.now() };
          await saveAudioRecord(record);
        }
        await renderPlaylist();
        showToast(window.I18n?.t('media.trackAdded', {
          count: window.I18n?.formatNumber(validFiles.length) || validFiles.length
        }) || `${validFiles.length} piste${validFiles.length > 1 ? 's' : ''} ajoutée${validFiles.length > 1 ? 's' : ''} 🎵`);
      } catch (error) {
        console.error('Erreur lors de l’ajout de la musique :', error);
        showToast(window.I18n?.t('media.addTrackError') || 'Impossible d’ajouter cette piste.');
      } finally {
        audioInput.value = '';
      }
    });
  }

  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', playPauseTrack);
  }

  if (prevTrackBtn) {
    prevTrackBtn.addEventListener('click', playPreviousTrack);
  }

  if (nextTrackBtn) {
    nextTrackBtn.addEventListener('click', playNextTrack);
  }

  trackFavoriteButton?.addEventListener('click', toggleCurrentTrackFavorite);
  window.addEventListener('carnet:languagechange', updateCurrentTrackFavoriteSetting);
  document.addEventListener('pointerdown', handleVinylImmersivePointerDown, true);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') toggleVinylFullscreen(false);
  });

  if (trackProgress) {
    trackProgress.addEventListener('input', () => {
      const audio = getAudioPlayer();
      if (!audio.duration) return;
      const nextTime = (Number(trackProgress.value) / 100) * audio.duration;
      audio.currentTime = nextTime;
    });
  }

  if (trackVolume) {
    trackVolume.addEventListener('input', () => {
      getAudioPlayer().volume = Number(trackVolume.value);
    });
    updatePlayerVolumeDisplay();
  }

  await renderPlaylist();
  updatePlayerUI();
}

window.initMedia = initMedia;

/* ===== Daily Challenge ===== */

function getTodayKey() {
  return new Date().toISOString().split('T')[0];
}

function getDailyChallenge() {
  const stored = load(STORAGE_KEYS.challenge, null);
  const today = getTodayKey();

  if (stored && stored.date === today) {
    return stored;
  }

  const index = hashDate(today) % CHALLENGES.length;
  const challenge = { ...CHALLENGES[index], date: today, completed: false };
  save(STORAGE_KEYS.challenge, challenge);
  return challenge;
}

function hashDate(dateStr) {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function renderChallenge() {
  const challenge = getDailyChallenge();
  document.getElementById('challengeIcon').textContent = challenge.icon;
  document.getElementById('challengeText').textContent = getLocalizedChallengeText(challenge.text);
  document.getElementById('challengeDate').textContent = formatDate(challenge.date);

  const doneEl = document.getElementById('challengeDone');
  const completeBtn = document.getElementById('completeChallengeBtn');

  if (challenge.completed) {
    doneEl.hidden = false;
    completeBtn.disabled = true;
    completeBtn.style.opacity = '0.5';
  } else {
    doneEl.hidden = true;
    completeBtn.disabled = false;
    completeBtn.style.opacity = '1';
  }

  renderChallengeHistory();
}

function getLocalizedChallengeText(text) {
  const index = CHALLENGES.findIndex(challenge => challenge.text === text);
  return index < 0
    ? text
    : window.I18n?.t(`challenge.${index + 1}`) || text;
}

function renderChallengeHistory() {
  const history = load(STORAGE_KEYS.challengeHistory, []);
  const list = document.getElementById('challengeHistory');
  list.innerHTML = '';

  history.slice(0, 7).forEach(entry => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="history-icon">${entry.icon}</span>
      <span>${escapeHtml(getLocalizedChallengeText(entry.text))}</span>
      <span class="history-date">${formatDate(entry.date)}</span>
    `;
    list.appendChild(li);
  });
}

function newRandomChallenge() {
  const today = getTodayKey();
  const currentChallengeText = getDailyChallenge().text;
  let index;
  do {
    index = Math.floor(Math.random() * CHALLENGES.length);
  } while (CHALLENGES[index].text === currentChallengeText && CHALLENGES.length > 1);

  const challenge = { ...CHALLENGES[index], date: today, completed: false };
  save(STORAGE_KEYS.challenge, challenge);
  renderChallenge();
  showToast(window.I18n?.t('challenge.newToast') || 'Nouveau défi ! 💌');
}

function completeChallenge() {
  const challenge = getDailyChallenge();
  challenge.completed = true;
  save(STORAGE_KEYS.challenge, challenge);

  let history = load(STORAGE_KEYS.challengeHistory, []);
  history.unshift({ icon: challenge.icon, text: challenge.text, date: challenge.date });
  history = history.slice(0, 30);
  save(STORAGE_KEYS.challengeHistory, history);

  renderChallenge();
  showToast(window.I18n?.t('challenge.doneToast') || 'Bravo ! Défi accompli ✨');
}

function initChallenge() {
  document.getElementById('newChallengeBtn').addEventListener('click', newRandomChallenge);
  document.getElementById('completeChallengeBtn').addEventListener('click', completeChallenge);
  renderChallenge();
}

/* ===== PWA Install ===== */

function initPWA() {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('installBtn').hidden = false;
  });

  document.getElementById('installBtn').addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      showToast(window.I18n?.t('app.installed') || 'Carnet installé sur votre appareil ! 🎉');
    }
    deferredPrompt = null;
    document.getElementById('installBtn').hidden = true;
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
      .then(() => console.log('Service Worker enregistré'))
      .catch(err => console.warn('SW error:', err));
  }
}

/* ===== Offline Detection ===== */

function initOffline() {
  const banner = document.getElementById('offlineBanner');

  function updateOnlineStatus() {
    banner.hidden = navigator.onLine;
  }

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();
}

function initApplicationStatus() {
  const networkStatus = document.getElementById('appNetworkStatus');
  const serviceWorkerStatus = document.getElementById('appServiceWorkerStatus');
  if (!networkStatus || !serviceWorkerStatus) return;

  const translate = key => window.I18n?.t(key) || key;
  const updateNetworkStatus = () => {
    const online = navigator.onLine;
    networkStatus.textContent = translate(online ? 'settingsHub.networkOnline' : 'settingsHub.networkOffline');
    networkStatus.dataset.state = online ? 'online' : 'offline';
  };
  const updateServiceWorkerStatus = async () => {
    if (!('serviceWorker' in navigator) || !window.isSecureContext) {
      serviceWorkerStatus.textContent = translate('settingsHub.workerUnavailable');
      serviceWorkerStatus.dataset.state = 'unavailable';
      return;
    }

    try {
      const registration = await navigator.serviceWorker.getRegistration('/');
      const ready = registration?.active?.state === 'activated';
      const starting = !!(registration?.installing || registration?.waiting);
      serviceWorkerStatus.textContent = translate(
        ready ? 'settingsHub.workerReady' : starting ? 'settingsHub.workerStarting' : 'settingsHub.workerUnavailable'
      );
      serviceWorkerStatus.dataset.state = ready ? 'ready' : starting ? 'starting' : 'unavailable';
    } catch (error) {
      console.warn('Could not read the offline resource status.', error);
      serviceWorkerStatus.textContent = translate('settingsHub.workerUnavailable');
      serviceWorkerStatus.dataset.state = 'unavailable';
    }
  };
  const updateAllStatuses = () => {
    updateNetworkStatus();
    updateServiceWorkerStatus();
  };

  updateAllStatuses();
  window.addEventListener('online', updateNetworkStatus);
  window.addEventListener('offline', updateNetworkStatus);
  window.addEventListener('carnet:languagechange', updateAllStatuses);
  if ('serviceWorker' in navigator && window.isSecureContext) {
    navigator.serviceWorker.addEventListener('controllerchange', updateServiceWorkerStatus);
    navigator.serviceWorker.ready.then(updateServiceWorkerStatus).catch(error => {
      console.warn('Could not confirm offline resource readiness.', error);
      serviceWorkerStatus.textContent = translate('settingsHub.workerUnavailable');
      serviceWorkerStatus.dataset.state = 'unavailable';
    });
  }
}

/* ===== Utilities ===== */

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString(window.I18n?.getLocale() || 'fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

/* ===== Init ===== */

document.addEventListener('DOMContentLoaded', async () => {
  await window.I18n?.init();
  window.addEventListener('carnet:languagechange', () => {
    updateCounter(getSettings().startDate);
    updateMessageHeader();
    updateMessagesPairingUI();
    renderMessages();
    renderChallenge();
    renderDates();
    renderGoals();
    renderPlaces();
    renderTimeline();
    renderGallery();
    updatePlayerUI();
    renderPlaylist();
    const themeMode = getThemeModePreference();
    updateThemeControls(themeMode);
    updateThemeToggleButton(themeMode);
    updateMessageBackgroundControls();
    updateMessageSettingsSummary();
  });
  initTheme();
  window.VisualCustomizer?.initialize();
  initSettings();
  initSettingsNavigation();
  initEditableFields();
  initCouplePhoto();
  initDateModal();
  initNavigation();
  initMediaSettings();
  initMediaPageNavigation();
  initSettingsForm();
  initOnboarding();
  initMemories();
  initGallery();
  await initMessages();
  window.NotificationCenter?.initialize(window.MessageModule);
  refreshSettingsCategoryIndicators();
  initDates();
  initGoals();
  initPlaces();
  initBackup();
  initMedia();
  window.StorageManager?.initialize();
  initChallenge();
  initGame();
  initPWA();
  initApplicationStatus();
  initOffline();
  updateStats();
});
