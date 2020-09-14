import React from 'react'
import Icons from './icon.component'
import { map, values } from 'lodash'

export default {
	title: 'Icon',
	component: Icons,
}

export const Template = () => (
	<React.Fragment>
		{map(values(Icons), (Icon) => (
			<div>
				<Icon height="32" />
				<hr />
			</div>
		))}
	</React.Fragment>
)

export const Default = Template.bind({})
