import React, {PropTypes} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardTitle, CardText} from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import Delete from 'material-ui/svg-icons/action/delete'
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import ArrowDropDownCircle from 'material-ui/svg-icons/navigation/arrow-drop-down-circle'

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
    background: "rgb(255, 255, 255)",
    opacity: isUpdatingNow() ? 0.5 : 1
  }

  const styleTitle = {
    background: isDeletingNow() ? "rgb(213, 50, 50)" : "rgb(59, 87, 200)",
    color:'rgb(255, 255, 255)'
  }

  return(
    <MuiThemeProvider>
        <div className="grid-center" style={styleGrid} >
          <div className="col-10_sm-12" >
            <Card style={styleCol}>
              <CardTitle style={styleTitle}>{problem.title}</CardTitle>
              <CardText>{problem.text}</CardText>
              <IconButton>
                <ArrowDropDownCircle
                  onClick={(e)=>handleGetIdeas(problem.id)}
                  color="rgb(200, 59, 101)"
                  hoverColor="rgb(4, 179, 203)"
                />
              </IconButton>
              <IconButton>
                <ModeEdit
                  onClick={()=> showProblemUpdateForm(problem.id)}
                  color="rgb(184, 176, 176)"
                  hoverColor="rgb(4, 179, 203)"
                />
              </IconButton>
              <IconButton>
                <Delete onClick={()=>handleDelete(problem.id)}
                  color="rgb(184, 176, 176)"
                  hoverColor="rgb(209, 65, 65)"
                />
              </IconButton>
            </Card>
          </div>
        </div>
    </MuiThemeProvider>
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
