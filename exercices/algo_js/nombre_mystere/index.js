"use strict";

console.log("Jeu mystère...");

const nb = Math.floor(Math.random() * 100) + 1;
let input;
let history = [];
let max = 100;
let min = 1;

while (input != nb) {
  input = +prompt(`Entrez un nombre entre ${min} et ${max}:`);
  history.push(input);

  if (input < min || input > max) {
    continue;
  }

  if (input < nb) {
    console.log("Trop petit !");
    min = input;
  } else if (input > nb) {
    console.log("Trop grand !");
    max = input;
  } else {
    console.log(`Bravo, vous avez trouvé le nombre ${nb}`);
    console.log("Vos tentatives:", history);
    break;
  }
}
