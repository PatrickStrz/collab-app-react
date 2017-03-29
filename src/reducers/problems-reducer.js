import {REQUEST_PROBLEMS_READ,
        RECEIVE_PROBLEMS_READ,
        PROBLEMS_READ_ERROR,
        PROBLEM_DELETE,
        REQUEST_PROBLEM_DELETE,
        RECEIVE_PROBLEM_DELETE,
        PROBLEM_CREATE,
        PROBLEM_UPDATE,
        PROBLEM_CREATE_ERROR} from '../actions/types'

import {removeValueFromList} from '../lib/array-helpers'

//dan abramov idiomatic redux lesson 20/21 for refactoring reducers
const initialState = {problemsList:[], isFetching:false, didInvalidate:false, isDeleting:[]}

export default function(state=initialState, action){

  switch (action.type) {
    case REQUEST_PROBLEMS_READ:
      return { ...state, isFetching:true, didInvalidate:false}
      
    case RECEIVE_PROBLEMS_READ:
      return { ...state, problemsList:action.payload.data, isFetching:false, didInvalidate:false}

    case PROBLEMS_READ_ERROR:
      return { ...state, problemsReadError: action.payload, isFetching:false}

    case PROBLEM_DELETE :
      return {...state, didInvalidate:true}

    case REQUEST_PROBLEM_DELETE :
      const isDeleting = [...state.isDeleting, action.problemId]
      return { ...state, isDeleting:isDeleting}

    case RECEIVE_PROBLEM_DELETE :
      const updatedIsDeleting = removeValueFromList(action.problemId, state.isDeleting)
      return { ...state, didInvalidate:true, isDeleting: updatedIsDeleting }

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
