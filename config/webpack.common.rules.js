const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function getRules(env) {
  const styleLoader = MiniCssExtractPlugin.loader;

  return [
    {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
          options: {
            minimize: true,
          }
        }
      ]
    },
    {
      test: /\.jsx$|\.es6$|\.js$/,
      exclude: /node_modules(?![\\\/]gui-library)/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: false,
          presets: ['@babel/react']
        }
      }
    },
    {
      test: /\.(ttf|eot|woff|woff2)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: './fonts/[name].[contenthash].[ext]',
          },
        }
      ]
    },
    {
      test: /\.(svg|gif|png|jpg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: './images/[name].[contenthash].[ext]',
          },
        }
      ]
    },
    {
      test: /semantic.min.css/, //Don't pass Semantic CSS through less-loader
      use: [
        styleLoader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: env === 'development',
          },
        },
      ],
    },
    {
      test: /^(?!.*?(\.module|semantic\.min)).*\.(less|css)$/, //all *.css and *.less except for *.module.css and *.module.less
      use: [
        styleLoader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: env === 'development'
          }
        },
        'less-loader'
      ]
    },
    {
      test: /\.module\.(less|css)$/, //*.module.css and *.module.less
      use: [
        styleLoader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: env === 'development',
            modules: {
              mode: 'local',
              localIdentName: '[name]-[local]-[hash:base64:5]', //friendly module classNames
            },
          }
        },
        'less-loader'
      ]
    }
  ];
};