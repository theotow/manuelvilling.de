module.exports = {
  output: {
    libraryTarget: 'commonjs2'
  },
  externals: {
    'cheerio': 'window',
    'react-dom': true,
    'react-dom/server': true,
    'react-addons-test-utils': true
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /(\.svg|\.eot|\.woff|\.woff2|\.ttf|\.png)$/,
        loader: 'file-loader'
      },
      {
        test: /(\.css|\.scss)$/,
        loader: 'style-loader!css-loader!sass-loader!postcss-loader'
      }
    ]
  }
}
