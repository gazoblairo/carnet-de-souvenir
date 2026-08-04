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

function getGameState() {
  return load(GAME_STORAGE_KEY, { category: 'romantique', history: [], recent: [] });
}

function saveGameState(state) {
  save(GAME_STORAGE_KEY, state);
}

function getGamePool(category) {
  return GAME_CATEGORIES[category] || GAME_CATEGORIES.romantique;
}

function pickGameItem(category) {
  const pool = getGamePool(category);
  const state = getGameState();
  const recent = state.recent || [];
  const available = pool.actions.concat(pool.truths).filter(item => !recent.includes(item));
  const source = available.length ? available : pool.actions.concat(pool.truths);
  return source[Math.floor(Math.random() * source.length)];
}

function createConfettiBurst() {
  const shell = document.querySelector('.game-shell');
  if (!shell) return;

  const burst = document.createElement('div');
  burst.className = 'confetti-burst';
  const colors = ['#ff5e8a', '#ffd166', '#7ee787', '#8f7fff', '#44c4ff', '#ff7b54'];

  for (let i = 0; i < 24; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.setProperty('--confetti-color', colors[i % colors.length]);
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `${Math.random() * 20 + 10}%`;
    piece.style.setProperty('--drift', `${(Math.random() - 0.5) * 220}px`);
    piece.style.animationDelay = `${Math.random() * 0.12}s`;
    burst.appendChild(piece);
  }

  shell.appendChild(burst);
  setTimeout(() => burst.remove(), 1400);
}

function spinWheel(category) {
  const wheel = document.getElementById('gameWheel');
  const wrapper = document.getElementById('wheelWrapper');
  const resultCard = document.getElementById('gameResultCard');
  const resultBadge = document.getElementById('gameResultBadge');
  const resultTitle = document.getElementById('gameResultTitle');
  const resultText = document.getElementById('gameResultText');
  const resultCategory = document.getElementById('gameResultCategory');
  const status = document.getElementById('gameStatus');
  const selectedLabel = document.getElementById('selectedCategoryLabel');
  const spinButton = document.getElementById('spinGameBtn');
  const state = getGameState();
  const pool = getGamePool(category);
  const isAction = Math.random() > 0.5;
  const spinTurns = 6 + Math.floor(Math.random() * 3);
  const randomOffset = Math.floor(Math.random() * 360);
  const baseRotation = parseFloat(wheel.dataset.rotation || '0');
  const targetRotation = baseRotation + spinTurns * 360 + randomOffset;

  wheel.dataset.rotation = String(targetRotation);
  wheel.style.transform = `rotate(${targetRotation}deg)`;
  wrapper.classList.add('is-spinning');
  wheel.classList.add('is-spinning');
  resultCard.hidden = true;
  status.innerHTML = 'Roulette en mouvement…';
  spinButton.disabled = true;
  spinButton.textContent = '✨ Roue en mouvement…';

  setTimeout(() => {
    const chosen = isAction
      ? pool.actions[Math.floor(Math.random() * pool.actions.length)]
      : pool.truths[Math.floor(Math.random() * pool.truths.length)];

    const recent = state.recent || [];
    const updatedRecent = [chosen, ...recent].slice(0, GAME_HISTORY_LIMIT);
    state.recent = updatedRecent;
    saveGameState(state);
    renderGameHistory();

    wrapper.classList.remove('is-spinning');
    wheel.classList.remove('is-spinning');
    createConfettiBurst();

    resultBadge.textContent = isAction ? '❤️ Action' : '💬 Vérité';
    resultTitle.textContent = isAction ? 'Action choisie' : 'Vérité choisie';
    resultText.textContent = chosen;
    resultCategory.textContent = pool.label;
    selectedLabel.textContent = pool.label;
    status.innerHTML = `Catégorie sélectionnée : <span id="selectedCategoryLabel">${pool.label}</span>`;
    resultCard.hidden = false;
    resultCard.classList.remove('show');
    void resultCard.offsetWidth;
    resultCard.classList.add('show');
    spinButton.disabled = false;
    spinButton.textContent = '❤️ FAIRE TOURNER';
  }, 6200);
}

function showGameHistoryToast(message) {
  const toast = document.getElementById('gameHistoryToast');
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  toast.classList.add('show');
  clearTimeout(showGameHistoryToast.timeoutId);
  showGameHistoryToast.timeoutId = setTimeout(() => {
    toast.classList.remove('show');
    toast.hidden = true;
  }, 2200);
}

function clearGameHistory() {
  const list = document.getElementById('gameHistoryList');
  if (!list) return;

  const confirmed = window.confirm('Êtes-vous sûr de vouloir supprimer tout l\'historique du jeu ? Cette action est irréversible.');
  if (!confirmed) return;

  const items = Array.from(list.querySelectorAll('li'));
  list.classList.add('is-clearing');
  items.forEach((item, index) => {
    item.classList.add('is-removing');
    item.style.transitionDelay = `${index * 40}ms`;
  });

  setTimeout(() => {
    const state = getGameState();
    state.recent = [];
    saveGameState(state);
    renderGameHistory();
    list.classList.remove('is-clearing');
    showGameHistoryToast('✅ Historique supprimé avec succès.');
  }, 260);
}

