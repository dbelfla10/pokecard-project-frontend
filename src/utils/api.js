function getPokemon(pokemonName) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    })
    .then((data) => {
      return data;
    });
}

export { getPokemon };
