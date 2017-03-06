
export const addProblemToState = (problemId,problems)=>{

const problem = {id:problemId, ideasListToggle:false}

return [...problems, problem]

}
