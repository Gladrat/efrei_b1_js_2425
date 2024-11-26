"use strict";

// Objet littéral (1997)
  // JSON
const trainer = {fistName: "Geoffroy",age: 39,isAdmin: true};

const trainers = [
  {fistName: "Geoffroy",age: 39, isAdmin: true},
  {fistName: "JAD",age: 40, isAdmin: true},
  {fistName: "Arnaud",age: 40, isAdmin: true},
]

console.log(trainers);

const j = JSON.stringify(trainers);
console.log(j);


// Objet POO (2015)
class Student {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
    this.isAdmin = false;
  }
  
  info() {
    return `My name is ${this.firstName} and i'm ${this.isAdmin ? '' : 'not '}admin.`
  }
}

class StudentDelegate extends Student {
  
}

const lisa = new Student("Lisa", 25);
const leo = new Student("Léo", 22);

console.log(lisa);
console.log(leo);

console.log(lisa.info());































