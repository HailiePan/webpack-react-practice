/*
 * Author  hailie.pan
 * Date  2023-10-07 17:22:11
 * LastEditors  hailie.pan
 * LastEditTime  2023-10-09 13:37:20
 * Description  file content
 */
const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack.base.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(base, {
  mode: "production", // 生产模式
  devtool: "source-map",
  // 生产环境下才会打包到 dist，生产环境下才需要设置 path 和 clean
  output: {
    path: path.resolve(__dirname, "../dist"), // 打包后的代码放在 dist 目录下
    filename: "[name].[contenthash].js",
    clean: true, // 打包前清除 dist 目录
  },

  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader, // 提取css到单独的文件，使用 MiniCssExtractPlugin.loader 代替 style-loader，
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              // 它可以帮助我们将一些现代的 CSS 特性，转成大多数浏览器认识的 CSS，并且会根据目标浏览器或运行时环境添加所需的 polyfill；
              // 也包括会自动帮助我们添加 autoprefixer
              postcssOptions: {
                plugins: [["postcss-preset-env", {}]],
              },
            },
          },
          "less-loader",
        ],
        // 排除 node_modules 目录
        exclude: /node_modules/,
      },
    ],
  },

  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // `...`,
      new CssMinimizerPlugin({
        //     // 默认开启
        //     // parallel true:  // 多进程并发执行，提升构建速度 。 运行时默认的并发数：os.cpus().length - 1
      }),
    ],
    splitChunks: {
      chunks: "all",
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[hash:8].css", // 将css单独提测出来放在assets/css 下
    }),
  ],
});
