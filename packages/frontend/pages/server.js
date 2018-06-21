import React from 'react'
import { withRouter } from 'next/router'
import {
	getParsedCookie,
	getDataFromTree,
	getClient,
	COOKIE_NAME,
	getBrowserSize
} from '@local/shared'
import App from '../src/index'

class Mypage extends React.Component {
	static async getInitialProps({ req }) {
		if (req) {
			const fetch = require('node-fetch')
			global.fetch = fetch
		}
		const requestUrl = req.url
		const browserSize = getBrowserSize(req.headers['user-agent'])
		const authToken = getParsedCookie(COOKIE_NAME, req.headers.cookie)
		const AppInstance = (
			<App
				requestUrl={requestUrl}
				authToken={authToken}
				browserSize={browserSize}
			/>
		)
		await getDataFromTree(AppInstance)
		const initialState = getClient().extract()
		return {
			requestUrl,
			initialState,
			staticContext: {},
			authToken,
			browserSize
		}
	}

	render() {
		return (
			<App
				requestUrl={this.props.requestUrl}
				initialState={this.props.initialState}
				staticContext={this.props.staticContext}
				authToken={this.props.authToken}
				browserSize={this.props.browserSize}
			/>
		)
	}
}

export default withRouter(Mypage)
