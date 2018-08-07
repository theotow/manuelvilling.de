import React from 'react'
import { BrowserRouter, StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { ApolloProvider } from 'react-apollo'

import { isBrowser, setClient, getClient } from '@local/shared'
import { getToken } from './shared/index'

import routes from './routes'
import Root from './components/Root/root.component'
import ResizeLoader from './components/ResizeLoader/resizeloader.component'
import { ThemeProvider } from 'styled-components'
import { MediaProvider } from './shared/media'
import getConfig from 'next/config'

const theme = {
	lightFont: `
		font-family: 'PlexMono';
		font-weight: 300;
	`,
	boldFont: `
		font-family: 'PlexMono';
		font-weight: 600;
	`
}

function getGraphUrl() {
	const { publicRuntimeConfig } = getConfig()
	return publicRuntimeConfig.env === 'prod'
		? 'https://api.manuelvilling.de/graphql'
		: 'http://localhost:3001/graphql'
}

export default class App extends React.Component {
	constructor(props) {
		super(props)
		if (this.props.browserOnly && !isBrowser()) return
		setClient(
			props.initialState,
			() => getToken(props.authToken),
			getGraphUrl()
		)
	}

	render() {
		if (this.props.browserOnly && !isBrowser()) return null
		const Router = isBrowser() ? BrowserRouter : StaticRouter
		return (
			<ApolloProvider client={getClient()}>
				<ThemeProvider theme={theme}>
					<MediaProvider
						size={this.props.browserSize}
						loader={ResizeLoader}>
						<Router
							location={this.props.requestUrl}
							context={this.props.staticContext}>
							<Root staticContext={this.props.staticContext}>
								{() => renderRoutes(routes)}
							</Root>
						</Router>
					</MediaProvider>
				</ThemeProvider>
			</ApolloProvider>
		)
	}
}
