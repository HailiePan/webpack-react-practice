/*
 * Author  hailie.pan
 * Date  2023-10-07 17:22:01
 * LastEditors  hailie.pan
 * LastEditTime  2023-10-18 10:21:19
 * Description  file content
 */

const { merge } = require("webpack-merge");
const base = require("./webpack.base.js");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(base, {
  mode: "development", // 开发模式
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
            },
          },
          "less-loader",
        ],
        sideEffects: true,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()], // 添加热更新插件]
  devServer: {
    open: true, // 编译完自动打开浏览器
    port: 8080,
  },
});
