import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import { configs as tsConfigs } from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { "@eslint/js": js, "@typescript-eslint": tsConfigs }, extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"] },
  pluginReact.configs.flat.recommended,
]);
