import styled from 'styled-components'
import React from 'react'
import ReactDOM from 'react-dom'
import Icon from '../../components/Icon/icon.component'
import Heart from '../../components/Heart/heart.component'
import { Mutation } from 'react-apollo'
import { POKE } from '../../queries/poke.mutation'

const Button = styled.button`
	${(props) => props.theme.boldFont} color: #000;
	background: #f1ff1e;
	font-size: 16px;
	text-align: center;
	border: 0;
	cursor: pointer;
	height: 40px;
	min-width: 260px;
`
const ButtonBox = Button.withComponent('div').extend`
    max-width: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: inherit;
`

function iconLinkFactory(clickFunc, Component, msg) {
	return (
		<a
			href="#"
			onClick={() =>
				clickFunc({
					variables: { msg }
				})
			}>
			<Component height="32" />
		</a>
	)
}

const modalRoot =
	typeof window === 'object' && document.getElementById('modal-root')

const Portal = (props) =>
	modalRoot ? ReactDOM.createPortal(props.children, modalRoot) : null

class PokeButton extends React.Component {
	state = {
		scence: undefined
	}

	changeScence = (scence) => () => {
		this.setState({ scence })
	}

	renderScence(scence) {
		switch (scence) {
			case 3: {
				return (
					<Portal>
						<Heart />
					</Portal>
				)
			}
			case 2: {
				return (
					<Mutation
						mutation={POKE}
						update={() => {
							this.changeScence(3)()
							setTimeout(() => {
								this.changeScence(1)()
							}, 1000)
						}}>
						{(mutate) => (
							<ButtonBox>
								{iconLinkFactory(mutate, Icon.ThumbsUp, 'up')}
								{iconLinkFactory(
									mutate,
									Icon.ThumbsDown,
									'down'
								)}
							</ButtonBox>
						)}
					</Mutation>
				)
			}
			default: {
				return <Button onClick={this.changeScence(2)}>Poke me</Button>
			}
		}
	}

	render() {
		return this.renderScence(this.state.scence)
	}
}

export default PokeButton
