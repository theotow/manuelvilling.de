
import React from 'react'
import Icon from '../../components/Icon/icon.component'
import styled from 'styled-components'

const Positioner = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 5;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Heart = () => (
	<Positioner>
		<Icon.Heart />
	</Positioner>
)

export default Heart
