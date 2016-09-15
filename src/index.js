import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { About, App, Home, Tool } from './components'
import './styles/screen.sass'

const router = <Router history={browserHistory}>
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/tool/:toolName' component={Tool} />
    <Route path='/about' component={About} />
  </Route>
</Router>

render(router, document.getElementById('root'))
