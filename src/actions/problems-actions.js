import axios from 'axios'
import {PROBLEMS_READ,
        PROBLEM_DELETE,
        PROBLEM_CREATE,
        PROBLEM_UPDATE,
        PROBLEM_CREATE_ERROR} from './types'

import {BASE_URL} from './api-commons'

export function newProblem(props){
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

export function getProblems(){

  const request = axios.get(`${BASE_URL}/problems`)

  return {
      type: PROBLEMS_READ,
      payload: request
  }
}
