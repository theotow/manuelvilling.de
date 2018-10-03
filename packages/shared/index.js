import { InMemoryCache } from 'apollo-cache-inmemory'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { ApolloLink, concat } from 'apollo-link'
import { ApolloClient } from 'apollo-client'

import MobileDetect from 'mobile-detect'

import Cookies from 'js-cookie'

const authMiddleware = getToken =>
	new ApolloLink((operation, forward) => {
		operation.setContext({
			headers: {
				isSSR: !isBrowser(),
				authorization: getToken()
			}
		})

		return forward(operation)
	})

let client = undefined
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

export function getParsedCookie(name, cookievalue) {
	if (!isBrowser()) {
		global.document = {}
	}
	const prevValue = document.cookie
	document.cookie = cookievalue
	const returnValue = Cookies.get(name)
	document.cookie = prevValue
	return returnValue
}

export const COOKIE_NAME = 'authtoken'

export const removeCookie = Cookies.remove
export const setCookie = Cookies.set
export const getCookie = Cookies.get

export function getBrowserSize(userAgent) {
	const md = new MobileDetect(userAgent)
	return md.mobile() ? 'xs' : 'lg'
}
