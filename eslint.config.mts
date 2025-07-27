import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      // catch interface↔interface (and all other) redeclarations
      "@typescript-eslint/no-redeclare": [
        "error",
        {
          // by default `ignoreDeclarationMerge: true` lets interfaces with same name merge
          // so we turn that off
          ignoreDeclarationMerge: false
        }
      ],
      "@typescript-eslint/no-unsafe-declaration-merging": "error",
    },
  }
);
