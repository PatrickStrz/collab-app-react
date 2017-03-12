import axios from 'axios'
import {IDEAS} from './types'
import {BASE_URL} from './api-commons'
// const BASE_URL_LOCAL = "http://localhost:3000"
// const BASE_URL_PRODUCTION = "https://collab-app-2017.herokuapp.com/"

const RESOURCE = "/problems/"
export function getIdeas(problemId){
  const request = axios.get(`${BASE_URL}${RESOURCE}${problemId}/ideas/`)
  return {
      type: IDEAS,
      payload: request,
      meta : {problemId}
  }
}
