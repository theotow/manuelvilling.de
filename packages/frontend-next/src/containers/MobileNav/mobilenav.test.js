import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import MobileNav from './mobilenav.container'
import { StaticRouter } from 'react-router-dom'

test('can open and close mobile menu', async () => {
	const { getByTestId, asFragment } = render(
		<StaticRouter location="/" context={{}}>
			<MobileNav />
		</StaticRouter>,
	)

	fireEvent.click(getByTestId('mobile-nav-toggle-menu'))

	expect(asFragment()).toMatchSnapshot() // open

	fireEvent.click(getByTestId('mobile-nav-toggle-menu'))

	expect(asFragment()).toMatchSnapshot() // closed
})
