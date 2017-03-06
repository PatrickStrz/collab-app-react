
import {addProblem, toggleIdeasForProblem, removeProblem} from './problems-helpers'

test('addProblem should add problem object to array', ()=>{
  const startProblems = [
    {id:1, ideasVisible:false}
  ]
  const problemId= 4
  const result = addProblem(problemId, startProblems)

  const expected = [
    {id:1, ideasVisible:false},
    {id:4, ideasVisible:false}
  ]

  expect(result).toEqual(expected)
})

test('addProblem should not mutate the existing problem array', ()=>{
  const startProblems = [
    {id:1, ideasVisible:false}
  ]
  const problemId= 4
  const result = addProblem(problemId, startProblems)

  const expected = [
    {id:1, ideasVisible:false},
    {id:4, ideasVisible:false}
  ]

  expect(result).not.toBe(expected)
})

test('toggleIdeasListForProblem should toggle ideasVisible prop of problem', ()=>{
  const startProblems = [
    {id:1, ideasVisible:false},
    {id:4, ideasVisible:false},
    {id:9, ideasVisible:false},
    {id:35, ideasVisible:false},
  ]

  const problemId = 4
  const result = toggleIdeasForProblem(problemId, startProblems)

  const expected = [
    {id:1, ideasVisible:false},
    {id:4, ideasVisible:true},
    {id:9, ideasVisible:false},
    {id:35, ideasVisible:false},
  ]

  expect(result).toEqual(expected)
})

test('toggleIdeasListForProblem should not mutate existing list', ()=>{
  const startProblems = [
    {id:1, ideasVisible:false},
    {id:4, ideasVisible:false},
    {id:9, ideasVisible:false},
    {id:35, ideasVisible:false},
  ]
  const problemId = 4
  const result = toggleIdeasForProblem(problemId, startProblems)

  const expected = [
    {id:1, ideasVisible:false},
    {id:4, ideasVisible:true},
    {id:9, ideasVisible:false},
    {id:35, ideasVisible:false},
  ]

  expect(result).not.toBe(expected)
})

test('removeProblem should remove a problem by id', ()=>{
  const startProblems = [
    {id:1, ideasVisible:false},
    {id:4, ideasVisible:false},
    {id:9, ideasVisible:false},
  ]
  const problemId = 4
  const result = removeProblem(problemId, startProblems)

  const expected = [
    {id:1, ideasVisible:false},
    {id:9, ideasVisible:false},
  ]

  expect(result).toEqual(expected)
})

test('removeProblem should not mutate the existing array', ()=>{
  const startProblems = [
    {id:1, ideasVisible:false},
    {id:4, ideasVisible:false},
    {id:9, ideasVisible:false},
  ]
  const problemId = 4
  const result = removeProblem(problemId, startProblems)

  const expected = [
    {id:1, ideasVisible:false},
    {id:9, ideasVisible:false},
  ]

  expect(result).not.toBe(expected)
})
