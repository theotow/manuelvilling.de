import { storiesOf } from '@storybook/react'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'
import Heart from './heart.component'

storiesOf('Heart', module).add('default', () => (
	<StaticRouter location="/" context={{}}>
		<Root>{() => <Heart />}</Root>
	</StaticRouter>
))
