import React from 'react'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'
import Header from './header.component'

export default {
	title: 'Header',
}

export const defaultStory = () => (
	<StaticRouter location="/" context={{}}>
		<Root>{() => <Header />}</Root>
	</StaticRouter>
)

defaultStory.story = {
	name: 'default',
}
