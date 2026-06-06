import React, { useState } from "react";
import { Button } from "./ui/Button";

const EXAMPLE_SCHEMA = JSON.stringify(
  {
    type: "object",
    properties: {
      personalInfo: {
        type: "object",
        title: "Personal Information",
        description: "Basic personal details",
        properties: {
          firstName: { type: "string", title: "First Name" },
          lastName: { type: "string", title: "Last Name" },
          email: {
            type: "string",
            title: "Email",
            format: "email",
          },
          age: {
            type: "integer",
            title: "Age",
            minimum: 0,
            maximum: 150,
          },
          isActive: { type: "boolean", title: "Active Member" },
        },
        required: ["firstName", "lastName", "email"],
      },
      role: {
        type: "string",
        title: "Role",
        enum: ["Admin", "Editor", "Viewer"],
      },
      skills: {
        type: "array",
        title: "Skills",
        description: "List of skills",
        items: {
          type: "object",
          properties: {
            name: { type: "string", title: "Skill Name" },
            level: {
              type: "number",
              title: "Proficiency (1-10)",
              minimum: 1,
              maximum: 10,
            },
          },
          required: ["name", "level"],
        },
      },
      startDate: {
        type: "string",
        title: "Start Date",
        format: "date",
      },
      favoriteColor: {
        type: "string",
        title: "Favorite Color",
        format: "color",
      },
    },
    required: ["personalInfo", "role"],
  },
  null,
  2
);

interface SchemaEditorProps {
  onSchemaChange: (schema: object) => void;
}

export const SchemaEditor: React.FC<SchemaEditorProps> = ({
  onSchemaChange,
}) => {
  const [schemaText, setSchemaText] = useState(EXAMPLE_SCHEMA);
  const [error, setError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(true);

  const handleLoad = () => {
    try {
      const parsed = JSON.parse(schemaText);
      setError(null);
      setIsValid(true);
      onSchemaChange(parsed);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Invalid JSON";
      setError(msg);
      setIsValid(false);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSchemaText(e.target.value);
    if (error) {
      try {
        JSON.parse(e.target.value);
        setError(null);
        setIsValid(true);
      } catch {
        // still invalid, keep error
      }
    }
  };

  return (
    <div className="schema-editor">
      <div className="panel-header">
        <div className="panel-header-icon">📐</div>
        <h2 className="panel-title">Schema Definition</h2>
      </div>
      <p className="panel-subtitle">
        Paste or edit your JSON Schema below, then click "Load Schema" to
        generate the form.
      </p>
      <div className="schema-editor-content">
        <textarea
          className={`schema-textarea ${!isValid ? "schema-textarea-error" : ""}`}
          value={schemaText}
          onChange={handleTextChange}
          spellCheck={false}
        />
        {error && (
          <div className="schema-error">
            <span className="schema-error-icon">⚠</span>
            {error}
          </div>
        )}
        <Button onClick={handleLoad} variant="primary" size="md">
          ⚡ Load Schema
        </Button>
      </div>
    </div>
  );
};
