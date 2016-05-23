import React, { Component } from 'react'
import { hashHistory, Router } from 'react-router'

import Routes from './Routes'

require('bootstrap/dist/css/bootstrap.css')
require('./assets/css/index.css')
require('./favicon.png')

if (module.hot) {
  module.hot.decline('./Routes.js')
}

function DevToolsInclude () {
  if (false) {
    let DevTools = require('./DevTools').default
    return <DevTools />
  }
  return null
}

class Root extends Component {

  render () {
    return (
      <div>
        <Router history={hashHistory} routes={Routes} />
        {DevToolsInclude()}
      </div>
    )
  }
}

export default Root
