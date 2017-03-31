import {
        SHOW_PROBLEM_CREATE_FORM,
        REQUEST_PROBLEM_CREATE,
        RECEIVE_PROBLEM_CREATE,
        PROBLEM_CREATE_ERROR,

        REQUEST_PROBLEMS_READ,
        RECEIVE_PROBLEMS_READ,
        PROBLEMS_READ_ERROR,

        REQUEST_PROBLEM_DELETE,
        RECEIVE_PROBLEM_DELETE,
        PROBLEM_DELETE_ERROR,

        SHOW_PROBLEM_UPDATE_FORM,
        REQUEST_PROBLEM_UPDATE,
        RECEIVE_PROBLEM_UPDATE,
        PROBLEM_UPDATE_ERROR,
        } from '../actions/types'

import {removeValueFromList ,toggleValueInList} from '../lib/array-helpers'

//dan abramov idiomatic redux lesson 20/21 for refactoring reducers
const initialState = {
  problemsList: [],
  isFetching: false,
  didInvalidate: false,
  isCreating: false,
  isUpdating: [],
  isDeleting: [],
  problemCreateFormVisible:false,
  visibleProblemUpdateForms:[],
}

export default function(state=initialState, action){

  switch (action.type) {
    case REQUEST_PROBLEMS_READ:
      return { ...state, isFetching: true, didInvalidate: false}

    case RECEIVE_PROBLEMS_READ:
      return { ...state, problemsList: action.payload.data, isFetching: false, didInvalidate: false}

    case PROBLEMS_READ_ERROR:
      return { ...state, problemsReadError: action.payload, isFetching: false}

    case SHOW_PROBLEM_CREATE_FORM:
      return{ ...state, problemCreateFormVisible: !state.problemCreateFormVisible }

    case REQUEST_PROBLEM_CREATE:
      return {...state, isCreating:true }

    case RECEIVE_PROBLEM_CREATE:
      return {...state, didInvalidate: true, isCreating:false, problemCreateFormVisible:false}

    case PROBLEM_CREATE_ERROR:
      return { ...state, isCreating: false }

    case SHOW_PROBLEM_UPDATE_FORM: {
      const nextVisibleProblemUpdateForms = toggleValueInList(action.problemId, state.visibleProblemUpdateForms)
      return {...state, visibleProblemUpdateForms: nextVisibleProblemUpdateForms }
    }

    case REQUEST_PROBLEM_UPDATE: {
      const nextIsUpdating = [...state.isUpdating, action.problemId]
      return {...state, isUpdating: nextIsUpdating }
    }

    case RECEIVE_PROBLEM_UPDATE: {
      const nextIsUpdating = removeValueFromList(action.problemId, state.isUpdating)
      const nextVisibleProblemUpdateForms = removeValueFromList(action.problemId, state.visibleProblemUpdateForms)
      return {
        ...state,
        didInvalidate: true,
        isUpdating: nextIsUpdating,
        visibleProblemUpdateForms: nextVisibleProblemUpdateForms,
      }
    }

    case PROBLEM_UPDATE_ERROR: {
      const nextIsUpdating = removeValueFromList(action.problemId, state.isUpdating)
      return { ...state, didInvalidate: true, isUpdating: nextIsUpdating }
    }

    case REQUEST_PROBLEM_DELETE:{
      const newIsDeleting = [...state.isDeleting, action.problemId]
      return { ...state, isDeleting: newIsDeleting }
    }

    case RECEIVE_PROBLEM_DELETE:{
      const nextIsDeleting = removeValueFromList(action.problemId, state.isDeleting)
      return { ...state, didInvalidate: true, isDeleting: nextIsDeleting }
    }

    case PROBLEM_DELETE_ERROR: {
      const nextIsDeleting = removeValueFromList(action.problemId, state.isDeleting)
      return { ...state, didInvalidate: true, isDeleting: nextIsDeleting }
    }

    default:
      return state
  }
}
