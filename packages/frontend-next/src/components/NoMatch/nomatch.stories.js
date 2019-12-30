import React from 'react'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'
import NoMatch from './nomatch.component'

export default {
	title: 'NoMatch',
}

export const defaultStory = () => (
	<StaticRouter location="/" context={{}}>
		<Root>{() => <NoMatch />}</Root>
	</StaticRouter>
)

defaultStory.story = {
	name: 'default',
}
