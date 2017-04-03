import React,{Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { addProblem, removeProblem, } from '../lib/problems-helpers'
import  ProblemCreateForm from '../components/ProblemCreateForm'
import  ProblemUpdateForm from '../components/ProblemUpdateForm'
import Idea from '../components/Idea'
import Problem from '../components/Problem'
import LoadingBar from '../components/commons/LoadingBar'
import ReloadButton from '../components/commons/ReloadButton'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'



class Problems extends Component {

  state = { ideasVisibleForProblems: [] }

  componentDidMount(){
    this.props.getProblems()
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.problemsDidInvalidate){
      this.props.getProblems()
    }
  }

  showProblemUpdateForm = (problem) =>{
    const {updateProblem} = this.props
    return(
      <ProblemUpdateForm
        initialValues={{title:problem.title, text:problem.text}}
        // partial assigned problem.id to pass along when redux form is submitted
        onSubmit={updateProblem.bind(null,problem.id)}
        form={`problemUpdate${problem.id}`}
      />
    )
  }

  listProblems = (problems) => {

    const {
      deleteProblem,
      isUpdating,
      isDeleting,
      visibleProblemUpdateForms,
      showProblemUpdateForm,
    } = this.props

    return problems.map((problem)=> {
      return (
        <div key={'problem-'+problem.id}>
          <Problem
            handleDelete={deleteProblem}
            handleGetIdeas={this.getIdeasClickHandler}
            problem={problem}
            isUpdating={isUpdating}
            isDeleting={isDeleting}
            showProblemUpdateForm={showProblemUpdateForm}
          />

          { visibleProblemUpdateForms.includes(problem.id) && this.showProblemUpdateForm(problem)}

          <div>
            {this.state.ideasVisibleForProblems.includes(problem.id) && this.listIdeasForProblems(problem.id)}
          </div>
        </div>
      )
    })
  }

  getIdeasClickHandler = (problemId)=> {
    this.props.getIdeas(problemId)
    this.setState({toggle: !this.state.toggle})
    this.toggleIdeasForProblem(problemId)
  }

  toggleIdeasForProblem = (problemId)=>{
    let ideasVisibleForProblems = this.state.ideasVisibleForProblems
    let toggledProblems = []
    if (ideasVisibleForProblems.includes(problemId)) {
      toggledProblems = removeProblem(problemId,ideasVisibleForProblems)
    }
    else {
      toggledProblems = addProblem(problemId,ideasVisibleForProblems)
    }
    this.setState({ideasVisibleForProblems:toggledProblems})
  }

  listIdeasForProblems(problemId){
    const ideasForProblems = this.props.ideasForProblems
    if (ideasForProblems.hasOwnProperty(problemId) && ideasForProblems[problemId].length !== 0) {
      return ideasForProblems[problemId].map((idea)=>{
        return <Idea key={'idea'+idea.id} idea={idea}  />
      })
    }
    else{
      return <p>No ideas here, please add one :) +</p>
    }
  }

  displayProblemCreateForm = ()=> {
    const {createProblem, isCreating} = this.props
    return(
      <div style={{opacity: isCreating ? 0.5 : 1.0 }}>
        <ProblemCreateForm
          onSubmit={createProblem}
        />
    </div>
    )
  }

  render() {

    const {
          problemsList,
          problemsIsFetching,
          getProblems,
          problemsReadError,
          showProblemCreateForm,
          problemCreateFormVisible,

        } = this.props

    return (

      <div style={{opacity: problemsIsFetching ? 0.5 : 1.0 }}>
        <MuiThemeProvider>
          <RaisedButton
            label="reload"
            primary={true}
            onClick={getProblems}
          />
        </MuiThemeProvider>
        <br></br>
        <br></br>
        <div className="grid-center">
          <div className="col-8_sm-12">
            {problemsIsFetching && <LoadingBar /> }
          </div>
        </div>
        <div>
          {problemsReadError && <strong>{problemsReadError}</strong>}
          {this.listProblems(problemsList)}
        </div>
          <br></br>
          <MuiThemeProvider>
            <RaisedButton
              label="Add a new problem"
              secondary={true}
              onClick={(e)=>{showProblemCreateForm()}}
            />
          </MuiThemeProvider>
          { problemCreateFormVisible && this.displayProblemCreateForm() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    likes: state.likes,
    problemsList: state.problems.problemsList,
    problemsReadError: state.problems.problemsReadError,
    ideasForProblems: state.ideas.ideasForProblems,
    isCreating: state.problems.isCreating,
    problemsIsFetching: state.problems.isFetching,
    problemsDidInvalidate: state.problems.didInvalidate,
    isUpdating: state.problems.isUpdating,
    isDeleting: state.problems.isDeleting,
    problemCreateFormVisible: state.problems.problemCreateFormVisible,
    visibleProblemUpdateForms: state.problems.visibleProblemUpdateForms
  }
}

export default connect(mapStateToProps, actions)(Problems);
