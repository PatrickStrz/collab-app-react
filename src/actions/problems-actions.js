import axios from 'axios'
import {PROBLEMS,
        DELETE_PROBLEM,
        NEW_PROBLEM,
        UPDATE_PROBLEM,} from './types'
// import {BASE_URL_PRODUCTION} from './api-commons'
import {BASE_URL} from './api-commons'
// const BASE_URL_LOCAL = "http://localhost:3000"
// const BASE_URL_PRODUCTION = "https://collab-app-2017.herokuapp.com/"


export function newProblem(props){
  return function (dispatch){
    axios.post(`${BASE_URL}/problems/`,{
      title:props.title,
      text: props.text
    })
    .then(response => {
      dispatch({type:NEW_PROBLEM, payload:response.data})
    })
  }
}

export function updateProblem(problemId, props){
  const request = axios.put(`${BASE_URL}/problems/${problemId}`,{
    title:props.title,
    text: props.text
  })

   return {
    type: UPDATE_PROBLEM,
    payload: request
  }
}

export function deleteProblem(problemId){
  const request = axios.delete(`${BASE_URL}/problems/${problemId}`)

  return {
    type: DELETE_PROBLEM,
    payload: request
  }
}

export function getProblems(){

  const request = axios.get(`${BASE_URL}/problems`)

  return {
      type: PROBLEMS,
      payload: request
  }
}
