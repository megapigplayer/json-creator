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
        <div className="panel-header-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M15.988 3.012A2.25 2.25 0 0018 5.25v6.5A2.25 2.25 0 0015.75 14H13.5v-3.379a3 3 0 00-.879-2.121l-3.12-3.121a3 3 0 00-1.402-.791 2.252 2.252 0 011.913-1.576A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.75a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v.25h3v-.25z" clipRule="evenodd" />
            <path d="M3.5 9.75a.75.75 0 01.75-.75h2.873l3 3H4.25a.75.75 0 01-.75-.75v-1.5zM3.5 14.25a.75.75 0 01.75-.75h6.623l1.5 1.5H4.25a.75.75 0 01-.75-.75v-1.5z" />
          </svg>
        </div>
        <h2 className="panel-title">Output</h2>
      </div>
      <p className="panel-subtitle">
        The generated JSON result will appear here after submission.
      </p>

      {jsonString ? (
        <div className="json-output-content">
          <div className="json-output-toolbar">
            <span className="json-output-badge">JSON</span>
            <button
              className="json-copy-btn"
              onClick={handleCopy}
              title="Copy to clipboard"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <pre className="json-output-code">
            <code>{jsonString}</code>
          </pre>
        </div>
      ) : (
        <div className="json-output-empty">
          <div className="json-output-empty-icon">{ }</div>
          <p>Submit the form to view the JSON output.</p>
        </div>
      )}
    </div>
  );
};
