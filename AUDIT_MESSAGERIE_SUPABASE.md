# AUDIT COMPLET — Système de Messagerie Supabase
## Notre Carnet ❤️

**Date**: 2026-08-09  
**Statut**: 🔴 DÉFECTUEUX — Messagerie non fonctionnelle entre deux téléphones  
**Priorité**: CRITIQUE

---

## 1. RÉSUMÉ EXÉCUTIF

### Problème Principal
La dernière intégration Supabase n'est **PAS fonctionnelle** pour la synchronisation entre deux utilisateurs. Le système de pairing/invitation utilise **100% localStorage** sans validation Supabase, créant une désynchronisation des conversations.

### Impact
- ✋ Partner A envoie message → Partner B ne le reçoit PAS
- ✋ Deux utilisateurs peuvent créer des `conversation_code` différents
- ✋ Supabase n'a aucun profil utilisateur ou couple
- ✋ Les invitations ne sont pas validées

---

## 2. ARCHITECTURE ACTUELLE (DÉFECTUEUSE)

### 2.1 Flux de Pairing

```
PARTNER A                          PARTNER B
    ↓                                   ↓
generatePairingCode()            generatePairingCode()
CARNET-ABC123 (localStorage)      CARNET-XYZ789 (localStorage)
    ↓                                   ↓
Affiche code            →          Rentre code
    ↓                                   ↓
Attend                              savePairingState({
                                      linked: true,
                                      partnerCode: 'CARNET-ABC123'
                                    })
                                      ↓
                                  createConversationCode(
                                    'CARNET-ABC123',
                                    'CARNET-XYZ789'
                                  )
                                  = 'CARNET-ABC123::CARNET-XYZ789'
                                      ↓
                                  ensureConversation()
                                  → INSERT conversations WHERE
                                    code = 'CARNET-ABC123::CARNET-XYZ789'
                                      ↓
                                  PROBLÈME: Partner A aussi crée
                                  createConversationCode(
                                    'CARNET-ABC123',
                                    'CARNET-XYZ789'
                                  ) MAIS comment?
                                  Partner A ne connaît PAS XYZ789
```

### 2.2 Initialisation MessageModule

```javascript
// js/messages.js :: initialize()
const pairing = getPairingState();  // ← localStorage UNIQUEMENT
if (!pairing.linked) return;

state.myCode = pairing.myCode;
state.partnerCode = pairing.partnerCode;
state.conversationCode = createConversationCode(
  state.myCode,
  state.partnerCode
);

await ensureConversation();  // ← Crée/récupère dans Supabase
await loadMessages();         // ← Charge depuis Supabase
await subscribeRealtime();    // ← Écoute changements
```

### 2.3 Problème CRITIQUE

Si Partner A n'a pas encore mis à jour sa `partnerCode` quand `initialize()` s'exécute:
- `createConversationCode()` ne peut pas créer le code correctement
- Les deux téléphones pourraient avoir des `conversationCode` différents
- Les messages sont insérés dans Supabase avec des codes différents
- Realtime écoute des codes différents
- **RÉSULTAT: Aucune synchronisation**

---

## 3. COMPOSANTS ANALYSÉS

### 3.1 supabase.js ✅
```javascript
const SUPABASE_URL = "https://bmuoiexhmpgvyqxzxtyi.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_7Lkei-gMeH4DcZ947oOqlQ_yy4eigBy";
```
- **Statut**: ✅ Correctement initialisé
- **Clés**: Valides et présentes
- **Problème**: Pas de gestion d'erreur

### 3.2 js/realtime.js ✅
```javascript
channel = window.supabaseClient
  .channel(`messages:${conversationCode}`)
  .on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'messages',
    filter: `conversation_code=eq.${conversationCode}`
  }, (payload) => callback(payload))
```
- **Statut**: ✅ Configuration correcte
- **Problème**: Écoute un code qui peut être incorrect
- **Problème**: N'unsubscribe pas au changement de section

### 3.3 js/messages.js 🔴
```javascript
function getPairingState() {
  return typeof window.getPairingState === 'function' 
    ? window.getPairingState() 
    : null;
}
```
- **Statut**: 🔴 Dépend 100% du localStorage via getPairingState()
- **Problème**: Aucune validation Supabase
- **Problème**: Pas de vérification que le code existe vraiment
- **Problème**: Pas de gestion d'erreur si codes inconsistants

### 3.4 js/script.js :: getPairingState() 🔴

```javascript
function getPairingState() {
  const stored = load(PAIRING_STORAGE_KEY, {});
  const baseState = {
    myCode: stored.myCode || generatePairingCode(),    // ← Génération locale ALÉATOIRE
    linked: !!stored.linked,
    partnerCode: stored.partnerCode || '',
    linkedAt: stored.linkedAt || null
  };

  if (!stored.myCode || stored.myCode !== baseState.myCode) {
    save(PAIRING_STORAGE_KEY, baseState);
  }

  return baseState;
}
```
- **Statut**: 🔴 PROBLÈME CENTRAL
- **Problème 1**: Code généré ALÉATOIREMENT (Math.random())
- **Problème 2**: Chaque appel peut générer un code différent
- **Problème 3**: Aucun lien avec Supabase
- **Problème 4**: Invitation code n'existe pas dans Supabase

