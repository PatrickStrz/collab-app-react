
export const addProblem = (problemId,problems)=>{

  const problem = {id:problemId, ideasVisible:false}

  return [...problems, problem]

}

export const toggleIdeasForProblem = (problemId,problems)=>{

  const problemIndex = problems.findIndex(problem => problem.id === problemId)

  const problem = problems[problemIndex]

  problem.ideasVisible = !problem.ideasVisible

  return [...problems.slice(0,problemIndex), problem ,...problems.slice(problemIndex+1)]

}

export const removeProblem = (problemId,problems)=>{

  const removeIndex = problems.findIndex(problem => problem.id === problemId)
  console.log(removeIndex)

  return [...problems.slice(0,removeIndex),...problems.slice(removeIndex+1)
  ]

}
