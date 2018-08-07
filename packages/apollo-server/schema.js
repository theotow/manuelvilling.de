const rp = require('request-promise')
const TelegramBot = require('node-telegram-bot-api')

async function getEntries() {
	return rp(
		'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@theotow'
	).then(function(htmlString) {
		const parsed = JSON.parse(htmlString)
		return parsed.items
	})
}

async function sendMessage(chatId, token, msg) {
	const bot = new TelegramBot(token, { polling: false })
	await bot.sendMessage(chatId, msg)
}

// The GraphQL schema in string form
const typeDefs = `
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

module.exports = { resolvers, typeDefs }
