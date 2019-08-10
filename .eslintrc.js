module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  extends: ["airbnb"],
  parser: "@typescript-eslint/parser",
  extends: ["airbnb", "prettier/@typescript-eslint"],
  plugins: [
    "@typescript-eslint",
    "import",
    "jest",
    "jsx-a11y",
    "prettier/recommended",
    "react-hooks",
    "react"
  ],
  rules: {
    "@typescript-eslint/rule-name": "error"
  }
};
