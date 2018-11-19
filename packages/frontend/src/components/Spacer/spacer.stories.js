import { storiesOf } from '@storybook/react'
import Spacer from './spacer.component'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'

storiesOf('Spacer', module)
	.add('isV', () => (
		<StaticRouter location="/" context={{}}>
			<Root>
				{() => (
					<div>
						<Spacer isV size="40px" />
						text
					</div>
				)}
			</Root>
		</StaticRouter>
	))
	.add('isH', () => (
		<StaticRouter location="/" context={{}}>
			<Root>
				{() => (
					<div style={{ display: 'flex' }}>
						<Spacer isH size="40px" />
						text
					</div>
				)}
			</Root>
		</StaticRouter>
	))
