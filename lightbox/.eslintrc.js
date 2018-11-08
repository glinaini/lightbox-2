module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/strongly-recommended', '@vue/prettier'],
  plugins: ['vue', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 'error',
    semi: ['error', 'never']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
