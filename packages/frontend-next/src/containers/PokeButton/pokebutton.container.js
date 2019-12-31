import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Icon from '../../components/Icon/icon.component'
import Heart from '../../components/Heart/heart.component'
import { Mutation } from 'react-apollo'
import { POKE } from '../../queries/poke.mutation'
import Loader from '../../components/Loader/loader.component'
import Button from '../../components/Button/button.component'

function iconLinkFactory(clickFunc, Component, msg) {
	return (
		<a
			href="#"
			data-value={msg}
			onClick={() =>
				clickFunc({
					variables: { msg },
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

const PokeButton = () => {
	const [scence, setScene] = useState()

	const changeScence = (scence) => () => {
		setScene(scence)
	}

	const renderScence = () => {
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
							changeScence(3)()
							setTimeout(() => {
								changeScence(1)()
							}, 1000)
						}}>
						{(mutate, { loading }) => {
							return (
								<Button isBox>
									{loading && <Loader />}
									{!loading && (
										<React.Fragment>
											{iconLinkFactory(
												mutate,
												Icon.ThumbsUp,
												'up',
											)}
											{iconLinkFactory(
												mutate,
												Icon.ThumbsDown,
												'down',
											)}
										</React.Fragment>
									)}
								</Button>
							)
						}}
					</Mutation>
				)
			}
			default: {
				return <Button onClick={changeScence(2)}>Poke me</Button>
			}
		}
	}

	return renderScence()
}

export default PokeButton
