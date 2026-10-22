import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { 
      js, 
      "@stylistic": stylistic 
    }, 
    extends: ["js/recommended"],
    rules: { 
      "@stylistic/array-bracket-newline": [
        "error", {
          "multiline": true,
          "minItems": 5
        }
      ],
      "@stylistic/array-bracket-spacing": ["error", "never"],
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/arrow-spacing": "error",
      "@stylistic/brace-style": ["error", "stroustrup"],
      "@stylistic/dot-location": ["error", "property"],
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/curly-newline": ["error", "always"],
      "@stylistic/function-call-argument-newline": ["error", "consistent"],
      "@stylistic/function-paren-newline": ["error", { "minItems": 3 }],
      "@stylistic/implicit-arrow-linebreak": ["error", "below"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/no-mixed-operators": "error",
      "@stylistic/no-floating-decimal": "error",
      "@stylistic/nonblock-statement-body-position": ["error", "below"],
      "@stylistic/object-property-newline": "error",
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/spaced-comment": ["error", "always"],
    },
    languageOptions: { globals: globals.browser } 
  },
]);
