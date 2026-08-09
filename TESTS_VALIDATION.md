# 🧪 Plan de Validation - Système de Messagerie Supabase

## Vue d'ensemble
Ce document fournit les étapes de test pour valider que les corrections apportées au système de messagerie fonctionnent correctement.

---

## 📋 Tests à Effectuer

### TEST A : Créer/Connecter le Partenaire A
**Objectif**: Partenaire A crée son profil et génère un code d'invitation

**Étapes**:
1. Ouvrir l'application sur le **Téléphone A**
2. Accéder à l'onglet **Messages** 
3. Cliquer sur **"Inviter un partenaire"** ou voir le code généré
4. **Vérifier**: 
   - ✅ Un code `CARNET-XXXXXX` est affiché
   - ✅ Le code est unique et différent d'une refresh à l'autre (non fixe en localStorage)
   - ✅ Console logs show: `🔗 MessageModule initialized:`

**Logs attendus**:
```
✅ MessageModule ready for messaging
📝 Creating new conversation: [CODE1]::[CODE2]
✅ Conversation created successfully
📥 Loading messages for conversation: [CODE1]::[CODE2]
✅ Loaded 0 messages
```

---

### TEST B : Créer/Connecter le Partenaire B
**Objectif**: Partenaire B crée son profil avec un code différent

**Étapes**:
1. Ouvrir l'application sur le **Téléphone B** (ou autre navigateur)
2. Accéder à l'onglet **Messages**
3. **Vérifier**:
   - ✅ Un code `CARNET-YYYYYY` est affiché
   - ✅ Code B ≠ Code A (codes uniques)
   - ✅ Aucun message car non lié

---

### TEST C : Partenaire A Génère Code d'Invitation
**Objectif**: Code A est visible et peut être partagé

**Étapes**:
1. Sur le **Téléphone A**: Copier le code `CARNET-XXXXXX`
2. **Vérifier**:
   - ✅ Code visible dans la section "Mon Code" ou "Inviter"
   - ✅ Console logs show initialization

---

### TEST D : Partenaire B Saisit le Code A
**Objectif**: Partenaire B entre le code d'invitation de A

**Étapes**:
1. Sur le **Téléphone B**: Aller à "Rejoindre un partenaire"
2. Saisir le code `CARNET-XXXXXX` (code du Partenaire A)
3. Cliquer **"Valider"** ou **"Rejoindre"**
4. **Vérifier**:
   - ✅ Validation Supabase effectuée (logs: `🔍 Validating code with Supabase`)
   - ✅ Pas d'erreur "Code invalide"
   - ✅ Toast: `✅ Liaison établie avec votre partenaire!`
   - ✅ Console logs show: `✅ Code validated successfully in Supabase`

**Logs attendus**:
```
🔍 Validating code with Supabase: CARNET-XXXXXX
✅ Code validated successfully in Supabase
🔗 MessageModule initialized:
  - My Code: CARNET-YYYYYY
  - Partner Code: CARNET-XXXXXX
  - Conversation Code: CARNET-XXXXXX::CARNET-YYYYYY
📝 Creating new conversation: ...
```

---

### TEST E : Vérifier Association Supabase
**Objectif**: Les deux téléphones utilisent la même `conversation_code` dans Supabase

**Étapes**:
1. Ouvrir Supabase Dashboard: https://app.supabase.com
2. Naviguer vers table `conversations`
3. **Vérifier**:
   - ✅ UNE seule ligne avec `code = CARNET-XXXXXX::CARNET-YYYYYY`
   - ✅ `participant_codes = [CARNET-XXXXXX, CARNET-YYYYYY]`
   - ✅ `created_at` récent

---

### TEST F : Vérifier Conversation Commune
**Objectif**: Les deux téléphones voient la MÊME conversation

