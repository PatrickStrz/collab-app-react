import {
  REQUEST_CREATE_OR_UPDATE_USER,
  RECEIVE_CREATE_OR_UPDATE_USER,
  CREATE_OR_UPDATE_USER_ERROR
} from '../actions/types'

const initialState = { user_sync_in_progress: false , user_synced: false , user_sync_error:'' }

export default function(state=initialState, action){

  switch (action.type) {
    case REQUEST_CREATE_OR_UPDATE_USER:
      return { ...state, user_sync_in_progress: true, user_synced: false }

    case RECEIVE_CREATE_OR_UPDATE_USER:
      return { ...state, user_sync_in_progress: false, user_synced: true }

    case CREATE_OR_UPDATE_USER_ERROR:
      return {
        ...state,
        user_sync_in_progress: false,
        user_synced: false,
        user_sync_error:'error syncing user'
      }

    default:
      return state
  }
}
