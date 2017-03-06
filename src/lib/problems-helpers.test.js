
import {addProblemToState} from './problems-helpers'

test('addProblemToState should should add problem ui state object to the existing problem array', ()=>{
  const startProblems = [
    {id:1, ideasListToggle:false}
  ]
  const problemId= 4

  const result = addProblemToState(problemId, startProblems)

  const expected = [
    {id:1, ideasListToggle:false},
    {id:4, ideasListToggle:false}
  ]

  expect(result).toEqual(expected)

})

test('addProblemToUiState should not mutate the existing problem array', ()=>{
  const startProblems = [
    {id:1, ideasListToggle:false}
  ]
  const problemId= 4

  const result = addProblemToState(problemId, startProblems)

  const expected = [
    {id:1, ideasListToggle:false},
    {id:4, ideasListToggle:false}
  ]

  expect(result).not.toBe(expected)

})
