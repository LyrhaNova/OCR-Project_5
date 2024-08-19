


# OCR-Project_5

## A PROPOS

Dans le cadre de la formation OpenClassRooms en Développement web, le ``PROJET 5`` nous fait implémenter le front-end d'une application en utilisant ``React`` et ``React Router``, afin de créer une expérience utilisateur moderne et réactive. De plus, nous découvrons l'utilisation de Sass et des animations ``CSS``.

## TABLE DES MATIERES

- 🪧 [À propos](#a-propos)
- 📄 [Scénario](#scenario)
- ⬆️ [Objectifs pédagogiques](#objectifs-pedagogiques)
- 🚀 [Installation](#installation)
- 🏗️ [Construit avec](#construit-avec)

## SCENARIO

Nous sommes développeur front-end freelance pour Kasa, une entreprise de location d'appartements entre particuliers. Une refonte totale du site est organisée pour passer à une stack complète en JavaScript avec NodeJS côté back-end et React côté front-end.

La [maquette Figma](https://www.figma.com/design/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?node-id=0-1&t=9D3h0pQ9sTXVfMgQ-0) déjà réalisée, ainsi qu'un [protoype du site](https://www.figma.com/proto/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=3-0&t=x8RBKuR4UiE3hhBW-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A0&show-proto-sidebar=1), il ne reste qu'à implémenter tout le front-end.

Contraintes fonctionnelles :

- Défilement des photos dans la galerie (composant)
- Implémentation d'un composant collapse
- Responsive

Outils standards :

- Utilisation de ``CRA`` ou ``React + Vite``
- Utilisation de ``React Router``
- Utilisation de ``Sass``
- Pas de librairie ``React`` externe

Contraintes techniques :

1. ``React`` :

- Découpage en composants modulaires et réutilisables
- Un composant par fichier
- Structure logique des différents fichiers
- Utilisation des props entre les composants
- Utilisation du state dans les composants (si nécessaire)
- Gestion des évènements
- Utilisation des listes (map)

2. ``React Router`` :

- Les paramètres des routes sont gérés par ``React Router`` dans l'URL pour récupérer les informations de chaque logement
- Il existe une page par route
- La page 404 est renvoyée pour chaque route inexistante ou si une valeur présente dans l'URL ne fait pas partie des données renseignées
- La logique routeur est réunie dans un seul fichier

3. Général :

- Le code ne doit pas produire d'erreur ou de warning dans la console

## OBJECTIFS PEDAGOGIQUES

- 💡 Initialiser une application avec Create React App
- 💡 Configurer la navigation entre les pages de l'application avec React Router
- 💡 Développer des éléments de l'interface d'un site web grâce à des composants React
- 💡 Mettre en oeuvre des animations CSS
- 💡 Développer une interface web avec Sass

<sub>_Note : CRA étant devenu obsolète, il est remplacé ici par React + Vite_<sub>

## INSTALLATION

### Étapes d'installation

1. Cloner le dépôt :\
Installez [Git](https://git-scm.com/) si ce n'est pas déjà fait. Configurez-le en suivant [ce guide](https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Param%C3%A9trage-%C3%A0-la-premi%C3%A8re-utilisation-de-Git).\
Clonez le dépôt sur votre machine en utilisant la commande suivante dans Git Bash :

````
git clone git@github.com:LyrhaNova/OCR-Project_5.git
````

2. Installation des dépendances :\
Accédez au répertoire du projet cloné, puis installez les dépendances avec :

````
npm install
````

3. Mise à jour du dépôt local :\
Assurez-vous d'avoir la dernière version du projet en exécutant :
````
git pull origin main
````

### Démarrage du serveur de développement

Pour lancer le projet en mode développement, exécutez :
````
npm run dev
````
Le projet sera accessible par défaut à l'adresse suivante :
````
http://localhost:5173/
````

### Documentation supplémentaire
Pour plus d'informations sur les outils et bibliothèques utilisés dans ce projet, consultez leur documentation officielle :

- [React](https://fr.react.dev/)
- [Vite](https://vitejs.fr/guide/)
- [React Router](https://reactrouter.com/en/main)
- [NPM](https://docs.npmjs.com/)

### Structure du projet
````
├── public
│   ├── data
│   │   └── logements.json   # Fichier JSON contenant les données des logements
├── src
│   ├── assets               # Contient les fichiers statiques comme les images
│   ├── components           # Composants React réutilisables
│   ├── pages                # Pages principales de l'application
│   ├── router               # Configuration des routes avec React Router
│   ├── styles               # Fichiers SCSS pour le style global
│   ├── App.jsx              # Composant principal de l'application
│   └── main.jsx             # Point d'entrée de l'application
├── .eslintrc.cjs            # Configuration ESLint
├── .gitignore               # Fichiers à ignorer par Git
├── index.html               # Fichier HTML principal
├── package.json             # Dépendances et scripts NPM
├── vite.config.js           # Configuration spécifique à Vite
└── README.md                # Documentation du projet
````

## CONSTRUIT AVEC

### Langages

- ``HTML5``
- ``SCSS``
- ``Javascript``

### Outils

| TOOLS                  | DESCRIPTION                                    |
|------------------------|------------------------------------------------|
| ``VISUAL STUDIO CODE`` | _IDE_                                          |
| ``GIT``                | _Logiciel de gestion de versions_              |
| ``React``               | _Bibliothèque open source JavaScript_|
| ``Vite``        | _Serveur de développement local_                      |
