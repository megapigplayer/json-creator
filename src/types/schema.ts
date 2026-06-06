export type SchemaType =
  | "string"
  | "number"
  | "integer"
  | "boolean"
  | "object"
  | "array"
  | "null";

export type StringFormat =
  | "date"
  | "date-time"
  | "email"
  | "uri"
  | "color";

export interface JsonSchema {
  type?: SchemaType;
  properties?: Record<string, JsonSchema>;
  items?: JsonSchema;
  required?: string[];
  enum?: (string | number | boolean | null)[];
  title?: string;
  description?: string;
  default?: unknown;
  format?: StringFormat;
  minimum?: number;
  maximum?: number;
  minLength?: number;
  maxLength?: number;
  minItems?: number;
  maxItems?: number;
}

export type FormValue =
  | string
  | number
  | boolean
  | null
  | FormValue[]
  | { [key: string]: FormValue };

export type PathSegment = string | number;
export type Path = PathSegment[];
