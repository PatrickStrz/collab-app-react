import axios from 'axios'
import {PROBLEMS, DELETE_PROBLEM, NEW_PROBLEM} from './types'
// import {BASE_URL_PRODUCTION} from './api-commons'
import {BASE_URL} from './api-commons'

// const BASE_URL_LOCAL = "http://localhost:3000"
// const BASE_URL_PRODUCTION = "https://collab-app-2017.herokuapp.com/"



export function newProblem(props){
  const request = axios.post(`${BASE_URL}/problems/`,{
    title:props.title,
    text: props.text
  })
  
   return {
    type: NEW_PROBLEM,
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
