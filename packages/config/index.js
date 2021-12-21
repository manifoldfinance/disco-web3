
'use strict';
module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: ES2019,
    sourceType: 'script',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'always',
      },
    ],
    'max-len': [2, 140, 4],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'prefer-rest-params': 0,
    'comma-dangle': [
      2,
      {
        arrays: 'always',
        objects: 'always',
        imports: 'always',
        exports: 'always',
        functions: 'always',
      },
    ],
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'import/order': 0,
  },
}