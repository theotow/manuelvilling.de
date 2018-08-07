import React from 'react'
import { storiesOf } from '@storybook/react'
import AppWrapper from './appwrapper.component'
import { StaticRouter } from 'react-router-dom'
import Root from '../Root/root.component'

storiesOf('AppWrapper', module).add('default', () => (
	<StaticRouter location="/" context={{}}>
		<Root>{() => <AppWrapper>content</AppWrapper>}</Root>
	</StaticRouter>
))
