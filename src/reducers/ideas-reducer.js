import {IDEAS} from '../actions/types'

const initialState = {ideasList:[]}

export default function(state=initialState, action){

  if (action.type === IDEAS){

    let newState = {...state.ideasList}
    newState[action.meta.problemId] = action.payload.data
    return {...state, ideasList:newState}
    
  }
return state
}
