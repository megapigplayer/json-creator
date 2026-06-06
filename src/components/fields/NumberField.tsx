import React from "react";
import type { JsonSchema } from "../../types/schema";
import { FieldWrapper } from "../ui/FieldWrapper";

interface NumberFieldProps {
  schema: JsonSchema;
  value: number;
  onChange: (value: number) => void;
  label: string;
  required?: boolean;
  depth?: number;
}

export const NumberField: React.FC<NumberFieldProps> = ({
  schema,
  value,
  onChange,
  label,
  required,
  depth,
}) => {
  const isInteger = schema.type === "integer";

  return (
    <FieldWrapper
      label={label}
      description={schema.description}
      required={required}
      depth={depth}
    >
      <input
        type="number"
        className="field-input"
        value={value ?? 0}
        onChange={(e) => {
          const val = isInteger
            ? parseInt(e.target.value, 10)
            : parseFloat(e.target.value);
          onChange(isNaN(val) ? 0 : val);
        }}
        step={isInteger ? 1 : "any"}
        min={schema.minimum}
        max={schema.maximum}
        placeholder={schema.title || label}
        required={required}
      />
    </FieldWrapper>
  );
};
