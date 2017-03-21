import {PROBLEMS,
        DELETE_PROBLEM,
        NEW_PROBLEM,
        UPDATE_PROBLEM} from '../actions/types'

const initialState = {problemsList:[],problemsReload:false}

export default function(state=initialState, action){

  switch (action.type) {
    case PROBLEMS:
      return { ...state, problemsList:action.payload.data, problemsReload:false}
    case DELETE_PROBLEM :
      return {...state, problemsReload:true}
    case NEW_PROBLEM :
      return {...state, problemsReload:true}
    case UPDATE_PROBLEM :
      return {...state, problemsReload:true}
    default:
      return state
  }
}
