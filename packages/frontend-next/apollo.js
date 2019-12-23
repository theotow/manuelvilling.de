import { InMemoryCache } from 'apollo-cache-inmemory'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { ApolloLink, concat } from 'apollo-link'
import { ApolloClient } from 'apollo-client'
import MobileDetect from 'mobile-detect'

let client = undefined

const authMiddleware = getToken =>
	new ApolloLink((operation, forward) => {
		operation.setContext({
			headers: {
				authorization: getToken()
			}
		})

		return forward(operation)
	})

export function setClient(initialState, getToken, graphqlUrl) {
	client = new ApolloClient({
		link: concat(
			authMiddleware(getToken),
			new BatchHttpLink({
				uri: graphqlUrl
			})
		),
		ssrMode: !isBrowser(),
		ssrForceFetchDelay: 100,
		cache: new InMemoryCache().restore(initialState)
	})
	return client
}

export function getClient() {
	return client
}

export function isBrowser() {
	return typeof window === 'object'
}

export function getBrowserSize(userAgent) {
	const md = new MobileDetect(userAgent)
	return md.mobile() ? 'xs' : 'lg'
}
