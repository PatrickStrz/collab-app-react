
export const removeValueFromList = (value,list)=>{
  const removeIndex = list.indexOf(value)
  if (removeIndex !== -1){
    return [...list.slice(0, removeIndex), ...list.slice(removeIndex+1)]
  }
  else{
    return [...list]
  }
}

export const removeProblem = (problemId,problems)=> {
  const removeIndex = problems.indexOf(problemId)
  return [...problems.slice(0,removeIndex),...problems.slice(removeIndex+1)]
}
