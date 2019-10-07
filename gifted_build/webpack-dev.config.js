const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack-common.config.js');

module.exports = merge(common, {
  entry: [
    './src/index.tsx',
    'webpack-hot-middleware/client?reload=true',
  ],
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});
