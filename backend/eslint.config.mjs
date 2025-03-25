import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser
      }
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: pluginReact
    },
    rules: {
      // aquí puedes añadir reglas personalizadas
    }
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  pluginReact.configs.recommended,
]);

