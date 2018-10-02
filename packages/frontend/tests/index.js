import next from 'next'
import path from 'path'
import MainPage from './pages/main'
import BlogPage from './pages/blog'
import http from 'http'
import { startApp } from '../../apollo-server/server'
import { ClientFunction, RequestLogger } from 'testcafe'

const basePath = 'http://127.0.0.1:3000'

async function startNext(t) {
	const app = next({
		dir: path.resolve(__dirname, '..'),
		dev: true
	})
	await app.prepare()
	t.ctx.next = http.createServer(app.getRequestHandler())
	await new Promise((resolve, reject) => {
		t.ctx.next.on('error', reject)
		t.ctx.next.on('listening', () => resolve())
		t.ctx.next.listen(3000, '127.0.0.1')
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

fixture`Without SSR`.page`http://127.0.0.1:3000`
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
