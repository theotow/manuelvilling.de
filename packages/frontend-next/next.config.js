const withTM = require('next-transpile-modules')
require('dotenv').config()

module.exports = withTM({
	target: 'serverless',
	transpileModules: [],
	env: {
		TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
		TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
		API_URL: '/api/graphql',
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.woff|\.svg|\.png/,
			use: [
				{
					loader: 'url-loader',
					options: {},
				},
			],
		})

		return config
	},
})
