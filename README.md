# Notre Carnet

Amélioration de l'application pour gérer les informations du couple.

Fonctionnalités ajoutées:
- Écran de configuration initiale au premier lancement
- Gestion des prénoms, surnoms, date de début de relation et photo du couple
- Options de paramètres pour modifier ces informations à tout moment
- Affichage des surnoms sur la page d'accueil lorsqu'activé
- Verrouillage facultatif de l'application par PIN à 4 ou 6 chiffres, configuré localement sur chaque appareil
- Préférences de notifications locales par profil, avec alertes de nouveaux messages, sons, vibrations compatibles, plage « Ne pas déranger » et masquage du contenu
- Personnalisation visuelle par profil : palettes, couleurs, formes, fonds, taille du texte, animations et réglages par section, avec aperçu avant application
- Catégorie « Langue et accessibilité » : huit langues, taille du texte, contraste renforcé, réduction des effets et animations, grandes zones tactiles et navigation à une main sur mobile
- Paramètres réorganisés en six catégories avec une page dédiée, un retour vers la liste et des indicateurs pour les notifications ou le verrouillage actifs

Le verrouillage protège l'accès à l'interface, sans chiffrer les données locales. Le PIN est stocké sous forme de dérivé PBKDF2 avec sel dans le navigateur; l'activation nécessite HTTPS (ou localhost) et Web Crypto. Les tentatives sont limitées progressivement. Le déverrouillage biométrique n'est pas proposé dans cette version web. Il n'existe pas de récupération du PIN : sa réinitialisation via les données du navigateur peut entraîner la perte des données locales de l'application.

Les alertes de nouveaux messages utilisent les événements Realtime et ne couvrent que les messages reçus pendant que l'application est ouverte. Les notifications système demandent une autorisation du navigateur et un contexte sécurisé (HTTPS ou localhost). Les sons personnalisés et les préférences sont conservés dans le stockage local de l'appareil, séparément pour chaque profil. La lecture audio automatique et la vibration dépendent des capacités et restrictions du navigateur/appareil. Les notifications lorsque l'application est fermée nécessitent un service Push serveur qui n'est pas configuré. Les appels, messages vocaux, médias partagés, souvenirs synchronisés et activités du partenaire sont désactivés tant qu'aucune source d'événements reçus n'est disponible.

La personnalisation visuelle est enregistrée localement par profil dans le navigateur et n'écrase pas les préférences de l'autre partenaire. L'aperçu applique temporairement les changements à l'interface; « Appliquer » les conserve, « Annuler » revient aux derniers réglages enregistrés et « Restaurer » rétablit puis enregistre le design d'origine. Les préférences n'incluent pas les réglages indépendants déjà présents dans les paramètres de conversation et des médias. Les couleurs, fonds et formes s'adaptent au thème clair/sombre; les options de section s'appliquent aux espaces de l'application concernés. La conservation dépend du stockage local du navigateur et ne synchronise pas les appareils.

La langue est appliquée immédiatement et conservée selon le profil local existant. Les réglages d'accessibilité utilisent le même stockage local par profil que la personnalisation visuelle. Le navigateur suit aussi les préférences système de réduction du mouvement et, lorsqu'elles sont disponibles, de contraste renforcé. La navigation à une main place la barre principale en bas uniquement sur les petits écrans; elle n'affecte pas l'ordinateur et est masquée dans la vue plein écran des messages pour ne pas recouvrir le compositeur. Aucun test sur un téléphone physique n'a été effectué.

Les paramètres principaux s'ouvrent désormais depuis une liste de catégories : apparence, notifications, confidentialité et sécurité, stockage, langue et accessibilité, informations et état de l'application. Les réglages de notification restent accessibles depuis le menu de la conversation, qui renvoie vers leur nouvelle page centralisée. L'état réseau reflète uniquement `navigator.onLine`; l'état hors ligne indique l'activation réelle du service worker. La sauvegarde et l'importation des données restent dans la catégorie d'informations.

Le bouton Retour ferme d'abord le dialogue, menu ou sous-page le plus proche; depuis une section, il revient directement à l'accueil sans modifier l'URL. À l'accueil, deux retours en moins de deux secondes tentent de fermer la fenêtre. Les navigateurs ne permettent pas toujours à une page de se fermer elle-même; l'application n'affiche donc aucune fausse confirmation et la fermeture peut nécessiter l'action du navigateur ou du système.

Le centre de stockage distingue les données locales de l'appareil des messages distants. Il mesure les fichiers audio et fonds IndexedDB, ainsi que les photos de galerie conservées en data URL; les tailles de LocalStorage sont des estimations et n'incluent pas les surcoûts internes du navigateur. L'estimation `navigator.storage.estimate()` concerne toute l'origine et peut inclure les ressources de l'application. La taille réelle de la base Supabase n'est pas exposée; seul le nombre de messages chargés est indiqué, et aucune donnée distante n'est modifiée.

L'inventaire local permet de trier, prévisualiser puis supprimer individuellement les photos locales, pistes musicales, fonds de conversation et sons de notification personnalisés, avec confirmation explicite. Les messages, souvenirs, données partagées et autres paramètres ne sont jamais supprimés depuis cet écran. La recherche de doublons utilise SHA-256 sur les fichiers comparables jusqu'à 32 Mio; elle ne supprime rien. Les navigateurs sans énumération IndexedDB ou Web Crypto affichent les mesures ou la comparaison comme indisponibles. Le nettoyage du cache ne concerne que les caches de ressources `carnet-*`, demande confirmation et peut interrompre l'accès hors ligne jusqu'au prochain chargement en ligne.

- Mise à jour instantanée sans rechargement
