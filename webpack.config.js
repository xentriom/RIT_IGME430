const { resolve } = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    web: "./client/pages/Web/main.tsx",
    premium: "./client/pages/Premium/main.tsx",
    profile: "./client/pages/Profile/main.tsx",
    auth: "./client/pages/Auth/main.tsx",
    post: "./client/pages/Post/main.tsx",
    pwa: "./client/pwa/register.ts",
  },
  devtool: "cheap-module-source-map",
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]Bundle.css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "client/pwa/manifest.json", to: "manifest.json" },
        { from: "client/pwa/sw.js", to: "sw.js" },
      ],
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
        use: [MiniCssExtractPlugin.loader, "css-loader", "@tailwindcss/webpack"],
      },
    ],
  },
  watchOptions: {
    aggregateTimeout: 200,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          type: "css/mini-extract",
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  output: {
    path: resolve(__dirname, "public"),
    filename: "[name]Bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
