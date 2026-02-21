import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { TypeBadge } from "../../../components/TypeSelector";
import type { Team, Pokemon } from "../../../lib/types";

export default function TeamDetail({
  team,
  pokedex,
}: {
  team: Team;
  pokedex: Pokemon[];
}) {
  const getPokemonById = (id: number) => pokedex.find((p) => p.id === id);

  return (
    <div className="flex flex-col gap-6 py-6">
      <Link
        to={{ pathname: "/", search: "?page=view-team" }}
        viewTransition
        className="inline-flex items-center gap-2 text-taupe-500 hover:text-taupe-700 transition-colors"
      >
        <ArrowLeft className="size-4" />
        <span className="text-sm">Back to Teams</span>
      </Link>

      <div className="flex flex-col gap-6 p-6 rounded-xl bg-taupe-100 border border-taupe-200 shadow-sm">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-2xl">{team.name}</h2>
            <span className="text-sm px-3 py-1 rounded-full bg-taupe-200/70 text-taupe-600 font-medium">
              {team.pokemons.length}/6 Pokémon
            </span>
          </div>
          <span className="text-sm text-taupe-500">
            Created{" "}
            {new Date(team.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((position) => {
            const slot = team.pokemons.find((p) => p.position === position);
            const pokemon = slot ? getPokemonById(slot.id) : null;

            return (
              <div
                key={position}
                className="flex flex-col gap-2 p-3 rounded-xl bg-taupe-200/50 border border-taupe-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-taupe-500">
                    Slot {position}
                  </span>
                  {pokemon && (
                    <span className="text-xs font-mono text-taupe-400">
                      #{pokemon.num}
                    </span>
                  )}
                </div>
                <div className="aspect-square rounded-xl bg-taupe-100 flex items-center justify-center overflow-hidden">
                  {pokemon ? (
                    <img
                      src={pokemon.img}
                      alt={pokemon.name}
                      className="w-full h-full object-contain p-2"
                    />
                  ) : (
                    <span className="text-taupe-300 text-3xl">?</span>
                  )}
                </div>
                {pokemon ? (
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-bold text-center truncate">
                      {pokemon.name}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-1">
                      {pokemon.type.map((t) => (
                        <TypeBadge key={t} type={t} className="text-xs" />
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-taupe-400 text-center">Empty</p>
                )}
              </div>
            );
          })}
        </div>

        <section className="flex flex-col gap-3">
          <h3 className="text-sm font-medium text-taupe-600">Team Analysis</h3>
          <TeamTypeAnalysis team={team} pokedex={pokedex} />
        </section>
      </div>
    </div>
  );
}

function TeamTypeAnalysis({
  team,
  pokedex,
}: {
  team: Team;
  pokedex: Pokemon[];
}) {
  const getPokemonById = (id: number) => pokedex.find((p) => p.id === id);

  const types = team.pokemons.reduce<string[]>((acc, slot) => {
    const pokemon = getPokemonById(slot.id);
    if (pokemon) {
      pokemon.type.forEach((t) => {
        if (!acc.includes(t)) acc.push(t);
      });
    }
    return acc;
  }, []);

  const weaknesses = team.pokemons.reduce<string[]>((acc, slot) => {
    const pokemon = getPokemonById(slot.id);
    if (pokemon) {
      pokemon.weaknesses.forEach((w) => {
        if (!acc.includes(w)) acc.push(w);
      });
    }
    return acc;
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex flex-col gap-2 p-3 rounded-lg bg-taupe-200/30">
        <span className="text-xs font-medium text-taupe-500">
          Type Coverage
        </span>
        {types.length > 0 ? (
          <div className="flex flex-wrap gap-1">
            {types.map((t) => (
              <TypeBadge key={t} type={t} className="text-xs" />
            ))}
          </div>
        ) : (
          <p className="text-sm text-taupe-400">No Pokémon in team</p>
        )}
      </div>
      <div className="flex flex-col gap-2 p-3 rounded-lg bg-taupe-200/30">
        <span className="text-xs font-medium text-taupe-500">
          Team Weaknesses
        </span>
        {weaknesses.length > 0 ? (
          <div className="flex flex-wrap gap-1">
            {weaknesses.map((w) => (
              <TypeBadge key={w} type={w} className="text-xs" />
            ))}
          </div>
        ) : (
          <p className="text-sm text-taupe-400">No weaknesses</p>
        )}
      </div>
    </div>
  );
}

export function TeamDetailSkeleton() {
  return (
    <div className="flex flex-col gap-6 py-6">
      <div className="h-5 w-28 bg-taupe-200 rounded animate-pulse" />
      <div className="flex flex-col gap-6 p-6 rounded-xl bg-taupe-100 animate-pulse">
        <div className="h-8 w-48 bg-taupe-200 rounded" />
        <div className="h-40 bg-taupe-200/50 rounded-xl" />
        <div className="h-24 bg-taupe-200/50 rounded-xl" />
      </div>
    </div>
  );
}
