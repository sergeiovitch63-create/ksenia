# Phase 8 — Vraies photos pour la galerie (à fournir par toi)

## Problème

Les fichiers actuels dans `public/images/` ont quelques soucis :
- `famille.CR2` et `familly.CR2` — **format RAW d'appareil photo, non lisible dans un navigateur**
- Plusieurs photos sont identiques (`portait.PNG` utilisé pour plusieurs services)
- **Aucune photo dans les catégories** `Семья` et `Беременность`

## Ce qu'il faut faire

### 1. Convertir les fichiers CR2 en JPG
Ouvre les `.CR2` dans Lightroom / Photoshop / DPP (Canon) ou utilise un convertisseur en ligne, puis exporte en JPG. Place-les dans `public/images/` :
- `famille.CR2` → `famille.JPG` (et `famille-2.JPG`, etc.)

### 2. Ajouter de vraies photos pour chaque catégorie

Idéalement 3–5 photos par catégorie, format paysage ou portrait, taille recommandée **1600px sur le côté long**, JPG qualité 80–85%.

```
public/images/
├── portrait-1.JPG    ✓ existe
├── portrait-2.JPG    ✓ existe
├── portrait-3.JPEG   ✓ existe
├── portait.PNG       ✓ existe
├── famille-1.JPG     ← à ajouter
├── famille-2.JPG     ← à ajouter
├── lovestory-1.JPEG  ✓ existe (love-story.JPEG)
├── lovestory-2.JPEG  ← à ajouter
├── street-1.JPG      ✓ existe (photo-exterieur.JPG)
├── street-2.JPG      ← à ajouter
├── enfant-1.PNG      ✓ existe
├── enfant-2.PNG      ✓ existe
├── pregnancy-1.JPG   ← à ajouter
└── pregnancy-2.JPG   ← à ajouter
```

### 3. Mettre à jour le tableau `ITEMS` dans `components/home/GallerySection.tsx`

Remplace les entrées de l'array `ITEMS` pour pointer vers les vraies photos, et ajoute les catégories manquantes (`family`, `pregnancy`).

Exemple :
```ts
{
  src: "/images/famille-1.JPG",
  alt: "Семейная съёмка",
  tag: "Семья",
  category: "family",
  slug: "family",
},
```

### 4. Optimisation (recommandée mais optionnelle)

Pour vraiment optimiser le poids/vitesse :
- Convertis tout en `.webp` avec https://squoosh.app
- Ou installe `sharp` (`npm install sharp`) et utilise `<Image>` Next.js partout (qui le fait automatiquement)

✅ Quand c'est fait, dis-moi "phase 8 ok".
