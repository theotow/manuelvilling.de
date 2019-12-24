import React from 'react'
import { BrowserRouter, StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { ApolloProvider } from 'react-apollo'

import { isBrowser, setClient, getClient } from '../apollo'

import routes from './routes'
import Root from './components/Root/root.component'
import AppWrapper from './components/AppWrapper/appwrapper.component'
import { get } from 'lodash'

function getGraphUrl() {
	return process.env.API_URL
}

export default class App extends React.Component {
	constructor(props) {
		super(props)
		setClient(props.initialState, () => '', getGraphUrl())
	}

	render() {
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
