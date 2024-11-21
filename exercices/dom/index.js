// 1.
// const table = document.querySelector("#age-table");
const table = document.querySelector("table");
console.log(table);

// 2.
// const label = document.querySelectorAll("#age-table label")
const labelList = table.querySelectorAll("label");
console.log(labelList);

// 3.
// const firstTD = table.querySelector("td");
const firstTD = table.rows[0].cells[0];
console.log(firstTD);

// 4.
const form = document.querySelector("form[name=search]");
console.log(form);

// 5.
const firstInput = form.querySelector("input");
console.log(firstInput);

// 6.
// const lastInput = form.querySelectorAll("input")[form.querySelectorAll("input").length-1];
const lastInput = form.children[form.children.length - 1];
console.log(lastInput);

// 7.
console.log(table.children[0].children[0].children[1].children[1]);
const target = table.children[0].children[0].children[1].children[1];
console.log(
  target.parentElement.parentElement.parentElement.parentElement.parentElement
    .parentElement.children[0].children[0].children[0]
);

console.log(
  document.querySelector("table").children[0].children[0].children[1]
    .children[1].parentElement.parentElement.parentElement.parentElement
    .parentElement.parentElement.children[0].children[0].children[0]
);