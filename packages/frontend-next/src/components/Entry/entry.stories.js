import React from 'react'
import Entry from './entry.component'

export default {
	title: 'Entry',
	component: Entry,
}

const Template = (args) => <Entry {...args} />

export const Default = Template.bind({})

Default.args = {
	title: 'title',
	link: 'https://google.com',
	date: 'date',
}
