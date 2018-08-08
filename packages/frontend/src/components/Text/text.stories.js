import { storiesOf } from '@storybook/react'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'
import Text from './text.component'

storiesOf('Text', module)
	.add('H2', () => (
		<StaticRouter location="/" context={{}}>
			<Root>{() => <Text.H2>Headline</Text.H2>}</Root>
		</StaticRouter>
	))
	.add('P', () => (
		<StaticRouter location="/" context={{}}>
			<Root>{() => <Text.P>Paragraph</Text.P>}</Root>
		</StaticRouter>
	))
	.add('ActiveStyledLink', () => (
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
	))
	.add('ActiveStyledLinkMobile', () => (
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
	))
