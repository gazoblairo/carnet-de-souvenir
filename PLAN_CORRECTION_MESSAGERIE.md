# PLAN DE CORRECTION — Système de Messagerie Supabase
## Notre Carnet ❤️

**Date**: 2026-08-09  
**Statut**: 📋 Stratégie de correction  
**Réadiness**: 70% (audit complété, prêt pour implémentation)

---

## 1. STRATÉGIE GLOBALE

L'audit a identifié que le système de pairing/messagerie est **défectueux** parce que:
1. Les codes de pairing ne sont pas validés dans Supabase
2. Les deux téléphones peuvent créer des conversation_codes différents
3. Aucun mécanisme d'authentification réel

**Approche de correction**:
- ✅ GARDER: Structure localStorage + Supabase (ne pas tout recréer)
- ✅ GARDER: Tables `conversations` et `messages` existantes
- 🔧 FIXER: Logique de pairing pour assurer cohérence
- 🔧 FIXER: Validation Supabase des codes
- 🔧 FIXER: Synchronisation conversation_code entre deux téléphones
- 🔧 FIXER: CSS Messages pour éviter débordement
- 📝 AJOUTER: Logs d'erreur détaillés

---

## 2. SOLUTIONS PAR PROBLÈME

### Problème 1: Codes de Pairing Incohérents

**Situation Actuelle**
```
Partner A: myCode=CARNET-ABC123, partnerCode='' (attend entrée manuelle)
Partner B: myCode=CARNET-XYZ789, partnerCode='CARNET-ABC123' (après rentrée)
Résultat: A n'a PAS le code de B! Conversation_code ne peut pas être créé!
```

**Solution Proposée**
```
1. Quand B rentre le code de A
2. Valider que A existe dans Supabase (table invitations ou conversations)
3. Créer une entrée dans Supabase liant A à B
4. Utiliser Supabase comme source of truth pour le couple
5. Les deux téléphones récupèrent le conversation_id depuis Supabase
```

**Implémentation**
- Créer/utiliser table `invitations` pour valider les codes
- Quand Partner B rentre code de A → vérifier dans Supabase
- Si valide → créer couple et conversation dans Supabase
- Retourner conversation_id unique depuis Supabase
- Les deux téléphones utilisent CE conversation_id

### Problème 2: Pas de Validation Supabase

