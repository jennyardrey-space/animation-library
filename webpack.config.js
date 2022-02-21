const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].[contenthash].js",
  },
  devServer: {
    contentBase: "./public",
    hot: true,
    host: "127.0.0.1",
    writeToDisk: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "**/*",
          context: "src/assets/",
          globOptions: {
            ignore: ["**/.gitkeep", "**/README.md"],
          },
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = config;
