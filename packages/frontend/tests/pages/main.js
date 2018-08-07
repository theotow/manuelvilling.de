import { Selector } from 'testcafe'
import { ReactSelector } from 'testcafe-react-selectors'

export default class Page {
	constructor() {
		this.blogLink = Selector('a').withText('Blog')
		this.pokeBtn = Selector('button').withText('Poke me')
		this.pokeUp = Selector(() =>
			document.querySelector("[data-value='up']")
		)
		this.heart = ReactSelector('Positioner')
	}
	async accessBlogPage(t) {
		await t.click(this.blogLink)
	}
	async pokeMeUp(t) {
		await t.click(this.pokeBtn)
		await t.click(this.pokeUp)
	}
}
