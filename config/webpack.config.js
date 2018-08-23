const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      shared: path.resolve('./src/shared'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            imports: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: './config',
            },
          },
        },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};

module.exports.serve = {
  content: [__dirname],
  add: (app) => {
    app.use(convert(history({})));
  },
};
