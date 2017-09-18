const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
          publicPath: '/dist'
        })
      },
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    stats: 'errors-only',
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: false,
    })
  ]
};
