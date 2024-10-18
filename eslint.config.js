import stylisticJs from "@stylistic/eslint-plugin-js";

export default [
  {
    plugins: {
      "@stylistic/js": stylisticJs
    },

    rules: {
      "@stylistic/js/semi": ["warn", "always"],
      "@stylistic/js/quotes": ["warn", "double", { "allowTemplateLiterals": true }],
    }
  }
];