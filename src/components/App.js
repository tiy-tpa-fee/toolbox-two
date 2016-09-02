import React, { Component } from 'react'
import { Link } from 'react-router'
import About from './About'
import Home from './Home'
import Navigation from './Navigation'
import Tool from './Tool'

// webpack let's us import JSON files!
import data from '../data.json'

class App extends Component {

  // This could be something like, removeTaco, or flagCell,
  _doThatThing () {
    window.alert('I DID THAT THING')
  }

  render () {
    const terms = Object.keys(data.tools)
    const props = {
      doThatThing: this._doThatThing
    }

    if (this.props.params.toolName) {
      props.details = data.tools[this.props.params.toolName]
    }

    return <div className='app'>
      <aside>
        <h1><Link to="/">Tools</Link></h1>
        <Navigation terms={terms} />
      </aside>
      <main>
      {this.props.children && React.cloneElement(this.props.children, props)}
      </main>
    </div>
  }
}

export default App
