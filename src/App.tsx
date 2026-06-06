import { useState, useCallback } from "react";
import type { JsonSchema, FormValue, Path } from "./types/schema";
import { deepSet } from "./utils/deepSet";
import { generateDefault } from "./utils/defaultValue";
import { SchemaEditor } from "./components/SchemaEditor";
import { FormRenderer } from "./components/FormRenderer";
import { JsonOutput } from "./components/JsonOutput";
import { Button } from "./components/ui/Button";

function App() {
  const [schema, setSchema] = useState<JsonSchema | null>(null);
  const [formData, setFormData] = useState<FormValue>({});
  const [submittedData, setSubmittedData] = useState<FormValue | null>(null);
  const [formKey, setFormKey] = useState(0);

  const handleSchemaChange = useCallback((newSchema: JsonSchema) => {
    setSchema(newSchema);
    const defaults = generateDefault(newSchema);
    setFormData(defaults);
    setSubmittedData(null);
    setFormKey((k) => k + 1);
  }, []);

  const handleFieldChange = useCallback((path: Path, value: FormValue) => {
    setFormData((prev) => deepSet(prev, path, value));
  }, []);

  const handleSubmit = () => {
    setSubmittedData(formData);
  };

  const handleReset = () => {
    if (schema) {
      const defaults = generateDefault(schema);
      setFormData(defaults);
      setSubmittedData(null);
      setFormKey((k) => k + 1);
    }
  };

  return (
    <div className="app">
      {/* Background decorations */}
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />
      <div className="bg-glow bg-glow-3" />

      {/* Header */}
      <header className="app-header">
        <div className="app-header-content">
          <div className="app-logo">
            <span className="app-logo-icon">⚡</span>
            <h1 className="app-title">Schema Form Generator</h1>
          </div>
          <p className="app-tagline">
            Paste a JSON Schema → Get a dynamic form → Export JSON
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="app-main">
        {/* Left panel: Schema Editor */}
        <section className="panel panel-schema">
          <SchemaEditor onSchemaChange={handleSchemaChange} />
        </section>

        {/* Center panel: Dynamic Form */}
        <section className="panel panel-form">
          <div className="panel-header">
            <div className="panel-header-icon">📝</div>
            <h2 className="panel-title">Dynamic Form</h2>
          </div>

          {schema ? (
            <div className="form-container" key={formKey}>
              <div className="form-fields">
                <FormRenderer
                  schema={schema}
                  value={formData}
                  onChange={handleFieldChange}
                  path={[]}
                  fieldName="Root"
                  depth={0}
                />
              </div>

              <div className="form-actions">
                <Button onClick={handleSubmit} variant="primary" size="lg">
                  🚀 Send
                </Button>
                <Button onClick={handleReset} variant="ghost" size="md">
                  ↺ Reset
                </Button>
              </div>
            </div>
          ) : (
            <div className="form-empty">
              <div className="form-empty-icon">📐</div>
              <p className="form-empty-text">
                Load a schema from the left panel to generate a form.
              </p>
            </div>
          )}
        </section>

        {/* Right panel: JSON Output */}
        <section className="panel panel-output">
          <JsonOutput data={submittedData} />
        </section>
      </main>
    </div>
  );
}

export default App;
