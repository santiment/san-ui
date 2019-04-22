const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: 'production',

  entry: path.resolve(__dirname, 'src/'),

  output: {
    path: path.resolve(__dirname, 'lib-build/'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs'
  },

  stats: {
    colors: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(css|sass|scss)$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sass&localIdentName=[name]__[local]--[hash:base64:5]',
          'sass-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          keep_fnames: true
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
}
