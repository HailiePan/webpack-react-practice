/*
 * Author  hailie.pan
 * Date  2023-10-07 17:21:52
 * LastEditors  hailie.pan
 * LastEditTime  2023-10-18 17:15:43
 * Description  file content
 */
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.jsx"),
  output: {
    filename: "[name].[hash:8].js", // 打包的文件名
  },
  resolve: {
    // 配置 extensions 来告诉 webpack 在没有书写后缀时，以什么样的顺序去寻找文件
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".mjs"], // 如果项目中只有 tsx 或 ts 可以将其写在最前面
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },

  module: {
    rules: [
      {
        test: /.(jsx?)|(tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"], ["@babel/preset-react"]],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 25kb
          },
        },
        generator: {
          filename: "assets/imgs/[name].[hash:8][ext]",
        },
        // use: [
        //   {
        //     loader: "url-loader",
        //     options: {
        //       limit: 2000,
        //       // //限制打包图片的大小：
        //       // //如果大于或等于2000Byte，则按照相应的文件名和路径打包图片；如果小于2000Byte，则将图片转成base64格式的字符串。
        //     },
        //   },
        // ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 25kb
          },
        },
        generator: {
          filename: "assets/fonts/[name].[hash:8][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html"), // 使用自定义模板
    }),
    new webpack.ProvidePlugin({
      process: "process",
      api: ["@/services/index", "default"],
      useHistory: ["react-router-dom", "useHistory"],
      moment: "moment",
      React: "react",
    }),
  ],
};
