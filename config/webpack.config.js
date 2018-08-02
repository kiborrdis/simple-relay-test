const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', { 
          loader: 'css-loader',
          options: {
            modules: true,
            imports: true,
          }
        },
        { 
          loader: 'postcss-loader',
          options: {
            config: {
              path: './config',
            }
          }
        }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
};