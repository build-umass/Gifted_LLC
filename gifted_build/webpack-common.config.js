const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(s*)css?$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(pdf|gif|png|jpe?g|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        }
      ] 
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      showErrors: true,
      path: path.join(__dirname, '../dist/'),
    })
  ],
};
