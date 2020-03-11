module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'react/jsx-filename-extension': [2, { 'extensions': ['.jsx', '.tsx'] }],
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'no-param-reassign': ['error', { 'props': true, 'ignorePropertyModificationsFor': ['acc', 'draft'] }],
    'react/jsx-props-no-spreading': 'off',
    'arrow-parens': 'off',
    'no-trailing-spaces': 'warn',
    'comma-dangle': 'warn',
    'import/extensions': 'off'
  },
  // settings: {
  //   'import/resolver': {
  //     webpack: {
  //       config: {
  //         resolve: {
  //           extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
  //         },
  //       },
  //     },
  //   },
  // }
}
