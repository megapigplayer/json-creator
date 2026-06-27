# Schema Form Generator — Schema Reference

This project turns a **JSON Schema** into an interactive form. Paste your schema into the **Schema** panel, click **Load Schema**, fill out the generated form, and click **Send** to export the result as JSON.

The app supports a **focused subset** of JSON Schema — not every keyword from the full JSON Schema spec. This document lists everything that works in this project.

---

## How it works

1. The root schema should usually be an **object** with `properties`.
2. `FormRenderer` reads each field and picks a UI control based on `type`, `enum`, and `format`.
3. If a field has `enum`, it always renders as a **dropdown**, regardless of `type`.
4. Nested objects and arrays are handled **recursively**.
5. When the schema loads, **default values** are generated automatically (see [Default values](#default-values)).

---

## Root schema structure

Every form starts from a top-level object:

```json
{
  "type": "object",
  "properties": {
    "fieldName": { "type": "string", "title": "Field Label" }
  },
  "required": ["fieldName"]
}
```

| Keyword | Purpose |
|---------|---------|
| `type` | Must be `"object"` at the root for a normal form |
| `properties` | Map of field names → field schemas |
| `required` | Array of property names that show a required marker (`*`) |
| `title` | Optional label for the root (rarely shown at depth 0) |
| `description` | Optional help text |

---

## Common field metadata

These keywords work on **any** field type:

| Keyword | Type | Description |
|---------|------|-------------|
| `title` | string | Label shown in the form. Falls back to the property name. |
| `description` | string | Help text shown below the label. |
| `required` | string[] | On **objects only** — marks child fields as required. |
| `default` | any | Initial value when the schema loads (overrides auto-generated defaults). |
| `enum` | array | Fixed list of allowed values → renders a **select dropdown**. |

---

## Field types

Supported `type` values (defined in `src/types/schema.ts`):

| Type | UI control | Example |
|------|------------|---------|
| `"string"` | Text input (or specialized input via `format`) | Name, email, date |
| `"number"` | Number input (decimals allowed) | Price, rating |
| `"integer"` | Number input (whole numbers only, `step=1`) | Age, quantity |
| `"boolean"` | Toggle switch (True / False) | Active, subscribed |
| `"object"` | Grouped nested fields | Address, personal info |
| `"array"` | Dynamic list with Add / Remove | Skills, phone numbers |
| `"null"` | Renders nothing | Rarely used |

Unknown types show: *Unknown type "…"*.

---

## 1. String fields

Basic text input:

```json
"firstName": {
  "type": "string",
  "title": "First Name"
}
```

### String formats

Use `format` to change the HTML input type:

| `format` | Input type | Example value |
|----------|------------|---------------|
| `"date"` | Date picker | `"2026-06-28"` |
| `"date-time"` | Date + time picker | `"2026-06-28T14:30"` |
| `"email"` | Email input | `"user@example.com"` |
| `"uri"` | URL input | `"https://example.com"` |
| `"color"` | Color picker + hex preview | `"#6366f1"` |

```json
"email": {
  "type": "string",
  "title": "Email",
  "format": "email"
},
"startDate": {
  "type": "string",
  "title": "Start Date",
  "format": "date"
},
"favoriteColor": {
  "type": "string",
  "title": "Favorite Color",
  "format": "color"
}
```

### String constraints

| Keyword | Effect |
|---------|--------|
| `minLength` | HTML `minLength` on the input |
| `maxLength` | HTML `maxLength` on the input |

```json
"username": {
  "type": "string",
  "title": "Username",
  "minLength": 3,
  "maxLength": 20
}
```

---

## 2. Number and integer fields

### Number (decimals)

```json
"price": {
  "type": "number",
  "title": "Price",
  "minimum": 0,
  "maximum": 9999.99
}
```

### Integer (whole numbers)

```json
"age": {
  "type": "integer",
  "title": "Age",
  "minimum": 0,
  "maximum": 150
}
```

| Keyword | Effect |
|---------|--------|
| `minimum` | HTML `min` on the number input |
| `maximum` | HTML `max` on the number input |

---

## 3. Boolean fields

Renders a clickable toggle:

```json
"isActive": {
  "type": "boolean",
  "title": "Active Member"
}
```

Default value: `false`.

---

## 4. Enum (dropdown / select)

When `enum` is present, the field becomes a **dropdown**, no matter the underlying `type`. This is checked **before** `type` in `FormRenderer`.

### String enum (most common)

```json
"role": {
  "type": "string",
  "title": "Role",
  "enum": ["Admin", "Editor", "Viewer"]
}
```

### Number enum

```json
"priority": {
  "type": "number",
  "title": "Priority",
  "enum": [1, 2, 3]
}
```

### Boolean enum

```json
"confirmed": {
  "type": "boolean",
  "title": "Confirmed",
  "enum": [true, false]
}
```

### Null in enum

```json
"optionalChoice": {
  "type": "string",
  "title": "Optional Choice",
  "enum": [null, "Yes", "No"]
}
```

Default: first value in `enum`.

---

## 5. Object fields (nested groups)

Group related fields under one object. Nested objects get a header with `{}` icon, title, and description.

```json
"personalInfo": {
  "type": "object",
  "title": "Personal Information",
  "description": "Basic personal details",
  "properties": {
    "firstName": { "type": "string", "title": "First Name" },
    "lastName": { "type": "string", "title": "Last Name" },
    "email": {
      "type": "string",
      "title": "Email",
      "format": "email"
    }
  },
  "required": ["firstName", "lastName", "email"]
}
```

Objects can nest arbitrarily:

```json
"address": {
  "type": "object",
  "title": "Address",
  "properties": {
    "street": { "type": "string", "title": "Street" },
    "city": { "type": "string", "title": "City" },
    "country": {
      "type": "object",
      "title": "Country",
      "properties": {
        "code": { "type": "string", "title": "Country Code" },
        "name": { "type": "string", "title": "Country Name" }
      }
    }
  }
}
```

---

## 6. Array fields (dynamic lists)

Arrays render a list with **Add item** / **Remove** buttons. Each item follows the schema in `items`.

### Array of objects

```json
"skills": {
  "type": "array",
  "title": "Skills",
  "description": "List of skills",
  "items": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "title": "Skill Name"
      },
      "level": {
        "type": "number",
        "title": "Proficiency (1-10)",
        "minimum": 1,
        "maximum": 10
      }
    },
    "required": ["name", "level"]
  }
}
```

### Array of strings

```json
"tags": {
  "type": "array",
  "title": "Tags",
  "items": {
    "type": "string",
    "title": "Tag"
  }
}
```

### Array of numbers

```json
"scores": {
  "type": "array",
  "title": "Scores",
  "items": {
    "type": "number",
    "title": "Score",
    "minimum": 0,
    "maximum": 100
  }
}
```

### Array constraints

| Keyword | Effect |
|---------|--------|
| `minItems` | Minimum number of items; blocks Remove when at minimum; pre-fills items on load if `minItems > 0` |
| `maxItems` | Maximum number of items; hides Add when at maximum |

```json
"phoneNumbers": {
  "type": "array",
  "title": "Phone Numbers",
  "minItems": 1,
  "maxItems": 3,
  "items": {
    "type": "string",
    "title": "Phone",
    "format": "uri"
  }
}
```

If `items` is omitted, items default to `{ "type": "string" }`.

---

## Default values

When you load a schema, initial form data is built by `generateDefault()`:

| Type / case | Default |
|-------------|---------|
| `default` keyword set | Uses that value |
| `enum` present | First enum value |
| `string` | `""` (empty string) |
| `string` + `format: "color"` | `"#6366f1"` |
| `number` / `integer` | `minimum` if set, otherwise `0` |
| `boolean` | `false` |
| `object` | Object with defaults for each property |
| `array` | `[]`, or `minItems` copies of item defaults if `minItems > 0` |
| `null` | `null` |

Example with explicit default:

```json
"status": {
  "type": "string",
  "title": "Status",
  "default": "Draft"
}
```

---

## Full example schema

This matches the built-in example in the Schema editor:

```json
{
  "type": "object",
  "properties": {
    "personalInfo": {
      "type": "object",
      "title": "Personal Information",
      "description": "Basic personal details",
      "properties": {
        "firstName": { "type": "string", "title": "First Name" },
        "lastName": { "type": "string", "title": "Last Name" },
        "email": {
          "type": "string",
          "title": "Email",
          "format": "email"
        },
        "age": {
          "type": "integer",
          "title": "Age",
          "minimum": 0,
          "maximum": 150
        },
        "isActive": { "type": "boolean", "title": "Active Member" }
      },
      "required": ["firstName", "lastName", "email"]
    },
    "role": {
      "type": "string",
      "title": "Role",
      "enum": ["Admin", "Editor", "Viewer"]
    },
    "skills": {
      "type": "array",
      "title": "Skills",
      "description": "List of skills",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string", "title": "Skill Name" },
          "level": {
            "type": "number",
            "title": "Proficiency (1-10)",
            "minimum": 1,
            "maximum": 10
          }
        },
        "required": ["name", "level"]
      }
    },
    "startDate": {
      "type": "string",
      "title": "Start Date",
      "format": "date"
    },
    "favoriteColor": {
      "type": "string",
      "title": "Favorite Color",
      "format": "color"
    }
  },
  "required": ["personalInfo", "role"]
}
```

---

## Quick reference — all supported keywords

| Keyword | Used on | Purpose |
|---------|---------|---------|
| `type` | all | Field data type |
| `properties` | object | Child fields |
| `items` | array | Schema for each list item |
| `required` | object | Required child field names |
| `enum` | any | Fixed options → dropdown |
| `title` | any | Field label |
| `description` | any | Help text |
| `default` | any | Initial value |
| `format` | string | Specialized input (date, email, etc.) |
| `minimum` | number, integer | Min value |
| `maximum` | number, integer | Max value |
| `minLength` | string | Min character length |
| `maxLength` | string | Max character length |
| `minItems` | array | Min list length |
| `maxItems` | array | Max list length |

---

## Not supported (yet)

These common JSON Schema features are **not** implemented in this project:

- `oneOf`, `anyOf`, `allOf` — conditional / combined schemas
- `const` — single fixed value (use `enum` with one item instead)
- `pattern` — regex validation on strings
- `$ref` — schema references
- `additionalProperties` — dynamic keys on objects
- `uniqueItems` — array uniqueness
- `multipleOf`, `exclusiveMinimum`, `exclusiveMaximum`
- Server-side or runtime JSON Schema validation (only HTML5 hints like `min`, `max`, `required`)

Using unsupported keywords is usually ignored; they won't break parsing, but they won't affect the UI.

---

## Tips

1. Always use valid JSON (double quotes, no trailing commas).
2. Use `title` for human-readable labels; property keys can stay camelCase.
3. Put `enum` on the field where you want a dropdown — it overrides the normal type UI.
4. Use `minItems` / `maxItems` to control dynamic array size.
5. Click **Reset** to restore defaults after editing the form.
6. Click **Send** to see the collected JSON in the Output panel.