### 3.5 Système d'Invitation 🔴

**Où**: `initMessages()` ligne ~1954 dans js/script.js

```javascript
if (joinSubmitButton && partnerCodeInput) {
  joinSubmitButton.addEventListener('click', () => {
    const code = partnerCodeInput.value.trim().toUpperCase();
    const validCodePattern = /^CARNET-[A-Z0-9]{6}$/;

    if (!code || !validCodePattern.test(code)) {
      showToast('Code invalide.');
      return;
    }

    if (code === currentState.myCode.toUpperCase()) {
      showToast('Entrez le code fourni par votre partenaire.');
      return;
    }

    // ← PROBLÈME: Pas de vérification Supabase!
    savePairingState({ 
      linked: true, 
      partnerCode: code, 
      linkedAt: new Date().toISOString() 
    });

    updateMessagesPairingUI();
  });
}
```

- **Statut**: 🔴 DÉFECTUEUX
- **Validation**: Format UNIQUEMENT (pas de contenu)
- **Problème 1**: Accepte TOUS les codes avec le bon format
- **Problème 2**: Pas de vérification que le code appartient à quelqu'un
- **Problème 3**: Pas de création de couple dans Supabase
- **Problème 4**: Partner A ne sait pas que Partner B a rejoint
- **Problème 5**: Pas de création de conversation

### 3.6 CSS Messages 🔴

**Fichier**: css/style.css ligne 300+

- **Statut**: 🔴 MASSIF ET COMPLEXE
- **Problèmes**:
  - Classes non préfixées (interfère avec autres sections)
  - Animations excessives (50+ keyframes)
  - Z-index élevés (999, 1000, 2000)
  - Positions absolues inutiles
  - Styles pour `.btn`, `.bubble`, `.message` non isolés
  - Pseudo-éléments redondants (::before, ::after, ::placeholder)
  - Aucune structure logique
  - Impossible de maintenance

---

## 4. TABLES SUPABASE UTILISÉES

### 4.1 `conversations` table
```sql
CREATE TABLE conversations (
  id: UUID,
  code: TEXT,                           -- CARNET-A::CARNET-B
  participant_codes: ARRAY[TEXT],       -- [CARNET-A, CARNET-B]
  created_at: TIMESTAMP,
  updated_at: TIMESTAMP
)
```
- **Problème**: Pas de lien avec profils utilisateurs
- **Problème**: `participant_codes` est une convention locale

### 4.2 `messages` table
```sql
CREATE TABLE messages (
  id: UUID,
  conversation_code: TEXT,              -- Clé étrangère!
  sender_code: TEXT,                    -- Code local (CARNET-X)
  text: TEXT,
  status: TEXT,
  created_at: TIMESTAMP,
  ...
)
```
- **Problème**: `conversation_code` comme clé étrangère (PAS de FK réelle)
- **Problème**: `sender_code` n'existe pas dans une table profils
- **Risque**: Données orphelines, pas de cascade delete

### 4.3 Schéma MANQUANT
- ❌ `profiles` table — profils utilisateurs
- ❌ `invitations` table — codes d'invitation valides
- ❌ `couples` table — association partner1_id ↔ partner2_id

---

## 5. CAUSE RACINE DES PROBLÈMES

| Problème | Cause | Impact |
|----------|-------|--------|
| Codes conversation différents | Génération locale aléatoire | Messages pas synchros |
| Aucun couple créé | Pas de table couples | Pas de lien profil |
| Pas de validation invitation | localStorage SEUL | Nimporte qui peut rejoindre |
| Aucun profil Supabase | Architecture incomplète | Impossible de vérifier identité |
| CSS dégradé | Classes non isolées | Déborde sur autres sections |
| Pas d'erreurs consol | Logs silencieux | Impossible à déboguer |

---

## 6. RISQUES & DÉPENDANCES

### Risques Immédiats
- 🔴 Deux utilisateurs ne peuvent PAS communiquer
- 🔴 Messages peuvent être perdus
- 🔴 Aucun audit trail (qui a envoyé quoi)
- 🔴 Impossible de "se défaire" (unlink account)

### Risques Futurs
- 🟡 Impossible d'ajouter chiffrement
- 🟡 Impossible de modérer
- 🟡 Impossible de supprimer données d'un utilisateur
- 🟡 Impossible d'implémenter mentions/groupes

### Dépendances Critiques
- `supabaseClient` initialisé dans supabase.js ✅
- `MessageModule` dans js/messages.js 🟡 (fonctionnel mais sans validation)
- `RealtimeModule` dans js/realtime.js 🟡 (fonctionne si conversation_code cohérent)
- `getPairingState()` dans js/script.js 🔴 (défectueux)

