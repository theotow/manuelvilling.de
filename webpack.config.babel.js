const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

const TARGET = process.env.npm_lifecycle_event
const LOCAL_PORT = 3001
const LOCAL_URL = `http://localhost:${LOCAL_PORT}`

const node_modules = path.resolve(__dirname, 'node_modules')
const pathToReact = path.resolve(node_modules, 'react/dist/react.min.js')

const common = {
  context: path.join(__dirname, '/src'),
  entry: {
    index: [
      `webpack-dev-server/client?${LOCAL_URL}`,
      path.resolve(path.join(__dirname, '/src'), 'index.js')
    ]
    // vendor: ['react'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: '[name].js'
  },
  profile: true,
  stats: {
    hash: true,
    version: true,
    timings: true,
    assets: true,
    chunks: true,
    modules: true,
    reasons: true,
    children: true,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: true
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /(\.svg|\.eot|\.woff|\.woff2|\.ttf|\.png)$/,
        loader: 'file-loader'
      },
      {
        test: /(\.css|\.scss)$/,
        loader: 'style-loader!css-loader!sass-loader!postcss-loader'
      }
    ],
    noParse: [pathToReact],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        include: path.join(__dirname, 'src')
      }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
  resolve: {
    extensions: ['', '.js', '.css', '.scss', '.html'],
    root: [
      path.resolve('./src')
    ],
    modulesDirectories: ['node_modules', './src']
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'CNAME', to: 'CNAME', toType: 'file' }
    ]),
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      favicon: 'favicon.png',
      environment: 'dev',
      showErrors: false,
      inject: false
    }),
    new ExtractTextPlugin('[name].css')
  ]
}

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    debug: true,
    devtool: 'eval',
    devServer: {
      port: LOCAL_PORT,
      publicPath: common.output.publicPath,
      hot: true,
      noInfo: true,
      contentBase: 'dist',
      historyApiFallback: true
    },
    eslint: {
      formatter: require('eslint/lib/formatters/stylish'),
      quiet: true
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development')
        },
        '__DEV__': true,
        '__DEVTOOLS__': true
      })
    ]
  })
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    devtool: 'eval',
    entry: {
      index: path.resolve(path.join(__dirname, '/src'), 'index.js')
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].[chunkhash].js',
      publicPath: '/',
      chunkFilename: '[chunkhash].js'
    },
    eslint: {
      formatter: require('eslint/lib/formatters/stylish'),
      failOnWarning: true,
      failOnError: true
    },
    plugins: [
      new ExtractTextPlugin('[name].css', {
        allChunks: true
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: false,
        sourceMap: false,
        compressor: {
          warnings: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        },
        '__DEV__': false,
        '__DEVTOOLS__': false
      }),
      new webpack.NoErrorsPlugin(),
      new CleanWebpackPlugin(['dist'])
    ]
  })
}
