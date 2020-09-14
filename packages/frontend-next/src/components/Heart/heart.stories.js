import React from 'react'
import Heart from './heart.component'

export default {
	title: 'Heart',
	component: Heart,
}

const Template = (args) => <Heart {...args} />

export const Default = Template.bind({})
