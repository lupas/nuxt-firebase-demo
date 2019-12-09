module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'eslint:recommended'
  ],
  plugins: ['prettier', 'vuetify'],
  rules: {
    'no-console': 'off',
    'vuetify/no-deprecated-classes': 'error',
    'vuetify/grid-unknown-attributes': 'off',
    'vuetify/no-legacy-grid': 'error',
    'no-unused-vars': 'warn',
    'object-shorthand': 'warn',
    'vue/require-component-is': 'off' // TODO: Doesn't work now, fix later
  }
}
