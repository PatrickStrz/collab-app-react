import axios from 'axios'
import {IDEAS_READ} from './types'
import {BASE_URL} from './api-commons'

const RESOURCE = "/problems/"
export function getIdeas(problemId){
  const request = axios.get(`${BASE_URL}${RESOURCE}${problemId}/ideas/`)
  return {
      type: IDEAS_READ,
      payload: request,
      meta : {problemId}
  }
}
