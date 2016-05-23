import { combineReducers, applyMiddleware, compose, createStore } from 'redux'
import createLogger from 'redux-logger'

import DevTools from './DevTools'

const logger = createLogger()
const reducer = combineReducers({})

export default compose(
  applyMiddleware(logger),
  DevTools.instrument()
)(createStore)(reducer)
