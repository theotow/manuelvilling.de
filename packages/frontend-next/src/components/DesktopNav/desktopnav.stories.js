import React from 'react'
import DesktopNav from './desktopnav.component'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'

export default {
	title: 'DesktopNav',
}

export const defaultStory = () => (
	<StaticRouter location="/" context={{}}>
		<Root>{() => <DesktopNav />}</Root>
	</StaticRouter>
)

defaultStory.story = {
	name: 'default',
}
