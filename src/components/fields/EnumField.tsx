import React from "react";
import type { JsonSchema } from "../../types/schema";
import { FieldWrapper } from "../ui/FieldWrapper";

interface EnumFieldProps {
  schema: JsonSchema;
  value: string | number | boolean | null;
  onChange: (value: string | number | boolean | null) => void;
  label: string;
  required?: boolean;
  depth?: number;
}

export const EnumField: React.FC<EnumFieldProps> = ({
  schema,
  value,
  onChange,
  label,
  required,
  depth,
}) => {
  const enumValues = schema.enum || [];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const raw = e.target.value;
    // try to parse back to original type
    if (raw === "null") {
      onChange(null);
    } else if (raw === "true") {
      onChange(true);
    } else if (raw === "false") {
      onChange(false);
    } else if (!isNaN(Number(raw)) && raw !== "") {
      onChange(Number(raw));
    } else {
      onChange(raw);
    }
  };

  return (
    <FieldWrapper
      label={label}
      description={schema.description}
      required={required}
      depth={depth}
    >
      <select
        className="field-input field-select"
        value={String(value ?? "")}
        onChange={handleChange}
        required={required}
      >
        <option value="" disabled>
          Select an option...
        </option>
        {enumValues.map((opt, i) => (
          <option key={i} value={String(opt)}>
            {String(opt)}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
};
