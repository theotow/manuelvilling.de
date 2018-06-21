const severFactory = require('./express')

const { app, server } = severFactory(false)

app.prepare().then(() => {

	server.listen(4000, err => {
		if (err) throw err
		console.log('> Ready on http://localhost:4000') // eslint-disable-line
	})
})