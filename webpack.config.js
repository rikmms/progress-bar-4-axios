const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: { minimize: true }}
          ]
        })
      }
    ]
  },
  plugins: [ new ExtractTextPlugin('nprogress.css'), new UglifyJsPlugin() ],
  externals: [{ axios: 'axios' }]
}