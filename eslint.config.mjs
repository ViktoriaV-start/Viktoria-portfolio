import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.jsx-runtime.recommended,

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      quotes: ["error", "single"],
      indent: ['error', 2],
      semi: ['error', 'always', { 'omitLastInOneLineBlock': false}],
    }
  }
];
