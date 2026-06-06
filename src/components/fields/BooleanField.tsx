import React from "react";
import type { JsonSchema } from "../../types/schema";
import { FieldWrapper } from "../ui/FieldWrapper";

interface BooleanFieldProps {
  schema: JsonSchema;
  value: boolean;
  onChange: (value: boolean) => void;
  label: string;
  required?: boolean;
  depth?: number;
}

export const BooleanField: React.FC<BooleanFieldProps> = ({
  schema,
  value,
  onChange,
  label,
  required,
  depth,
}) => {
  return (
    <FieldWrapper
      label={label}
      description={schema.description}
      required={required}
      depth={depth}
    >
      <div
        className={`toggle-switch ${value ? "toggle-on" : "toggle-off"}`}
        onClick={() => onChange(!value)}
        role="switch"
        aria-checked={value}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            onChange(!value);
          }
        }}
      >
        <div className="toggle-track">
          <div className="toggle-thumb" />
        </div>
        <span className="toggle-label">{value ? "True" : "False"}</span>
      </div>
    </FieldWrapper>
  );
};
