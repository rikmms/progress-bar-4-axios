const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-1']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }
      
    ]
  },
  plugins: [new MiniCssExtractPlugin('nprogress.css')],
  externals: [{ axios: 'axios' }]
}
