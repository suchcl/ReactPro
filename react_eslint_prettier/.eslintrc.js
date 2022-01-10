module.exports = {
  env: {
    //node环境，可以支持node环境语法
    node: true,
    // 开启es6语法
    es6: true,
    // 支持浏览器环境语法、变量
    browser: true,
  },
  plugins: ["prettier"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  // parser: "babel-eslint",
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    allowImportExportEverywhere: true,
    ecmaFeatrues: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  rules: {
    "prettier/prettier": "error",
    // semi: "off",
    "comma-dangle": [2, "never"],
  },
};
