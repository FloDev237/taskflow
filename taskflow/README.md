# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# TaskFlow – Gestionnaire de tâches d'équipe

Application React (SPA) réalisée dans le cadre d'un TP d'architecture front-end.

## Installation et lancement

1. Cloner le dépôt
2. `npm install`
3. `npm run dev`

## Fonctionnalités

- Ajout de tâches via formulaire contrôlé
- Affichage des tâches sous forme de cartes cliquables
- Persistance automatique dans `localStorage`
- Détail d’une tâche avec routage dynamique (`/task/:id`)
- Navigation sans rechargement (React Router)
- Hook personnalisé `useLocalStorage` (bonus)

## Contraintes techniques respectées

- Immutabilité : `setTasks([...tasks, newTask])`
- Clés uniques basées sur `id` (pas d'index)
- Aucune mutation directe (`push` interdit)
- Pas de `<a href>` pour la navigation interne
- Utilisation de `useEffect` pour la persistance