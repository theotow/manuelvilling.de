import { storiesOf } from '@storybook/react'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'
import NoMatch from './nomatch.component'

storiesOf('NoMatch', module).add('default', () => (
	<StaticRouter location="/" context={{}}>
		<Root>{() => <NoMatch />}</Root>
	</StaticRouter>
))
