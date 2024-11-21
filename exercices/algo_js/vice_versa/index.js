const numbers = [];
const opposites = [];

numbers.push(99, 3, 98, -3, 97, 96, -9, 95, 94, 9);

// +++++ Input utilisateur +++++

// while (numbers.length < 10) {
//   let input = Number(
//     prompt(`Entrez un entier différent de 0 (${10 - numbers.length})`)
//   );

//   if (input === 0 || numbers.includes(input) || isNaN(input)) {
//     continue;
//   }

//   numbers.push(input);
//   console.log(input);
// }

console.log(numbers);


for (let i = 0; i < numbers.length; i++) {
  const nb = numbers[i];

  if (numbers.includes(-nb)) {
    opposites.push(nb);
  }
}

if (opposites.length > 3) {
  console.log(`Il y a ${opposites.length} nombres opposés: ${opposites}`);
}
