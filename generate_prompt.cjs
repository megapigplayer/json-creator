const fs = require('fs');
const path = require('path');

const filesToInclude = [
  'index.html',
  'package.json',
  'tsconfig.json',
  'vite.config.ts',
  'src/main.tsx',
  'src/App.tsx',
  'src/index.css',
  'src/types/schema.ts',
  'src/utils/deepSet.ts',
  'src/utils/defaultValue.ts',
  'src/components/SchemaEditor.tsx',
  'src/components/FormRenderer.tsx',
  'src/components/JsonOutput.tsx',
  'src/components/ui/Button.tsx',
  'src/components/ui/FieldWrapper.tsx',
  'src/components/fields/StringField.tsx',
  'src/components/fields/NumberField.tsx',
  'src/components/fields/BooleanField.tsx',
  'src/components/fields/EnumField.tsx',
  'src/components/fields/ObjectField.tsx',
  'src/components/fields/ArrayField.tsx'
];

const headerPrompt = `You are an expert AI developer. Your task is to recreate a complete React + Vite + TypeScript application called "Schema Form Generator".

### About the Project
This application dynamically generates interactive forms based on JSON Schema definitions. The user pastes a JSON Schema into an editor, and the app recursively parses it to render the correct form fields (strings, numbers, booleans, nested objects, and dynamic arrays). When the form is submitted, it outputs the collected data as a formatted JSON object. 

The application uses a professional dark mode ("night mode") UI built with raw CSS, and it maintains its own state using immutable deep-set utilities rather than relying on external form libraries.

### What You Need to Know to Create It
- It's a standard Vite React-TS project. No extra dependencies are needed besides the default ones provided by create-vite.
- The core logic lies in FormRenderer.tsx, which acts as a recursive dispatch engine depending on schema.type and schema.enum.
- State management uses a single top-level object in App.tsx and path-based updates (e.g., ["personalInfo", "firstName"]).
- The styling is defined entirely in index.css using CSS variables for a clean, Linear-inspired dark mode.

### How to Parse This Document
Below this introduction, you will find the source code for all the necessary files in the project.
Each file is separated by a delimiter in the following format:
============= FILE: path/to/file =============
[File Content]

Read each file block and create the corresponding file at the specified path relative to the root of the Vite project.

Here are the files:

`;

let output = headerPrompt;

for (const file of filesToInclude) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    output += "============= FILE: " + file + " =============\n";
    output += content;
    output += "\n\n";
  } else {
    console.warn("Warning: " + file + " not found.");
  }
}

fs.writeFileSync(path.join(__dirname, 'ai_prompt.txt'), output, 'utf-8');
console.log('Successfully created ai_prompt.txt');
