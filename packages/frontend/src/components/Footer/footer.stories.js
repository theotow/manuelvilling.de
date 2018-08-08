import { storiesOf } from '@storybook/react'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'
import Footer from './footer.component'

storiesOf('Footer', module).add('default', () => (
	<StaticRouter location="/" context={{}}>
		<Root>{() => <Footer />}</Root>
	</StaticRouter>
))
