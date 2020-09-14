import React from 'react'
import Text from './text.component'

export default {
	title: 'Text',
	component: Text,
}

export const h2 = () => <Text.H2>Headline</Text.H2>

h2.story = {
	name: 'H2',
}

export const p = () => <Text.P>Paragraph</Text.P>

export const activeStyledLink = () => (
	<div>
		<Text.ActiveStyledLink to="/page">Paragraph</Text.ActiveStyledLink>
		text
	</div>
)

activeStyledLink.story = {
	name: 'ActiveStyledLink',
}

export const activeStyledLinkMobile = () => (
	<div>
		<Text.ActiveStyledLinkMobile to="/page">
			Paragraph
		</Text.ActiveStyledLinkMobile>
		text
	</div>
)

activeStyledLinkMobile.story = {
	name: 'ActiveStyledLinkMobile',
}
