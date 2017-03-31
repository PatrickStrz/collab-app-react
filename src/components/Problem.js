import React, {PropTypes} from 'react'


const Problem = (props)=>{

  const {
    handleDelete,
    handleGetIdeas,
    problem,
    isUpdating,
    isDeleting,
    showProblemUpdateForm
  } = props

  const isDeletingNow = ()=> isDeleting.includes(problem.id)
  const isUpdatingNow = ()=> isUpdating.includes(problem.id)

  const styleGrid = {
                  paddingTop:"5px",
                  paddingBottom:"5px",
                }

  const styleCol = {
                  background: isDeletingNow() ? "rgb(195, 77, 88)" : "rgb(75, 136, 241)",
                  opacity: isUpdatingNow() ? 0.5 : 1
                }
  return(
    <div className="grid-center" style={styleGrid} >
      <div className="col-6_sm-12" style={styleCol}>
        <p className='Problem'>{problem.title} | {problem.text}</p>
        <button onClick={(e)=>handleDelete(problem.id)}>Delete Problem</button>
        <button onClick={(e)=>handleGetIdeas(problem.id)}>
          get ideas for problem {problem.id}
        </button>
        <br />
        <button onClick={ ()=> showProblemUpdateForm(problem.id) }>update</button>

      </div>
    </div>
  )
}

Problem.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleGetIdeas: PropTypes.func.isRequired,
  problem: PropTypes.object.isRequired,
  isUpdating: PropTypes.array.isRequired,
  isDeleting: PropTypes.array.isRequired,
  showProblemUpdateForm: PropTypes.func.isRequired
}

export default Problem
