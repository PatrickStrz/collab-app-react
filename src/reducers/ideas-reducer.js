import {IDEAS_READ} from '../actions/types'

const initialState = {ideasForProblems:[]}

export default function(state=initialState, action){

  if (action.type === IDEAS_READ){
    // normalizes data to -> {problem1: [idea1,idea2,ideas3], problem2:[idea1,idea2]}
    let newState = {...state.ideasForProblems}
    newState[action.meta.problemId] = action.payload.data
    return {...state, ideasForProblems:newState}
  }
return state
}
