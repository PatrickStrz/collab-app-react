import axios from 'axios'
import {PROBLEMS} from './types'
import {BASE_URL_PRODUCTION} from './api-commons'
// import {BASE_URL_LOCAL} from './api-commons'

// const BASE_URL_LOCAL = "http://localhost:3000"
// const BASE_URL_PRODUCTION = "https://collab-app-2017.herokuapp.com/"

const RESOURCE = "/problems"
export function getProblems(){

  const request = axios.get(`${BASE_URL_PRODUCTION}${RESOURCE}`)

  return {
      type: PROBLEMS,
      payload: request
  }

}
