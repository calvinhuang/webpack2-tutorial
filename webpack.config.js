const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('./css/[name].css');

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
      }
    ]
  },
  plugins: [
    extractCSS
  ],
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  }
};
