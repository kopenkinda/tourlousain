module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-typescript/base',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
  },
};
