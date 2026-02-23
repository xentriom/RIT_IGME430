import { getApiBase } from "../../lib/constants";
import Console from "../../components/Console";
import Example from "../../components/Example";

const METHODS = ["GET", "HEAD", "PATCH"] as const;
const DEFAULT_GET_QUERY = "?id={{id}}";

const SCHEMA_PREVIOUS_EVOLUTION = {
  field: "previous_evolution",
  type: "object[]",
  description: "Previous evolutions { num, name }",
};

const SCHEMA_NEXT_EVOLUTION = {
  field: "next_evolution",
  type: "object[]",
  description: "Next evolutions { num, name }",
};

const EVOLUTION_RESPONSE_SCHEMA = [
  SCHEMA_PREVIOUS_EVOLUTION,
  SCHEMA_NEXT_EVOLUTION,
] as const;

export default function Evolution() {
  const ENDPOINT = `${getApiBase()}/evolution`;

  const randomId = Math.floor(Math.random() * 151) + 1;
  const GET_QUERY = DEFAULT_GET_QUERY.replace("{{id}}", randomId.toString());

  return (
    <article className="max-w-none space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-2">Evolution</h1>
        <p className="text-taupe-600">
          Returns the complete evolution chain for a Pokémon, including both
          previous and next evolutions. PATCH adds a Pokémon to the
          next_evolution list.
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
            PATCH
          </span>
          <code className="block w-full rounded-md border border-taupe-300 bg-taupe-100 px-4 py-3 font-mono text-sm text-taupe-900 break-all">
            {ENDPOINT}
          </code>
        </div>
      </section>

      <section className="space-y-4 border-t border-taupe-200">
        <h2 className="text-xl font-semibold">Request Schema</h2>
        <p className="text-taupe-600">
          GET / HEAD: Query parameters (at least one required).
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
        <p className="text-taupe-600">
          PATCH: Query <code className="rounded bg-taupe-200 px-1">id</code>{" "}
          (required). Body (form-urlencoded):{" "}
          <code className="rounded bg-taupe-200 px-1">next=3</code>
        </p>
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
              {EVOLUTION_RESPONSE_SCHEMA.map(({ field, type, description }) => (
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
          defaultBody="next=3"
          bodyContentType="application/x-www-form-urlencoded"
        />
      </section>

      <section className="space-y-4 border-t border-taupe-200">
        <h2 className="text-xl font-semibold">Examples</h2>
        <div className="space-y-4">
          <Example
            method="GET"
            url={`${ENDPOINT}?id=1`}
            response={`{
  "previous_evolution": [],
  "next_evolution": [
    { "num": "002", "name": "Ivysaur" },
    { "num": "003", "name": "Venusaur" }
  ]
}`}
          />
          <Example
            method="GET"
            url={`${ENDPOINT}?name=Charmeleon`}
            response={`{
  "previous_evolution": [
    { "num": "004", "name": "Charmander" }
  ],
  "next_evolution": [
    { "num": "006", "name": "Charizard" }
  ]
}`}
          />
          <Example
            method="GET"
            url={`${ENDPOINT}?num=006`}
            response={`{
  "previous_evolution": [
    { "num": "004", "name": "Charmander" },
    { "num": "005", "name": "Charmeleon" }
  ],
  "next_evolution": []
}`}
          />
          <Example
            method="PATCH"
            url={`${ENDPOINT}?id=150`}
            body="next=151"
            response="(204 No Content)"
            responseStatus={204}
          />
        </div>
      </section>
    </article>
  );
}
