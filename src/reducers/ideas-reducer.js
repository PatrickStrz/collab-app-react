import {IDEAS} from '../actions/types'

const initialState = {ideasForProblems:[]}

export default function(state=initialState, action){

  if (action.type === IDEAS){

    let newState = {...state.ideasList}
    newState[action.meta.problemId] = action.payload.data
    return {...state, ideasForProblems:newState}

  }
return state
}
