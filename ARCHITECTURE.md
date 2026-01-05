
# 🏗️ Tara Money - Architecture de la Page

Ce document explique l'organisation du code pour faciliter les modifications rapides par un humain ou une IA.

## 📂 Structure des Fichiers

- `index.html` : Point d'entrée. Contient les imports de polices (Google Fonts) et les classes CSS globales.
- `theme.ts` : **Le cerveau du design.** C'est ici que l'on modifie les couleurs, les textes, les espacements et les polices.
- `App.tsx` : Layout principal (Split-screen). Gère l'état d'ouverture du menu de support.
- `components/` : Éléments UI réutilisables.

## 🎨 Comment modifier le design ?

### 1. Changer une Couleur
Ouvrez `theme.ts` et modifiez `THEME.colors.primary`. Tous les boutons, icônes et bordures se mettront à jour instantanément.

### 2. Changer un Texte (Internationalisation)
Tout le texte affiché se trouve dans `THEME.content`. Pour changer "Se connecter" en "Entrer", modifiez `THEME.content.login.submitBtn`.

### 3. Ajuster les Polices
La classe `.font-degular` simule le rendu de Degular Display. Si vous importez une nouvelle police dans `index.html`, mettez à jour la définition CSS correspondante.

## 🛠️ Composants Clés

- **`LoginForm.tsx`** : Formulaire sécurisé avec gestion d'état locale.
- **`SupportMenu.tsx`** : Menu modal animé style iOS. Utilise les tokens de couleur spécifiques du thème pour chaque canal de contact.
- **`Logo.tsx`** : SVG dynamique qui suit la typographie du thème.

---
*Note : Pour une IA, lire `theme.ts` est le moyen le plus efficace de comprendre l'identité visuelle de l'application.*