**Étapes**:
1. Sur le **Téléphone A**: Console logs montrent `Conversation Code: CARNET-XXXXXX::CARNET-YYYYYY`
2. Sur le **Téléphone B**: Console logs montrent le MÊME code
3. **Vérifier**:
   - ✅ Codes identiques sur les deux téléphones
   - ✅ Conversation trouvée dans Supabase (TEST E)

**Logs attendus** (identiques sur A et B):
```
Conversation Code: CARNET-XXXXXX::CARNET-YYYYYY
```

---

### TEST G : Partenaire A Envoie Message
**Objectif**: Message de A → B transmis via Supabase Realtime

**Étapes**:
1. Sur le **Téléphone A**: Écrire `"Bonjour ❤️"` dans le champ message
2. Cliquer **"Envoyer"**
3. **Vérifier Téléphone A**:
   - ✅ Message apparaît dans la bulle de droite
   - ✅ Console logs: `📤 Sending message to conversation`
   - ✅ Console logs: `✅ Message sent successfully`
   - ✅ Status: `sent` ou `delivered`
4. **Vérifier Téléphone B** (dans les 1-2 secondes):
   - ✅ Message de A apparaît dans la bulle de gauche
   - ✅ Console logs: `📨 Realtime message received:`
   - ✅ Message content: `"Bonjour ❤️"`

**Logs A attendus**:
```
📤 Sending message to conversation: CARNET-XXXXXX::CARNET-YYYYYY
✅ Message sent successfully
```

**Logs B attendus**:
```
📡 Subscribing to Realtime: CARNET-XXXXXX::CARNET-YYYYYY
✅ Realtime subscribed to: CARNET-XXXXXX::CARNET-YYYYYY
📨 Realtime message received: { event: "INSERT", conversationCode: "...", messageId: "..." }
```

---

### TEST H : Partenaire B Répond
**Objectif**: Message de B → A transmis via Supabase Realtime

**Étapes**:
1. Sur le **Téléphone B**: Écrire `"Salut ❤️"` dans le champ message
2. Cliquer **"Envoyer"**
3. **Vérifier Téléphone B**:
   - ✅ Message apparaît dans la bulle de droite
   - ✅ Console logs: `📤 Sending message`
   - ✅ `✅ Message sent successfully`
4. **Vérifier Téléphone A** (dans les 1-2 secondes):
   - ✅ Message de B apparaît dans la bulle de gauche
   - ✅ Console logs: `📨 Realtime message received:`
   - ✅ Message content: `"Salut ❤️"`

**Vérification Supabase**:
- Naviguer vers table `messages`
- Filtrer par `conversation_code = CARNET-XXXXXX::CARNET-YYYYYY`
- **Vérifier**:
  - ✅ 2 lignes: une de A, une de B
  - ✅ `sender_code` correct (A ou B)
  - ✅ `text` correct
  - ✅ `status = read` ou `delivered`

---

### TEST I : Actualiser et Persister
**Objectif**: Messages persistent après F5 (page refresh)

**Étapes**:
1. Sur le **Téléphone A**: Appuyer **F5** pour rafraîchir la page
2. Naviguer à nouveau à l'onglet **Messages**
3. **Vérifier**:
   - ✅ Les 2 messages sont toujours visibles
   - ✅ Message de A: Droite "`Bonjour ❤️`"
   - ✅ Message de B: Gauche "`Salut ❤️`"
   - ✅ Console logs: `📥 Loading messages for conversation`
   - ✅ `✅ Loaded 2 messages`
4. Sur le **Téléphone B**: Appuyer **F5** pour rafraîchir la page
5. **Vérifier** (identique à A):
   - ✅ Messages toujours visibles
   - ✅ État du lien maintenu
   - ✅ `✅ Loaded 2 messages`

