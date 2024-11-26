"use strict";

const list = document.querySelector("#list");
const input = document.querySelector("#input");
const add = document.querySelector("#add");
const clear = document.querySelector("#clear");
const load = document.querySelector("#load");

let tasks = [
  "Apprendre le C++",
  "Faire les courses",
  "Changer une ampoule",
  ""
];

const tasksCount = document.querySelector("#tasks-count");
updateTaskCount(tasks.length)

function updateTaskCount(count) {
  tasksCount.textContent = count;
}

function newTask(task) {
  taskToDOM(task);

  input.value = "";
  input.focus();

  console.log(tasks);
  
}

function taskToDOM(task, i) {
  if (task && typeof task === "string") {
    const li = document.createElement("li");
    const remove = document.createElement("button");

    li.textContent = `Tâche n° ${i}: ` + task;
    remove.textContent = "REMOVE";

    remove.addEventListener("click", () => {
      li.remove()
    })

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

add.addEventListener("click", () => {
  newTask(input.value);
  updateTaskCount(tasks.length)
})

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    newTask(input.value);
    updateTaskCount(tasks.length)
  }
})

clear.addEventListener("click", () => {
  list.innerHTML = "";
})