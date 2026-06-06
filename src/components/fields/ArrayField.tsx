import React from "react";
import type { JsonSchema, FormValue, Path } from "../../types/schema";
import { FormRenderer } from "../FormRenderer";
import { generateDefault } from "../../utils/defaultValue";
import { Button } from "../ui/Button";

interface ArrayFieldProps {
  schema: JsonSchema;
  value: FormValue[];
  onChange: (path: Path, value: FormValue) => void;
  path: Path;
  label: string;
  required?: boolean;
  depth?: number;
}

export const ArrayField: React.FC<ArrayFieldProps> = ({
  schema,
  value,
  onChange,
  path,
  label,
  required,
  depth = 0,
}) => {
  const items = Array.isArray(value) ? value : [];
  const itemSchema = schema.items || { type: "string" as const };
  const canAdd = schema.maxItems === undefined || items.length < schema.maxItems;
  const canRemove =
    schema.minItems === undefined || items.length > schema.minItems;

  const handleAdd = () => {
    if (!canAdd) return;
    const newItem = generateDefault(itemSchema);
    onChange(path, [...items, newItem]);
  };

  const handleRemove = (index: number) => {
    if (!canRemove) return;
    const newItems = items.filter((_, i) => i !== index);
    onChange(path, newItems);
  };

  return (
    <div className="array-field" style={{ animationDelay: `${depth * 30}ms` }}>
      <div className="array-field-header">
        <div className="array-field-title-row">
          <div className="array-field-icon">[ ]</div>
          <span className="array-field-title">{label}</span>
          {required && <span className="field-required">*</span>}
          <span className="array-field-count">{items.length} items</span>
        </div>
        {schema.description && (
          <p className="field-description">{schema.description}</p>
        )}
      </div>

      <div className="array-field-items">
        {items.map((item, index) => (
          <div key={index} className="array-item">
            <div className="array-item-header">
              <span className="array-item-index">#{index + 1}</span>
              {canRemove && (
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemove(index)}
                  title="Remove item"
                >
                  ✕
                </Button>
              )}
            </div>
            <div className="array-item-body">
              <FormRenderer
                schema={itemSchema}
                value={item}
                onChange={onChange}
                path={[...path, index]}
                fieldName={`Item ${index + 1}`}
                depth={depth + 1}
              />
            </div>
          </div>
        ))}
      </div>

      {canAdd && (
        <Button variant="secondary" size="sm" onClick={handleAdd}>
          + Add Item
        </Button>
      )}
    </div>
  );
};
