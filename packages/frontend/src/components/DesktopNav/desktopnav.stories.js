import { storiesOf } from '@storybook/react'
import DesktopNav from './desktopnav.component'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'

storiesOf('DesktopNav', module).add('default', () => (
	<StaticRouter location="/" context={{}}>
		<Root>{() => <DesktopNav />}</Root>
	</StaticRouter>
))