**Logs attendus après refresh**:
```
🔗 MessageModule initialized:
  - My Code: CARNET-[CODE]
  - Partner Code: CARNET-[CODE]
  - Conversation Code: CARNET-[CODE1]::CARNET-[CODE2]
✅ Conversation found: CARNET-[CODE1]::CARNET-[CODE2]
📥 Loading messages for conversation: CARNET-[CODE1]::CARNET-[CODE2]
✅ Loaded 2 messages
📡 Subscribing to Realtime: CARNET-[CODE1]::CARNET-[CODE2]
✅ Realtime subscribed to: CARNET-[CODE1]::CARNET-[CODE2]
✅ MessageModule ready for messaging
```

---

## 🔍 Vérifications Supplémentaires

### Console - Pas d'Erreurs
**Étapes**:
1. Ouvrir DevTools: **F12**
2. Onglet **Console**
3. **Vérifier**:
   - ❌ Zéro erreur (pas de `❌` en rouge)
   - ✅ Logs informatifs (`📤`, `✅`, `📡`) visibles
   - ✅ Pas d'erreurs Supabase

### LocalStorage - État Pairing
**Étapes**:
1. DevTools: **Application** → **Local Storage**
2. Chercher clé: `carnet_pairing_state`
3. **Vérifier**:
   - ✅ Valeur: `{"myCode":"CARNET-XXXXXX","partnerCode":"CARNET-YYYYYY","linked":true,"linkedAt":"2024-..."}`
   - ✅ `linked: true`
   - ✅ Les deux codes présents

### Network - Requêtes Supabase
**Étapes**:
1. DevTools: Onglet **Network**
2. Envoyer un message
3. **Vérifier**:
   - ✅ Requête POST vers `/rest/v1/messages` avec status **200 OK**
   - ✅ Payload: `conversation_code`, `sender_code`, `text`, `created_at`
   - ✅ Pas de **4xx** ou **5xx** errors

---

## ✅ Checklist de Validation Finale

| Test | Statut | Notes |
|------|--------|-------|
| TEST A - Profil A créé | ✓/✗ | |
| TEST B - Profil B créé | ✓/✗ | |
| TEST C - Code A visible | ✓/✗ | |
| TEST D - Code B entrée | ✓/✗ | |
| TEST E - Supabase conversation OK | ✓/✗ | |
| TEST F - Conversation commune | ✓/✗ | |
| TEST G - A → B message OK | ✓/✗ | |
| TEST H - B → A message OK | ✓/✗ | |
| TEST I - Persistence OK | ✓/✗ | |
| Console - Zéro erreur | ✓/✗ | |
| LocalStorage - État correct | ✓/✗ | |
| Network - Requêtes 200 OK | ✓/✗ | |

---

## 🚨 Problèmes Connus & Solutions

### Problème: "Code invalide"
**Cause**: Conversation n'existe pas dans Supabase (Partenaire A n'a pas créé de profil)
**Solution**: 
1. Sur Téléphone A: Ouvrir Messages et attendre l'initialisation
2. Vérifier Supabase que conversation est créée
3. Sur Téléphone B: Réessayer le code de A

### Problème: Messages n'arrivent pas
**Cause**: Realtime non souscrit ou conversation_code mismatch
**Solution**:
1. Vérifier console logs pour "Realtime subscribed"
2. Vérifier que `conversation_code` est IDENTIQUE A et B
3. Vérifier Network que subscription POST est **200 OK**
4. F5 refresh et réessayer

### Problème: Messages disparus après F5
**Cause**: Messages pas chargés de Supabase
**Solution**:
1. Vérifier Supabase que messages existent
2. Vérifier logs: `✅ Loaded X messages`
3. Vérifier Network que SELECT query est **200 OK**

---

## 📞 Support

Pour des questions ou problèmes:
1. Consulter les logs console (F12)
2. Vérifier Supabase Dashboard pour l'état des données
3. Vérifier onglet Network pour requêtes API

---

**Dernière mise à jour**: 2024
**Responsable**: Audit Système Messagerie
**Statut**: ✅ Prêt pour validation
