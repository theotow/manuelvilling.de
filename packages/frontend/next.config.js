const isProd = process.env.NODE_ENV === 'production'
module.exports = {
	assetPrefix: isProd ? 'https://assets.manuelvilling.de' : '',
	publicRuntimeConfig: {
		env: process.env.NODE_ENV
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.woff|\.svg|\.png/,
			use: [
				{
					loader: 'url-loader',
					options: {}
				}
			]
		})

		return config
	}
}
