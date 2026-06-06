import React from "react";
import type { JsonSchema } from "../../types/schema";
import { FieldWrapper } from "../ui/FieldWrapper";

interface StringFieldProps {
  schema: JsonSchema;
  value: string;
  onChange: (value: string) => void;
  label: string;
  required?: boolean;
  depth?: number;
}

export const StringField: React.FC<StringFieldProps> = ({
  schema,
  value,
  onChange,
  label,
  required,
  depth,
}) => {
  const getInputType = (): string => {
    switch (schema.format) {
      case "date":
        return "date";
      case "date-time":
        return "datetime-local";
      case "email":
        return "email";
      case "uri":
        return "url";
      case "color":
        return "color";
      default:
        return "text";
    }
  };

  const inputType = getInputType();
  const isColor = schema.format === "color";

  return (
    <FieldWrapper
      label={label}
      description={schema.description}
      required={required}
      depth={depth}
    >
      <div className={isColor ? "color-input-wrapper" : ""}>
        <input
          type={inputType}
          className={`field-input ${isColor ? "field-input-color" : ""}`}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={schema.title || label}
          minLength={schema.minLength}
          maxLength={schema.maxLength}
          required={required}
        />
        {isColor && (
          <span className="color-preview-label">{value || "#000000"}</span>
        )}
      </div>
    </FieldWrapper>
  );
};
