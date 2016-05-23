import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App/App'
import NotFound from './pages/NotFound/NotFound'
import Start from './pages/Start/Start'

function AtellierInclude () {
  if (__DEV__) {
    let Atellier = require('./Atellier').default
    return <Route path='/atellier' component={Atellier} />
  }
  return null
}

const Routes = (
  <div>
    {AtellierInclude()}
    <Route path='/' component={App}>
      <IndexRoute component={Start} />
      <Route path='*' component={NotFound} />
    </Route>
  </div>
)

export default Routes
