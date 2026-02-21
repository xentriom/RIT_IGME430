import { getApiBase } from "../../lib/constants";
import Console from "../../components/Console";
import Example from "../../components/Example";

const METHODS = ["GET", "HEAD"] as const;
const DEFAULT_GET_QUERY = "?limit=3";

const SCHEMA_ID = {
  field: "id",
  type: "number",
  description: "Unique numeric identifier",
};

const SCHEMA_NUM = {
  field: "num",
  type: "string",
  description: 'Pokédex number (e.g. "001")',
};

const SCHEMA_NAME = {
  field: "name",
  type: "string",
  description: "Pokémon name",
};

const SCHEMA_IMG = { field: "img", type: "string", description: "Image URL" };

const SCHEMA_TYPE = {
  field: "type",
  type: "string[]",
  description: "Element type(s)",
};

const SCHEMA_HEIGHT = {
  field: "height",
  type: "string",
  description: 'Height with unit (e.g. "0.71 m")',
};

const SCHEMA_WEIGHT = {
  field: "weight",
  type: "string",
  description: 'Weight with unit (e.g. "6.9 kg")',
};

const SCHEMA_WEAKNESSES = {
  field: "weaknesses",
  type: "string[]",
  description: "Weakness types",
};

const SCHEMA_NEXT_EVOLUTION = {
  field: "next_evolution",
  type: "object[]?",
  description: "Evolutions { num, name }",
};

const RANDOM_POKEMON_SCHEMA = [
  SCHEMA_ID,
  SCHEMA_NUM,
  SCHEMA_NAME,
  SCHEMA_IMG,
  SCHEMA_TYPE,
  SCHEMA_HEIGHT,
  SCHEMA_WEIGHT,
  SCHEMA_WEAKNESSES,
  SCHEMA_NEXT_EVOLUTION,
] as const;

export default function RandomPokemon() {
  const ENDPOINT = `${getApiBase()}/randomPokemon`;

  return (
    <article className="max-w-none space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-2">Random Pokemon</h1>
        <p className="text-taupe-600">
          Returns one or more random Pokémon from the Pokédex. Useful for
          discovery or random team-building.
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
          <code className="block w-full rounded-md border border-taupe-300 bg-taupe-100 px-4 py-3 font-mono text-sm text-taupe-900 break-all">
            {ENDPOINT}
          </code>
        </div>
      </section>

      <section className="space-y-4 border-t border-taupe-200">
        <h2 className="text-xl font-semibold">Request Schema</h2>
        <p className="text-taupe-600">Query parameters for GET / HEAD.</p>
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
                <td className="px-4 py-3 font-mono text-taupe-800">limit</td>
                <td className="px-4 py-3 font-mono text-taupe-600 text-xs">
                  number?
                </td>
                <td className="px-4 py-3 text-taupe-600">
                  Number of random Pokémon to return (1-151, default 1)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4 border-t border-taupe-200">
        <h2 className="text-xl font-semibold">Response Schema</h2>
        <p className="text-taupe-600">
          Returns an array of Pokémon objects. Each object has:
        </p>
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
              {RANDOM_POKEMON_SCHEMA.map(({ field, type, description }) => (
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
        />
      </section>

      <section className="space-y-4 border-t border-taupe-200">
        <h2 className="text-xl font-semibold">Examples</h2>
        <div className="space-y-4">
          <Example
            method="GET"
            url={`${ENDPOINT}?limit=1`}
            response={`[
  {
    "id": 42,
    "num": "042",
    "name": "Golbat",
    "img": "http://www.serebii.net/pokemongo/pokemon/042.png",
    "type": ["Poison", "Flying"],
    "height": "1.60 m",
    "weight": "55.0 kg",
    "weaknesses": ["Electric", "Ice", "Psychic", "Rock"],
    "next_evolution": [{ "num": "169", "name": "Crobat" }]
  }
]`}
          />
          <Example
            method="GET"
            url={`${ENDPOINT}?limit=3`}
            response={`[
  { "id": 12, "num": "012", "name": "Butterfree", "..." },
  { "id": 87, "num": "087", "name": "Dewgong", "..." },
  { "id": 131, "num": "131", "name": "Lapras", "..." }
]`}
          />
        </div>
      </section>
    </article>
  );
}
