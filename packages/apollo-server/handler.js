const graphqlLambda = require('apollo-server-lambda').graphqlLambda
const schema = require('./schema')

module.exports.graphqlHandler = function graphqlHandler(event, context, callback) {
	function callbackWithHeaders(error, output) {
		// eslint-disable-next-line no-param-reassign
		output.headers['Access-Control-Allow-Origin'] = '*'
		callback(error, output)
	}

	const handler = graphqlLambda({ schema })
	return handler(event, context, callbackWithHeaders)
}
