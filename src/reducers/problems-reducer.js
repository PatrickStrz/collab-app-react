import {PROBLEMS_READ,
        PROBLEM_DELETE,
        PROBLEM_CREATE,
        PROBLEM_UPDATE,
        PROBLEM_CREATE_ERROR} from '../actions/types'

const initialState = {problemsList:[],problemsReload:false}

export default function(state=initialState, action){

  switch (action.type) {
    case PROBLEMS_READ:
      return { ...state, problemsList:action.payload.data, problemsReload:false}

    case PROBLEM_DELETE :
      return {...state, problemsReload:true}

    case PROBLEM_CREATE :
      return {...state, problemsReload:true}

    case PROBLEM_CREATE_ERROR :
      return {...state, problemsCreateError: action.payload}

    case PROBLEM_UPDATE :
      return {...state, problemsReload:true}

    default:
      return state
  }
}
