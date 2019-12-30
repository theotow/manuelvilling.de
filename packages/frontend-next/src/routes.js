import { BlogPage, HomePage, NoMatchPage } from './pages'
import withFadeIn from './hoc/withfade.hoc'

const routes = [
	{
		path: '/',
		component: withFadeIn(HomePage),
		exact: true,
	},
	{
		path: '/blog',
		component: withFadeIn(BlogPage),
	},
	{
		component: NoMatchPage,
	},
]

export default routes
