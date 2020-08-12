// We use project-wide Babel 7 configuration to allow rules to be applied also the the gui-library node_modules package
// https://babeljs.io/docs/en/config-files#project-wide-configuration
// https://github.com/babel/babel/issues/8672
module.exports = api => {
  api.cache(true);

  const presets = [
    ['@babel/preset-env',
      {
        targets: {
          browsers: ['defaults']
        },
        useBuiltIns: 'usage',
        corejs: 3,
      }]
  ];

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-transform-md-import-to-string',
    ['babel-plugin-webpack-aliases', { config: './config/webpack.common.resolve.js' }]
  ];

  return {
    presets,
    plugins
  };
};