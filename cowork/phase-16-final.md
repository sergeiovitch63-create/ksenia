# Phase 16 — Finitions (à faire par toi)

## 1. Image OpenGraph

Pour de belles previews sur Instagram / WhatsApp / Telegram / Facebook quand on partage un lien du site, prépare une image dédiée :

- **Dimensions** : `1200 × 630` px
- **Format** : JPG ou PNG
- **Contenu** : une photo signature de Ksenia + son nom (style affiche minimaliste)
- **Emplacement** : `public/og-image.jpg`

Ensuite dans `app/layout.tsx`, remplace toutes les références à `/images/portait.PNG` (dans `openGraph` et `twitter`) par `/og-image.jpg`.

## 2. Favicon

Le projet n'a pas encore de favicon personnalisé.

1. Crée un favicon avec les initiales **К·К** en or sur fond noir (ou utilise un obturateur stylisé)
2. Génère le pack complet sur https://realfavicongenerator.net
3. Place les fichiers dans `app/` :
   - `app/icon.png` (Next.js le détecte automatiquement)
   - `app/apple-icon.png`

## 3. Domaine final

Quand tu auras un domaine (ex: `kseniakoshka.ru`), mets-le dans `.env.local` :

```
NEXT_PUBLIC_SITE_URL=https://kseniakoshka.ru
```

Cela mettra à jour :
- Les URLs canoniques (SEO)
- Le sitemap (`/sitemap.xml`)
- Le `robots.txt`
- Les emails d'approbation d'avis

## 4. Déploiement

Recommandé : **Vercel** (gratuit, créé par les auteurs de Next.js).

1. Va sur https://vercel.com → Sign up avec GitHub
2. Push ton code sur GitHub : `git push origin main`
3. Sur Vercel → "Import Project" → choisis le repo
4. Dans "Environment Variables" → ajoute toutes les variables de ton `.env.local` :
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `NEXT_PUBLIC_SITE_URL` (mets l'URL Vercel pour commencer, ex `https://ksenia.vercel.app`)
   - `AVIS_APPROVAL_SECRET`
5. Clique "Deploy"

Une fois en ligne, ajoute un domaine custom dans Vercel → Settings → Domains.

## 5. Vérifier Lighthouse

Ouvre le site en mode production (`npm run build && npm start`) puis F12 → onglet **Lighthouse** → "Analyse page load". Objectif :
- Performance ≥ 85
- Accessibility ≥ 90
- Best Practices ≥ 95
- SEO ≥ 95

Si Performance est basse, c'est probablement à cause des grosses photos non optimisées. Voir `cowork/phase-08-gallery-photos.md`.

## 6. Google Search Console

1. Va sur https://search.google.com/search-console
2. Ajoute ton domaine
3. Soumets `https://ton-domaine.com/sitemap.xml`
4. Google va commencer à indexer le site

## 7. Analytique (optionnel)

Pour suivre les visites :
- **Vercel Analytics** : gratuit, 1 clic dans le dashboard Vercel
- **Plausible** : payant mais respectueux de la vie privée (~9$/mois)
- **Google Analytics** : gratuit mais lourd et invasif

✅ Quand c'est fait, dis-moi "phase 16 ok".
