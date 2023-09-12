module.exports = {
  env: {
    es6: true,
    node: true,
    "jest/globals": true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ["eslint:recommended"],
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    quotes: ["error", "double", {allowTemplateLiterals: true}],
    indent: "off",
    semi: "off",
    "max-len": "off",
    "no-unused-vars": ["error", {args: "none"}],
  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {},
  plugins: ["jest"],
};
