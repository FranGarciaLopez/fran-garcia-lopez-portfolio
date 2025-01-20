import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginTailwindcss from "eslint-plugin-tailwindcss";
import js from "@eslint/js";

export default [
  js.configs.recommended, // Recommended JavaScript rules
  eslintPluginAstro.configs.recommended, // Astro recommended rules
  eslintPluginTailwindcss.configs.recommended, // Tailwind CSS linting
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: eslintPluginAstro.parsers.astro,
      parserOptions: {
        extraFileExtensions: [".astro"],
      },
    },
    rules: {
      "astro/no-unused-css-selector": "warn",
    },
  },
  {
    ignores: ["node_modules/", "dist/", "public/"],
  },
];
