const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require("webpack").container

module.exports = {
  mode: "development",
  devServer: {
    port: 8082
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      shared: ['@faker-js/faker'],
      exposes: {
        './CartShow': "./src/bootstrap"
      }
    })
  ]
}