const { resolve } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  context: resolve(__dirname, "src"),
  entry: {
    index: "./index.ts",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".css"],
    alias: {
      "@css": resolve(__dirname, "src/css"),
      "@ts": resolve(__dirname, "src/ts"),
      "@classes": resolve(__dirname, "src/classes"),
    },
  },
  output: {
    filename: "[name].[contenthash].js",
    path: resolve(__dirname, "dist"),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      minify: true,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new TerserWebpackPlugin(),
  ],
  devServer: {
    port: 3000,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
  },
};
