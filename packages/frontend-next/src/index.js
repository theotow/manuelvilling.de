import React from 'react'
import { BrowserRouter, StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { ApolloProvider } from 'react-apollo'

import { isBrowser, getClient } from './apollo'

import routes from './routes'
import Root from './components/Root/root.component'
import AppWrapper from './components/AppWrapper/appwrapper.component'

const App = (props) => {
	const Router = isBrowser() ? BrowserRouter : StaticRouter
	return (
		<ApolloProvider client={getClient(props.initialState)}>
			<Router location={props.requestUrl}>
				<Root
					staticContext={props.staticContext}
					size={props.browserSize}>
					<AppWrapper>{renderRoutes(routes)}</AppWrapper>
				</Root>
			</Router>
		</ApolloProvider>
	)
}
export default App
