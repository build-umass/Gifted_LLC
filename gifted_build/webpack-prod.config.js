const merge = require('webpack-merge');
const common = require('./webpack-common.config.js')

module.exports = merge(common, {
  entry: [
    './src/index.tsx',
  ],
  mode: 'production',
  output: {
    publicPath: '/',
  },
});
