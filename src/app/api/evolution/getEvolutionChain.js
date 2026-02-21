const { getPredecessor } = require("./getPredecessor");

async function getEvolutionChain(pokemon) {
  const next_evolution = pokemon.next_evolution || [];
  const previous_evolution = [];

  let curr = pokemon.num;
  while (true) {
    const prev = await getPredecessor(curr);
    if (!prev) break;

    previous_evolution.push({ num: prev.num, name: prev.name });
    curr = prev.num;
  }

  previous_evolution.reverse();

  return { previous_evolution, next_evolution };
}

module.exports = {
  getEvolutionChain,
};
