"use strict";

const list = document.querySelector("#list");
const input = document.querySelector("#input");
const add = document.querySelector("#add");
const clear = document.querySelector("#clear");
const load = document.querySelector("#load");

let tasks = [
  "Apprendre le C++",
  "",
  "Faire les courses",
  "Changer une ampoule",
];

function taskToDOM(task, i) {
  if (task && typeof task === "string") {
    const li = document.createElement("li");
    const remove = document.createElement("button");

    li.textContent = `Tâche n° ${i}: ` + task;
    remove.textContent = "REMOVE";

    li.append(remove);
    list.append(li);

    return true;
  }
  return false;
}

let i = 1;
for (let t of tasks) {
  if (taskToDOM(t, i)) {
    i++;
  }
}