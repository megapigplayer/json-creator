import React from "react";
import type { JsonSchema, FormValue, Path } from "../types/schema";
import { StringField } from "./fields/StringField";
import { NumberField } from "./fields/NumberField";
import { BooleanField } from "./fields/BooleanField";
import { EnumField } from "./fields/EnumField";
import { ObjectField } from "./fields/ObjectField";
import { ArrayField } from "./fields/ArrayField";

interface FormRendererProps {
  schema: JsonSchema;
  value: FormValue | undefined;
  onChange: (path: Path, value: FormValue) => void;
  path: Path;
  fieldName: string;
  required?: boolean;
  depth?: number;
}

export const FormRenderer: React.FC<FormRendererProps> = ({
  schema,
  value,
  onChange,
  path,
  fieldName,
  required,
  depth = 0,
}) => {
  const label = schema.title || fieldName;

  // Handle enum on any type
  if (schema.enum && schema.enum.length > 0) {
    return (
      <EnumField
        schema={schema}
        value={(value as string | number | boolean | null) ?? schema.enum[0] ?? ""}
        onChange={(v) => onChange(path, v as FormValue)}
        label={label}
        required={required}
        depth={depth}
      />
    );
  }

  switch (schema.type) {
    case "string":
      return (
        <StringField
          schema={schema}
          value={(value as string) ?? ""}
          onChange={(v) => onChange(path, v)}
          label={label}
          required={required}
          depth={depth}
        />
      );

    case "number":
    case "integer":
      return (
        <NumberField
          schema={schema}
          value={(value as number) ?? 0}
          onChange={(v) => onChange(path, v)}
          label={label}
          required={required}
          depth={depth}
        />
      );

    case "boolean":
      return (
        <BooleanField
          schema={schema}
          value={(value as boolean) ?? false}
          onChange={(v) => onChange(path, v)}
          label={label}
          required={required}
          depth={depth}
        />
      );

    case "object":
      return (
        <ObjectField
          schema={schema}
          value={
            (value as Record<string, FormValue>) ??
            ({} as Record<string, FormValue>)
          }
          onChange={onChange}
          path={path}
          label={label}
          depth={depth}
        />
      );

    case "array":
      return (
        <ArrayField
          schema={schema}
          value={(value as FormValue[]) ?? []}
          onChange={onChange}
          path={path}
          label={label}
          required={required}
          depth={depth}
        />
      );

    case "null":
      return null;

    default:
      return (
        <div className="field-wrapper field-unknown">
          <span className="field-label">
            {label}: <em>Unknown type "{schema.type}"</em>
          </span>
        </div>
      );
  }
};
