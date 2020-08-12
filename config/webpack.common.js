const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const node = require('./webpack.common.node.js');
const resolve = require('../config/webpack.common.resolve.js').resolve;
const {version} = require('../package.json');

module.exports = {
  resolve,
  entry: {
    app: './src/client/app.jsx',
  },
  output: {
    path: path.resolve(__dirname, '../www'),
    publicPath: '/',
    // filename: 'app.js'
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/client/html/app.html',
      filename: './app.html',
      //favicon: 'src/client/html/favicon.png',
      chunks: ['app'],
      cache: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new webpack.DefinePlugin({
      __VERSION__:  '\'' + version + '\''
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name() {
            return 'vendors';
          },
        },
      },
    },
  },
  node
};
