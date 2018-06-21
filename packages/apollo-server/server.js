const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const cors = require('cors')
const schema = require('./schema')

const app = express()

app.use(
	'/graphql',
	cors(),
	bodyParser.json(),
	graphqlExpress(() => ({
		schema,
		context: {}
	}))
)

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

const startApp = async port => {
	return new Promise(resolve => {
		app.listen(port, () => {
			resolve()
		})
	})
}

module.exports = { app, startApp }
