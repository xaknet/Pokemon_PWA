const pokemonList = document.querySelector("#pokemonList");

window.addEventListener("load", (e) => {
  getPokemonList();
});

async function getPokemonList() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=35");
  const json = await response.json();

  pokemonList.innerHTML = json.results.map(
    (result) => `<option value="${result.url}">${}</option>`
  )
}