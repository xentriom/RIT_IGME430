const { resolve } = require('path');

module.exports = {
  entry: {
    app: './client/maker.jsx',
    login: './client/login.jsx',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  watchOptions: {
    aggregateTimeout: 200,
  },
  output: {
    path: resolve(__dirname, 'hosted'),
    filename: '[name]Bundle.js',
  },
};