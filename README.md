# BattleGameAngular

- Développer en 2 grosses soirées... 

# Configuration pour communiquer avec la couche API

- Dans un contexte prod, l'url des apis doit être configuré dans le fichier `assets/config/config.json`. Mais étant donné les soucis de CORS (Cf. plus bas), en dev, il faut laisser le fichier config.json tel quel et modifier le **target** dans `src/proxy.conf.json`



# Stack

- PrimeNg (Framework UI)
- Tailwind CSS (Framework CSS)


# Choix techniques

- Découpe Hexagonale (via libs @battle/xxx), pour clarifier, responsabiliser les éléments... centraliser le métier
    - http-client : couche communication API
    - domain : couche contenant les entités du domain, et les règles métiers (Manipulées par la couche présentation)
    - adapter : couche de liaison entre http-client et domain (avec le mapping...)

- Utilisation de signal pour gérer ben tout, ou quasi, en fait. C'est la première fois que je pousse réellement la mise en pratique, et c'est top... les composants sont vides... la gestion du cache est facile...

- Pas de CSS. Création de composant de layouts... dans le but d'avoir de l'homogénéité entre les écrans. Au pire du css par classe (tailwind css)

- Mise en place de libs @jbx/xxx qui ont pour but de factoriser, les éléments qui ne sont pas liés au métier. Ces librairies seraient à packager (npm)


# RAF 

- Pousser les tests
- Mise en place SortyBook pour le cdk
- ...

# Galères rencontrées

- Gestion du CORS... que j'ai solutionné en mettant en place un proxy angular.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
