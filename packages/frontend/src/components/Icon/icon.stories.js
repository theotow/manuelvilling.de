import React from 'react'
import { storiesOf } from '@storybook/react'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'
import Icons from './icon.component'
import { map, values } from 'lodash'

storiesOf('Icon', module).add('default', () => (
	<StaticRouter location="/" context={{}}>
		<Root>
			{() => (
				<React.Fragment>
					{map(values(Icons), (Icon) => (
						<div>
							<Icon height="32" />
							<hr />
						</div>
					))}
				</React.Fragment>
			)}
		</Root>
	</StaticRouter>
))
