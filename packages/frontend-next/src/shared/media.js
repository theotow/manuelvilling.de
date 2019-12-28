import React from 'react'
import { fromEvent } from 'rxjs'
import { tap, map, startWith, debounce } from 'rxjs/operators'
import { timer } from 'rxjs/observable/timer'
import { isBrowser } from '../apollo'

const DEFAULT = 'lg'
const MediaContext = React.createContext({ size: DEFAULT })

export const Desktop = ({ children }) => (
	<MediaContext.Consumer>
		{(val) => (val.size === 'lg' ? children : null)}
	</MediaContext.Consumer>
)
export const GetMedia = ({ children }) => (
	<MediaContext.Consumer>{(val) => children(val.size)}</MediaContext.Consumer>
)

function mapWidthHeightToSize({ width }) {
	if (width > 600) {
		return 'lg'
	}
	return 'xs'
}

function mapEventToSizes(event) {
	return {
		width: event.target.innerWidth,
		height: event.target.innerHeight
	}
}

export class MediaProvider extends React.Component {
	constructor(props) {
		super(props)
		this.state = { size: this.props.size || DEFAULT }
	}
	componentDidMount() {
		if (!isBrowser()) return
		this.subscription = fromEvent(window, 'resize')
			.pipe(
				startWith({
					target: {
						innerWidth: window.innerWidth,
						innerHeight: window.innerHeight
					}
				}),
				debounce(() => timer(200)),
				map(mapEventToSizes),
				map(mapWidthHeightToSize),
				tap(this.updateSize)
			)
			.subscribe()
	}

	updateSize = (size) => {
		if (size !== this.state.size) {
			this.setState((s) => {
				return { ...s, nextSize: size }
			})
		}
	}

	componentWillUnmount() {
		if (this.subscription) {
			this.subscription.unsubscribe()
		}
	}

	UNSAFE_componentWillUpdate(props, state) {
		if (state.nextSize) {
			setTimeout(() => {
				this.setState({ size: state.nextSize, nextSize: undefined })
			}, 300)
		}
	}

	maybeWrap(input) {
		return this.state.nextSize ? this.props.loader() : input
	}

	render() {
		return (
			<MediaContext.Provider value={this.state}>
				{this.maybeWrap(this.props.children)}
			</MediaContext.Provider>
		)
	}
}
