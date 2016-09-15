import React, { Component } from 'react'
import { Link } from 'react-router'

import Navigation from './Navigation'

// webpack let's us import JSON files!
import data from '../data.json'

class App extends Component {

  render () {
    const terms = Object.keys(data.tools)
    const props = {}

    // Get params, and set tool if specified in the params
    if (this.props.params.toolName) {
      props.details = data.tools[this.props.params.toolName]
    }

    return <div className='app'>
      <aside>
        <h1><Link to='/'>Tools</Link></h1>
        <Navigation terms={terms} />
      </aside>
      <main>
        {React.cloneElement(this.props.children, props)}
      </main>
    </div>
  }
}

export default App
