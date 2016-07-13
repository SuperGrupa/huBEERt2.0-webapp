var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

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
      {test: /\.css$/, loader: 'raw'},
      {test: /\.scss$/, loader: 'raw!sass'},
      {test: /assets\/img\/.*/, loader: 'file-loader?name=/assets/img/[name].[ext]'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.html', '.css', '.scss'],
    alias: {
      "assets/img": path.join(__dirname, "./src/assets/img")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      app: {
        environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
      }
    })
  ],
  devServer: {
    historyApiFallback: true
  }

};
