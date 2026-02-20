import { useEffect, useState } from "react";
import type { Team } from "../../lib/types";

export default function Team() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [filtered, setFiltered] = useState<Team[]>([]);

  useEffect(() => {
    async function fetchTeams() {
      const res = await fetch("/api/team");
      const data = await res.json();
      setTeams(data);
      setFiltered(data);
    }

    fetchTeams();
  }, []);

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

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
        {filtered.map((t) => (
          <div key={t.id} className="bg-white rounded-md shadow-sm p-4">
            <h2 className="font-bold">{t.name}</h2>
            <p className="text-taupe-500">{t.pokemons.length} Pokémon</p>
          </div>
        ))}
      </div>
    </>
  );
}
