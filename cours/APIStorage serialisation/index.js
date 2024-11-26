// const trainers = [
//   {fistName: "Geoffroy",age: 39, isAdmin: true},
//   {fistName: "JAD",age: 40, isAdmin: true},
//   {fistName: "Arnaud",age: 40, isAdmin: true},
// ]

// const j = JSON.stringify(trainers)

// localStorage.setItem("trainers", j)

const j = localStorage.getItem("trainers");

const trainers = JSON.parse(j);
console.log(trainers);
