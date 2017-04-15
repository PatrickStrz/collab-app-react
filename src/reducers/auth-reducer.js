import * as ActionTypes from '../actions/types'
import AuthService from '../lib/AuthService'

const initialState = {
  isAuthenticated: !AuthService.isTokenExpired(),
  isFetching: false,
  profile: AuthService.getProfile(),
  isSyncingUser: false,
  apiUserId: AuthService.getApiUserId(),
  syncUserError: null,
  error: null,
}
export default function authReducer(state=initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return { ...state, isFetching: true, error: null }
    case ActionTypes.LOGIN_SUCCESS:
      return { ...state, isFetching: false, isAuthenticated: true, profile: action.profile }
    case ActionTypes.LOGIN_ERROR:
      return { ...state, isFetching: false, isAuthenticated: false, profile: {}, error: action.error }
    case ActionTypes.LOGOUT_SUCCESS:
      return { ...state, isAuthenticated: false, profile: {}, apiUserId: '' }
    case ActionTypes.REQUEST_SYNC_USER:
      return { ...state, isSyncingUser: true }
    case ActionTypes.RECEIVE_SYNC_USER:
      return { ...state, isSyncingUser: false, apiUserId: action.apiUserId }
    case ActionTypes.SYNC_USER_ERROR:
      return { ...state, isSyncingUser: false, syncUserError: 'error syncing user' }
    default:
      return state
  }
}
