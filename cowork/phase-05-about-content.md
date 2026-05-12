# Phase 5 — Contenu "À propos" (à valider par toi)

## Texte par défaut mis en place

Le contenu actuel est générique. Tu dois le remplacer par le vrai texte de Ksenia.

**Fichier à éditer :** `components/home/AboutSection.tsx`

### Lignes à personnaliser :

```tsx
const LINES = [
  "Меня зовут Ксения.",                              // ligne 1 — peut rester
  "Я снимаю то, что слова не могут выразить.",      // ligne 2 — phrase signature, à valider
];

const PARAGRAPH =
  "Каждая съёмка — это разговор без слов. Я ищу свет, эмоцию и тот единственный момент, который рассказывает вашу историю. Работаю с портретами, семьями, парами и беременными — везде, где есть искренность.";

const FACTS = [
  "Базируюсь в Калининграде",
  "Работаю 7 дней в неделю",
  "Снимаю несколько лет",     // ← précise le nombre exact d'années
];
```

## Photo de Ksenia

La photo utilisée pour le moment est `/public/images/portait.PNG` (un portrait client).
**Idéalement** : ajoute une vraie photo de Ksenia (de préférence noir et blanc, ambiance studio ou en train de photographier).

1. Place la photo dans `public/images/` (ex : `ksenia-portrait.jpg`)
2. Dans `AboutSection.tsx`, change la ligne :
```tsx
src="/images/portait.PNG"
```
en :
```tsx
src="/images/ksenia-portrait.jpg"
```

✅ Quand c'est fait, dis-moi "phase 5 ok".
