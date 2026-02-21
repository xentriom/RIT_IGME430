import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import "highlight.js/styles/github.min.css";

hljs.registerLanguage("json", json);

type CodeBlockProps = {
  code: string;
  language?: string;
  className?: string;
};

// Uses highlight.js to add syntax highlighting to code blocks
export default function CodeBlock({
  code,
  language = "json",
  className = "",
}: CodeBlockProps) {
  let highlighted: string;
  try {
    highlighted = hljs.highlight(code, { language }).value;
  } catch {
    highlighted = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  return (
    <pre className={className}>
      <code
        className={`hljs language-${language}`}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </pre>
  );
}
