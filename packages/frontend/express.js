const express = require('express')
const next = require('next')
const R = require('ramda')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

function getRoutingInfo(content) {
	var re = /id="router"\ style\="display\:none">{(.*)}/g.exec(content) // eslint-disable-line
	re = R.pathOr('', [1], re)
	try {
		return JSON.parse('{' + re.replace(/&quot;/g, '"') + '}')
	} catch (e) {
		return {}
	}
}

async function servePage(req, res, pagePath, queryParams) {
	try {
		const html = await app.renderToHTML(req, res, pagePath, queryParams)
		const info = getRoutingInfo(html)
		// handle 404 pages etc.
		if (info.status) {
			res.status(info.status)
		}
		// handle redirect
		if (info.url && info.action === 'REPLACE') {
			res.redirect(301, info.url)
		}
		res.send(html)
	} catch (err) {
		app.renderError(err, req, res, pagePath, queryParams)
	}
}

const server = express()

// all the nextjs stuff
server.get('*_next/*', app.getRequestHandler())

// our app stuff
server.get('*', (req, res) => {
	return servePage(req, res, '/server', {})
})

function serverFactory(attachHooks) {
	if (attachHooks) {
		app.hookEssentialRoutes()
	}
	return { server, app }
}

module.exports = serverFactory
