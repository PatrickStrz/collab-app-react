import React,{Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { addProblem, removeProblem, } from '../lib/problems-helpers'
import  ProblemCreateForm from '../components/ProblemCreateForm'
import Idea from '../components/Idea'
import Problem from '../components/Problem'
import LoadingBar from '../components/ui/LoadingBar'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class Problems extends Component {


  state = { ideasVisibleForProblems: [] }

    constructor(props) {
    super(props)
    this.props.checkLogin() // check is Auth0 lock is authenticating after login callback
  }

  componentDidMount(){
    this.props.getProblems()
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.problemsDidInvalidate){
      this.props.getProblems()
    }
  }

  listProblems = (problems) => {
    const {
      deleteProblem,
      updateProblem,
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
            visibleProblemUpdateForms={visibleProblemUpdateForms}
            submitUpdateProblem={updateProblem}
            isUpdating={isUpdating}
            isDeleting={isDeleting}
            showProblemUpdateForm={showProblemUpdateForm}
          />
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

  renderProblemCreateForm = ()=> {
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
          isAuthenticated,
          loginRequest,
          logout,
        } = this.props
    return (
      <div style={{opacity: problemsIsFetching ? 0.5 : 1.0 }}>
          <FlatButton
            label="reload"
            primary={true}
            onClick={getProblems}
          />

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
            <RaisedButton
              label="Add a new problem"
              secondary={true}
              onClick={(e)=>{ isAuthenticated ? showProblemCreateForm() : loginRequest() }}
            />

          { problemCreateFormVisible && this.renderProblemCreateForm() }
          <RaisedButton
            label="Signout"
            secondary={true}
            onClick={(e)=>{ isAuthenticated ? logout() : alert('already logged out') }}
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
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

export default connect(mapStateToProps, actions)(Problems)
