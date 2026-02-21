import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { TypeBadge } from "../../../components/TypeSelector";
import EvolutionSection from "./EvolutionSection";
import type { Pokemon } from "../../../lib/types";

type Evolution = { num: string; name: string };

type EvolutionChain = {
  previous_evolution: Evolution[];
  next_evolution: Evolution[];
};

export default function PokemonDetail({
  pokemon,
  pokedex,
}: {
  pokemon: Pokemon;
  pokedex: Pokemon[];
}) {
  const [evolution, setEvolution] = useState<EvolutionChain | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvolution() {
      const res = await fetch(`/api/evolution?id=${pokemon.id}`);
      const data = await res.json();
      setEvolution(data);
      setLoading(false);
    }

    setLoading(true);
    fetchEvolution();
  }, [pokemon.id]);

  const getPokemon = (num: string) => pokedex.find((p) => p.num === num);

  return (
    <div className="flex flex-col gap-6 py-6">
      <Link
        to={{ pathname: "/", search: "?page=view-pokedex" }}
        viewTransition
        className="inline-flex items-center gap-2 text-taupe-500 hover:text-taupe-700 transition-colors"
      >
        <ArrowLeft className="size-4" />
        <span className="text-sm">Back to Pokédex</span>
      </Link>

      {loading ? (
        <PokemonDetailSkeleton />
      ) : (
        <div className="flex flex-col gap-6 p-6 rounded-xl bg-taupe-100 border border-taupe-200 shadow-sm">
          <div className="flex gap-6">
            <div className="w-36 aspect-square rounded-xl bg-taupe-200/50 flex items-center justify-center shrink-0 overflow-hidden">
              <img
                src={pokemon.img}
                alt={pokemon.name}
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div className="flex flex-col gap-3 flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-2xl">{pokemon.name}</h2>
                <span className="text-sm font-mono text-taupe-400">
                  #{pokemon.num}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {pokemon.type.map((t) => (
                  <TypeBadge key={t} type={t} />
                ))}
              </div>
              <div className="flex flex-col text-taupe-600">
                <span>Height: {pokemon.height}</span>
                <span>Weight: {pokemon.weight}</span>
              </div>
            </div>
          </div>

          <section className="flex flex-col gap-2">
            <h3 className="text-sm font-medium text-taupe-600">Weaknesses</h3>
            {pokemon.weaknesses.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {pokemon.weaknesses.map((w) => (
                  <TypeBadge key={w} type={w} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-taupe-400">No weaknesses</p>
            )}
          </section>

          <EvolutionSection evolution={evolution} getPokemon={getPokemon} />
        </div>
      )}
    </div>
  );
}

function PokemonDetailSkeleton() {
  return (
    <div className="flex flex-col gap-6 p-6 rounded-xl bg-taupe-100 animate-pulse">
      <div className="flex gap-6">
        <div className="w-36 aspect-square rounded-xl bg-taupe-200" />
        <div className="flex flex-col gap-3 flex-1">
          <div className="h-7 w-40 bg-taupe-200 rounded" />
          <div className="flex gap-1.5">
            <div className="h-6 w-16 bg-taupe-200 rounded-full" />
            <div className="h-6 w-16 bg-taupe-200 rounded-full" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="h-4 w-24 bg-taupe-200 rounded" />
            <div className="h-4 w-24 bg-taupe-200 rounded" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="h-4 w-20 bg-taupe-200 rounded" />
        <div className="flex gap-1.5">
          <div className="h-6 w-14 bg-taupe-200 rounded-full" />
          <div className="h-6 w-14 bg-taupe-200 rounded-full" />
          <div className="h-6 w-14 bg-taupe-200 rounded-full" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="h-4 w-28 bg-taupe-200 rounded" />
        <div className="h-10 w-48 bg-taupe-200 rounded-xl" />
      </div>
    </div>
  );
}
