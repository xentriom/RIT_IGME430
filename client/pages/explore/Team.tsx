import { useEffect, useState } from "react";
import type { Team, Pokemon } from "../../lib/types";
import { Loader2, Search } from "lucide-react";

export default function Team() {
  const [pokedex, setPokedex] = useState<Pokemon[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [filtered, setFiltered] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const [teamsRes, pokedexRes] = await Promise.all([
        fetch("/api/team"),
        fetch("/api/pokedex"),
      ]);

      const teamsData = await teamsRes.json();
      const pokedexData = await pokedexRes.json();

      setTeams(teamsData);
      setFiltered(teamsData);
      setPokedex(pokedexData);
      setLoading(false);
    }

    fetchData();
  }, []);

  const getPokemonById = (id: number) => pokedex.find((p) => p.id === id);

  return (
    <>
      <header>
        <h1 className="text-3xl font-bold">Team</h1>
      </header>

      <div className="py-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-taupe-400" />
          <input
            className="w-full pl-10 pr-4 py-2 bg-taupe-100 border border-taupe-200 rounded-lg text-sm placeholder:text-taupe-400 focus:outline-none focus:ring-2 focus:ring-taupe-400 focus:ring-inset transition-colors"
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
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-full">
          <Loader2 className="size-12 text-taupe-500 animate-spin" />
        </div>
      ) : (
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
                {[1, 2, 3, 4, 5, 6].map((position) => {
                  // Position aware slots
                  const slot = t.pokemons.find((p) => p.position === position);
                  const pokemon = slot ? getPokemonById(slot.id) : null;

                  return (
                    <div
                      key={`${t.id}-${position}`}
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
      )}
    </>
  );
}
