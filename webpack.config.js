const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('./css/[name].css');
const extractFont = new ExtractTextPlugin('./fonts/[name].[ext]');

module.exports = {
  context: __dirname,
  entry: './app/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        use: extractCSS.extract({
          use: 'raw-loader!sass-loader',
        }),
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: extractFont.extract({
          use: 'file-loader?name=./fonts/[name].[ext]',
        }),
      }
    ]
  },
  plugins: [
    extractCSS,
    extractFont
  ],
  resolve: {
    modules: [
      'node_modules'
    ],
    alias: {
      jquery: 'jquery/src/jquery'
    }
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  }
};
