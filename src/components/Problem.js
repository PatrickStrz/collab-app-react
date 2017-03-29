import React, {PropTypes} from 'react'


const Problem = ({handleDelete, handleGetIdeas, problem, isDeleting})=>{
  const isDeletingNow = ()=> isDeleting.includes(problem.id)

  const styleGrid = { paddingTop:"5px",
                  paddingBottom:"5px",
                  opacity: isDeletingNow() ? 0.5 : 1,
                  // background: isDeletingNow() && "rgb(195, 77, 88)",
                }
  const styleCol = {
                  background: isDeletingNow() ? "rgb(195, 77, 88)" : "rgb(75, 136, 241)"
                }
  return(

    <div className="grid-center" style={styleGrid} >
      <div className="col-6" style={styleCol}>
        <p className='Problem'>{problem.title} | {problem.text}</p>
        <button onClick={(e)=>handleDelete(problem.id)}>Delete Problem</button>
        <button onClick={(e)=>handleGetIdeas(problem.id)}>
          get ideas for problem {problem.id}
        </button>
        <br />
      </div>
    </div>
  )
}

Problem.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleGetIdeas: PropTypes.func.isRequired,
  problem: PropTypes.object.isRequired,
  isDeleting: PropTypes.array.isRequired
}

export default Problem
