"use strict";

module.exports = {
  mode,
  target: "node",
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          babelrcRoots: "./",
        },
      },
    ],
  },
};
