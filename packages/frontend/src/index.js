import React from 'react'
import { BrowserRouter, StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { ApolloProvider } from 'react-apollo'

import { isBrowser, setClient, getClient } from '@local/shared'

import routes from './routes'
import Root from './components/Root/root.component'
import getConfig from 'next/config'
import AppWrapper from './components/AppWrapper/appwrapper.component'
import { get } from 'lodash'

function getGraphUrl() {
	const env = get(getConfig(), ['publicRuntimeConfig', 'env'])
	return env === 'production'
		? 'https://api.manuelvilling.de/graphql'
		: 'http://localhost:3001/graphql'
}

export default class App extends React.Component {
	constructor(props) {
		super(props)
		if (this.props.browserOnly && !isBrowser()) return
		setClient(props.initialState, () => '', getGraphUrl())
	}

	render() {
		if (this.props.browserOnly && !isBrowser()) return null
		const Router = isBrowser() ? BrowserRouter : StaticRouter
		return (
			<ApolloProvider client={getClient()}>
				<Router
					location={this.props.requestUrl}
					context={this.props.staticContext}>
					<Root
						staticContext={this.props.staticContext}
						size={this.props.browserSize}>
						{() => <AppWrapper>{renderRoutes(routes)}</AppWrapper>}
					</Root>
				</Router>
			</ApolloProvider>
		)
	}
}
