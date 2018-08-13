module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    allowImportExportEverywhere: true,
  },
  settings: {
    'import/resolver': {
      node: {
        // As configured in Webpack, Jest and Babel
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  plugins: ['prettier'],
  rules: {
    'no-use-before-define': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off', // proptypes.object
    'import/prefer-default-export': 'off', // export object with 1 property
    'no-underscore-dangle': 'off',
    'prettier/prettier': 'error',
  },
  globals: {
    ApolloClient: true,
    renderer: true,
  },
};
