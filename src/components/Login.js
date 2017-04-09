import React, {Component} from 'react'
import { connect } from 'react-redux'
import {createOrUpdateUser} from '../actions/user-actions'
import {login} from '../auth'
import './Login.css'

class Login extends Component {
  componentWillMount() {
    this.login = login()
  }

  componentWillUnmount() {
    this.login.hide()
    this.login = null
    this.apiCreateOrSyncUser()
  }

  apiCreateOrSyncUser = ()=>{
    if (localStorage.profile){
      const profile = this.getModifiedProfile()
      this.props.createOrUpdateUser(profile)
    }
    else{
      console.log('no profile')
    }
  }

  getModifiedProfile = ()=>{
    const profileJson = JSON.parse(localStorage.profile)
    const {user_id,name,family_name,given_name,email,picture,picture_large} = profileJson
    const profile = {
      user_id,
      name,
      family_name,
      given_name,
      email,
      picture,
      picture_large
    }
    return(profile)
  }

  render() {
    return (
      <div className="Login">
        <a className="Login-loginButton" onClick={() => login()}>Log In with Auth0</a>
      </div>
    )
  }
}

const mapDispatchToProps = {
  createOrUpdateUser
}

export default connect(null, mapDispatchToProps)(Login)
