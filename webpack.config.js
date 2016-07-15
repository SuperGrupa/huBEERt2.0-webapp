var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

environment = process.env.APP_ENVIRONMENT || 'development';

module.exports = {

  entry: './src/main.ts',
  output: {
    path: './dist',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.scss$/, loader: 'raw!sass'},
      {test: /assets\/img\/.*/, loader: 'file-loader?name=/assets/img/[name].[ext]'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.html', '.css', '.scss'],
    alias: {
      "assets/img": path.join(__dirname, "./src/assets/img"),
      "config":     path.join(__dirname, './src/config', environment)
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      app: {
        environment: JSON.stringify(environment)
      }
    })
  ],
  devServer: {
    historyApiFallback: true
  }

};
