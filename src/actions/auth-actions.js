import { browserHistory } from 'react-router'
import axios from 'axios'
import {BASE_URL} from './api-commons'
import AuthService from '../lib/AuthService'
import * as ActionTypes from './types'

const authService = new AuthService(
  process.env.REACT_APP_AUTH0_CLIENT_ID,
  process.env.REACT_APP_AUTH0_DOMAIN
)

// Listen to authenticated event from AuthService and get the profile of the user
// Done on every page startup
export function checkLogin() {
  return (dispatch) => {
    // Add callback for lock's `authenticated` event
    authService.lock.on('authenticated', (authResult) => {
      authService.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error)
          return dispatch(loginError(error))
        AuthService.setToken(authResult.idToken) // static method
        AuthService.setProfile(profile) // static method
        // syncUser()
        dispatch(syncUser(profile))
        return dispatch(loginSuccess(profile))
      })
    })
    // Add callback for lock's `authorization_error` event
    authService.lock.on('authorization_error', (error) => dispatch(loginError(error)))
  }
}

export function loginRequest() {

  authService.login()
  return {
    type: ActionTypes.LOGIN_REQUEST
  }
}

export function loginSuccess(profile) {
  browserHistory.push('/')
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    profile
  }
}

export function loginError(error) {
  return {
    type: ActionTypes.LOGIN_ERROR,
    error
  }
}

export function logout() {
  authService.logout()
  // browserHistory.push('/')
  return {
    type: ActionTypes.LOGOUT_SUCCESS
  }
}

// to keep profile up to date with api (creates or updates user)
export function syncUser(profile){
  const {
    user_id,
    name,
    family_name,
    given_name,
    email,
    picture,
    picture_large
  } = profile

  const profileParams = {
    user_id,
    name,
    family_name,
    given_name,
    email,
    picture,
    picture_large
  }
  return (dispatch)=>{
    dispatch({
      type: ActionTypes.REQUEST_SYNC_USER
    })
    axios.post(`${BASE_URL}/users`, profileParams)
    .then(response =>{
      const apiUserId = response.data.id
      AuthService.setApiUserId(apiUserId)
      dispatch({
        type: ActionTypes.RECEIVE_SYNC_USER,
        apiUserId
      })
    })
    .catch(response=>{
      dispatch({
        type: ActionTypes.SYNC_USER_ERROR,
        payload: 'error creating/syncing user'
      })
    })
  }
}
