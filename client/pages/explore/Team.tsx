import { useEffect, useState } from "react";
import type { Team, Pokemon } from "../../lib/types";

export default function Team() {
  const [pokedex, setPokedex] = useState<Pokemon[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [filtered, setFiltered] = useState<Team[]>([]);

  useEffect(() => {
    async function fetchData() {
      const [teamsRes, pokedexRes] = await Promise.all([
        fetch("/api/team"),
        fetch("/api/pokedex"),
      ]);

      const teamsData = await teamsRes.json();
      const pokedexData = await pokedexRes.json();

      setTeams(teamsData);
      setFiltered(teamsData);
      setPokedex(pokedexData);
    }

    fetchData();
  }, []);

  const getPokemonById = (id: number) => pokedex.find((p) => p.id === id);

  return (
    <>
      <header>
        <h1 className="text-3xl font-bold">Team</h1>
      </header>

      <div className="py-8">
        <input
          className="w-full p-2 border border-taupe-300 rounded-md shadow-sm focus:ring-2 focus:ring-taupe-500 focus:border-taupe-500"
          type="text"
          placeholder="Search teams..."
          onChange={(e) =>
            setFiltered(
              teams.filter((t) =>
                t.name.toLowerCase().includes(e.target.value.toLowerCase()),
              ),
            )
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((t) => (
          <div
            key={t.id}
            className="group p-4 rounded-xl bg-taupe-100 border border-taupe-200 shadow-sm hover:shadow-md hover:border-taupe-300 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold truncate line-clamp-1">{t.name}</h2>
              <span className="text-xs px-2 py-1 rounded-full bg-taupe-200/70 text-taupe-600 font-medium">
                {t.pokemons.length}/6
              </span>
            </div>
            <div className="grid grid-cols-6 gap-1">
              {Array.from({ length: 6 }).map((_, i) => {
                const pokemon = t.pokemons[i]
                  ? getPokemonById(t.pokemons[i].id)
                  : null;
                return (
                  <div
                    key={`${t.id}-${i}`}
                    className="aspect-square rounded-xl bg-taupe-200/50 flex items-center justify-center overflow-hidden"
                  >
                    {pokemon ? (
                      <img
                        src={pokemon.img}
                        alt={pokemon.name}
                        title={pokemon.name}
                        className="w-full h-full object-contain p-1"
                      />
                    ) : (
                      <span className="text-taupe-300 text-xl">?</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
