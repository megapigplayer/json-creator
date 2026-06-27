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
      {/* Header */}
      <header className="app-header">
        <div className="app-header-content">
          <div className="app-logo">
            <div className="app-logo-mark">SF</div>
            <h1 className="app-title">Schema Form</h1>
          </div>
          <p className="app-tagline">
            Dynamic form generation from JSON Schema
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
            <div className="panel-header-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" />
              </svg>
            </div>
            <h2 className="panel-title">Form</h2>
          </div>
          <p className="panel-subtitle">
            Fields are generated from your schema definition.
          </p>

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
                  Send
                </Button>
                <Button onClick={handleReset} variant="ghost" size="md">
                  Reset
                </Button>
              </div>
            </div>
          ) : (
            <div className="form-empty">
              <div className="form-empty-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="form-empty-text">
                Load a schema from the left panel to generate your form.
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
