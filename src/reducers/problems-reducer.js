import {REQUEST_PROBLEMS_READ,
        RECEIVE_PROBLEMS_READ,
        PROBLEMS_READ_ERROR,
        PROBLEM_DELETE,
        PROBLEM_CREATE,
        PROBLEM_UPDATE,
        PROBLEM_CREATE_ERROR} from '../actions/types'

//dan abramov idiomatic redux lesson 20/21 for refactoring reducers
const initialState = {problemsList:[], isFetching:false, didInvalidate:false}

export default function(state=initialState, action){

  switch (action.type) {
    case REQUEST_PROBLEMS_READ:
      return { ...state, isFetching:true}
    case RECEIVE_PROBLEMS_READ:
      return { ...state, problemsList:action.payload.data, isFetching:false, didInvalidate:false}

    case PROBLEMS_READ_ERROR:
      return { ...state, problemsReadError: action.payload}

    case PROBLEM_DELETE :
      return {...state, didInvalidate:true}

    case PROBLEM_CREATE :
      return {...state, didInvalidate:true}

    case PROBLEM_CREATE_ERROR :
      return {...state, problemsCreateError: action.payload}

    case PROBLEM_UPDATE :
      return {...state, didInvalidate:true}

    default:
      return state
  }
}
