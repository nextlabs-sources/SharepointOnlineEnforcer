module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': ['error', 'never'],

    // #region Override
    'class-methods-use-this': 'warn',
    'no-param-reassign': 'warn',
    'no-restricted-syntax': ['off', 'ForOfStatement'],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'import/prefer-default-export': 'warn',
    '@typescript-eslint/unbound-method': [
      'error',
      {
        ignoreStatic: true,
      },
    ],
    // #endregion
  },
  overrides: [
    {
      files: ['./*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['**/*.test.ts'],
      rules: {
        'no-underscore-dangle': 'off',
      },
    },
  ],
};
