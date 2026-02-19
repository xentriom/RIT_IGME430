const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundles/[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "@tailwindcss/webpack",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
