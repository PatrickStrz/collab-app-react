import React, {PropTypes} from 'react'


const Problem = ({handleDelete, handleGetIdeas, problem})=>{
  return(

    <div className="grid-center" style={{ paddingTop:"5px", paddingBottom:"5px"}} >
      <div className="col-6" style={{background:"rgb(75, 136, 241)"}}>
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
}

export default Problem
