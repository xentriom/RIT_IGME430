const { resolve } = require('path');

module.exports = {
  entry: './client/client.js',
  mode: 'development',
  watchOptions: {
    aggregateTimeout: 200,
  },
  output: {
    path: resolve(__dirname, 'hosted'),
    filename: 'bundle.js',
  },
};