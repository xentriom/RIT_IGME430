const { Pokedex } = require("../../../db/pokedex");

async function getPredecessor(currentNum) {
  const pokedex = await Pokedex.getAll();
  const candidates = pokedex.filter((p) =>
    p.next_evolution?.some((e) => e.num === currentNum),
  );

  return candidates.length
    ? candidates.reduce((a, b) => (a.id > b.id ? a : b))
    : null;
}

module.exports = {
  getPredecessor,
};
