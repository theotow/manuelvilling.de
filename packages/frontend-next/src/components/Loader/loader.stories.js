import React from 'react'
import Loader from './loader.component'

export default {
	title: 'Loader',
	component: Loader,
}

const Template = (args) => <Loader {...args} />

export const Default = Template.bind({})
