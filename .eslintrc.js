module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    es6: true,
    browser: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  root: true,
  rules: {
    "react/forbid-prop-types": [1, { forbid: ["any"] }],
    "react/jsx-filename-extension": 0,
    "react/jsx-props-no-spreading": 0,
  },
};
