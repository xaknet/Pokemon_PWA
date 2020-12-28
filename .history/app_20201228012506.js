const pokemonList = document.querySelector("#pokemonList");

const defaultPokemon = "https://pokeapi.co/api/v2/pokemon/1/";
const pokemonCard = document.querySelector("#pokemonCard");

window.addEventListener("load", (e) => {
  getPokemonList();
});

async function getPokemonList() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=35");
  const json = await response.json();

  pokemonList.innerHTML = json.results.map(
    (result) => `<option value="${result.url}">${result.name}</option>`
  )
}

async function showPokemonCard(url) {
  const response = await fetch(url);
  const json = await response.json();

  pokemonCard.innerHTML = createCard(json);
}

function createCard(pokemon) {
  return `
    <div class="card-header">
      <h2>${pokemon.id}</h2>
    </div>
    <img src="${pokemon.sprites.other.dream_world.front_default}"
      class="card-img-top" width="150" height="150">
    <div class="card-body">
      <h5 class="card-title" style="text-transform: capitalize;">${pokemon.name}</h5>
      <div class="badge bg-warning">Height: ${}</div>
      <div class="badge bg-danger">Weight: 62</div>
    </div>
  `;   
}