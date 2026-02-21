import CodeBlock from "./CodeBlock";

type ExampleProps = {
  method: string;
  url: string;
  response: string;
  body?: string;
  responseStatus?: number;
};

export default function Example({
  method,
  url,
  response,
  body,
  responseStatus,
}: ExampleProps) {
  return (
    <div className="overflow-hidden rounded-md border border-taupe-300">
      <div className="bg-taupe-100 px-4 py-2 font-mono text-sm font-medium text-taupe-800">
        {method} {url}
      </div>
      <div className="space-y-0 border-t border-taupe-200 bg-taupe-50">
        {body !== undefined && (
          <>
            <div className="border-b border-taupe-200 bg-taupe-50 px-4 py-2 text-xs font-medium text-taupe-700">
              Request body
            </div>
            <CodeBlock
              code={body}
              className="m-0 overflow-x-auto border-b border-taupe-200 text-xs"
            />
            <div className="border-b border-taupe-200 bg-taupe-50 px-4 py-2 text-xs font-medium text-taupe-700">
              {responseStatus ? `Response (${responseStatus})` : "Response"}
            </div>
          </>
        )}
        <CodeBlock code={response} className="m-0 overflow-x-auto text-xs" />
      </div>
    </div>
  );
}
