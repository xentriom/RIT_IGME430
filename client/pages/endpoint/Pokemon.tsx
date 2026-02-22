import { getApiBase } from "../../lib/constants";
import Console from "../../components/Console";
import Example from "../../components/Example";

const METHODS = ["GET", "HEAD", "POST"] as const;
const DEFAULT_GET_QUERY = "?id={{id}}";
const DEFAULT_POST_BODY = `{
  "name": "New Pokemon",
  "type": ["Fire", "Flying"],
  "height": "1.2 m",
  "weight": "25.0 kg"
}`;

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
  description: "Element type(s) (max 2)",
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
  type: "object[] | null",
  description: "Evolutions { num, name }",
};

const POKEMON_RESPONSE_SCHEMA = [
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

const POST_BODY_SCHEMA = [
  { field: "name", type: "string", description: "Pokémon name" },
  { field: "type", type: "string[]", description: "Element type(s) (max 2)" },
  {
    field: "height",
    type: "string",
    description: 'Height with unit (e.g. "0.71 m")',
  },
  {
    field: "weight",
    type: "string",
    description: 'Weight with unit (e.g. "6.9 kg")',
  },
] as const;

export default function Pokemon() {
  const ENDPOINT = `${getApiBase()}/pokemon`;

  const randomId = Math.floor(Math.random() * 151) + 1;
  const GET_QUERY = DEFAULT_GET_QUERY.replace("{{id}}", randomId.toString());

  return (
    <article className="max-w-none space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-2">Pokemon</h1>
        <p className="text-taupe-600">
          Fetch a single Pokémon by id, num, or name. POST creates a new Pokémon
          in the database.
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
        <p className="text-taupe-600">
          GET / HEAD query parameters (optional).
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
            <tbody className="divide-y divide-taupe-200 bg-taupe-50">
              <tr>
                <td className="px-4 py-3 font-mono text-taupe-800">id</td>
                <td className="px-4 py-3 font-mono text-taupe-600 text-xs">
                  number?
                </td>
                <td className="px-4 py-3 text-taupe-600">
                  Pokémon ID (e.g. 1)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-taupe-800">num</td>
                <td className="px-4 py-3 font-mono text-taupe-600 text-xs">
                  string?
                </td>
                <td className="px-4 py-3 text-taupe-600">
                  Pokédex number (e.g. &quot;001&quot;)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-taupe-800">name</td>
                <td className="px-4 py-3 font-mono text-taupe-600 text-xs">
                  string?
                </td>
                <td className="px-4 py-3 text-taupe-600">
                  Pokémon name (e.g. &quot;Bulbasaur&quot;)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-taupe-600">POST request body (JSON).</p>
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
            <tbody className="divide-y divide-taupe-200 bg-taupe-50">
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
            <tbody className="divide-y divide-taupe-200 bg-taupe-50">
              {POKEMON_RESPONSE_SCHEMA.map(({ field, type, description }) => (
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
          defaultQuery={GET_QUERY}
          defaultBody={DEFAULT_POST_BODY}
        />
      </section>

      <section className="space-y-4 border-t border-taupe-200">
        <h2 className="text-xl font-semibold">Examples</h2>
        <div className="space-y-4">
          <Example
            method="GET"
            url={`${ENDPOINT}?id=1`}
            response={`{
  "id": 1,
  "num": "001",
  "name": "Bulbasaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
  "type": ["Grass", "Poison"],
  "height": "0.71 m",
  "weight": "6.9 kg",
  "weaknesses": ["Fire", "Ice", "Flying", "Psychic"],
  "next_evolution": [{ "num": "002", "name": "Ivysaur" }]
}`}
          />
          <Example
            method="GET"
            url={`${ENDPOINT}?name=Charizard`}
            response={`{
  "id": 6,
  "num": "006",
  "name": "Charizard",
  "img": "http://www.serebii.net/pokemongo/pokemon/006.png",
  "type": ["Fire", "Flying"],
  "height": "1.70 m",
  "weight": "90.5 kg",
  "weaknesses": ["Water", "Electric", "Ice", "Rock"]
}`}
          />
          <Example
            method="POST"
            url={ENDPOINT}
            body={`{
  "name": "Victini",
  "type": ["Psychic", "Fire"],
  "height": "0.4 m",
  "weight": "4.0 kg"
}`}
            response={`{
  "id": 152,
  "num": "152",
  "name": "Victini",
  "type": ["Psychic", "Fire"],
  "height": "0.4 m",
  "weight": "4.0 kg",
  "weaknesses": ["Ground", "Rock", "Ghost", "Water", "Dark"]
}`}
            responseStatus={201}
          />
        </div>
      </section>
    </article>
  );
}
