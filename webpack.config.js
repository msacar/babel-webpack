const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader :"babel-loader"
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
  ]
};

module.exports = config;