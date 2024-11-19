# Exercice : Jeu du nombre mystère avec historique

## Objectif :

Créer (dans la console) un jeu interactif où :

- L'ordinateur choisit un nombre aléatoire entre 1 et 100
- Le joueur doit deviner ce nombre
- L'ordinateur donne des indices ("trop grand", "trop petit") pour aider le joueur
- Le jeu continue jusqu'à ce que le joueur trouve le bon nombre

Une fois le jeu terminé, affichez :

- Le nombre d'essais
- La liste complète des tentatives du joueur

## Aide

Choisir un nombre aléatoire entre 1 et 100 en JavaScript :

```js
Math.floor(Math.random() * 100) + 1
```