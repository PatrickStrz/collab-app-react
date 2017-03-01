import {IDEAS} from '../actions/types'

const initialState = {ideasList:[]}

export default function(state=initialState, action){
  if (action.type === IDEAS){
    console.log(action.payload.data)
    return { ...state, ideasList:action.payload.data}
  }
  return state
}
