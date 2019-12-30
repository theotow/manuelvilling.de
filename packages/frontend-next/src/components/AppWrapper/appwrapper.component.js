import React from 'react'
import Header from '../Header/header.component'
import Spacer from '../Spacer/spacer.component'
import Footer from '../Footer/footer.component'
import styled from 'styled-components'

const AppInner = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
`
const Relative = styled.div`
	z-index: 2;
	position: relative;
`

const AppWrapper = ({ children }) => (
	<AppInner>
		<Header />
		<Spacer isV size="80px" />
		<Relative>{children}</Relative>
		<Spacer isV size="80px" />
		<Footer />
	</AppInner>
)

export default AppWrapper
