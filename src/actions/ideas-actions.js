import axios from 'axios'
import {IDEAS} from './types'

// const BASE_URL_LOCAL = "http://localhost:3000"
const BASE_URL_PRODUCTION = "https://collab-app-2017.herokuapp.com/"

const RESOURCE = "/problems/"
export function getIdeas(problemId){
  // const problemId = 1
  const request = axios.get(`${BASE_URL_PRODUCTION}${RESOURCE}${problemId}/ideas/`)
  return {
      type: IDEAS,
      payload: request
  }

}
