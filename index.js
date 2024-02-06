// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays

// Correction

const countriesContainer = document.querySelector(".countries-container");
let countriesData = [];

console.log(countriesContainer);

async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countriesData = data));

  console.log(countriesData);
  countriesDisplay();
}

function countriesDisplay() {
  countriesContainer.innerHTML = countriesData
    .map(
      (country) =>
        `
        <div class="card">
          <h2>${country.translations.fra.common}</h2>
        </div>
      `
    )
    .join("");
}

window.addEventListener("load", fetchCountries);

// Exercice

// const inputSearch = document.querySelector(".inputSearch");
// const inputRange = document.querySelector(".inputRange");
// const rangeValue = document.querySelector(".rangeValue");

// let fetchDataInfo = [];

// async function fetchData() {
//   await fetch("https://restcountries.com/v3.1/all")
//     .then((res) => res.json())
//     .then((data) => (fetchDataInfo = data));
//   console.log(fetchDataInfo);
// }

// fetchData();

// function countryDisplay() {
//   if (fetchDataInfo === null) {
//     document.innerHTML = "<h2>Aucun résultat</h2>";
//   } else {
//     document.innerHTML = fetchDataInfo.map((infos) => {
//       let countryInfos = [];
//       let name = data.name;
//       let capital = data.capital;
//       let population = data.population;
//       countryInfos.push(`<li>${name} - ${capital} - ${population}</li>`);
//     });
//   }
//   console.log(countryInfos);

//   return `
//   <div class="countries-container">
//   <h2>${data.name}</h2>
//   <h3>${data.capital}</h3>
//   <h3>${data.population}</h3>
//   </div>
//   `;
// }

// inputSearch.addEventListener("input", (e) => {
//   e.preventDefault();
//   countryDisplay();
// });
