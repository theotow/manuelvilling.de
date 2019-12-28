import React from 'react'
import Spacer from './spacer.component'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'

export default {
	title: 'Spacer',
}

export const isVStory = () => (
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
)

isVStory.story = {
	name: 'isV',
}

export const isHStory = () => (
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
)

isHStory.story = {
	name: 'isH',
}
