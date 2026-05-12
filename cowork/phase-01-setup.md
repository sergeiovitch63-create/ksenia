# Phase 1 — Setup comptes externes (à faire par toi)

## 1. Supabase (stockage des avis)

1. Va sur https://supabase.com → "Start your project" → connecte-toi avec GitHub
2. Crée un nouveau projet :
   - Nom : `ksenia-koshka`
   - Mot de passe DB : génère-en un fort, garde-le
   - Région : `Frankfurt (eu-central-1)` (le plus proche de Kaliningrad)
3. Attends ~2 min que le projet soit prêt
4. Va dans **SQL Editor** (icône `</>` à gauche) → **New query**
5. Copie-colle le contenu de `supabase/migrations/001_avis.sql` → clique **Run**
6. Va dans **Project Settings** (roue crantée en bas) → **API**
7. Récupère :
   - `Project URL` → c'est `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → c'est `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → c'est `SUPABASE_SERVICE_ROLE_KEY` (⚠️ secret, ne jamais exposer)

## 2. Resend (envoi d'emails)

1. Va sur https://resend.com → Sign up (gratuit, 3000 emails/mois)
2. Une fois connecté → **API Keys** → **Create API Key**
   - Nom : `ksenia-site`
   - Permission : `Sending access`
3. Copie la clé qui commence par `re_...` → c'est `RESEND_API_KEY`

> Pour envoyer depuis ta propre adresse (au lieu de `noreply@resend.dev`), tu devras plus tard
> vérifier un domaine dans Resend. Pour démarrer, l'adresse par défaut suffit.

## 3. Créer le fichier `.env.local`

À la racine du projet, copie `.env.local.example` en `.env.local` puis remplis les valeurs :

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL=ton.email@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
AVIS_APPROVAL_SECRET=genere-une-chaine-aleatoire-longue-ici
```

Pour `AVIS_APPROVAL_SECRET`, génère une chaîne aléatoire :
```powershell
[System.Web.Security.Membership]::GeneratePassword(48, 0)
```
ou utilise https://www.random.org/strings/

## 4. Vérification

Lance le projet pour vérifier que ça démarre :
```
npm run dev
```
Ouvre http://localhost:3000 — le site doit toujours s'afficher comme avant.

✅ Quand c'est fait, dis-moi "phase 1 ok" et je continue avec la phase 2.
