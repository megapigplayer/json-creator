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
        <div className="panel-header-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="panel-title">Schema</h2>
      </div>
      <p className="panel-subtitle">
        Define your JSON Schema, then load it to generate the form.
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
            <span className="schema-error-icon">!</span>
            {error}
          </div>
        )}
        <Button onClick={handleLoad} variant="primary" size="md">
          Load Schema
        </Button>
      </div>
    </div>
  );
};
