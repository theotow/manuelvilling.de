import React from 'react'
import AppWrapper from './appwrapper.component'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'

export default {
	title: 'AppWrapper',
}

export const defaultStory = () => (
	<StaticRouter location="/" context={{}}>
		<Root>{() => <AppWrapper>content</AppWrapper>}</Root>
	</StaticRouter>
)

defaultStory.story = {
	name: 'default',
}
