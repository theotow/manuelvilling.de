import React from 'react'
import Button from './button.component'

export default {
	title: 'Button',
	component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
	isBox: false,
	children: 'Next',
}
