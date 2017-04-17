import * as ActionTypes from '../actions/types'

import {removeValueFromList ,toggleValueInList} from '../lib/array-helpers'

//dan abramov idiomatic redux lesson 20/21 for refactoring reducers
const initialState = {
  problemsList: [],
  isFetching: false,
  didInvalidate: false,
  problemsReadError: '',
  isCreating: false,
  isUpdating: [],
  isDeleting: [],
  problemCreateFormVisible:false,
  visibleProblemUpdateForms:[],
}

export default function(state=initialState, action){

  switch (action.type) {
    case ActionTypes.LOGOUT_SUCCESS:
      return { ...state, ...initialState }

    case ActionTypes.REQUEST_PROBLEMS_READ:
      return { ...state, isFetching: true, didInvalidate: false, problemsReadError: '' }

    case ActionTypes.RECEIVE_PROBLEMS_READ:
      return { ...state, problemsList: action.payload.data, isFetching: false, didInvalidate: false }

    case ActionTypes.PROBLEMS_READ_ERROR:
      return { ...state, problemsReadError: action.error, isFetching: false }

    case ActionTypes.SHOW_PROBLEM_CREATE_FORM:
      return{ ...state, problemCreateFormVisible: !state.problemCreateFormVisible }

    case ActionTypes.REQUEST_PROBLEM_CREATE:
      return { ...state, isCreating:true }

    case ActionTypes.RECEIVE_PROBLEM_CREATE:
      return { ...state, didInvalidate: true, isCreating:false, problemCreateFormVisible:false }

    case ActionTypes.PROBLEM_CREATE_ERROR:
      return { ...state, isCreating: false }

    //used brackets to create a block nextIsUpdating can be defined multiple times
    // scopes the variable to the block
    case ActionTypes.SHOW_PROBLEM_UPDATE_FORM: {
      const nextVisibleProblemUpdateForms = toggleValueInList(action.problemId, state.visibleProblemUpdateForms)
      return { ...state, visibleProblemUpdateForms: nextVisibleProblemUpdateForms }
    }

    case ActionTypes.REQUEST_PROBLEM_UPDATE: {
      const nextIsUpdating = [...state.isUpdating, action.problemId]
      return { ...state, isUpdating: nextIsUpdating }
    }

    case ActionTypes.RECEIVE_PROBLEM_UPDATE: {
      const nextIsUpdating = removeValueFromList(action.problemId, state.isUpdating)
      const nextVisibleProblemUpdateForms = removeValueFromList(action.problemId, state.visibleProblemUpdateForms)
      return {
        ...state,
        didInvalidate: true,
        isUpdating: nextIsUpdating,
        visibleProblemUpdateForms: nextVisibleProblemUpdateForms,
      }
    }

    case ActionTypes.PROBLEM_UPDATE_ERROR: {
      const nextIsUpdating = removeValueFromList(action.problemId, state.isUpdating)
      return { ...state, isUpdating: nextIsUpdating }
    }

    case ActionTypes.REQUEST_PROBLEM_DELETE:{
      const newIsDeleting = [...state.isDeleting, action.problemId]
      return { ...state, isDeleting: newIsDeleting }
    }

    case ActionTypes.RECEIVE_PROBLEM_DELETE:{
      const nextIsDeleting = removeValueFromList(action.problemId, state.isDeleting)
      return { ...state, didInvalidate: true, isDeleting: nextIsDeleting }
    }

    case ActionTypes.PROBLEM_DELETE_ERROR: {
      const nextIsDeleting = removeValueFromList(action.problemId, state.isDeleting)
      return { ...state, didInvalidate: true, isDeleting: nextIsDeleting }
    }

    default:
      return state
  }
}
