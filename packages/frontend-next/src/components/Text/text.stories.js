import React from 'react'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'
import Text from './text.component'

export default {
	title: 'Text',
}

export const h2 = () => (
	<StaticRouter location="/" context={{}}>
		<Root>{() => <Text.H2>Headline</Text.H2>}</Root>
	</StaticRouter>
)

h2.story = {
	name: 'H2',
}

export const p = () => (
	<StaticRouter location="/" context={{}}>
		<Root>{() => <Text.P>Paragraph</Text.P>}</Root>
	</StaticRouter>
)

export const activeStyledLink = () => (
	<StaticRouter location="/" context={{}}>
		<Root>
			{() => (
				<div>
					<Text.ActiveStyledLink to="/page">
						Paragraph
					</Text.ActiveStyledLink>
					text
				</div>
			)}
		</Root>
	</StaticRouter>
)

activeStyledLink.story = {
	name: 'ActiveStyledLink',
}

export const activeStyledLinkMobile = () => (
	<StaticRouter location="/" context={{}}>
		<Root>
			{() => (
				<div>
					<Text.ActiveStyledLinkMobile to="/page">
						Paragraph
					</Text.ActiveStyledLinkMobile>
					text
				</div>
			)}
		</Root>
	</StaticRouter>
)

activeStyledLinkMobile.story = {
	name: 'ActiveStyledLinkMobile',
}
