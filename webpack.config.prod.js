const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    path.join(process.cwd(), "./index.js"),
  ],
  output: {
    filename: "bundle.min.js",
    path: path.resolve(__dirname, "./dist")
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? "warning" : false
  },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".jsx", ".json"],
    alias: {
      react: path.resolve(__dirname, "node_modules", "react"),
      components: path.resolve(__dirname, "src/components"),
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-react",
            "@babel/preset-env",
          ]
        }
      },
      {
        test: /\.(css|less)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      // filename: "./index.html",
      favicon: './public/favicon.ico'
    })
  ]
};
