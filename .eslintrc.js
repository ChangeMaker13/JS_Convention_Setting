module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    "ecmaVersion": 2018,
  },
  extends: [
    "eslint:recommended"
  ],
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    "quotes": ["error", "double", {"allowTemplateLiterals": true}],
    "indent": "off",
    "semi": "off",
    "max-len": "off",
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
};
