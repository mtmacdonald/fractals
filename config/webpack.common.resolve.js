const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '~common': path.resolve(__dirname, '../src/common/'),
      '~components': path.resolve(__dirname, '../src/client/components'),
      '~client': path.resolve(__dirname, '../src/client/'),
      '~server': path.resolve(__dirname, '../src/server/'),
      '~gui-library': path.resolve(__dirname, '../node_modules/gui-library'),
    }
  }
};
