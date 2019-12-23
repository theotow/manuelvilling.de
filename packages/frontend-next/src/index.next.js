import React from 'react'
import { withRouter } from 'next/router'
import { getClient, getBrowserSize } from '../apollo'
import { getDataFromTree } from 'react-apollo'
import App from './index'

class Next extends React.Component {
	static async getInitialProps({ req }) {
		if (req) {
			const fetch = require('node-fetch')
			global.fetch = fetch
		}
		const requestUrl = req.url
		const browserSize = getBrowserSize(req.headers['user-agent'])
		const AppInstance = (
			<App
				requestUrl={requestUrl}
				browserSize={browserSize}
			/>
		)
		await getDataFromTree(AppInstance)
		const initialState = getClient().extract()
		return {
			requestUrl,
			initialState,
			staticContext: {},
			browserSize
		}
	}

	render() {
		return (
			<App
				requestUrl={this.props.requestUrl}
				initialState={this.props.initialState}
				staticContext={this.props.staticContext || {}}
				browserSize={this.props.browserSize}
			/>
		)
	}
}

export default withRouter(Next)
