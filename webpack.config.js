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
          use: 'css-loader!sass-loader',
        }),
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: extractFont.extract({
          use: 'url-loader?limit=100&name=./fonts/[name].[ext]',
        }),
      }
    ]
  },
  plugins: [
    extractCSS,
    extractFont
  ],
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  }
};
