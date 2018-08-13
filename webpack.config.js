const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/app'),
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /(\.css)$/, use: ['style-loader', 'css-loader']}
    ]
  },
  plugins: [
      new CopyWebpackPlugin([
          { from: 'static' }
      ])
  ]
};
