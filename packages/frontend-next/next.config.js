const withTM = require('next-transpile-modules');

module.exports = withTM({
  target: 'serverless',
  transpileModules: [],
  webpack: config => {
    config.module.rules.push({
      test: /\.woff|\.svg|\.png/,
      use: [
        {
          loader: 'url-loader',
          options: {},
        },
      ],
    });

    return config;
  },
});
