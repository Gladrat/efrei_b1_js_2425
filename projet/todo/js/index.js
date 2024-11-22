"use strict";

const list = document.querySelector("#list");
const input = document.querySelector("#input");
const add = document.querySelector("#add");
const clear = document.querySelector("#clear");
const load = document.querySelector("#load");

let tasks = ["Apprendre le C++", "Faire les courses", "Changer une ampoule"];

// Objectif : Intégrer le code déjà réalisé dans une fonction
  // La fonction ajoute une tâche dans le DOM
  // Elle est appelée au chargement de la page pour chaque tâche du tableau tasks

function taskToDOM(task) {
  // Ajoute une tâche dans le DOM
}

// Boucle
  // Parcours le tableau de tasks
  // Apelle la fonction taskToDOM pour chaque tâche du tableau

// let i = 0;
// for (let t of tasks) {
//   if (t && typeof t === "string") {
//     const li = document.createElement("li");
//     const remove = document.createElement("button");

//     li.textContent = t;
//     remove.textContent = "REMOVE";

//     li.append(remove);
//     list.append(li);

//     i++;
//   }
// }