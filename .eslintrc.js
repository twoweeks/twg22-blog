/**
 * @type {import('eslint').Linter.Config}
 */

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
};
