const Telegram = require('telegraf/telegram')
const cors = require('micro-cors')({allowHeaders: ['X-Requested-With','Access-Control-Allow-Origin','X-HTTP-Method-Override','Content-Type','Authorization','Accept', 'isssr']})
const { ApolloServer, gql } = require('apollo-server-micro')
const rp = require('request-promise')


async function getEntries() {
	return rp(
		'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@theotow'
	).then(function(htmlString) {
		const parsed = JSON.parse(htmlString)
		return parsed.items
	}).filter((item) => !item.guid.match(/ee5e226be1e2|cadb17c7df16/))
}

async function sendMessage(chatId, token, msg) {
	const bot = new Telegram(token, { polling: false })
	await bot.sendMessage(chatId, msg)
}

// The GraphQL schema in string form
const typeDefs = gql`
  type Query {
      entries: [BlogEntry]
  }
  type BlogEntry { title: String, pubDate: String, link: String }
  type Result { success: Boolean }
  type Mutation {
    poke (msg: String!): Result
  }
`

// The resolvers
const resolvers = {
	Query: {
		entries: getEntries
	},
	Mutation: {
		poke: async (_, { msg }) => {
			await sendMessage(
				process.env.TELEGRAM_CHAT_ID,
				process.env.TELEGRAM_TOKEN,
				msg
			)
			return { success: true }
		}
	}
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
	api: {
		bodyParser: false,
	},
}
export default cors((req, res) => {
	if (req.method === 'OPTIONS') {
		res.end()
		return
	}
	return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
})
