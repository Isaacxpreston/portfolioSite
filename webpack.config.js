var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client/app');

var config = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    APP_DIR + '/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : path.join(__dirname, 'client/app'),
        loader : 'babel-loader'
      },
      {
        // test: /\.css$/,
        // include: path.join(__dirname, 'client/app'),
        // loaders: ['style-loader', 'css-loader']
        test: /\.scss$/,
        include: path.join(__dirname, 'client/app'),
        loaders: [ 'style', 'css', 'sass' ]
      },
      {
        test: /\.(ttf|svg|eot)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[hash].[ext]',
        },
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      // { test: /\.css$/, loader: "style-loader!css-loader" },
      // {
      //   test: /\.(jpg|png)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[path][name].[hash].[ext]'
      //   }
      // }
    ]
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }
};

module.exports = config;