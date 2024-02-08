// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

const inputSearch = document.getElementById("inputSearch");
const countriesContainer = document.querySelector(".countries-container");
const btnSort = document.querySelectorAll(".btnSort");
// 3 - Passer les données à une variable
let countriesData = [];
let sortMethod = "alpha";


// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countriesData = data));

  console.log(countriesData);
  countriesDisplay();
}

function countriesDisplay() {
  countriesContainer.innerHTML = countriesData
    // 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
    .filter((country) =>
      country.translations.fra.common
        .toLowerCase()
        .includes(inputSearch.value.toLowerCase())
    )
    // 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
    .sort((a, b) => {
      if (sortMethod === "maxToMin") {
        return b.population - a.population;
      } else if (sortMethod === "minToMax") {
        return a.population - b.population;
      } else if (sortMethod === "alpha") {
        return a.translations.fra.common.localeCompare(b.translations.fra.common);
      }
    })

    // 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)
    .slice(0, inputRange.value)
    // 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP
    .map(
      (country) =>
        `
        <div class="card">
          <img src=${country.flags.svg} alt="drapeau ${
          country.translations.fra.common
        }">
          <h2>${country.translations.fra.common}</h2>
          <h4>${country.capital}</h4>
          <p>Population : ${country.population.toLocaleString()}</p>
        </div>
      `
    )
    .join("");
}

window.addEventListener("load", fetchCountries);
inputSearch.addEventListener("input", countriesDisplay);
inputRange.addEventListener("input", () => {
  countriesDisplay();
  rangeValue.textContent = inputRange.value;
});
