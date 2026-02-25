const { Pokedex } = require("../../../db/pokedex");

async function getRandomPokemon(limit) {
  const pokedex = await Pokedex.getAll();
  const copy = [...pokedex];

  // Shuffles the copy using Fisher Yates shuffle
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy.slice(0, limit);
}

module.exports = {
  getRandomPokemon,
};
