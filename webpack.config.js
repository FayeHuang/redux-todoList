var path = require('path');
var webpack = require('webpack');

const PATHS = {
  src: path.join(__dirname, 'assets/src'),
  build: path.join(__dirname, 'assets/build')
};

module.exports = {
  // Entry accepts a path or an object of entries.
  // Thq:e build chapter contains an example of the latter.
  entry: [ 
    PATHS.src + '/index.jsx'
  ],

  output: {
    path: PATHS.build,
    filename: 'main.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015','stage-0']
        }
      } // to transform JSX into JS
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },

  devtool: 'eval-source-map',
  devServer: {
    contentBase: PATHS.build,

    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only',

    // Parse host and port from env so this is easy to customize.
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8080,
    
    // proxy ajax api
    proxy: {
      '/api/*': {
        target: process.env.MOCK_SERVER || 'http://127.0.0.1:8888',
        secure: false
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};