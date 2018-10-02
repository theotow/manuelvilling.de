const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const cors = require('cors')
const { typeDefs, resolvers } = require('./schema')
const {
	makeExecutableSchema,
	addMockFunctionsToSchema
} = require('graphql-tools')
const mocks = require('./mocks')

function buildApp(isTest) {
	const app = express()

	const schema = isTest
		? makeExecutableSchema({
			typeDefs
		})
		: makeExecutableSchema({ typeDefs, resolvers })

	if (isTest) {
		addMockFunctionsToSchema({
			schema,
			mocks
		})
	}

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

	return app
}

const startApp = async (port, isTest) => {
	return new Promise(resolve => {
		const app = buildApp(isTest)
		const instance = app.listen(port, () => {
			resolve(instance)
		})
	})
}

module.exports = { startApp }
