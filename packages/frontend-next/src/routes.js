import { BlogPage, HomePage, NoMatchPage, ImprintPage } from './pages'
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
		path: '/imprint',
		component: withFadeIn(ImprintPage),
	},
	{
		component: NoMatchPage,
	},
]

export default routes
