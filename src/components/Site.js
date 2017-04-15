import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import './Site.css'
import Navbar from './Navbar'
class Site extends Component {

  render() {
    return (
      <div className="Site">
        <Navbar />
        <div className="Site-page">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Site
