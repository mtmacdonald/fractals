const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const common = require('./webpack.common.js');
const getRules = require('./webpack.common.rules.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        cache: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: cssnano,
        canPrint: false
      })
    ],
  },
  module: {
    rules: getRules('production')
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
  ],
  resolve: {
    alias: {
      //in the production build, use the production build of seamless-immutable
      'seamless-immutable$': 'seamless-immutable/seamless-immutable.production.min'
    }
  },
});
