const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'cookie-storage.js',
    library: 'cookie-storage.js',
    libraryTarget: 'umd'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    ]
  },
  plugins: [new UglifyJsPlugin()]
}
