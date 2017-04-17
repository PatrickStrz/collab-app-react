import React, {Component} from 'react'
import { connect } from 'react-redux'
import {checkLogin, login, logout} from '../actions/auth-actions'
import './Site.css'
import Navbar from '../components/navbar/Navbar'
import SyncUserAlert from '../components/SyncUserAlert'

class Site extends Component {

  //This listens to login events from lock ( auth0 drop in loggin)
  constructor(props) {
  super(props)
  this.props.checkLogin() // check is Auth0 lock is authenticating after login callback
  }

  render() {

    const {
      isAuthenticated,
      profile,
      login,
      logout,
    } = this.props

    return (
      <div className="Site">
        <Navbar
          isAuthenticated={isAuthenticated}
          profile={profile}
          login={login}
          logout={logout}
        />
        <SyncUserAlert syncUserError={this.props.syncUserError}/>
        <div className="Site-page">
          {this.props.children}
        </div>
      </div>
    )
  }
}

const actionCreators = {
  checkLogin,
  login,
  logout
}

const mapStateToProps = (state) => {
  return{
    isAuthenticated: state.auth.isAuthenticated,
    apiUserId: state.auth.apiUserId,
    profile: state.auth.profile,
    syncUserError: state.auth.syncUserError,
  }
}

export default connect(mapStateToProps, actionCreators)(Site)
