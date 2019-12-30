import React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

const bounceAnimation = keyframes`${fadeIn}`

const BouncyDiv = styled.div`
	animation: 1s ${bounceAnimation};
`

export default function withFadeIn(Component) {
	return class extends React.Component {
		render() {
			return (
				<BouncyDiv>
					<Component {...this.props} />
				</BouncyDiv>
			)
		}
	}
}
