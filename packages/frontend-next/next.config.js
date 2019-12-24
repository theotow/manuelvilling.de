const withTM = require('next-transpile-modules');

module.exports = withTM({
  target: 'serverless',
  transpileModules: [],
  env: {
    API_URL: process.env.NODE_ENV === 'production'
		? 'https://apollo-server.manuel1.now.sh/api/graphql'
		: 'http://localhost:3001/api/graphql'
  },
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
