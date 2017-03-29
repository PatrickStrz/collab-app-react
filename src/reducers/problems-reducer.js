import {REQUEST_PROBLEMS_READ,
        RECEIVE_PROBLEMS_READ,
        PROBLEMS_READ_ERROR,
        // PROBLEM_DELETE,
        REQUEST_PROBLEM_DELETE,
        RECEIVE_PROBLEM_DELETE,
        PROBLEM_CREATE,
        // PROBLEM_UPDATE,
        REQUEST_PROBLEM_UPDATE,
        RECEIVE_PROBLEM_UPDATE,
        PROBLEM_CREATE_ERROR} from '../actions/types'

import {removeValueFromList} from '../lib/array-helpers'

//dan abramov idiomatic redux lesson 20/21 for refactoring reducers
const initialState = {
  problemsList: [],
  isFetching: false,
  didInvalidate: false,
  isUpdating: [],
  isDeleting: [] }

export default function(state=initialState, action){

  switch (action.type) {
    case REQUEST_PROBLEMS_READ:
      return { ...state, isFetching: true, didInvalidate: false}

    case RECEIVE_PROBLEMS_READ:
      return { ...state, problemsList: action.payload.data, isFetching: false, didInvalidate: false}

    case PROBLEMS_READ_ERROR:
      return { ...state, problemsReadError: action.payload, isFetching: false}

    case PROBLEM_CREATE:
      return {...state, didInvalidate: true}

    case PROBLEM_CREATE_ERROR:
      return { ...state, problemsCreateError: action.payload }

    case REQUEST_PROBLEM_UPDATE:
      const newIsUpdating = [...state.isUpdating, action.problemId]
      return {...state, isUpdating: newIsUpdating }

    case RECEIVE_PROBLEM_UPDATE:
      const nextIsUpdating = removeValueFromList(action.problemId, state.isUpdating)
      return { ...state, didInvalidate: true, isUpdating: nextIsUpdating }

    case REQUEST_PROBLEM_DELETE:
      const newIsDeleting = [...state.isDeleting, action.problemId]
      return { ...state, isDeleting: newIsDeleting }

    case RECEIVE_PROBLEM_DELETE:
      const nextIsDeleting = removeValueFromList(action.problemId, state.isDeleting)
      return { ...state, didInvalidate: true, isDeleting: nextIsDeleting }

    default:
      return state
  }
}
