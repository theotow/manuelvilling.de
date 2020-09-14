import React from 'react'
import AppWrapper from './appwrapper.component'

export default {
	title: 'AppWrapper',
	component: AppWrapper,
}

const Template = (args) => <AppWrapper {...args} />

export const Default = Template.bind({})

Default.args = {
	children: 'test',
}
