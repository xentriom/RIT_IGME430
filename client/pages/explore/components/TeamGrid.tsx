import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Search } from "lucide-react";
import type { Team, Pokemon } from "../../../lib/types";

export default function TeamGrid({
  teams,
  pokedex,
  loading,
}: {
  teams: Team[];
  pokedex: Pokemon[];
  loading: boolean;
}) {
  const [filtered, setFiltered] = useState<Team[]>(teams);

  useEffect(() => {
    setFiltered(teams);
  }, [teams]);

  const getPokemonById = (id: number) => pokedex.find((p) => p.id === id);

  return (
    <>
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
        <TeamGridSkeleton />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((t) => (
            <Link
              key={t.id}
              to={{
                pathname: "/",
                search: `?page=view-team&tid=${t.id}`,
              }}
              viewTransition
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
                          className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <span className="text-taupe-300 text-xl">?</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

function TeamGridSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="h-28 animate-pulse rounded-xl bg-taupe-100"
        />
      ))}
    </div>
  );
}