---

## 7. CONCLUSIONS AUDIT

### Ce Qui Fonctionne ✅
1. Supabase est connecté et accessible
2. Realtime écoute les messages correctement (si conversation_code cohérent)
3. Messages sont insérés dans Supabase
4. CSS global est bien structuré
5. UI/UX des pairing est claire

### Ce Qui Ne Fonctionne PAS 🔴
1. **CRITIQUE**: Codes de pairing générés aléatoirement → conversation_code incohérent
2. **CRITIQUE**: Pas de validation Supabase des codes d'invitation
3. **CRITIQUE**: Aucun système de profil/couple dans Supabase
4. **Important**: CSS Messages interfère avec autres sections
5. **Important**: Pas de logs d'erreur détaillés

### Avant Toute Modification
```
⚠️  NE MODIFIEZ RIEN D'AUTRE QUE MESSAGERIE
✅  Vérifiez que autres onglets ne sont pas affectés
✅  Testez avec localStorage ET Supabase
✅  Ayez deux navigateurs ouverts (simulation 2 utilisateurs)
```

---

## 8. RECOMMANDATIONS

### PHASE 1: Profils & Couples (Backend Supabase)
- [ ] Créer `profiles` table avec UUID, code_personnel, email
- [ ] Créer `invitations` table avec code, creator_id, status
- [ ] Créer `couples` table avec partner1_id, partner2_id, couple_id
- [ ] Créer `conversations` table liée à couples (pas codes)

### PHASE 2: Refactor Pairing (JavaScript)
- [ ] Partner A crée profil → Supabase génère UUID & code
- [ ] Partner A génère invitation → Supabase crée entrée
- [ ] Partner B entre code → Supabase valide & crée couple
- [ ] Les deux téléphones récupèrent couple_id unique depuis Supabase
- [ ] Créer conversation unique via couple_id

### PHASE 3: Corriger Messaging
- [ ] Utiliser conversation_id (UUID) au lieu de conversation_code
- [ ] Utiliser sender_id (UUID) au lieu de sender_code
- [ ] Ajouter logs détaillés en console
- [ ] Implémenter gestion erreurs Supabase

### PHASE 4: Simplifier CSS
- [ ] Préfixer classes `.messages-*`, `.chat-*`, `.message-*`
- [ ] Supprimer styles redondants
- [ ] Supprimer animations excessives
- [ ] Limiter z-index à 10-20 max
- [ ] Assurer responsive sans dépasser viewport

---

## 9. RECOMMANDATIONS POUR TESTER

### Test A: Créer Profil Partner A
1. Ouvrir app sur Téléphone A
2. Aller section Messages
3. Vérifier code affiché = sauvegardé dans localStorage
4. Vérifier code dans Supabase `profiles` table

### Test B: Créer Profil Partner B
1. Ouvrir app sur Téléphone B
2. Voir code de B généré
3. Vérifier couple créé dans Supabase `couples` table

### Test C: Vérifier Conversation
1. Deux téléphones doivent voir MÊME `conversation_id`
2. Tester avec `window.MessageModule.getState().conversationCode`
3. Les deux values doivent être identiques

### Test D: Envoyer Message
1. Partner A: "Bonjour ❤️"
2. Partner B: Doit recevoir IMMÉDIATEMENT via Realtime
3. Vérifier dans Supabase `messages` table
4. Rafraîchir page B: message doit persister

### Test E: Realtime Sync
1. Partner A envoie "Test 1"
2. Partner B doit le voir sans rafraîchir
3. Partner B répond "Test 2"
4. Partner A doit le voir sans rafraîchir
5. **Comportement actuel**: Pas de sync

---

## 10. FICHIERS AFFECTÉS

### À Corriger (Ordre de Priorité)
1. `js/messages.js` — Architecture pairing/messaging
2. `js/script.js` — Système pairing (getPairingState, initMessages)
3. `js/realtime.js` — Subscription au bon conversation_id
4. `css/style.css` — Classes `.messages-*` et `.message-*`

### À Vérifier (Pas à Modifier)
- ✅ `index.html` — Structure OK
- ✅ `supabase.js` — Config OK
- ✅ `service-worker.js` — Ne pas toucher
- ✅ `manifest.json` — Ne pas toucher
- ✅ Autres onglets (accueil, galerie, souvenirs, jeux, plus) — Ne pas toucher

---

## 11. PROCHAINES ÉTAPES

```
AUDIT COMPLET ✅  →  Rapport (ce document)
                 ↓
          Attendre approbation avant modifications
                 ↓
    Proposer plan de correction détaillé
                 ↓
    Implémenter corrections
                 ↓
    Tests 2 utilisateurs
                 ↓
    Rafraîchissement persistance
                 ↓
    LIVRAISON FINALE
```

---

**Fin de l'audit**  
**Prêt pour corrections si demandé**