function renderGameHistory() {
  const list = document.getElementById('gameHistoryList');
  const state = getGameState();
  const items = (state.recent || []).slice(0, GAME_HISTORY_LIMIT);
  list.innerHTML = '';

  if (items.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'Aucune action ou vérité proposée pour le moment.';
    list.appendChild(li);
    return;
  }

  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

function initGame() {
  const categoryButtons = document.querySelectorAll('.category-btn');
  const spinButton = document.getElementById('spinGameBtn');
  const clearHistoryButton = document.getElementById('clearGameHistoryBtn');
  const selectedLabel = document.getElementById('selectedCategoryLabel');
  let currentCategory = 'romantique';

  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      selectedLabel.textContent = getGamePool(currentCategory).label;
      document.getElementById('gameStatus').innerHTML = `Catégorie sélectionnée : <span id="selectedCategoryLabel">${getGamePool(currentCategory).label}</span>`;
    });
  });

  spinButton.addEventListener('click', () => {
    spinWheel(currentCategory);
  });

  if (clearHistoryButton) {
    clearHistoryButton.addEventListener('click', clearGameHistory);
  }

  renderGameHistory();
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

let currentLightboxId = null;
let deferredPrompt = null;
let settingsPhotoDataUrl1 = null;
let settingsPhotoDataUrl2 = null;
let onboardingPhotoDataUrl = null;
let mediaDb = null;
let playlistTracks = [];
let currentTrackIndex = -1;
let currentAudio = null;

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

function getMessageSettings() {
  return load(STORAGE_KEYS.messageSettings || 'carnet_message_settings', { background: 'sunset' });
}

