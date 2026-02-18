const { Pokedex } = require("../../utils/pokedex");

function getPredecessor(currentNum) {
  const candidates = Pokedex.pokedex.filter((p) =>
    p.next_evolution?.some((e) => e.num === currentNum),
  );

  return candidates.length
    ? candidates.reduce((a, b) => (a.id > b.id ? a : b))
    : null;
}

module.exports = {
  getPredecessor,
};
