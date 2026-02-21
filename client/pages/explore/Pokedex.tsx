import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import PokemonDetail from "./components/PokemonDetail";
import PokemonGrid from "./components/PokemonGrid";
import type { Pokemon } from "../../lib/types";

export default function Pokedex() {
  const [pokedex, setPokedex] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    async function fetchPokedex() {
      const res = await fetch("/api/pokedex");
      const data = await res.json();
      setPokedex(data);
      setLoading(false);
    }

    setLoading(true);
    fetchPokedex();
  }, []);

  const id = searchParams.get("id");
  const pokemon = id ? pokedex.find((p) => p.id === parseInt(id)) : null;

  return (
    <>
      <header>
        <h1 className="text-3xl font-bold">P'dexiom Pokédex</h1>
      </header>

      {pokemon ? (
        <PokemonDetail pokemon={pokemon} pokedex={pokedex} />
      ) : (
        <PokemonGrid pokedex={pokedex} loading={loading} />
      )}
    </>
  );
}
