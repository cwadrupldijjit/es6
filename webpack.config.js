var path = require('path')
var appPath = path.resolve(__dirname, 'app', 'app.tsx')
var buildPath = path.resolve(__dirname, 'public', 'js')

module.exports = {

  entry: appPath,
  
  resolve: {
    extensions: ['', 'webpack.js', '.js', '.ts', '.tsx']
  },
  
  // devtools: '',

  output: {
    filename: buildPath + '/bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['ts-loader']
      }
    ]
  }

}
