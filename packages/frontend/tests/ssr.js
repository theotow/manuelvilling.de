process.env.NODE_ENV = 'production'
process.env.ASSET_URL = ''
import { resolve } from 'path'
import MainPage from './pages/main'
import BlogPage from './pages/blog'
import { startApp } from '../../apollo-server/server'
import { ClientFunction, RequestLogger } from 'testcafe'
const build = require('next/dist/build').default

const basePath = 'http://127.0.0.1:3000'

async function startNext(t) {
	await build(resolve(__dirname, '..'))
	const severFactory = require('../express')
	const { server } = severFactory(true)
	await new Promise((resolve) => {
		t.ctx.next = server.listen(3000, resolve)
	})
}
async function stopNext(t) {
	await new Promise((resolve) => t.ctx.next.close(resolve))
    await new Promise((resolve) => t.ctx.apollo.close(resolve))
    await new Promise((resolve) => setTimeout(resolve, 4000))
}

const getLocation = ClientFunction(() => document.location.href)

const logger = RequestLogger(undefined, {
	logResponseHeaders: true,
	logResponseBody: true
})

fixture`With SSR`.page`http://127.0.0.1:3000`
	.before(async (t) => {
		t.ctx = {}
		const res = await Promise.all([startNext(t), startApp(3001, true)])
		t.ctx.apollo = res[1]
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
