import axios from 'axios'
import {BASE_URL} from './api-commons'
import { SubmissionError } from 'redux-form'
import * as ActionTypes from '../actions/types'

export function getProblems(){
  return function (dispatch){

    dispatch({
      type: ActionTypes.REQUEST_PROBLEMS_READ
    })

    axios.get(`${BASE_URL}/problems`)
    .then( response =>{
      dispatch({
        type: ActionTypes.RECEIVE_PROBLEMS_READ,
        payload: response
      })
    })
    .catch( response => {
      dispatch({
        type: ActionTypes.PROBLEMS_READ_ERROR,
        error: 'Error retrieving content.'
      })
    })
  }
}

export function createProblem(props){
  return function (dispatch){
    dispatch({
      type: ActionTypes.REQUEST_PROBLEM_CREATE
    })
    // return so that redux-form SubmissionError works
    return axios.post(`${BASE_URL}/problems/`,{
      title:props.title,
      text: props.text
    })
    .then(response => {
      dispatch({
        type: ActionTypes.RECEIVE_PROBLEM_CREATE,
        payload:response.data})
    })
    .catch(response => {
      dispatch({type: ActionTypes.PROBLEM_CREATE_ERROR})
      throw new SubmissionError({_error:'Oops that didn\'t work'})
    })
  }
}

export function deleteProblem(problemId){
  return (dispatch) => {
    dispatch({
      type: ActionTypes.REQUEST_PROBLEM_DELETE,
      problemId
    })
    axios.delete(`${BASE_URL}/problems/${problemId}`)
    .then(response => {
      dispatch({
        type: ActionTypes.RECEIVE_PROBLEM_DELETE,
        problemId
      })
    })
    .catch( response => {
      dispatch({
        type: ActionTypes.PROBLEM_DELETE_ERROR,
          problemId
      })
    })
  }
}

export function showProblemUpdateForm(problemId){
  return ({
    type: ActionTypes.SHOW_PROBLEM_UPDATE_FORM,
    problemId
  })
}

export function updateProblem(problemId, data){
  return (dispatch) => {
    dispatch({
      type: ActionTypes.REQUEST_PROBLEM_UPDATE,
      problemId
    })
    return axios.put(`${BASE_URL}/problems/${problemId}`,{
      title:data.title,
      text: data.text
    })
    .then(response => {
      dispatch({
        type: ActionTypes.RECEIVE_PROBLEM_UPDATE,
        problemId
      })
    })
    .catch( response => {
      dispatch({
        type: ActionTypes.PROBLEM_UPDATE_ERROR,
        problemId
      })
      throw new SubmissionError( {_error: 'oops update didn\'t work',})
    })
  }
}

export const showProblemCreateForm = ()=> {
  return({
    type: ActionTypes.SHOW_PROBLEM_CREATE_FORM
  })
}
