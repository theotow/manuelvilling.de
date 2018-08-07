import { Selector } from 'testcafe'

export default class Page {
	constructor() {
		this.blogArticles = Selector('a').withText('Hello World')
	}
	blogArticleCount() {
		return this.blogArticles.count
	}
}
