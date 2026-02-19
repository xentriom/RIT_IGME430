import { getApiBaseUrl } from "../utils/constants";
import Console from "../components/Console";
import Example from "../components/Example";

const METHODS = ["GET", "HEAD", "POST"] as const;
const DEFAULT_GET_QUERY = "";
const DEFAULT_POST_BODY = `{
  "name": "Team Name",
  "pokemons": [
    { "id": {{randomPokemonId}}, "position": 1 }
  ]
}`;

const SCHEMA_UUID = { field: "id", type: "string", description: "Unique UUID" };
const SCHEMA_NAME = { field: "name", type: "string", description: "Team name" };
const SCHEMA_POKEMONS = {
  field: "pokemons",
  type: "{ id: number, position: number }[]",
  description: "1-6 pokémon",
};

const TEAM_SCHEMA = [SCHEMA_UUID, SCHEMA_NAME, SCHEMA_POKEMONS] as const;
const POST_BODY_SCHEMA = [SCHEMA_NAME, SCHEMA_POKEMONS] as const;

export default function Team() {
  const ENDPOINT = `${getApiBaseUrl()}/team`;

  // Choose a random starter Pokémon ID
  const starterIds = [1, 4, 7];
  const randomId = starterIds[Math.floor(Math.random() * starterIds.length)];
  const POST_BODY = DEFAULT_POST_BODY.replace(
    "{{randomPokemonId}}",
    randomId.toString(),
  );

  return (
    <article className="max-w-none space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-2">Team</h1>
        <p className="text-taupe-600">
          Manage Pokémon teams. GET returns all teams or a team by ID. POST
          creates a new team.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Endpoint</h2>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800">
            GET
          </span>
          <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-800">
            HEAD
          </span>
          <span className="rounded-md bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800">
            POST
          </span>
          <code className="block w-full rounded-md border border-taupe-300 bg-taupe-100 px-4 py-3 font-mono text-sm text-taupe-900 break-all">
            {ENDPOINT}
          </code>
        </div>
      </section>

      <section className="space-y-4 border-t border-taupe-200">
        <h2 className="text-xl font-semibold">Request Schema</h2>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-taupe-800">
            GET / HEAD - Query parameters
          </h3>
          <div className="overflow-hidden rounded-md border border-taupe-300">
            <table className="min-w-full divide-y divide-taupe-200 text-sm">
              <thead>
                <tr className="bg-taupe-100">
                  <th className="px-4 py-3 text-left font-semibold text-taupe-900">
                    Field
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-taupe-900">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-taupe-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-taupe-200 bg-white">
                <tr>
                  <td className="px-4 py-3 font-mono text-taupe-800">id</td>
                  <td className="px-4 py-3 font-mono text-taupe-600 text-xs">
                    string?
                  </td>
                  <td className="px-4 py-3 text-taupe-600">
                    Team UUID. Omit for all teams
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-taupe-800">
            POST - Request body (JSON)
          </h3>
          <div className="overflow-hidden rounded-md border border-taupe-300">
            <table className="min-w-full divide-y divide-taupe-200 text-sm">
              <thead>
                <tr className="bg-taupe-100">
                  <th className="px-4 py-3 text-left font-semibold text-taupe-900">
                    Field
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-taupe-900">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-taupe-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-taupe-200 bg-white">
                {POST_BODY_SCHEMA.map(({ field, type, description }) => (
                  <tr key={field}>
                    <td className="px-4 py-3 font-mono text-taupe-800">
                      {field}
                    </td>
                    <td className="px-4 py-3 font-mono text-taupe-600 text-xs">
                      {type}
                    </td>
                    <td className="px-4 py-3 text-taupe-600">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="space-y-4 border-t border-taupe-200">
        <h2 className="text-xl font-semibold">Response Schema</h2>
        <div className="overflow-hidden rounded-md border border-taupe-300">
          <table className="min-w-full divide-y divide-taupe-200 text-sm">
            <thead>
              <tr className="bg-taupe-100">
                <th className="px-4 py-3 text-left font-semibold text-taupe-900">
                  Field
                </th>
                <th className="px-4 py-3 text-left font-semibold text-taupe-900">
                  Type
                </th>
                <th className="px-4 py-3 text-left font-semibold text-taupe-900">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-taupe-200 bg-white">
              {TEAM_SCHEMA.map(({ field, type, description }) => (
                <tr key={field}>
                  <td className="px-4 py-3 font-mono text-taupe-800">
                    {field}
                  </td>
                  <td className="px-4 py-3 font-mono text-taupe-600 text-xs">
                    {type}
                  </td>
                  <td className="px-4 py-3 text-taupe-600">{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4 border-t border-taupe-200">
        <h2 className="text-xl font-semibold">Test Request</h2>
        <Console
          endpoint={ENDPOINT}
          methods={METHODS}
          defaultQuery={DEFAULT_GET_QUERY}
          defaultBody={POST_BODY}
        />
      </section>

      <section className="space-y-4 border-t border-taupe-200">
        <h2 className="text-xl font-semibold">Examples</h2>
        <div className="space-y-4">
          <Example
            method="GET"
            url={ENDPOINT}
            response={`[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Kanto Starters",
    "pokemons": [
      { "id": 1, "position": 1 },
      { "id": 4, "position": 2 },
      { "id": 7, "position": 3 }
    ]
  }
]`}
          />
          <Example
            method="GET"
            url={`${ENDPOINT}?id=550e8400-e29b-41d4-a716-446655440000`}
            response={`{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "Kanto Starters",
  "pokemons": [
    { "id": 1, "position": 1 },
    { "id": 4, "position": 2 },
    { "id": 7, "position": 3 }
  ]
}`}
          />
          <Example
            method="POST"
            url={ENDPOINT}
            body={`{
  "name": "Dream Team",
  "pokemons": [
    { "id": 25, "position": 1 },
    { "id": 150, "position": 2 },
    { "id": 143, "position": 3 }
  ]
}`}
            response={`{
  "id": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
  "name": "Dream Team",
  "pokemons": [
    { "id": 25, "position": 1 },
    { "id": 150, "position": 2 },
    { "id": 143, "position": 3 }
  ]
}`}
            responseStatus={201}
          />
        </div>
      </section>
    </article>
  );
}