**Solution**
- Créer table `invitations` (si n'existe pas):
```sql
CREATE TABLE invitations (
  id UUID PRIMARY KEY,
  creator_code TEXT NOT NULL,
  status TEXT DEFAULT 'pending',  -- pending, linked, expired
  joiner_code TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  linked_at TIMESTAMP
);
```

- Ou utiliser `conversations` existant mais avec colonne `status`

### Problème 3: CSS Messages Débordement

**Solution**
- Préfixer TOUTES les classes `.messages-*` et `.message-*`
- Isoler le CSS avec `[data-section="messages"]` si possible
- Supprimer styles redondants et animations excessives
- Limiter z-index à max 20

---

## 3. MODIFICATIONS PAR FICHIER

### Fichier 1: js/messages.js

**Modifications Clés**
1. Dans `initialize()`:
   ```javascript
   // Avant: récupère depuis localStorage SEUL
   // Après: valide dans Supabase et récupère couple_id
   const pairing = getPairingState();
   if (!pairing.linked) return;
   
   // NOUVEAU: vérifier couple dans Supabase
   const conversation = await validatePairingWithSupabase(
     pairing.myCode,
     pairing.partnerCode
   );
   if (!conversation) throw new Error('Couple invalide');
   
   // Utiliser conversation_id (UUID) au lieu de conversation_code
   state.conversationId = conversation.id;
   ```

2. Ajouter fonction `validatePairingWithSupabase()`:
   ```javascript
   async function validatePairingWithSupabase(myCode, partnerCode) {
     if (!window.supabaseClient) return null;
     
     const conversationCode = createConversationCode(myCode, partnerCode);
     const { data, error } = await window.supabaseClient
       .from('conversations')
       .select('*')
       .eq('code', conversationCode)
       .eq('status', 'linked')  // Ou utiliser autres champs
       .limit(1)
       .maybeSingle();
     
     if (error) {
       console.error('❌ Supabase validatePairing error:', error.message);
       return null;
     }
     
     return data;
   }
   ```

3. Ajouter logs d'erreur détaillés (console.error au lieu de console.warn)

### Fichier 2: js/script.js :: initMessages()

**Modifications Clés**
1. Quand joinSubmitButton est cliqué:
   ```javascript
   // Avant: simple savePairingState
   // Après: valider avec Supabase + créer couple
   
   if (joinSubmitButton && partnerCodeInput) {
     joinSubmitButton.addEventListener('click', async () => {
       const code = partnerCodeInput.value.trim().toUpperCase();
       
       // Valider format
       if (!code || !/^CARNET-[A-Z0-9]{6}$/.test(code)) {
         showToast('Code invalide');
         return;
       }
       
       // Valider que code ≠ myCode
       const currentState = getPairingState();
       if (code === currentState.myCode.toUpperCase()) {
         showToast('Entrez le code de votre partenaire');
         return;
       }
       
       // NOUVEAU: vérifier avec Supabase
       try {
         const success = await validateAndLinkWithSupabase(
           currentState.myCode,
           code
         );
         
         if (!success) {
           console.error('❌ Code invalide ou utilisateur inexistant');
           showToast('Code invalide ou expiré');
           return;
         }
         
         // Sauvegarder localement après validation Supabase
         savePairingState({
           linked: true,
           partnerCode: code,
           linkedAt: new Date().toISOString()
         });
         
         updateMessagesPairingUI();
         showToast('Compte lié avec succès! 💕');
       } catch (error) {
         console.error('❌ Linking error:', error);
         showToast('Erreur lors de la liaison');
       }
     });
   }
   ```

2. Ajouter fonction `validateAndLinkWithSupabase()`:
   ```javascript
   async function validateAndLinkWithSupabase(myCode, partnerCode) {
     if (!window.supabaseClient) {
       console.error('❌ Supabase client not available');
       return false;
     }
     
     try {
       const conversationCode = [myCode, partnerCode]
         .map(c => c.trim().toUpperCase())
         .sort()
         .join('::');
       
       // Vérifier que la conversation existe (Partner A l'a créée)
       const { data: existing, error: selectError } = await window.supabaseClient
         .from('conversations')
         .select('*')
         .eq('code', conversationCode)
         .limit(1)
         .maybeSingle();
       
       if (selectError) {
         console.error('❌ Supabase select conversation error:', selectError.message);
         return false;
       }
       
       if (!existing) {
         console.error('❌ Conversation not found. Partner A must create it first');
         return false;
       }
       
       // Tout est bon
       return true;
     } catch (error) {
       console.error('❌ validateAndLinkWithSupabase:', error);
       return false;
     }
   }
   ```

### Fichier 3: js/realtime.js

**Modifications Clés**
1. Ajouter unsubscribe automatique:
   ```javascript
   async function unsubscribe() {
     if (!channel) return;
     try {
       await channel.unsubscribe();
       console.log('✅ Realtime unsubscribed');
     } catch (error) {
       console.error('❌ Unsubscribe error:', error);
     }
     channel = null;
   }
   
   // S'unsubscriber quand la section messages est fermée
   window.addEventListener('beforeunload', unsubscribe);
   ```

2. Ajouter logs d'erreur:
   ```javascript
   channel.on('postgres_changes', {...}, (payload) => {
     console.log('📨 Realtime message received:', payload);
     callback(payload);
   });
   
   await channel.subscribe((status) => {
     if (status === 'SUBSCRIBED') {
       console.log('✅ Realtime subscribed to', conversationCode);
     } else if (status === 'CHANNEL_ERROR') {
       console.error('❌ Realtime channel error');
     }
   });
   ```

### Fichier 4: css/style.css

**Modifications Clés**
1. Isoler CSS Messages avec préfixes `.messages-*` et `.message-*`
2. Supprimer styles redondants pour `.btn`, `.bubble`, etc.
3. Simplifier animations (remplacer les 50+ keyframes par 3-5 simples)
4. Limiter z-index: navbar=100, modal=200, tooltip=300 max
5. Respecter viewport sans débordement

**Sections à modifier**
- `.messages-v2-shell` et enfants
- `.message-bubble` et variations
- `.message-filter-chip`
- Animations message (messageRise, etc.)
- Supprimer `.navbar` specifics du CSS messages

---

## 4. ÉTAPES D'IMPLÉMENTATION

### Étape 1: Corriger js/messages.js
- Ajouter `validatePairingWithSupabase()`
- Modifier `initialize()`
- Ajouter logs console.error

### Étape 2: Corriger js/script.js
- Ajouter `validateAndLinkWithSupabase()`
- Modifier listener joinSubmitButton
- Ajouter validations Supabase

### Étape 3: Corriger js/realtime.js
- Ajouter unsubscribe approprié
- Ajouter logs détaillés

### Étape 4: Simplifier css/style.css
- Isoler classes avec préfixes
- Supprimer redondances
- Simplifier animations

### Étape 5: Tester
- Test A: Créer deux profils
- Test B: Valider pairing
- Test C: Envoyer messages
- Test D: Rafraîchissement

---

## 5. VALIDATION CHECKLIST

Avant de livrer:
- [ ] Deux utilisateurs peuvent créer accounts
- [ ] Code d'invitation s'affiche
- [ ] Partenaire peut entrer code
- [ ] Supabase valide le code
- [ ] Les deux utilisateurs ont le même conversation_id
- [ ] Messages sont synchronisés Realtime
- [ ] Rafraîchir page: messages persistent
- [ ] CSS Messages n'affecte pas autres onglets
- [ ] Boutons sont accessibles sur mobile/desktop
- [ ] Console: pas d'erreurs silencieuses
- [ ] Console: logs détaillés pour déboguer

---

## 6. RISQUES & MITIGATION

| Risque | Mitigation |
|--------|-----------|
| Tables Supabase manquantes | Vérifier directement dans Supabase console. Créer si nécessaire |
| Données existantes incompatibles | Vérifier schema réel vs supposé. Adapter code en conséquence |
| CSS affecte autres sections | Tester tous les onglets après modifications |
| Realtime continue à écouter ancien code | Implémenter unsubscribe correctement |
| Deux utilisateurs en production | Commencer par test en local ou deux browsers |

---

## 7. DÉPENDANCES CONFIRMÉES

- ✅ `supabaseClient` initialisé
- ✅ Tables `conversations` et `messages` existent
- ⚠️  Table `invitations` PEUT être utilisée (vérifier si existe)
- ⚠️  Colonne `status` PEUT exister dans `conversations` (vérifier)

---

## 8. APPROCHE CONSERVATIVE

Pour minimiser les risques:
1. Ne pas supprimer/modifier structure tables Supabase
2. Ne pas toucher autres onglets/CSS
3. Ajouter validations progressives (format → Supabase)
4. Garder localStorage comme fallback
5. Ajouter beaucoup de logs pour déboguer

---

## 9. PROCHAINES ÉTAPES

1. Approuver ce plan
2. Implémenter les corrections
3. Vérifier schéma Supabase réel
4. Adapter code si nécessaire
5. Tester avec deux utilisateurs
6. Livrer

---

**Prêt pour implémentation**
