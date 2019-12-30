import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import MobileDetect from 'mobile-detect'

let client = undefined

export function initClient(initialState) {
	client = new ApolloClient({
		connectToDevTools: isBrowser(),
		link: new HttpLink({
			uri: process.env.API_URL,
			fetch: !isBrowser() && require('node-fetch'),
		}),
		ssrMode: !isBrowser(),
		ssrForceFetchDelay: 100,
		cache: new InMemoryCache().restore(initialState),
	})
	return client
}

export function getClient(initialState) {
	if (!client) return initClient(initialState)
	return client
}

export function isBrowser() {
	return typeof window === 'object'
}

export function getBrowserSize(userAgent) {
	const md = new MobileDetect(userAgent)
	return md.mobile() ? 'xs' : 'lg'
}
