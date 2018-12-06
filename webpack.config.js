const path = require('path')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  // entry: ['regenerator-runtime/runtime.js', pathsConfig.appRoot],
  entry: path.resolve(__dirname, 'src/'),

  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'index.js',
    libraryTarget: 'commonjs-module'
    // chunkFilename: '[name].js'
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
        test: /\.(sass|scss)$/,
        loaders: ['style-loader', 'css-loader?modules&sass', 'sass-loader']
      }
    ]
  }

  // optimization: {
  // minimizer: [new UglifyJsPlugin()]
  // }
}
