# Phase 12 — Tester le système d'avis (à faire par toi)

## Prérequis

Tu dois avoir terminé `cowork/phase-01-setup.md` (Supabase + Resend + `.env.local`).

## 1. Vérifier la migration SQL

Va sur ton dashboard Supabase → **Table Editor** → tu dois voir une table `avis` avec ces colonnes :
- `id` (uuid)
- `nom` (text)
- `type_seance` (text)
- `date_seance` (date)
- `note` (int4)
- `commentaire` (text)
- `approuve` (bool, default false)
- `created_at` (timestamptz)

Si elle n'existe pas, ré-exécute `supabase/migrations/001_avis.sql` dans le SQL Editor.

## 2. Tester un avis end-to-end

1. Lance le site : `npm run dev`
2. Va sur http://localhost:3000/laisser-un-avis
3. Remplis les 3 étapes (type, date, note, commentaire, nom)
4. Clique "Отправить отзыв ✦"
5. Tu dois voir la page de confirmation "Спасибо !"

## 3. Vérifier la réception email

1. Va dans la boîte mail définie dans `CONTACT_EMAIL` (`.env.local`)
2. Tu dois recevoir un email "Новый отзыв от ..."
3. Clique le bouton "Одобрить и опубликовать"
4. Tu dois voir une page "✓ Отзыв опубликован"

**Si tu ne reçois pas l'email :**
- Vérifie les spams
- Vérifie que `RESEND_API_KEY` est bien rempli dans `.env.local`
- Vérifie les logs serveur (terminal `npm run dev`) — si "RESEND_API_KEY manquant" apparaît, redémarre Next après avoir modifié `.env.local`

> ⚠️ **Limitation Resend gratuit** : tu ne peux envoyer qu'à TON adresse vérifiée tant que tu n'as pas vérifié un domaine.
> Mets donc temporairement ton adresse personnelle dans `CONTACT_EMAIL` pour les tests.

## 4. Vérifier l'affichage sur le site

1. Retourne sur http://localhost:3000
2. Scrolle jusqu'à la section "Отзывы"
3. Ton avis doit apparaître avec **la date de la séance** (pas la date d'aujourd'hui)
4. Format affiché : `октября 2024` par exemple

## 5. Partager le lien avec les clients

Le lien à donner aux clients :
- **Dev** : `http://localhost:3000/laisser-un-avis`
- **Prod** : `https://ton-domaine.com/laisser-un-avis`

Tu peux le mettre :
- Dans tes stories Instagram
- En signature WhatsApp
- Sur un QR code physique imprimé après chaque séance

✅ Quand tout marche, dis-moi "phase 12 ok".
