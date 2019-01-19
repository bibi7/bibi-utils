const { resolve } = require('path')
const dev = Boolean(process.env.WEBPACK_SERVE)
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: dev ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve(__dirname, '../src')]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  devServer: {
    contentBase: './dist',
    port: 8080
  }
}
