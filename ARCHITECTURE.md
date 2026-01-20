
# 🏗️ Tara Money - Architecture de la Page

Ce document explique l'organisation du code pour faciliter les modifications rapides par un humain ou une IA.

## 📂 Structure des Fichiers

- `index.html` : Point d'entrée. Contient les imports de polices (Google Fonts) et les classes CSS globales.
- `theme.ts` : **Le cerveau du design.** C'est ici que l'on modifie les couleurs, les textes, les espacements et les polices.
- `App.tsx` : Layout principal (Split-screen). Gère l'orchestration des vues (Login/Signup/Forgot/Dashboard) et les boutons flottants.
- `context/AuthContext.tsx` : Gère le cycle de vie de l'authentification (JWT stocké en LocalStorage).
- `services/auth.ts` : Simule l'API Backend (Fake latency + Mock Data).
- `components/` : Éléments UI réutilisables.

## 🎨 Comment modifier le design ?

### 1. Changer une Couleur
Ouvrez `theme.ts` et modifiez `THEME.colors.primary`. Tous les boutons, icônes et bordures se mettront à jour instantanément.

### 2. Changer un Texte (Internationalisation)
Tout le texte affiché se trouve dans `THEME.content`. Pour changer le message de bienvenue, modifiez `THEME.content.dashboard.welcome`.

### 3. Ajuster les Polices
La classe `.font-degular` simule le rendu de Degular Display. Si vous importez une nouvelle police dans `index.html`, mettez à jour la définition CSS correspondante.

## 🛠️ Composants Clés

- **`LoginForm.tsx`** : Formulaire connecté au `AuthContext` avec gestion d'erreurs et états de chargement.
- **`Dashboard.tsx`** : Vue protégée affichée après une connexion réussie (JWT valide).
- **`SupportMenu.tsx`** : Menu modal animé style iOS.
- **`SupportButton.tsx`** : Bouton d'action flottant (FAB) principal (en bas à droite).
- **`NotificationButton.tsx`** : Bouton flottant secondaire (à gauche du support). Apparaît conditionnellement pour signaler une nouveauté.
- **`Logo.tsx`** : SVG dynamique qui suit la typographie du thème.

---
*Note : Pour tester l'authentification, utilisez `demo@tara.com` / `password123`.*
