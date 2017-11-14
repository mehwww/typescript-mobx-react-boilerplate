module.exports = {
  extends: ['eslint-config-airbnb'],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'react',
    'babel',
  ],
  rules: {
    'no-unused-vars': [ process.env.NODE_ENV === 'production' ? 'error' : 'warn', {'args': 'none'}],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { "allow": ["warn", "error"] }] : 0,
  },
};