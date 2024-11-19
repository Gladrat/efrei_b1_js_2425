"use strict"

// alt + shift + F    ->    prettier

// const first_name = "Geoffroy";
// let age = 39;

// let nb = 5;
// nb += 5;

// console.log(nb ** 2 % 3);

// let counter = 1;
// let value = ++counter;

// counter++;

// console.log("counter", counter)
// console.log("value", value);

// console.log(`counter: ${counter}`);

// let firstName = "Geoffroy";

// console.log(firstName.length)

// let spy = "James Dubois"
// let realSpy = spy.replace("Dubois", "Bond")

// console.log(realSpy);

// console.log("Bonjour" + " " + realSpy);
// console.log(`Bonjour ${realSpy}`);

// let res;

// res = realSpy.split()
// res = realSpy.length

// let mineur = true;

// false == 0
// false == ""
// false == undefined
// false == null
// false == NaN
// false == []

// null
// undefined

// let age;

// console.log(age == undefined);

// age = 39;

// age = null;

// console.log(typeof undefined);
// console.log(typeof 0);
// console.log(typeof 10n);
// console.log(typeof true);
// console.log(typeof "foo");
// console.log(typeof Math);
// console.log(typeof null);
// console.log(typeof alert);

// IO

// Output
// alert("coucou")
// console.log("coucou");

// Input
// let result = prompt("Quel est votre age ?");
// console.log(typeof result);
// console.log(result);

// confirm("C'était mieux le python ?");

// LES ARRAY

// let arr2 = new Array();
// let arr = [];

// let people = ["Geoffroy", "Lisa", "Michel"];
// console.log(people);
// console.log(people.length);

// // supprimer et renvoyer le dernier élément du tableau
// let lastElement = people.pop()
// console.log(lastElement);
// console.log(people);

// // supprimer et renvoyer le premier élément du tableau
// let firstElement = people.shift()
// console.log(firstElement);
// console.log(people);

// // ajouter à la fin
// people.push("Eric")

// // ajouter au début
// people.unshift("Laetitia")

// console.log(people);

// people[9] = "Sybelle"

// console.log(people);

let age = 14;

if (age <= 17) {
  console.log("Mineur");
} else {
  console.log("Majeur");
}

let temperature = -12;

if (temperature <= 0) {
} else if (temperature > 0 && temperature < 100) {
} else if (temperature >= 100) {
}

let mineur = age >= 18 ? true : false;

// Boucles

let n = 0;
while (n < 10) {
  console.log(n);
  n++;
}
console.log("Coucou");

for (let i = 0; i < 10; i++) {
  console.log(i ** 2);
}

// fonctions

function hello(prenom) {
  let phrase = `Bonjour ${prenom}`

  console.log(phrase);
  return phrase
}

let people = ["Geoffroy", "Lisa", "Michel"];

for (let i = 0; i < people.length; i++) {
  const prenom = people[i];
  const res = hello(prenom);
  console.log(res);
}