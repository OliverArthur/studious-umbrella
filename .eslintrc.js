module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 1,
    'no-debugger': 2,
    'vue/attribute-hyphenation': 'error'
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ]
}
