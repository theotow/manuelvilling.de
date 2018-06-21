import { COOKIE_NAME, isBrowser, getCookie } from '@local/shared'
import React from 'react'

const tokenHolder = {}
function getToken(defaultValue) {
	if (isBrowser()) {
		return tokenHolder.token || getCookie(COOKIE_NAME)
	}
	return defaultValue
}
function setToken(value) {
	tokenHolder.token = value
}

const ThemeContext = React.createContext('light')

export { setToken, getToken, ThemeContext }
