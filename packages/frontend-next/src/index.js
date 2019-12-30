import React from 'react'
import { BrowserRouter, StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { ApolloProvider } from 'react-apollo'

import { isBrowser, getClient } from './apollo'

import routes from './routes'
import Root from './components/Root/root.component'
import AppWrapper from './components/AppWrapper/appwrapper.component'

export default class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const Router = isBrowser() ? BrowserRouter : StaticRouter
		return (
			<ApolloProvider client={getClient(this.props.initialState)}>
				<Router location={this.props.requestUrl}>
					<Root
						staticContext={this.props.staticContext}
						size={this.props.browserSize}>
						<AppWrapper>{renderRoutes(routes)}</AppWrapper>
					</Root>
				</Router>
			</ApolloProvider>
		)
	}
}
