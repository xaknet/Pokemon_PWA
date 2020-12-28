const pokemonList = document.querySelector("#pokemonList");

const defaultPokemon = "https://pokeapi.co/api/v2/pokemon/1/";

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

async function showPokemon