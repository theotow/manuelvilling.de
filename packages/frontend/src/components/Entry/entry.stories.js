import { storiesOf } from '@storybook/react'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'
import Entry from './entry.component'

storiesOf('Entry', module).add('default', () => (
	<StaticRouter location="/" context={{}}>
		<Root>
			{() => (
				<Entry title="title" link="https://google.com" date="date" />
			)}
		</Root>
	</StaticRouter>
))
