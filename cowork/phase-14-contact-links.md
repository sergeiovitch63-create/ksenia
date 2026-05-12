# Phase 14 — Mettre les vrais liens contact (à faire par toi)

## Liens à compléter

Fichier : `components/home/ContactAndFooter.tsx`

### Instagram
Ligne actuelle :
```tsx
href="https://instagram.com/ksenia.koshka"
```
Remplace `ksenia.koshka` par le **vrai handle Instagram** de Ksenia.

### WhatsApp
Ligne actuelle :
```tsx
href="https://wa.me/"
```
Remplace par :
```tsx
href="https://wa.me/79XXXXXXXXX"
```
Format : `+7` suivi du numéro russe **sans espaces, sans tirets, sans le `+`**.
Ex : pour `+7 921 123 45 67` → `79211234567`

Tu peux aussi pré-remplir un message :
```tsx
href="https://wa.me/79XXXXXXXXX?text=Здравствуйте! Хочу записаться на съёмку"
```

### Header (menu fullscreen mobile)

Même chose dans `components/SiteHeader.tsx` lignes Instagram / WhatsApp.

## Tester le formulaire de contact

1. Lance le site `npm run dev`
2. Va sur la page d'accueil → section "Запись на съёмку"
3. Remplis les 4 étapes (type → date → nom/contact → message)
4. Clique "Отправить заявку ✦"
5. Tu dois recevoir un email à l'adresse `CONTACT_EMAIL` (dans `.env.local`)

> ⚠️ Comme pour les avis, Resend gratuit n'envoie qu'à ton adresse vérifiée tant que tu n'as pas vérifié un domaine.

✅ Quand c'est fait, dis-moi "phase 14 ok".
