const { resolve } = require("path");

module.exports = {
  entry: {
    home: "./client/home.tsx",
    docs: "./client/docs.tsx",
  },
  mode: "development",
  watchOptions: {
    aggregateTimeout: 200,
  },
  output: {
    path: resolve(__dirname, "hosted"),
    filename: "bundles/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
