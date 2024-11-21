let firstName = "Geoffroy";
let lastName = "Ladrat";
let birthYear = 1985;

function padName(n) {
  return n.slice(0, 3).toLowerCase().padEnd(3, "_");
}

firstName = padName(firstName);
lastName = padName(lastName);

console.log({firstName, lastName});

let nameSum = 0;
for (let i = 0; i < firstName.length; i++) {
  const char = firstName[i];
  nameSum += char.charCodeAt(0) - 96;
}

const uniqueID = `${firstName}${lastName}${birthYear}${nameSum}`

console.log("Identifiant unique:", uniqueID);