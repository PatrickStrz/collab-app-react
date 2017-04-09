import axios from 'axios'
import {BASE_URL} from './api-commons'
import {
  REQUEST_CREATE_OR_UPDATE_USER,
  RECEIVE_CREATE_OR_UPDATE_USER,
  CREATE_OR_UPDATE_USER_ERROR,
} from './types'

//keeps auth0 users in sync with api
export function createOrUpdateUser(profile){
  return (dispatch)=>{
    dispatch({
      type: REQUEST_CREATE_OR_UPDATE_USER
    })
    axios.post(`${BASE_URL}/users`, profile)
    .then(response =>{
      dispatch({
        type: RECEIVE_CREATE_OR_UPDATE_USER,
        payload: 'error creating/syncing user'
      })
    })
    .catch(response=>{
      dispatch({
        type: CREATE_OR_UPDATE_USER_ERROR,
        payload: 'error creating/syncing user'
      })
    })
  }
}
