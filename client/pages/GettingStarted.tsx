import { Link } from "react-router";
import { getApiBase } from "../lib/constants";
import CodeBlock from "../components/CodeBlock";

const FETCH_EXAMPLE = `// Fetch a single Pokémon
const response = await fetch('/api/pokemon?name=Pikachu');
const pokemon = await response.json();

console.log(pokemon);
// {
//   "id": 25,
//   "num": "025",
//   "name": "Pikachu",
//   "type": ["Electric"],
//   "height": "0.41 m",
//   "weight": "6.0 kg",
//   ...
// }`;

const CREATE_POKEMON_EXAMPLE = `// Create a custom Pokémon
const response = await fetch('/api/pokemon', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'RITchie',
    type: ['Fire', 'Ghost'],
    height: '2.4384 m',
    weight: '453.592 kg'
  })
});

const pokemon = await response.json();
console.log(pokemon.id); // Auto-generated ID`;

const CREATE_TEAM_EXAMPLE = `// Create a Pokémon team
const response = await fetch('/api/team', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Let The Fire Consume the Ashen Past',
    pokemons: [
      { id: 150, position: 1 },
      { id: 38, position: 2 },
      { id: 146, position: 4 },
    ]
  })
});

const team = await response.json();
console.log(team.id); // UUID for your team`;

const ENDPOINTS = [
  {
    endpoint: "evolution",
    description: "Fetch or adjust evolution chain",
    methods: ["GET", "HEAD", "PATCH"],
  },
  {
    endpoint: "pokedex",
    description: "Fetch all Pokémon from the Pokédex",
    methods: ["GET", "HEAD"],
  },
  {
    endpoint: "pokemon",
    description: "Fetch or create Pokémon",
    methods: ["GET", "HEAD", "POST"],
  },
  {
    endpoint: "randomPokemon",
    description: "Fetch random Pokémon",
    methods: ["GET", "HEAD"],
  },
  {
    endpoint: "team",
    description: "Fetch or create Pokémon teams",
    methods: ["GET", "HEAD", "POST"],
  },
];

function StatusCode({ code }: { code: string }) {
  const method = {
    GET: "bg-emerald-100 text-emerald-800",
    HEAD: "bg-slate-100 text-slate-800",
    POST: "bg-amber-100 text-amber-800",
    PATCH: "bg-indigo-100 text-indigo-800",
  };

  return (
    <span
      className={`rounded-md ${method[code as keyof typeof method]} px-1.5 py-0.5 text-xs font-semibold`}
    >
      {code}
    </span>
  );
}

export default function GettingStarted() {
  const apiBase = getApiBase();

  return (
    <article className="max-w-none space-y-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold">Getting Started</h1>
        <p className="text-lg text-taupe-600">
          Learn how to use the P'dexiom API to fetch Pokémon data, create custom
          Pokémon, and build teams.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Base URL</h2>
        <p className="text-taupe-600">All API requests should be made to:</p>
        <code className="block rounded-md border border-taupe-300 bg-taupe-100 px-4 py-3 font-mono text-sm text-taupe-900">
          {apiBase}
        </code>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Response Format</h2>
        <p className="text-taupe-600">
          All endpoints return JSON responses. Successful requests return data
          with appropriate HTTP status codes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-taupe-600">
          <li>
            <code className="text-sm bg-taupe-100 px-1.5 py-0.5 rounded">
              200 OK
            </code>{" "}
            - Successful GET/HEAD request
          </li>
          <li>
            <code className="text-sm bg-taupe-100 px-1.5 py-0.5 rounded">
              201 Created
            </code>{" "}
            - Successful POST request
          </li>
          <li>
            <code className="text-sm bg-taupe-100 px-1.5 py-0.5 rounded">
              204 No Content
            </code>{" "}
            - Successful PATCH request
          </li>
          <li>
            <code className="text-sm bg-taupe-100 px-1.5 py-0.5 rounded">
              400 Bad Request
            </code>{" "}
            - Invalid request body or parameters
          </li>
          <li>
            <code className="text-sm bg-taupe-100 px-1.5 py-0.5 rounded">
              404 Not Found
            </code>{" "}
            - Resource not found
          </li>
        </ul>
      </section>

      <section className="space-y-6 border-t border-taupe-200 pt-8">
        <h2 className="text-2xl font-semibold">Fetching Pokémon</h2>
        <p className="text-taupe-600">
          Use the{" "}
          <code className="text-sm bg-taupe-100 px-1.5 py-0.5 rounded">
            /pokemon
          </code>{" "}
          endpoint to fetch individual Pokémon by ID, Pokédex number, or name.
        </p>
        <div className="overflow-hidden rounded-md border border-taupe-300 bg-taupe-50">
          <CodeBlock
            code={FETCH_EXAMPLE}
            language="javascript"
            className="m-0 overflow-x-auto text-sm"
          />
        </div>
      </section>

      <section className="space-y-6 border-t border-taupe-200 pt-8">
        <h2 className="text-2xl font-semibold">Creating Custom Pokémon</h2>
        <p className="text-taupe-600">
          Add your own Pokémon to the database using a POST request. Weaknesses
          are automatically calculated based on the types you provide.
        </p>
        <div className="overflow-hidden rounded-md border border-taupe-300 bg-taupe-50">
          <CodeBlock
            code={CREATE_POKEMON_EXAMPLE}
            language="javascript"
            className="m-0 overflow-x-auto text-sm"
          />
        </div>
      </section>

      <section className="space-y-6 border-t border-taupe-200 pt-8">
        <h2 className="text-2xl font-semibold">Building Teams</h2>
        <p className="text-taupe-600">
          Create teams of up to 6 Pokémon. Each team member needs a Pokémon ID
          and a position (1-6).
        </p>
        <div className="overflow-hidden rounded-md border border-taupe-300 bg-taupe-50">
          <CodeBlock
            code={CREATE_TEAM_EXAMPLE}
            language="javascript"
            className="m-0 overflow-x-auto text-sm"
          />
        </div>
      </section>

      <section className="space-y-4 border-t border-taupe-200 pt-8">
        <h2 className="text-2xl font-semibold">Available Endpoints</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {ENDPOINTS.map((endpoint) => (
            <Link
              key={endpoint.endpoint}
              to={{ pathname: "/", search: `?page=${endpoint.endpoint}` }}
              className="flex flex-col gap-1 rounded-lg border border-taupe-300 bg-taupe-50 p-4 hover:bg-taupe-100 transition-colors no-underline"
            >
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  {endpoint.methods.map((method) => (
                    <StatusCode key={method} code={method} />
                  ))}
                </div>
                <div className="font-mono text-sm text-taupe-900">
                  /{endpoint.endpoint}
                </div>
              </div>

              <div className="text-xs text-taupe-500">
                {endpoint.description}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
