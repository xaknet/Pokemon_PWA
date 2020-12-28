const pokemonList = document.querySelector("#pokemonList");

window.addEventListener("load", (e) => {
  getPokemonList();
});

function getPokemonList() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=35")
}