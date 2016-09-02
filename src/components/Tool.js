import React, { Component } from 'react'

class Tool extends Component {

  _handleClick = () => {
    this.props.doThatThing()
  }

  render () {
    return <div>
      <h2>{this.props.params.toolName}</h2>
      <h3>/{this.props.details.pronunciation}/</h3>
      <p>{this.props.details.description}</p>

      <button onClick={this._handleClick}>Do that thing!</button>
    </div>
  }
}

export default Tool
