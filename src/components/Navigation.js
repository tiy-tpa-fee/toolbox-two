import React, { Component } from 'react'
import { Link } from 'react-router'

class Navigation extends Component {

  render () {
    const terms = this.props.terms.map((term, index) => {
      return <li key={index}><Link to={`/tool/${term}`}>{term}</Link></li>
    })

    return <nav>
      <ul>
        {terms}
      </ul>
      <Link to='/about'>About</Link>
    </nav>
  }
}

export default Navigation
