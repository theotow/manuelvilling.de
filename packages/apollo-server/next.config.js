require('dotenv').config()
module.exports = {
	env: {
		'TELEGRAM_CHAT_ID': process.env.TELEGRAM_CHAT_ID,
		'TELEGRAM_TOKEN': process.env.TELEGRAM_TOKEN
	}
}