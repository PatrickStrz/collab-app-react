import React, {PropTypes} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'


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
    background: isDeletingNow() ? "rgb(195, 77, 88)" : "#ffffff",
    opacity: isUpdatingNow() ? 0.5 : 1
  }
  return(
    <MuiThemeProvider>

        <div className="grid-center" style={styleGrid} >

          <div className="col-10_sm-12" >
            <Card style={styleCol}>
              <CardTitle style={{background:'#3b57c8', color:'#ffffff'}}>{problem.title}</CardTitle>
              <CardText>{problem.text}</CardText>
            {/* <p className='Problem'></p> */}
            <RaisedButton
              label={`get ideas for problem ${problem.id}`} onClick={(e)=>handleGetIdeas(problem.id)}
            />

            <RaisedButton
              label='update'onClick={ ()=> showProblemUpdateForm(problem.id) }
              style={{paddingRight:'2px'}}
            />
            <RaisedButton
              label="Delete"
              onClick={(e)=>handleDelete(problem.id)}
              style={{paddingRight:'2px'}}
            />

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
