import React from 'react'
import Icon from '../../components/Icon/icon.component'
import Text from '../Text/text.component'
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

const Center = styled.div`
	text-align: center;
`

const Heart = () => (
	<Positioner>
		<Center>
			<Icon.Heart />
			<Text.P>Got a text, thx ;)</Text.P>
		</Center>
	</Positioner>
)

export default Heart
