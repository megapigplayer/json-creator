import React, { useState } from "react";
import type { FormValue } from "../types/schema";

interface JsonOutputProps {
  data: FormValue | null;
}

export const JsonOutput: React.FC<JsonOutputProps> = ({ data }) => {
  const [copied, setCopied] = useState(false);

  const jsonString = data !== null ? JSON.stringify(data, null, 2) : null;

  const handleCopy = async () => {
    if (!jsonString) return;
    try {
      await navigator.clipboard.writeText(jsonString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const el = document.createElement("textarea");
      el.value = jsonString;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="json-output">
      <div className="panel-header">
        <div className="panel-header-icon">📤</div>
        <h2 className="panel-title">JSON Output</h2>
      </div>
      <p className="panel-subtitle">
        The generated JSON will appear here after you press "Send".
      </p>

      {jsonString ? (
        <div className="json-output-content json-output-visible">
          <div className="json-output-toolbar">
            <span className="json-output-badge">JSON</span>
            <button
              className="json-copy-btn"
              onClick={handleCopy}
              title="Copy to clipboard"
            >
              {copied ? "✓ Copied!" : "📋 Copy"}
            </button>
          </div>
          <pre className="json-output-code">
            <code>{jsonString}</code>
          </pre>
        </div>
      ) : (
        <div className="json-output-empty">
          <div className="json-output-empty-icon">{ }</div>
          <p>Fill out the form and press "Send" to see the output here.</p>
        </div>
      )}
    </div>
  );
};
