const { startApp } = require('./server')

// Start the server
startApp(3001, true).then(() => {
	console.log('Go to http://localhost:3001/graphiql to run queries!') // eslint-disable-line
})
