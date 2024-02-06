// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays

const inputSearch = document.querySelector(".inputSearch");
const inputRange = document.querySelector(".inputRange");
const rangeValue = document.querySelector(".rangeValue");

let fetchDataInfo = [];

async function fetchData(search) {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (fetchDataInfo = data));
  console.log(fetchDataInfo);
}

fetchData();

function countryDisplay() {
  if (fetchDataInfo === null) {
    XPathResult.innerHTML = "<h2>Aucun résultat</h2>";
  } else {
    result.innerHTML = fetchDataInfo.map((country) => {
      let infos = [];
      let name = data.name;
      let capital = data.capital;
      let population = data.population;
      infos.push(`<li>${name} - ${capital} - ${population}</li>`);
    });
  }
  console.log(infos);

  return `
  <div class="countries-container">
  <h2></h2>
  </div>
  `;
}

// inputSearch.addEventListener("input", (e) => {
//   e.preventDefault();
//   countryDisplay();
// });
