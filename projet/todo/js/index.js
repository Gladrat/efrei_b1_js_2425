"use strict";

const list = document.querySelector("#list");
const input = document.querySelector("#input");
const add = document.querySelector("#add");
const clear = document.querySelector("#clear");
const load = document.querySelector("#load");

let tasks = ["Apprendre le C++", "Faire les courses", "Changer une ampoule"];

let i = 0;
for (let t of tasks) {
  if (t && typeof t === "string") {
    const li = document.createElement("li");
    const remove = document.createElement("button");

    li.textContent = t;
    remove.textContent = "REMOVE";

    li.append(remove);
    list.append(li);

    i++;
  }
}
