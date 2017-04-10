import React, {PropTypes} from 'react'
import ProblemUpdateForm from './ProblemUpdateForm'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import Delete from 'material-ui/svg-icons/action/delete'
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import ArrowDropDownCircle from 'material-ui/svg-icons/navigation/arrow-drop-down-circle'

const Problem = (props)=>{

  const {
    handleDelete,
    handleGetIdeas,
    visibleProblemUpdateForms,
    submitUpdateProblem,
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
    background: "rgb(255, 255, 255)",
    opacity: isUpdatingNow() ? 0.5 : 1
  }

  const styleTitle = {
    background: isDeletingNow() ? "rgb(213, 50, 50)" : "rgb(59, 87, 200)",
    color:'rgb(255, 255, 255)'
  }

  const renderProblemUpdateForm = (problem) =>{
    return(
      <ProblemUpdateForm
        initialValues={{title:problem.title, text:problem.text}}
        // partial assigned problem.id to pass along when redux form is submitted
        onSubmit={submitUpdateProblem.bind(null,problem.id)}
        form={`problemUpdate${problem.id}`}
      />
    )
  }

  return(
        <div className="grid-center" style={styleGrid} >
          <div className="col-10_sm-12" >
            <Card style={styleCol}>
              <CardTitle style={styleTitle}>{problem.title}</CardTitle>
              <CardText>{problem.text}</CardText>
              <IconButton onClick={(e)=>handleGetIdeas(problem.id)}>
                <ArrowDropDownCircle
                  color="rgb(200, 59, 101)"
                  hoverColor="rgb(4, 179, 203)"
                />
              </IconButton>
                <IconButton onClick={()=> showProblemUpdateForm(problem.id)}>
                  <ModeEdit
                    color="rgb(184, 176, 176)"
                    hoverColor="rgb(4, 179, 203)"
                  />
                </IconButton>
              <IconButton onClick={()=>handleDelete(problem.id)}>
                <Delete
                  color="rgb(184, 176, 176)"
                  hoverColor="rgb(209, 65, 65)"
                />
              </IconButton>
              { visibleProblemUpdateForms.includes(problem.id) && renderProblemUpdateForm(problem)}
            </Card>
          </div>
        </div>
  )
}

Problem.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleGetIdeas: PropTypes.func.isRequired,
  visibleProblemUpdateForms: PropTypes.array.isRequired,
  submitUpdateProblem: PropTypes.func.isRequired,
  problem: PropTypes.object.isRequired,
  isUpdating: PropTypes.array.isRequired,
  isDeleting: PropTypes.array.isRequired,
  showProblemUpdateForm: PropTypes.func.isRequired
}

export default Problem
