import { storiesOf } from '@storybook/react'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'
import ResizeLoader from './resizeloader.component'

storiesOf('ResizeLoader', module).add('default', () => (
	<StaticRouter location="/" context={{}}>
		<Root>{() => <ResizeLoader />}</Root>
	</StaticRouter>
))
