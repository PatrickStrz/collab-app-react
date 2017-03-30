import React,{Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { addProblem, removeProblem, } from '../lib/problems-helpers'
import  ProblemCreateForm from '../components/ProblemCreateForm'
import  ProblemUpdateForm from '../components/ProblemUpdateForm'
import Idea from '../components/Idea'
import Problem from '../components/Problem'

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

  listProblems = (problems) => {
    const {deleteProblem, updateProblem,isUpdating, isDeleting} = this.props
    return problems.map((problem)=> {
      return (
        <div key={'problem-'+problem.id}>
          <Problem
            handleDelete={deleteProblem}
            handleGetIdeas={this.getIdeasClickHandler}
            problem={problem}
            isUpdating={isUpdating}
            isDeleting={isDeleting}
          />
          {/* partial assigned problem.id to pass along when redux form is submitted */}
          <ProblemUpdateForm  onSubmit={updateProblem.bind(null,problem.id)} form={`problemUpdate${problem.id}`} />
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
          problemCreateFormVisible
        } = this.props

    return (
      <div style={{opacity: problemsIsFetching ? 0.5 : 1.0 }}>
        {problemsIsFetching && <strong>Loading ...</strong> }
        <button onClick={getProblems}>Reload Problems</button>
        <div>
          {problemsReadError && <strong>{problemsReadError}</strong>}
          {this.listProblems(problemsList)}
        </div>
          <br></br>
          <h3>Add a new problem</h3>
          <button onClick={ (e)=>{ this.props.showProblemCreateForm() } }> Add a new Problem</button>
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
    problemCreateFormVisible: state.problems.problemCreateFormVisible
  }
}

export default connect(mapStateToProps, actions)(Problems);
