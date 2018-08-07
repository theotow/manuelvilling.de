import next from 'next'
import path from 'path'
import MainPage from './pages/main'
import BlogPage from './pages/blog'
import { startApp } from '../../apollo-server/server'
import { ClientFunction, RequestLogger } from 'testcafe'

const basePath = 'http://127.0.0.1:3000'

let s
async function startNext() {
	s = next({
		dir: path.resolve(__dirname, '..'),
		dev: true,
		staticMarkup: false,
		quiet: true,
		conf: null
	})
	await s.start(3000, '127.0.0.1')
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