function saveMessageSettings(settings) {
  save(STORAGE_KEYS.messageSettings || 'carnet_message_settings', settings);
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
  const settings = getSettings();
  const state = getMessageHeaderState();
  const firstName1 = settings.firstName1 || state.firstName1 || DEFAULT_SETTINGS.firstName1;
  const firstName2 = settings.firstName2 || state.firstName2 || DEFAULT_SETTINGS.firstName2;
  const nickname1 = settings.nickname1 || state.nickname1 || '';
  const nickname2 = settings.nickname2 || state.nickname2 || '';

  if (title) {
    if (settings.showNicknames && (nickname1 || nickname2)) {
      title.textContent = `${nickname1 || firstName1} & ${nickname2 || firstName2}`;
    } else {
      title.textContent = `${firstName1} & ${firstName2}`;
    }
  }

  if (subtitle) {
    const detail = nickname2 ? `${nickname2} • en ligne` : 'En ligne • prêt à s’écrire';
    subtitle.textContent = detail;
  }

  if (avatarPrimary) {
    avatarPrimary.src = state.photo1 || settings.photo1 || settings.couplePhoto || DEFAULT_SETTINGS.photo1;
  }

  if (avatarSecondary) {
    avatarSecondary.src = state.photo2 || settings.photo2 || settings.couplePhoto || DEFAULT_SETTINGS.photo2;
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
      ? `✅ Compte lié à ${state.partnerCode || 'votre partenaire'} — la messagerie est prête.`
      : 'Vous devez d\'abord inviter ou rejoindre votre partenaire pour utiliser les messages.';
  }

  if (pairingJoinSection) {
    pairingJoinSection.hidden = isLinked;
  }

  if (pairingCodeDisplay) {
    pairingCodeDisplay.hidden = isLinked;
    if (!isLinked) {
      pairingCodeDisplay.innerHTML = `<strong>Code d’invitation</strong><div>${state.myCode}</div>`;
    }
  }

  if (pairingGate) {
    pairingGate.hidden = isLinked;
  }

  if (thread) {
    thread.hidden = !isLinked;
  }

  if (composer) {
    composer.disabled = !isLinked;
    composer.placeholder = isLinked ? 'Écrivez un mot doux...' : 'Liaison requise';
  }

  if (sendButton) {
    sendButton.disabled = !isLinked;
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

function applyMessageBackground() {
  const thread = document.getElementById('modernMessagesList');
  const settings = getMessageSettings();

  if (thread) {
    thread.setAttribute('data-background', settings.background || 'sunset');
  }
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
    time: message.time || new Date(createdAt).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
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
  const stored = load(STORAGE_KEYS.messages, []);
  const items = Array.isArray(stored) ? stored : (stored && Array.isArray(stored.messages) ? stored.messages : []);
  return items.map((message, index) => normalizeMessage(message, index));
}

function saveMessages(messages) {
  const normalized = messages.map((message, index) => normalizeMessage(message, index));
  save(STORAGE_KEYS.messages, normalized);
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

function renderMessages(filter = '', sortValue = 'date_desc') {
  const messages = getMessages();
  const list = document.getElementById('modernMessagesList');
  const empty = document.getElementById('modernMessagesEmpty');
  const search = document.getElementById('messageSearch');
  const searchValue = (filter || search?.value || '').toLowerCase();
  const typing = document.getElementById('typingIndicator');
  const thread = document.getElementById('modernMessagesList');
  const settings = getMessageSettings();

  if (thread) {
    thread.setAttribute('data-background', settings.background || 'sunset');
  }

  const visible = messages
    .filter(message => {
      if (message.deletedForEveryone) return false;
      if (message.deletedForMe && message.sender === 'me') return false;
      if (activeMessageView === 'favorites' && !message.favorite) return false;
      if (activeMessageView === 'pinned' && !message.pinned) return false;
      if (!searchValue) return true;
      const haystack = `${message.text || ''} ${message.metadata?.name || ''} ${message.author || ''}`.toLowerCase();
      return haystack.includes(searchValue);
    })
    .sort((a, b) => {
      if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
      if (a.favorite !== b.favorite) return a.favorite ? -1 : 1;
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

  visible.forEach(message => {
    const bubble = document.createElement('article');
    bubble.className = `message-bubble ${message.sender === 'me' ? 'message-bubble--mine' : 'message-bubble--their'}${message.pinned ? ' is-pinned' : ''}${message.favorite ? ' is-favorite' : ''}`;
    bubble.dataset.messageId = message.id;
    const reactions = Object.entries(message.reactions || {})
      .map(([emoji, count]) => `<button class="message-reaction-chip" type="button" data-action="react" data-reaction="${emoji}" data-message-id="${message.id}">${emoji} ${count}</button>`)
      .join('');
    const attachmentMarkup = getMessageContentMarkup(message, messages);
    bubble.innerHTML = `
      <div class="message-bubble-header">
        <span>${escapeHtml(getMessageDisplayName(message.sender))}</span>
        <div class="message-bubble-actions">
          <button class="message-action-btn" type="button" data-action="reply" data-message-id="${message.id}">↩</button>
          <button class="message-action-btn" type="button" data-action="edit" data-message-id="${message.id}">✏️</button>
          <button class="message-action-btn" type="button" data-action="pin" data-message-id="${message.id}">${message.pinned ? '📌' : '📍'}</button>
          <button class="message-action-btn" type="button" data-action="favorite" data-message-id="${message.id}">${message.favorite ? '⭐' : '☆'}</button>
          <button class="message-action-btn" type="button" data-action="delete-for-me" data-message-id="${message.id}">🗑️</button>
        </div>
      </div>
      <div class="message-bubble-content">${attachmentMarkup}</div>
      <div class="message-reactions">${reactions || '<button class="message-reaction-chip" type="button" data-action="react" data-reaction="❤️" data-message-id="${message.id}">❤️</button><button class="message-reaction-chip" type="button" data-action="react" data-reaction="😂" data-message-id="${message.id}">😂</button><button class="message-reaction-chip" type="button" data-action="react" data-reaction="😍" data-message-id="${message.id}">😍</button><button class="message-reaction-chip" type="button" data-action="react" data-reaction="👍" data-message-id="${message.id}">👍</button>'}</div>
      <div class="message-bubble-footer">
        <span>${message.edited ? '✏️ ' : ''}${message.sender === 'me' ? (message.status === 'read' ? '✓✓' : message.status === 'delivered' ? '✓' : '⏱') : ''}</span>
        <span>${escapeHtml(message.time || '')}</span>
      </div>
    `;
    list.appendChild(bubble);
  });

  list.scrollTop = list.scrollHeight;
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
    composer.placeholder = 'Écrivez un mot doux...';
  }
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
    time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
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

function handleMessageAction(action, messageId, reaction = null) {
  const messages = getMessages();
  const target = messages.find(message => message.id === messageId);
  if (!target) return;

  if (action === 'reply') {
    activeReplyMessageId = messageId;
    updateComposerState();
    showToast('Réponse préparée ✨');
    return;
  }

  if (action === 'edit') {
    if (target.sender !== 'me') {
      showToast('Seuls vos messages peuvent être modifiés');
      return;
    }
    activeEditMessageId = messageId;
    const composer = document.getElementById('messageComposer');
    if (composer) {
      composer.value = target.text || '';
      composer.focus();
    }
    updateComposerState();
    showToast('Édition activée');
    return;
  }

  if (action === 'copy') {
    const text = target.text || target.metadata?.name || '';
    if (text) {
      navigator.clipboard?.writeText(text).catch(() => {});
      showToast('Message copié');
    }
    return;
  }

  if (action === 'pin') {
    target.pinned = !target.pinned;
    saveMessages(messages);
    showToast(target.pinned ? 'Message épinglé' : 'Message désépinglé');
    return;
  }

  if (action === 'favorite') {
    target.favorite = !target.favorite;
    saveMessages(messages);
    showToast(target.favorite ? 'Ajouté aux favoris' : 'Retiré des favoris');
    return;
  }

  if (action === 'react') {
    const selectedReaction = reaction || '❤️';
    target.reactions[selectedReaction] = (target.reactions[selectedReaction] || 0) + 1;
    saveMessages(messages);
    showToast(`Réaction ${selectedReaction} ajoutée`);
    return;
  }

  if (action === 'delete-for-me') {
    target.deletedForMe = true;
    saveMessages(messages);
    showToast('Supprimé pour vous');
    return;
  }

  if (action === 'delete-for-everyone') {
    target.deletedForEveryone = true;
    saveMessages(messages);
    showToast('Supprimé pour tout le monde');
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

function sendTextMessage(text) {
  if (!text.trim()) return;

  const messages = getMessages();
  if (activeEditMessageId) {
    const target = messages.find(message => message.id === activeEditMessageId);
    if (target) {
      target.text = text.trim();
      target.edited = true;
      target.time = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
      saveMessages(messages);
      showToast('Message modifié ✨');
    }
    activeEditMessageId = null;
  } else {
    messages.push(createMessagePayload(text.trim(), 'text', null, activeReplyMessageId));
    saveMessages(messages);
    showToast('Message envoyé ✨');
  }

  triggerMessageHeartBurst();
  activeReplyMessageId = null;
  const composer = document.getElementById('messageComposer');
  if (composer) composer.value = '';
  updateComposerState();

  if (!activeEditMessageId) {
    setTypingIndicator(true);
    clearTimeout(messageTypingTimer);
    messageTypingTimer = setTimeout(() => {
      const replyText = text.trim().toLowerCase().includes('bonjour') || text.trim().toLowerCase().includes('salut')
        ? 'Je suis là mon cœur 💕'
        : 'J’aime ce que tu dis, continue 💖';
      const replyMessage = createMessagePayload(replyText, 'text', null, null);
      replyMessage.sender = 'partner';
      replyMessage.author = 'Votre moitié';
      replyMessage.status = 'delivered';
      const items = getMessages();
      items.push(replyMessage);
      saveMessages(items);
      setTypingIndicator(false);
    }, 1200);
  }
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
    showToast('Pièce jointe envoyée');
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

function deleteTimelineItem(id, type) {
  if (!window.confirm('Supprimer cet élément de la chronologie ?')) return;

  if (type === 'Souvenir') {
    const memories = getMemories().filter(memory => memory.id !== id);
    saveMemories(memories);
  } else if (type === 'Message') {
    const messages = getMessages().filter(message => message.id !== id);
    saveMessages(messages);
  } else if (type === 'Événement') {
    const dates = getDates().filter(entry => entry.id !== id);
    saveDates(dates);
  }

  showToast('✅ Événement supprimé.');
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
          <button data-action="delete-date" data-id="${entry.id}" title="Supprimer">🗑️</button>
        </div>
      `;
      list.appendChild(card);
    });

  list.querySelectorAll('[data-action="delete-date"]').forEach(btn => {
    btn.addEventListener('click', () => deleteDate(btn.dataset.id));
  });
}

function addDateEntry() {
  const title = window.prompt('Nom de l’événement', '');
  if (title === null) return;
  const date = window.prompt('Date (AAAA-MM-JJ)', new Date().toISOString().split('T')[0]);
  if (date === null) return;
  if (!title.trim() || !date.trim()) return;

  const dates = getDates();
  dates.push({ id: generateId(), title: title.trim(), date: date.trim() });
  saveDates(dates);
  showToast('Événement ajouté 📅');
}

function deleteDate(id) {
  if (!window.confirm('Supprimer cet événement ?')) return;
  const dates = getDates().filter(entry => entry.id !== id);
  saveDates(dates);
  showToast('Événement supprimé');
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
    empty.innerHTML = '<span class="empty-icon">🎯</span><p>Aucun objectif pour l’instant</p><p class="empty-sub">Ajoutez vos rêves de couple.</p>';
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
        <button data-action="toggle-goal" data-id="${goal.id}" title="Marquer comme fait">✓</button>
        <button data-action="delete-goal" data-id="${goal.id}" title="Supprimer">🗑️</button>
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
  const title = window.prompt('Nouvel objectif', '');
  if (title === null) return;
  const value = title.trim();
  if (!value) return;

  const goals = getGoals();
  goals.push({ id: generateId(), title: value, completed: false });
  saveGoals(goals);
  showToast('Objectif ajouté 🎯');
}

function toggleGoal(id) {
  const goals = getGoals().map(goal => goal.id === id ? { ...goal, completed: !goal.completed } : goal);
  saveGoals(goals);
}

function deleteGoal(id) {
  if (!window.confirm('Supprimer cet objectif ?')) return;
  const goals = getGoals().filter(goal => goal.id !== id);
  saveGoals(goals);
  showToast('Objectif supprimé');
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
    container.innerHTML = '<div class="empty-state"><span class="empty-icon">🗺️</span><p>Aucun lieu enregistré</p><p class="empty-sub">Ajoutez vos endroits préférés.</p></div>';
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
        <div class="memory-date">${escapeHtml(place.note || 'Lieu enregistré')}</div>
      </div>
    `;
    list.appendChild(card);
  });
  container.appendChild(list);
}

function addPlace() {
  const name = window.prompt('Nom du lieu', '');
  if (name === null) return;
  const note = window.prompt('Note ou souvenir associé', '');
  if (note === null) return;
  const places = getPlaces();
  places.push({ id: generateId(), name: name.trim() || 'Lieu', note: note.trim() || '' });
  savePlaces(places);
  showToast('Lieu ajouté 📍');
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
    list.innerHTML = '<div class="empty-state"><span class="empty-icon">⏳</span><p>Votre histoire commence ici.</p><p class="empty-sub">Ajoutez des souvenirs, messages ou dates.</p></div>';
    return;
  }

  items.forEach(item => {
    const entry = document.createElement('div');
    entry.className = 'memory-card';
    entry.innerHTML = `
      <span class="memory-mood">${item.icon}</span>
      <div class="memory-content">
        <div class="memory-title">${escapeHtml(item.title)}</div>
        <div class="memory-date">${escapeHtml(item.type)} · ${formatDate(item.date)}</div>
      </div>
      <div class="memory-actions">
        <button type="button" data-action="delete-timeline-item" data-id="${item.id}" data-type="${item.type}" title="Supprimer">🗑️</button>
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

function initMessageProfilePhotos() {
  const avatarPrimary = document.getElementById('messageAvatarPrimary');
  const avatarSecondary = document.getElementById('messageAvatarSecondary');
  const inputPrimary = document.getElementById('messagePhotoInputPrimary');
  const inputSecondary = document.getElementById('messagePhotoInputSecondary');

  const applyHeaderPhoto = (role, dataUrl) => {
    if (!dataUrl) return;
    if (role === 'primary') {
      saveMessageHeaderState({ photo1: dataUrl });
      if (avatarPrimary) avatarPrimary.src = dataUrl;
    } else {
      saveMessageHeaderState({ photo2: dataUrl });
      if (avatarSecondary) avatarSecondary.src = dataUrl;
    }
    updateMessageHeader();
  };

  if (avatarPrimary && inputPrimary) {
    avatarPrimary.addEventListener('click', () => inputPrimary.click());
    inputPrimary.addEventListener('change', (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => applyHeaderPhoto('primary', e.target.result);
      reader.onerror = () => showToast('Impossible de lire cette image.');
      reader.readAsDataURL(file);
      inputPrimary.value = '';
    });
  }

  if (avatarSecondary && inputSecondary) {
    avatarSecondary.addEventListener('click', () => inputSecondary.click());
    inputSecondary.addEventListener('change', (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => applyHeaderPhoto('secondary', e.target.result);
      reader.onerror = () => showToast('Impossible de lire cette image.');
      reader.readAsDataURL(file);
      inputSecondary.value = '';
    });
  }
}

function initMessages() {
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

  if (btn) {
    btn.addEventListener('click', () => {
      const state = getPairingState();
      if (!state.linked) {
        showToast('Vous devez d\'abord lier votre compte à votre partenaire.');
        return;
      }
      if (composer?.value.trim()) {
        sendTextMessage(composer.value);
      } else {
        composer?.focus();
      }
    });
  }

  if (composer) {
    composer.addEventListener('keydown', (event) => {
      const state = getPairingState();
      if (!state.linked) {
        event.preventDefault();
        showToast('Vous devez d\'abord lier votre compte à votre partenaire.');
        return;
      }
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendTextMessage(composer.value);
      }
    });
  }

  if (search) {
    search.addEventListener('input', (e) => renderMessages(e.target.value));
  }

  emojiButtons.forEach(button => {
    button.addEventListener('click', () => {
      const state = getPairingState();
      if (!state.linked) {
        showToast('Vous devez d\'abord lier votre compte à votre partenaire.');
        return;
      }
      if (composer) {
        composer.value += button.dataset.emoji || '';
        composer.focus();
      }
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
          showToast('Code d’invitation copié');
        } else {
          showToast('Code d’invitation prêt à partager');
        }
      } catch (error) {
        showToast('Code d’invitation prêt à partager');
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
    joinSubmitButton.addEventListener('click', () => {
      const code = partnerCodeInput.value.trim().toUpperCase();
      const currentState = getPairingState();
      const validCodePattern = /^CARNET-[A-Z0-9]{6}$/;

      if (!code) {
        showToast('Saisissez un code valide.');
        return;
      }

      if (!validCodePattern.test(code)) {
        showToast('Code invalide. Vérifiez le format.');
        return;
      }

      if (code === currentState.myCode.toUpperCase()) {
        showToast('Entrez le code fourni par votre partenaire.');
        return;
      }

      savePairingState({ linked: true, partnerCode: code, linkedAt: new Date().toISOString() });
      updateMessagesPairingUI();
      showToast('Liaison établie avec votre partenaire.');
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

  window.addEventListener('storage', (event) => {
    if (event.key === PAIRING_STORAGE_KEY) {
      updateMessagesPairingUI();
    }
    if (event.key === STORAGE_KEYS.messages) {
      renderMessages();
      renderTimeline();
      updateStats();
    }
    if (event.key === STORAGE_KEYS.messageSettings) {
      applyMessageBackground();
    }
  });

  const initialMessages = ensureDefaultMessages(getMessages());
  if (JSON.stringify(getMessages()) !== JSON.stringify(initialMessages)) {
    saveMessages(initialMessages);
  }
  initMessageProfilePhotos();
  updateComposerState();
  updateMessageHeader();
  applyMessageBackground();
  updateMessagesPairingUI();
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
      showToast('Export JSON prêt à télécharger');
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
        if (payload.messageSettings) save(STORAGE_KEYS.messageSettings, payload.messageSettings);
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
        showToast('Import JSON réussi');
      } catch (error) {
        console.error('Erreur lors de l’import JSON', error);
        showToast('Fichier JSON invalide');
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
    showToast('Bienvenue ! Vos informations ont été enregistrées 💕');
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
  document.getElementById('settingsStartDate').value = settings.startDate || DEFAULT_SETTINGS.startDate;
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

  document.getElementById('daysCounter').textContent = days.toLocaleString('fr-FR');

  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  let sub = 'jours de bonheur';
  if (years > 0) sub += ` · ${years} an${years > 1 ? 's' : ''}`;
  if (months > 0) sub += ` · ${months} mois`;
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
    showToast('Date de rencontre mise à jour 💕');
  });
}

/* ===== Couple Photo ===== */

function initCouplePhoto() {
  const heroPhoto1 = document.getElementById('partnerPhoto1');
  const heroPhoto2 = document.getElementById('partnerPhoto2');
  const editPhotoBtn = document.getElementById('editPhotoBtn');
  const editPhotoBtn2 = document.getElementById('editPhotoBtn2');
  const photoInput1 = document.getElementById('photoInput1');
  const photoInput2 = document.getElementById('photoInput2');
  const settingsPhotoBtn1 = document.getElementById('settingsPhotoBtn1');
  const settingsPhotoBtn2 = document.getElementById('settingsPhotoBtn2');
  const settingsPhotoInput1 = document.getElementById('settingsPhotoInput1');
  const settingsPhotoInput2 = document.getElementById('settingsPhotoInput2');

  const updatePhoto = (file, role) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      const settings = getSettings();
      const updatedSettings = role === 'first'
        ? { ...settings, photo1: dataUrl }
        : { ...settings, photo2: dataUrl };

      if (role === 'first') {
        settingsPhotoDataUrl1 = dataUrl;
      } else {
        settingsPhotoDataUrl2 = dataUrl;
      }

      save(STORAGE_KEYS.settings, updatedSettings);
      renderCoupleInfo(updatedSettings);
      showToast(role === 'first' ? 'Photo du premier partenaire mise à jour 📷' : 'Photo du second partenaire mise à jour 📷');
    };
    reader.onerror = () => {
      showToast('Impossible de lire cette image. Veuillez choisir un autre fichier.');
    };
    reader.readAsDataURL(file);
  };

  if (editPhotoBtn && photoInput1) {
    editPhotoBtn.addEventListener('click', () => photoInput1.click());
  }

  if (editPhotoBtn2 && photoInput2) {
    editPhotoBtn2.addEventListener('click', () => photoInput2.click());
  }

  if (settingsPhotoBtn1 && settingsPhotoInput1) {
    settingsPhotoBtn1.addEventListener('click', () => settingsPhotoInput1.click());
  }

  if (settingsPhotoBtn2 && settingsPhotoInput2) {
    settingsPhotoBtn2.addEventListener('click', () => settingsPhotoInput2.click());
  }

  if (photoInput1) {
    photoInput1.addEventListener('change', (event) => {
      const file = event.target.files?.[0];
      updatePhoto(file, 'first');
      photoInput1.value = '';
    });
  }

  if (photoInput2) {
    photoInput2.addEventListener('change', (event) => {
      const file = event.target.files?.[0];
      updatePhoto(file, 'second');
      photoInput2.value = '';
    });
  }

  if (settingsPhotoInput1) {
    settingsPhotoInput1.addEventListener('change', (event) => {
      const file = event.target.files?.[0];
      updatePhoto(file, 'first');
      settingsPhotoInput1.value = '';
    });
  }

  if (settingsPhotoInput2) {
    settingsPhotoInput2.addEventListener('change', (event) => {
      const file = event.target.files?.[0];
      updatePhoto(file, 'second');
      settingsPhotoInput2.value = '';
    });
  }

  if (heroPhoto1) {
    heroPhoto1.addEventListener('error', () => {
      heroPhoto1.src = createPlaceholderSVG('💕');
    });
  }

  if (heroPhoto2) {
    heroPhoto2.addEventListener('error', () => {
      heroPhoto2.src = createPlaceholderSVG('💕');
    });
  }
}

function createPlaceholderSVG(emoji) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <rect width="200" height="200" fill="#fd79a8" rx="100"/>
    <text x="100" y="115" font-size="60" text-anchor="middle">${emoji}</text>
  </svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

/* ===== Navigation ===== */

function initNavigation() {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  const navLinks = document.getElementById('navLinks');
  const navToggle = document.getElementById('navToggle');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.dataset.section;

      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      sections.forEach(s => s.classList.remove('active'));
      document.getElementById(target).classList.add('active');

      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
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
      dark: 'Mode sombre activé 🌙',
      light: 'Mode clair activé ☀️',
      auto: 'Mode automatique activé 🌗'
    };
    showToast(messages[safeMode] || 'Thème mis à jour');
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
    dark: 'Changer vers le mode clair',
    light: 'Changer vers le mode automatique',
    auto: 'Changer vers le mode sombre'
  };

  button.setAttribute('aria-label', labels[themeMode] || 'Changer le thème');
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
  const form = document.getElementById('settingsForm');
  const showNicknames = document.getElementById('showNicknames');

  const themeMode = getThemeModePreference();
  updateThemeControls(themeMode);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const settings = {
      firstName1: document.getElementById('firstName1').value.trim(),
      firstName2: document.getElementById('firstName2').value.trim(),
      nickname1: document.getElementById('nickname1').value.trim(),
      nickname2: document.getElementById('nickname2').value.trim(),
      startDate: document.getElementById('settingsStartDate').value,
      photo1: settingsPhotoDataUrl1 || getSettings().photo1 || getSettings().couplePhoto || DEFAULT_SETTINGS.photo1,
      photo2: settingsPhotoDataUrl2 || getSettings().photo2 || getSettings().couplePhoto || DEFAULT_SETTINGS.photo2,
      couplePhoto: settingsPhotoDataUrl1 || settingsPhotoDataUrl2 || getSettings().couplePhoto || DEFAULT_SETTINGS.couplePhoto,
      showNicknames: showNicknames.checked,
      theme: document.getElementById('themeModeInput').value || getThemeModePreference()
    };

    saveSettings(settings);
    applyTheme(settings.theme, true, false);
    renderCoupleInfo(getSettings());
    populateSettingsForm(getSettings());
    showToast('Informations du couple mises à jour 💕');
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
          <button data-action="edit" data-id="${memory.id}" title="Modifier">✏️</button>
          <button data-action="delete" data-id="${memory.id}" title="Supprimer">🗑️</button>
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
    document.getElementById('memoryModalTitle').textContent = 'Modifier le souvenir';
    document.getElementById('memoryId').value = memory.id;
    document.getElementById('memoryTitle').value = memory.title;
    document.getElementById('memoryDate').value = memory.date;
    document.getElementById('memoryText').value = memory.text;
    document.getElementById('memoryMood').value = memory.mood;
  } else {
    document.getElementById('memoryModalTitle').textContent = 'Nouveau souvenir';
    document.getElementById('memoryId').value = '';
    document.getElementById('memoryDate').value = new Date().toISOString().split('T')[0];
  }

  modal.hidden = false;
}

function closeMemoryModal() {
  document.getElementById('memoryModal').hidden = true;
}

function deleteMemory(id) {
  if (!confirm('Supprimer ce souvenir ?')) return;
  const memories = getMemories().filter(m => m.id !== id);
  saveMemories(memories);
  renderMemories();
  showToast('Souvenir supprimé');
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
      showToast('Souvenir modifié ✏️');
    } else {
      memories.push(memory);
      showToast('Souvenir ajouté 💕');
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

  if (photos.length === 0) {
    empty.hidden = false;
    return;
  }

  empty.hidden = true;

  photos.forEach(photo => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.id = photo.id;
    item.innerHTML = `
      <img src="${photo.src}" alt="Photo souvenir" loading="lazy">
      <button class="gallery-delete-btn" type="button" data-delete-photo-id="${photo.id}" aria-label="Supprimer la photo">🗑️</button>
    `;
    item.addEventListener('click', (event) => {
      if (event.target.closest('.gallery-delete-btn')) return;
      openLightbox(photo.id);
    });

    const deleteBtn = item.querySelector('.gallery-delete-btn');
    deleteBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      if (!confirm('Voulez-vous vraiment supprimer cette photo ?')) return;
      const deleteItem = event.currentTarget.closest('.gallery-item');
      deleteItem?.classList.add('is-removing');
      setTimeout(() => {
        if (deleteItem?.isConnected) {
          deletePhoto(photo.id);
        }
      }, 180);
    });

    grid.appendChild(item);
  });
}

function openLightbox(id) {
  const photo = getGallery().find(p => p.id === id);
  if (!photo) return;

  currentLightboxId = id;
  document.getElementById('lightboxImg').src = photo.src;
  document.getElementById('lightbox').hidden = false;
}

function closeLightbox() {
  document.getElementById('lightbox').hidden = true;
  currentLightboxId = null;
}

function deletePhoto(id) {
  const photos = getGallery().filter(p => p.id !== id);
  saveGallery(photos);
  renderGallery();
  if (currentLightboxId === id) closeLightbox();
  showToast('✅ Photo supprimée avec succès.');
}

function initGallery() {
  const input = document.getElementById('galleryInput');

  input.addEventListener('change', () => {
    const files = Array.from(input.files);
    if (files.length === 0) return;

    let photos = getGallery();
    let loaded = 0;

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        photos.push({ id: generateId(), src: e.target.result, added: Date.now() });
        loaded++;
        if (loaded === files.length) {
          saveGallery(photos);
          renderGallery();
          showToast(`${files.length} photo${files.length > 1 ? 's' : ''} ajoutée${files.length > 1 ? 's' : ''} 🖼️`);
        }
      };
      reader.readAsDataURL(file);
    });

    input.value = '';
  });

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxDelete').addEventListener('click', () => {
    if (currentLightboxId && confirm('Voulez-vous vraiment supprimer cette photo ?')) {
      deletePhoto(currentLightboxId);
    }
  });

  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
  });

  renderGallery();
}

async function renderPlaylist() {
  try {
    const tracks = await getStoredAudios();
    playlistTracks = tracks;
    const list = document.getElementById('playlistList');

    if (!tracks.length) {
      list.innerHTML = '<div class="empty-state"><span class="empty-icon">🎵</span><p>Aucune musique pour l\'instant</p><p class="empty-sub">Ajoutez vos pistes préférées !</p></div>';
      return;
    }

    list.innerHTML = '';
    tracks.forEach((track, index) => {
      const item = document.createElement('div');
      item.className = 'playlist-item';
      item.innerHTML = `
        <div class="playlist-info">
          <span class="playlist-icon">🎶</span>
          <div>
            <div class="playlist-title">${escapeHtml(track.name)}</div>
            <div class="playlist-meta">${escapeHtml(track.type || 'Fichier audio')}</div>
          </div>
        </div>
        <div class="playlist-actions">
          <button class="btn-secondary btn-sm" data-play-index="${index}">Écouter</button>
          <button class="playlist-delete-btn" type="button" data-delete-track-id="${track.id}" aria-label="Supprimer la musique">🗑️</button>
        </div>
      `;
      list.appendChild(item);
    });

    list.querySelectorAll('[data-play-index]').forEach(btn => {
      btn.addEventListener('click', () => playTrack(Number(btn.dataset.playIndex)));
    });

    list.querySelectorAll('[data-delete-track-id]').forEach(btn => {
      btn.addEventListener('click', (event) => {
        if (!confirm('Voulez-vous vraiment supprimer cette musique ?')) return;
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
    showToast('Impossible de supprimer cette piste.');
    return;
  }

  const refreshedTracks = await getStoredAudios();
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
  showToast('✅ Musique supprimée avec succès.');
}

function updatePlayerUI() {
  const track = playlistTracks[currentTrackIndex];
  const titleEl = document.getElementById('trackTitle');
  const artistEl = document.getElementById('trackArtist');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const progressEl = document.getElementById('trackProgress');
  const timeEl = document.getElementById('trackTime');

  if (!track) {
    titleEl.textContent = 'Aucune musique sélectionnée';
    artistEl.textContent = 'Ajoutez une piste pour commencer';
    playPauseBtn.textContent = '▶️';
    progressEl.value = 0;
    timeEl.textContent = '00:00 / 00:00';
    return;
  }

  titleEl.textContent = track.name;
  artistEl.textContent = 'Lecture en cours';
  playPauseBtn.textContent = currentAudio && !currentAudio.paused ? '⏸️' : '▶️';
  progressEl.value = 0;
  timeEl.textContent = '00:00 / 00:00';
}

function getAudioPlayer() {
  if (!currentAudio) {
    currentAudio = new Audio();
    currentAudio.addEventListener('ended', () => playNextTrack());
    currentAudio.addEventListener('timeupdate', () => {
      const trackProgress = document.getElementById('trackProgress');
      const trackTime = document.getElementById('trackTime');
      if (!currentAudio.duration) return;
      const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
      trackProgress.value = progress;
      trackTime.textContent = `${formatMediaTime(currentAudio.currentTime)} / ${formatMediaTime(currentAudio.duration)}`;
    });
    currentAudio.addEventListener('loadedmetadata', () => {
      const trackTime = document.getElementById('trackTime');
      trackTime.textContent = `00:00 / ${formatMediaTime(currentAudio.duration)}`;
      document.getElementById('playPauseBtn').textContent = '⏸️';
      document.getElementById('trackArtist').textContent = 'Lecture en cours';
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
  updatePlayerUI();
  await audio.play().catch(() => {
    showToast('Lecture impossible pour cette piste.');
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
    audio.play().catch(() => showToast('Lecture impossible pour cette piste.'));
  } else {
    audio.pause();
  }
  updatePlayerUI();
}

function playNextTrack() {
  if (!playlistTracks.length) return;
  const nextIndex = currentTrackIndex >= playlistTracks.length - 1 ? 0 : currentTrackIndex + 1;
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
  const favTrackBtn = document.getElementById('favTrackBtn');

  if (addPhotoBtn && photoInput) {
    addPhotoBtn.onclick = () => photoInput.click();
  }

  if (addTrackBtn && audioInput) {
    addTrackBtn.onclick = () => audioInput.click();
    audioInput.addEventListener('change', async () => {
      const files = Array.from(audioInput.files || []);
      if (!files.length) return;

      const validFiles = files.filter(file => { if (!getSupportedAudioFile(file)) { showToast(`Format non pris en charge : ${file.name}`); return false; } return true; });
      if (!validFiles.length) return;

      try {
        for (const file of validFiles) {
          const record = { id: generateId(), name: file.name, type: file.type || 'audio/mpeg', file, added: Date.now() };
          await saveAudioRecord(record);
        }
        await renderPlaylist();
        showToast(`${validFiles.length} piste${validFiles.length > 1 ? 's' : ''} ajoutée${validFiles.length > 1 ? 's' : ''} 🎵`);
      } catch (error) {
        console.error('Erreur lors de l’ajout de la musique :', error);
        showToast('Impossible d’ajouter cette piste.');
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

  if (trackProgress) {
    trackProgress.addEventListener('input', () => {
      const audio = getAudioPlayer();
      if (!audio.duration) return;
      const nextTime = (Number(trackProgress.value) / 100) * audio.duration;
      audio.currentTime = nextTime;
    });
  }

  if (favTrackBtn) {
    favTrackBtn.addEventListener('click', () => {
      if (!playlistTracks.length) {
        showToast('Ajoutez d’abord une piste musicale.');
        return;
      }
      favTrackBtn.classList.toggle('is-favorite');
      favTrackBtn.textContent = favTrackBtn.classList.contains('is-favorite') ? '⭐' : '☆';
      showToast(favTrackBtn.classList.contains('is-favorite') ? 'Piste ajoutée aux favoris ⭐' : 'Favori retiré');
    });
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
  document.getElementById('challengeText').textContent = challenge.text;
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

function renderChallengeHistory() {
  const history = load(STORAGE_KEYS.challengeHistory, []);
  const list = document.getElementById('challengeHistory');
  list.innerHTML = '';

  history.slice(0, 7).forEach(entry => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="history-icon">${entry.icon}</span>
      <span>${escapeHtml(entry.text)}</span>
      <span class="history-date">${formatDate(entry.date)}</span>
    `;
    list.appendChild(li);
  });
}

function newRandomChallenge() {
  const today = getTodayKey();
  let index;
  do {
    index = Math.floor(Math.random() * CHALLENGES.length);
  } while (CHALLENGES[index].text === document.getElementById('challengeText').textContent && CHALLENGES.length > 1);

  const challenge = { ...CHALLENGES[index], date: today, completed: false };
  save(STORAGE_KEYS.challenge, challenge);
  renderChallenge();
  showToast('Nouveau défi ! 💌');
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
  showToast('Bravo ! Défi accompli ✨');
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
      showToast('Carnet installé sur votre appareil ! 🎉');
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

/* ===== Utilities ===== */

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

/* ===== Init ===== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSettings();
  initEditableFields();
  initCouplePhoto();
  initDateModal();
  initNavigation();
  initSettingsForm();
  initOnboarding();
  initMemories();
  initGallery();
  initMessages();
  initDates();
  initGoals();
  initPlaces();
  initBackup();
  initMedia();
  initChallenge();
  initGame();
  initPWA();
  initOffline();
  updateStats();
});
