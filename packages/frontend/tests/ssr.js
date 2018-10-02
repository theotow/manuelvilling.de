process.env.NODE_ENV = 'production'
process.env.ASSET_URL = '';
import { resolve } from 'path'
import MainPage from './pages/main'
import BlogPage from './pages/blog'
import { startApp } from '../../apollo-server/server'
import { ClientFunction, RequestLogger } from 'testcafe'
const severFactory = require('../express')
const { server } = severFactory(true)
const build = require('next/dist/server/build').default

const basePath = 'http://127.0.0.1:3000'

let s
async function startNext() {
	await build(resolve('.'))
	await new Promise((resolve) => {
		s = server.listen(3000, resolve)
	})
}
async function stopNext() {
	await s.close()
}

const getLocation = ClientFunction(() => document.location.href)

const logger = RequestLogger(undefined, {
	logResponseHeaders: true,
	logResponseBody: true
})

fixture`Getting Started`.page`http://127.0.0.1:3000`
	.before(async () => {
		await Promise.all([startNext(), startApp(3001, true)])
	})
	.after(stopNext)
	.requestHooks(logger)

test('Be able navigate to blog page and list articles', async (t) => {
	const mainPage = new MainPage()
	const blogPage = new BlogPage()
	await mainPage.accessBlogPage(t)
	await t.expect(getLocation()).eql(`${basePath}/blog`)
	await t.expect(blogPage.blogArticleCount()).eql(2)
})

test('Be able poke me', async (t) => {
	const mainPage = new MainPage()
	await t.expect(getLocation()).eql(`${basePath}/`)
	await mainPage.pokeMeUp(t)
	await t.expect(mainPage.pokeBtn).ok()
})
