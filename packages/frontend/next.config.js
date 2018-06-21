module.exports = {
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
