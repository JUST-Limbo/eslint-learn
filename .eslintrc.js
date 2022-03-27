module.exports = {
  env: {
    browser: true, // 值为true则常见的变量如window,document未声明使用也不会报错
    commonjs: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  globals: {
    "$" : true
  },
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
  }
}
