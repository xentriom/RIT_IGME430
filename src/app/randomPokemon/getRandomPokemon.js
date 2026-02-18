const { Pokedex } = require("../../utils/pokedex");

function getRandomPokemon(limit) {
  // Copy pokedex
  const copy = [...Pokedex.pokedex];

  // Shuffles the copy using Fisher Yates shuffle
  // https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_random2
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  // Return the first n Pokemon
  return copy.slice(0, limit);
}

module.exports = {
  getRandomPokemon,
};
