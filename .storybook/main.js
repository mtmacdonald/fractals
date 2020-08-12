const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getRules = require('../config/webpack.common.rules.js');
const node = require('../config/webpack.common.node.js');
const resolve = require('../config/webpack.common.resolve.js').resolve;

module.exports = {
  stories: ['../src/client/**/*.stories.@(js|jsx|mdx)'],
  addons: [
  ],
  webpackFinal: (config) => {
    const rules = getRules('development');

    config.module.rules = []; //delete default storybook rules because they conflict (postcss causes a conflict)

    rules.forEach((r) => {
      config.module.rules.push(r);
    });

    return {
      ...config,
      module: {
        ...config.module,
        rules: [...rules], //attach our own rules from the application webpack config
      },
      plugins: [
        ...config.plugins,
        new MiniCssExtractPlugin({
          filename: '[name].css',
        }),
      ],
      resolve,
      node,
    };
  },
};
