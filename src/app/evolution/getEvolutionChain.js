const { getPredecessor } = require("./getPredecessor");

function getEvolutionChain(pokemon) {
  const next_evolution = pokemon.next_evolution || [];
  const previous_evolution = [];

  // Infinite loop until we reach the base form
  for (let curr = pokemon.num; ; ) {
    // Get the predecessor of the current Pokemon
    const prev = getPredecessor(curr);
    if (!prev) break;

    // Add the predecessor to the previous evolution chain
    previous_evolution.push({ num: prev.num, name: prev.name });
    curr = prev.num;
  }

  // Reverse so we start with the base form
  previous_evolution.reverse();

  return { previous_evolution, next_evolution };
}

module.exports = {
  getEvolutionChain,
};
