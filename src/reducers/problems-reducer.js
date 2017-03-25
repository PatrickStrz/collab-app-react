import {PROBLEMS_READ,
        PROBLEMS_READ_ERROR,
        PROBLEM_DELETE,
        PROBLEM_CREATE,
        PROBLEM_UPDATE,
        PROBLEM_CREATE_ERROR} from '../actions/types'

//dan abramov idiomatic redux lesson 20/21 for refactoring reducers
const initialState = {problemsList:[],problemsReload:false}

export default function(state=initialState, action){

  switch (action.type) {
    case PROBLEMS_READ:
      return { ...state, problemsList:action.payload.data, problemsReload:false}

    case PROBLEMS_READ_ERROR:
      return { ...state, problemsReadError: action.payload}

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
