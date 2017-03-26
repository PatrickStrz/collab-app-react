import axios from 'axios'
import {
  // PROBLEMS_READ,
        // PROBLEMS_READ_ERROR,
        PROBLEM_DELETE,
        PROBLEM_CREATE,
        PROBLEM_UPDATE,
        PROBLEM_CREATE_ERROR,
        REQUEST_PROBLEMS_READ,
        RECEIVE_PROBLEMS_READ,
        PROBLEMS_READ_ERROR,
        // INVALIDATE_PROBLEMS,
        // REQUEST_PROBLEM_DELETE,
        // RECEIVE_PROBLEM_DELETE,
        // PROBLEM_DELETE_ERROR,
        // REQUEST_PROBLEM_CREATE,
        // RECEIVE_PROBLEM_CREATE,
        // PROBLEM_CREATE_ERROR,
        // REQUEST_PROBLEM_UPDATE,
        // RECEIVE_PROBLEM_UPDATE,
        // PROBLEM_UPDATE_ERROR,
      } from './types'

import {BASE_URL} from './api-commons'

export function getProblems(){
  return function (dispatch){

    dispatch({
      type: REQUEST_PROBLEMS_READ
    })

    axios.get(`${BASE_URL}/problems`)
    .then( response =>{
      dispatch({
        type: RECEIVE_PROBLEMS_READ,
        payload: response
      })
    })
    .catch( response => {
      dispatch({
        type: PROBLEMS_READ_ERROR,
        payload: 'Error retrieving content.'
      })
    })
  }
}


export function createProblem(props){
  return function (dispatch){
    axios.post(`${BASE_URL}/problems/`,{
      title:props.title,
      text: props.text
    })
    .then(response => {
      dispatch({type:PROBLEM_CREATE, payload:response.data})
    })
    .catch(response => {
      dispatch({type:PROBLEM_CREATE_ERROR, payload:'error trying to submit problem'})
    })
  }
}

export function updateProblem(problemId, props){
  const request = axios.put(`${BASE_URL}/problems/${problemId}`,{
    title:props.title,
    text: props.text
  })

   return {
    type: PROBLEM_UPDATE,
    payload: request
  }
}

export function deleteProblem(problemId){
  const request = axios.delete(`${BASE_URL}/problems/${problemId}`)

  return {
    type: PROBLEM_DELETE,
    payload: request
  }
}
