import { storiesOf } from '@storybook/react'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'
import Loader from './loader.component'

storiesOf('Loader', module).add('default', () => (
	<StaticRouter location="/" context={{}}>
		<Root>{() => <Loader />}</Root>
	</StaticRouter>
))
