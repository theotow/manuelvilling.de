import React from 'react'
import { withRouter } from 'next/router'
import { getClient, getBrowserSize } from './apollo'
import { getDataFromTree } from '@apollo/react-ssr'
import App from './index'

class Next extends React.Component {
	static async getInitialProps({ req, AppTree }) {
		if (req) {
			const requestUrl = req.url
			const browserSize = getBrowserSize(req.headers['user-agent'])
			const client = getClient()
			await getDataFromTree(
				<AppTree
					requestUrl={requestUrl}
					apolloClient={client}
					browserSize={browserSize}
				/>,
			)
			return {
				requestUrl,
				initialState: client.extract(),
				staticContext: {},
				browserSize,
			}
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
