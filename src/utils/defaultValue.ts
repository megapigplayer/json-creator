import type { FormValue, JsonSchema } from "../types/schema";

export function generateDefault(schema: JsonSchema): FormValue {
  if (schema.default !== undefined) {
    return schema.default as FormValue;
  }

  if (schema.enum && schema.enum.length > 0) {
    return schema.enum[0] as FormValue;
  }

  switch (schema.type) {
    case "string":
      return schema.format === "color" ? "#6366f1" : "";

    case "number":
    case "integer":
      return schema.minimum ?? 0;

    case "boolean":
      return false;

    case "object": {
      const obj: Record<string, FormValue> = {};
      if (schema.properties) {
        for (const [key, propSchema] of Object.entries(schema.properties)) {
          obj[key] = generateDefault(propSchema);
        }
      }
      return obj;
    }

    case "array": {
      const minItems = schema.minItems ?? 0;
      if (minItems > 0 && schema.items) {
        return Array.from({ length: minItems }, () =>
          generateDefault(schema.items!)
        );
      }
      return [];
    }

    case "null":
      return null;

    default:
      return "";
  }
}
