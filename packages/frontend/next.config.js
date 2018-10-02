const isProd = process.env.NODE_ENV === 'production'
const prodUrl =
	process.env.ASSET_URL != undefined
		? process.env.ASSET_URL
		: 'https://assets.manuelvilling.de'
module.exports = {
	assetPrefix: isProd ? prodUrl : '',
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
