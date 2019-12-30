import React from 'react'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'
import Loader from './loader.component'

export default {
	title: 'Loader',
}

export const defaultStory = () => (
	<StaticRouter location="/" context={{}}>
		<Root>{() => <Loader />}</Root>
	</StaticRouter>
)

defaultStory.story = {
	name: 'default',
}
