import { useState } from "react";
import CodeBlock from "./CodeBlock";
import { cn } from "../../lib/utils";

const BODY_METHODS = ["POST", "PUT", "PATCH"];

type HttpMethod = "GET" | "HEAD" | "POST" | "PUT" | "PATCH";

type ConsoleProps = {
  endpoint: string;
  methods: readonly HttpMethod[];
  defaultQuery?: string;
  defaultBody?: string;
};

type ApiResponse = {
  status?: number;
  headers?: Record<string, string>;
  body?: unknown;
};

function toQueryString(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return "";
  return trimmed.startsWith("?") ? trimmed : `?${trimmed}`;
}

function ResponseSection({
  title,
  data,
}: {
  title: string;
  data: Record<string, string> | unknown;
}) {
  return (
    <div className="overflow-hidden rounded-md border border-taupe-300">
      <div className="bg-taupe-100 px-4 py-2 text-sm font-medium text-taupe-800">
        {title}
      </div>
      <CodeBlock
        code={JSON.stringify(data, null, 2)}
        language="json"
        className="m-0 overflow-x-auto rounded-b-md border-t border-taupe-200 text-xs"
      />
    </div>
  );
}

export default function Console({
  endpoint,
  methods,
  defaultQuery = "",
  defaultBody = "{}",
}: ConsoleProps) {
  const [queryInput, setQueryInput] = useState(defaultQuery);
  const [bodyInput, setBodyInput] = useState(defaultBody);
  const [method, setMethod] = useState<HttpMethod>(methods[0]);
  const [response, setResponse] = useState<ApiResponse | null>(null);

  const showBody = BODY_METHODS.includes(method);

  const handleFetch = async () => {
    const url = `${endpoint}${toQueryString(queryInput)}`;

    const options: RequestInit = { method };
    if (showBody && bodyInput.trim()) {
      try {
        JSON.parse(bodyInput);
        options.body = bodyInput.trim();
        options.headers = { "Content-Type": "application/json" };
      } catch {
        setResponse({
          status: 0,
          body: { error: "Invalid JSON in request body" },
        });
        return;
      }
    }

    const res = await fetch(url, options);
    const headers = Object.fromEntries(res.headers.entries());
    const text = await res.text();
    let body: unknown = text;
    if (text) {
      try {
        body = JSON.parse(text);
      } catch {
        body = text;
      }
    }
    setResponse({ status: res.status, headers, body });
  };

  const hasHeaders =
    response?.headers && Object.keys(response.headers).length > 0;

  return (
    <div className="space-y-4">
      <div className="flex w-full flex-col gap-3">
        <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
          <div className="flex overflow-hidden rounded-md border border-taupe-300">
            {methods.map((m) => (
              <button
                key={m}
                type="button"
                className={cn(
                  "border-l border-taupe-200 px-4 py-2 font-mono text-sm font-medium transition-colors first:border-l-0",
                  method === m
                    ? "bg-taupe-800 text-white"
                    : "bg-taupe-100 text-taupe-700 hover:bg-taupe-200",
                )}
                onClick={() => setMethod(m)}
              >
                {m}
              </button>
            ))}
          </div>

          <div className="flex min-w-0 flex-1 items-center overflow-hidden rounded-md border border-taupe-300 bg-taupe-100">
            <code className="shrink-0 border-r border-taupe-200 bg-transparent px-3 py-2 font-mono text-sm text-taupe-700">
              {endpoint}
            </code>
            <input
              type="text"
              value={queryInput}
              onChange={(e) => setQueryInput(e.target.value)}
              placeholder={defaultQuery || ""}
              className="min-w-0 flex-1 border-0 bg-taupe-50 px-3 py-2 font-mono text-sm text-taupe-800 placeholder:text-taupe-400 focus:outline-none focus:ring-2 focus:ring-taupe-400 focus:ring-inset"
            />
          </div>

          <button
            type="button"
            onClick={handleFetch}
            className="shrink-0 rounded-md border border-taupe-300 bg-taupe-700 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-taupe-600"
          >
            Send
          </button>
        </div>

        {showBody && (
          <div className="overflow-hidden rounded-md border border-taupe-300">
            <div className="bg-taupe-100 px-4 py-2 text-sm font-medium text-taupe-800">
              Request Body
            </div>
            <textarea
              value={bodyInput}
              onChange={(e) => setBodyInput(e.target.value)}
              placeholder='{"key": "value"}'
              rows={6}
              className="block w-full resize-none rounded-b-md border-0 border-t border-taupe-200 bg-taupe-50 p-3 font-mono text-sm text-taupe-800 placeholder:text-taupe-400 focus:outline-none focus:ring-2 focus:ring-taupe-400 focus:ring-inset"
              spellCheck={false}
            />
          </div>
        )}
      </div>

      {response && (
        <div className="space-y-2">
          <div className="text-sm text-taupe-600">
            Status:{" "}
            <span className="font-mono font-semibold">{response.status}</span>
          </div>
          {hasHeaders && (
            <ResponseSection
              title="Response Headers"
              data={response.headers!}
            />
          )}
          {response.body !== undefined && (
            <ResponseSection title="Response Body" data={response.body} />
          )}
        </div>
      )}
    </div>
  );
}
