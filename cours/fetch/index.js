// import datas from './datas.json';
// console.log(datas);

const container = document.querySelector("#container");
// div

fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((cat) => {
      const catHTML = document.createElement("img");
      catHTML.src = cat.url;
      catHTML.style.width = "100px";
      catHTML.style.height = "auto";

      container.append(catHTML);
    });
  });

setInterval(() => {
  const p = document.createElement("p");
  p.textContent = "Ajout...";

  document.body.append(p);
}, 1000);

fetch('https://swapi.dev/api/people/1/')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Données récupérées:', data);
        // Exemple : afficher le nom du personnage
        console.log(`Nom: ${data.name}`);
        console.log(`Taille: ${data.height}`);
        console.log(`Poids: ${data.mass}`);
        console.log(`Couleur des cheveux: ${data.hair_color}`);
        console.log(`Couleur de peau: ${data.skin_color}`);
        console.log(`Couleur des yeux: ${data.eye_color}`);
        console.log(`Année de naissance: ${data.birth_year}`);
        console.log(`Genre: ${data.gender}`);
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
    });