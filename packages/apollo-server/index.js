const { app } = require('./server')

// Start the server
app.listen(3001, () => {
	console.log('Go to http://localhost:3001/graphiql to run queries!') // eslint-disable-line
})
