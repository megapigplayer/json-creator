import React from "react";
import type { JsonSchema, FormValue, Path } from "../../types/schema";
import { FormRenderer } from "../FormRenderer";

interface ObjectFieldProps {
  schema: JsonSchema;
  value: Record<string, FormValue>;
  onChange: (path: Path, value: FormValue) => void;
  path: Path;
  label: string;
  depth?: number;
}

export const ObjectField: React.FC<ObjectFieldProps> = ({
  schema,
  value,
  onChange,
  path,
  label,
  depth = 0,
}) => {
  const properties = schema.properties || {};
  const requiredFields = schema.required || [];

  return (
    <div className="object-field" style={{ animationDelay: `${depth * 30}ms` }}>
      {depth > 0 && (
        <div className="object-field-header">
          <div className="object-field-icon">{ }</div>
          <span className="object-field-title">{label}</span>
          {schema.description && (
            <span className="object-field-description">
              {schema.description}
            </span>
          )}
        </div>
      )}
      <div className={depth > 0 ? "object-field-body" : ""}>
        {Object.entries(properties).map(([key, propSchema]) => (
          <FormRenderer
            key={key}
            schema={propSchema}
            value={
              value && typeof value === "object" && !Array.isArray(value)
                ? (value as Record<string, FormValue>)[key]
                : undefined
            }
            onChange={onChange}
            path={[...path, key]}
            fieldName={propSchema.title || key}
            required={requiredFields.includes(key)}
            depth={depth + 1}
          />
        ))}
      </div>
    </div>
  );
};
