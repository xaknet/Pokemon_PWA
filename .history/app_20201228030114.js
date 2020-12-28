const pokemonList = document.querySelector("#pokemonList");

const defaultPokemon = "https://pokeapi.co/api/v2/pokemon/1/";
const pokemonCard = document.querySelector("#pokemonCard");

window.addEventListener("load", (e) => {
  getPokemonList().then(() => {
    showPokemonCard(defaultPokemon);
  });

  pokemonList.addEventListener("change", (e) => {
    showPokemonCard(e.target.value);
  });

  registerServiceWorker();
});

async function getPokemonList() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=35");
  const json = await response.json();

  pokemonList.innerHTML = json.results.map(
    (result) => `<option value="${result.url}">${result.name}</option>`
  )
}

async function showPokemonCard(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();

    pokemonCard.innerHTML = createCard(json);
  
  } catch (error) {
    console.log("Network is unavailable")
  }
  
}

function createCard(pokemon) {
  return `
    <div class="card-header">
      <h2>#${pokemon.id}</h2>
    </div>
    <img src="${pokemon.sprites.other.dream_world.front_default}"
      class="card-img-top" width="150" height="150">
    <div class="card-body">
      <h5 class="card-title" style="text-transform: capitalize;">${pokemon.name}</h5>
      <div class="badge bg-warning">Height: ${pokemon.height}</div>
      <div class="badge bg-danger">Weight: ${pokemon.weight}</div>
    </div>
  `;   
}

async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("sw.js");
    } catch (error) {
      console.log("Failed: ", error);
    }
  }
}