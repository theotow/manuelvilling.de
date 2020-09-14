import React from 'react'
import Spacer from './spacer.component'

export default {
	title: 'Spacer',
	component: Spacer,
}

export const isVStory = () => (
	<div>
		<Spacer isV size="40px" />
		text
	</div>
)

isVStory.story = {
	name: 'isV',
}

export const isHStory = () => (
	<div style={{ display: 'flex' }}>
		<Spacer isH size="40px" />
		text
	</div>
)

isHStory.story = {
	name: 'isH',
}
