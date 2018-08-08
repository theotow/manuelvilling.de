import { storiesOf } from '@storybook/react'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'
import Header from './header.component'

storiesOf('Header', module).add('default', () => (
	<StaticRouter location="/" context={{}}>
		<Root>{() => <Header />}</Root>
	</StaticRouter>
))
