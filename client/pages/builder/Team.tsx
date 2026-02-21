// This is heavilty inspired by:
// https://richi3f.github.io/pokemon-team-planner/plan/#rby

import { useState, useEffect } from "react";
import {
  X,
  Loader2,
  Search,
  Shuffle,
  Dices,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "../../lib/utils";
import { TypeBadge } from "../../components/TypeSelector";
import {
  inputClass,
  FormRow,
  Section,
  ErrorAlert,
  SubmitButton,
  ResetButton,
  Modal,
} from "../../components/FormElements";
import type { Pokemon, Team } from "../../lib/types";

type TeamMember = {
  pokemon: Pokemon;
  position: number;
};

export default function TeamBuilder() {
  const [name, setName] = useState("");
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [pokedex, setPokedex] = useState<Pokemon[]>([]);
  const [loadingPokedex, setLoadingPokedex] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [created, setCreated] = useState<Team | null>(null);

  useEffect(() => {
    async function fetchPokedex() {
      try {
        const res = await fetch("/api/pokedex");
        const data = await res.json();
        setPokedex(data);
        setLoadingPokedex(false);
      } catch {
        setLoadingPokedex(false);
      }
    }

    fetchPokedex();
  }, []);

  // Filter the Pokédex based on the search query
  const filteredPokemon = pokedex.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.num.includes(searchQuery),
  );

  // Get the used positions
  const usedPositions = new Set(teamMembers.map((m) => m.position));

  // Get the available Pokémon
  const getAvailablePokemon = () => {
    const usedIds = new Set(teamMembers.map((m) => m.pokemon.id));
    return pokedex.filter((p) => !usedIds.has(p.id));
  };

  // Add a Pokemon at a specific position
  const addPokemonAtPosition = (pokemon: Pokemon, position: number) => {
    if (usedPositions.has(position)) return;
    setTeamMembers([...teamMembers, { pokemon, position }]);
  };

  // Add a Pokemon to the team
  const addPokemon = (pokemon: Pokemon) => {
    if (teamMembers.length >= 6) return;

    const firstEmptyPosition = [1, 2, 3, 4, 5, 6].find(
      (pos) => !usedPositions.has(pos),
    );
    if (!firstEmptyPosition) return;

    addPokemonAtPosition(pokemon, firstEmptyPosition);
  };

  // Remove a Pokemon from a specific position
  const removePokemon = (position: number) => {
    setTeamMembers(teamMembers.filter((m) => m.position !== position));
  };

  // Move a Pokemon from one position to another
  const movePokemon = (fromPosition: number, toPosition: number) => {
    if (toPosition < 1 || toPosition > 6) return;

    setTeamMembers(
      teamMembers.map((m) => {
        if (m.position === fromPosition) return { ...m, position: toPosition };
        if (m.position === toPosition) return { ...m, position: fromPosition };
        return m;
      }),
    );
  };

  // Add a random Pokemon at a specific position
  const addRandomPokemonAtPosition = (position: number) => {
    if (usedPositions.has(position)) return;
    const available = getAvailablePokemon();
    if (available.length === 0) return;

    const randomPokemon =
      available[Math.floor(Math.random() * available.length)];
    addPokemonAtPosition(randomPokemon, position);
  };

  // Randomize the team
  const randomizeTeam = () => {
    const newMembers: TeamMember[] = [];

    for (let i = 0; i < 6 && pokedex.length > 0; i++) {
      const randomPokemon = pokedex[Math.floor(Math.random() * pokedex.length)];
      newMembers.push({ pokemon: randomPokemon, position: i + 1 });
    }

    setTeamMembers(newMembers);
  };

  // Reset the form
  const resetForm = () => {
    setName("");
    setTeamMembers([]);
    setError(null);
    setSearchQuery("");
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setCreated(null);

    if (!name.trim()) return setError("Please enter a team name");
    if (teamMembers.length === 0)
      return setError("Please add at least one Pokémon to your team");

    setLoading(true);

    // Structure the data for API
    const payload = {
      name: name.trim(),
      pokemons: teamMembers.map((m) => ({
        id: m.pokemon.id,
        position: m.position,
      })),
    };

    let res;
    let data: Team & { message?: string };

    try {
      res = await fetch("/api/team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      data = await res.json();
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
      return;
    }

    setLoading(false);

    if (!res.ok) {
      setError(data.message ?? "Failed to create team");
      return;
    }

    setCreated(data);
    resetForm();
  };

  return (
    <article className="max-w-none space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-2">Build Your Own Team</h1>
        <p className="text-taupe-600">
          Build a team of up to 6 Pokémon from the Pokédex.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Section
          title="Team Info"
          description="Give your team a memorable name"
        >
          <div className="overflow-hidden rounded-md border border-taupe-300 bg-taupe-50">
            <FormRow label="Name" htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter team name..."
                className={inputClass}
              />
            </FormRow>
          </div>
        </Section>

        <Section
          title="Team Members"
          description={`Select up to 6 Pokémon for your team (${teamMembers.length}/6)`}
        >
          <div className="space-y-3">
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
              {[1, 2, 3, 4, 5, 6].map((position) => {
                const member = teamMembers.find((m) => m.position === position);
                return (
                  <div
                    key={position}
                    className={cn(
                      "relative aspect-square rounded-lg border-2 border-dashed flex flex-col items-center justify-center transition-all bg-taupe-50 border-taupe-200",
                      member
                        ? "border-taupe-200 bg-taupe-100"
                        : "border-taupe-200 bg-taupe-50",
                    )}
                  >
                    <span className="absolute top-1 left-2 text-xs font-mono text-taupe-400">
                      {position}
                    </span>
                    {member ? (
                      <button
                        type="button"
                        title="Click to remove"
                        onClick={() => removePokemon(position)}
                        className="flex flex-col items-center justify-center w-full h-full hover:bg-red-50 transition-colors rounded-md group/slot"
                      >
                        <img
                          src={member.pokemon.img}
                          alt={member.pokemon.name}
                          className="w-12 h-12 object-contain group-hover/slot:animate-pulse"
                        />
                        <span className="text-xs font-medium text-taupe-700 truncate max-w-full px-1 group-hover/slot:animate-pulse">
                          {member.pokemon.name}
                        </span>
                        <div className="flex gap-0.5 mt-1 group-hover/slot:animate-pulse">
                          {member.pokemon.type.slice(0, 2).map((t) => (
                            <TypeBadge
                              key={t}
                              type={t}
                              className="text-xs px-1.5 py-0"
                            />
                          ))}
                        </div>
                        <div
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1 z-10"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            type="button"
                            title="Move left"
                            onClick={() => movePokemon(position, position - 1)}
                            disabled={position === 1}
                            className="p-0.5 rounded text-taupe-400 hover:text-taupe-600 hover:bg-taupe-200 disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            <ChevronLeft size={14} />
                          </button>
                          <button
                            type="button"
                            title="Move right"
                            onClick={() => movePokemon(position, position + 1)}
                            disabled={position === 6}
                            className="p-0.5 rounded text-taupe-400 hover:text-taupe-600 hover:bg-taupe-200 disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            <ChevronRight size={14} />
                          </button>
                        </div>
                      </button>
                    ) : (
                      <button
                        type="button"
                        title="Add random Pokémon"
                        onClick={() => addRandomPokemonAtPosition(position)}
                        disabled={loadingPokedex || pokedex.length === 0}
                        className="group/slot flex flex-col items-center justify-center w-full h-full hover:bg-taupe-100 transition-colors rounded-md disabled:cursor-not-allowed"
                      >
                        <Dices
                          size={24}
                          className="text-taupe-300 group-hover/slot:text-taupe-500 transition-colors"
                        />
                        <span className="text-[10px] text-taupe-300 group-hover/slot:text-taupe-500 mt-1">
                          Random
                        </span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="rounded-md border border-taupe-300 bg-taupe-50 overflow-hidden">
              <div className="p-3 border-b border-taupe-200 bg-taupe-50 flex flex-row gap-2 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-taupe-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name or number..."
                    className="w-full pl-10 pr-10 py-2 bg-taupe-50 border border-taupe-200 rounded-md text-sm placeholder:text-taupe-400 focus:outline-none focus:ring-2 focus:ring-taupe-400 focus:ring-inset"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded text-taupe-400 hover:text-taupe-600 transition-colors"
                      title="Clear search"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (pokedex.length === 0) return;
                      const randomPokemon =
                        pokedex[Math.floor(Math.random() * pokedex.length)];
                      setSearchQuery(randomPokemon.num);
                    }}
                    disabled={loadingPokedex || pokedex.length === 0}
                    className="py-2 px-3 rounded-md border border-taupe-300 bg-taupe-50 text-taupe-600 font-medium text-sm transition-colors flex items-center gap-2 hover:border-taupe-400 hover:bg-taupe-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Search for a random Pokémon"
                  >
                    <Dices size={16} />
                    <span className="hidden xl:inline">Random</span>
                  </button>
                  <button
                    type="button"
                    onClick={randomizeTeam}
                    disabled={loadingPokedex || pokedex.length === 0}
                    className="py-2 px-3 rounded-md border border-taupe-300 bg-taupe-50 text-taupe-600 font-medium text-sm transition-colors flex items-center gap-2 hover:border-taupe-400 hover:bg-taupe-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Fill all slots with random Pokémon"
                  >
                    <Shuffle size={16} />
                    <span className="hidden xl:inline">Randomize All</span>
                  </button>
                </div>
              </div>
              <div className="max-h-64 overflow-y-auto p-2">
                {loadingPokedex ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="size-6 text-taupe-400 animate-spin" />
                  </div>
                ) : filteredPokemon.length === 0 ? (
                  <p className="text-center text-sm text-taupe-500 py-8">
                    No Pokémon found
                  </p>
                ) : (
                  <div className="grid grid-cols-6 lg:grid-cols-12 gap-1">
                    {filteredPokemon.map((p) => {
                      const isTeamFull = teamMembers.length >= 6;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => addPokemon(p)}
                          disabled={isTeamFull}
                          className={cn(
                            "aspect-square rounded-md bg-taupe-100 transition-all",
                            isTeamFull
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:bg-taupe-200",
                          )}
                        >
                          <img
                            src={p.img}
                            alt={p.name}
                            title={p.name}
                            className="size-full object-contain"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Section>

        {error && <ErrorAlert message={error} />}

        <div className="flex gap-3 border-t border-taupe-200 pt-8">
          <SubmitButton loading={loading}>Create Team</SubmitButton>
          <ResetButton onClick={resetForm} />
        </div>
      </form>

      {created && (
        <CreatedModal
          team={created}
          pokedex={pokedex}
          onClose={() => setCreated(null)}
        />
      )}
    </article>
  );
}

function CreatedModal({
  team,
  pokedex,
  onClose,
}: {
  team: Team;
  pokedex: Pokemon[];
  onClose: () => void;
}) {
  const getPokemonById = (id: number) => pokedex.find((p) => p.id === id);

  return (
    <Modal
      title="Team Created"
      subtitle="Added to the database successfully"
      onClose={onClose}
      maxWidth="max-w-lg"
    >
      <div className="rounded-lg border border-taupe-200 bg-taupe-50 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-taupe-900">{team.name}</h3>
          <span className="text-xs font-mono text-taupe-400 bg-taupe-50 px-2 py-1 rounded border border-taupe-200 truncate max-w-32">
            {team.id}
          </span>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {team.pokemons
            .sort((a, b) => a.position - b.position)
            .map((slot) => {
              const pokemon = getPokemonById(slot.id);
              return (
                <div
                  key={slot.position}
                  className="aspect-square rounded-lg bg-taupe-50 border border-taupe-200 flex flex-col items-center justify-center p-1"
                >
                  {pokemon ? (
                    <>
                      <img
                        src={pokemon.img}
                        alt={pokemon.name}
                        className="w-10 h-10 object-contain"
                      />
                      <span className="text-[10px] text-taupe-600 truncate max-w-full">
                        {pokemon.name}
                      </span>
                    </>
                  ) : (
                    <span className="text-xl text-taupe-300">?</span>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </Modal>
  );
}
