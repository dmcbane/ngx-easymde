module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser', // specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 11, // allow parsing of modern ECMAScript features
    sourceType: 'module', // allows the use of imports
    ecmaFeatures: {
      jsx: true, // allow parsing of JSX
    },
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended', // needs to be the last entry in extends array
  ],
  rules: {
    // Place to specify ESLint rules.  Can be used to overwrite rules specified
    // from the extended configurations.
    // e.g. "@typescript-eslint/explicit-function-return-type": "off"
    '@typescript-eslint/no-var-requires': 0,
  },
};
