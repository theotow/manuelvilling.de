import { storiesOf } from '@storybook/react'
import Button from './button.component'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'

storiesOf('Button', module)
	.add('default', () => (
		<StaticRouter location="/" context={{}}>
			<Root>{() => <Button>Poke me</Button>}</Root>
		</StaticRouter>
	))
	.add('isBox', () => (
		<StaticRouter location="/" context={{}}>
			<Root>{() => <Button isBox>this is a div</Button>}</Root>
		</StaticRouter>
	))
