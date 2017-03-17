import React from 'react'

const Idea = (props)=>{
  const ideaContainerStyle = {
    paddingBottom: "3px",
    paddingTop: "3px"
  }
  const ideaStyle = {
    background: "#86aef4",
    color: "#ffffff",
    "textAlign": "center",
  }
  const idea = props.idea
  return(
    <div className="grid-center" style={ideaContainerStyle}>
      <div className="col-2" style={ideaStyle}>
    <p>problem:{idea.problem_id}| idea:{idea.title}</p>
      </div>
    </div>
  )
}
export default Idea
