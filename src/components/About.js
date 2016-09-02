import React, { Component } from 'react'

class About extends Component {

  _handleClick = () => {
    this.props.doThatThing()
  }

  render () {
    return <div>
      A little React demo.

      <button onClick={this._handleClick}>Do that thing!</button>
    </div>
  }
}

export default About
