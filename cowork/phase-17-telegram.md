# Phase 17 — Configurer le bot Telegram (5 min)

Telegram remplace (ou complète) Resend pour les notifications. C'est instantané, gratuit, sans configuration DNS, et la notif arrive directement sur ton téléphone.

## 1. Créer le bot via @BotFather

1. Ouvre Telegram (app mobile ou https://web.telegram.org)
2. Cherche **@BotFather** dans la recherche
3. Envoie `/newbot`
4. Donne un nom (ex : `Ksenia Koshka Notifications`)
5. Donne un username (doit finir par `bot`, ex : `ksenia_koshka_bot`)
6. **@BotFather te répond avec un token** qui ressemble à :
   ```
   1234567890:ABCdefGHIjklMNOpqrSTUvwxYZ
   ```
   → c'est `TELEGRAM_BOT_TOKEN`

## 2. Récupérer ton chat_id

1. Dans Telegram, cherche le bot que tu viens de créer (par son @username)
2. Ouvre la conversation et envoie `/start` (n'importe quel message suffit)
3. Dans ton navigateur, ouvre :
   ```
   https://api.telegram.org/bot<TON_TOKEN>/getUpdates
   ```
   (remplace `<TON_TOKEN>` par le token de l'étape 1)
4. Tu verras du JSON. Cherche la valeur `"chat":{"id": 123456789, ...}`
5. Le nombre `123456789` est ton `TELEGRAM_CHAT_ID`

## 3. Remplir `.env.local`

Édite `C:\dev\ksenia\.claude\worktrees\angry-dhawan-c7f043\.env.local` :

```
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrSTUvwxYZ
TELEGRAM_CHAT_ID=123456789
```

## 4. Redémarrer le serveur

```powershell
# Ctrl+C dans le terminal npm run dev, puis :
npm run dev
```

## 5. Tester

1. Va sur http://localhost:3000/laisser-un-avis
2. Soumets un avis test
3. Dans 2–3 secondes ton bot Telegram doit recevoir un message avec :
   - 📸 Новый отзыв
   - Nom, type, date, note
   - Le commentaire
   - **Bouton "✅ Одобрить в 1 клик"** → ouvre direct le lien d'approbation
   - **Bouton "⚙ Открыть админ-панель"** → ouvre `/admin/avis`

## Notification de prise de contact

Le formulaire de contact (page d'accueil) envoie aussi une notification Telegram avec :
- 📩 Новая заявка
- Nom, contact (téléphone/email), type, date souhaitée, message

## Pour partager les notifications avec quelqu'un d'autre

Si tu veux qu'une 2e personne reçoive les notifs (ex : un assistant) :
1. Crée un **groupe Telegram**
2. Ajoute ton bot dans le groupe (Settings → Add member → cherche ton bot par @username)
3. Récupère le `chat_id` du groupe via `getUpdates` (il commence par `-` pour un groupe)
4. Mets ce nouveau `chat_id` dans `.env.local`

## Sécurité

- Le bot token ne donne accès qu'à ce bot précis (pas à ton compte Telegram personnel)
- Personne ne peut faire envoyer des messages "par toi" — seulement le bot
- Si tu fais fuiter le token par erreur, va dans @BotFather → `/revoke` pour le renouveler

✅ Quand c'est fait, dis-moi "phase 17 ok".
