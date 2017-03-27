import React, {PropTypes} from 'react'

const Idea = ({idea})=>{
  const ideaContainerStyle = {
    paddingBottom: "3px",
    paddingTop: "3px"
  }
  const ideaStyle = {
    background: "#86aef4",
    color: "#ffffff",
    "textAlign": "center",
  }
  return(
    <div className="grid-center" style={ideaContainerStyle}>
      <div className="col-2" style={ideaStyle}>
    <p>problem:{idea.problem_id}| idea:{idea.title}</p>
      </div>
    </div>
  )
}

Idea.propTypes = {
  idea: PropTypes.object.isRequired
}

export default Idea
