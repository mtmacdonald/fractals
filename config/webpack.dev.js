const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const getRules = require('./webpack.common.rules.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', //'inline-source-map' for full source maps (slower)
  devServer: {
    contentBase: path.join(__dirname, '../www'),
    index: 'index.html',
    overlay: true,
    open: true,
    openPage: 'app',
    historyApiFallback: {
      rewrites: [
        //https://github.com/bripkens/connect-history-api-fallback
        //https://webpack.js.org/configuration/dev-server/#devserver-historyapifallback
        {from: /^\/app/, to: '/app.html'}
      ]
    },
    proxy: {
      '/api': 'http://localhost:9000'
    },
  },
  module: {
    rules: getRules('development')
  }
}, {});
