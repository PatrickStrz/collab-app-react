import React,{Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import './Problem.css';
import {addProblem,
        removeProblem,} from '../lib/problems-helpers'
import  ProblemCreateForm from './ProblemCreateForm'
import  ProblemUpdateForm from './ProblemUpdateForm'
import Idea from '../components/Idea'
import Problem from '../components/Problem'

class Problems extends Component {

  state = {
    ideasVisibleForProblems: []
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.problemsDidInvalidate){
      this.props.getProblems()
    }
  }

  listProblems = (problems) => {
    const {deleteProblem, updateProblem} = this.props
    return problems.map((problem)=> {
      return (
        <div key={'problem-'+problem.id}>
          <Problem
            handleDelete={deleteProblem}
            handleGetIdeas={this.getIdeasClickHandler}
            problem={problem}
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

  render() {

    const {problemIsFetching} = this.props

    return (
      <div>
        {problemIsFetching && <strong>Loading ...</strong> }
        <button onClick={this.props.getProblems}>Get All Problems</button>
        <div>
          {this.props.problemsReadError && <strong>{this.props.problemsReadError}</strong>}
          {this.listProblems(this.props.problemsList)}
        </div>
          <br></br>
          <h2>Add a new problem!</h2>
          <ProblemCreateForm
            onSubmit={this.props.createProblem}
            submitError={this.props.problemCreateFormSubmitError}
          />
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
    problemsReload: state.problems.problemsReload,
    problemCreateFormSubmitError: state.problems.problemsCreateError,
    problemIsFetching: state.problems.isFetching,
    problemsDidInvalidate: state.problems.didInvalidate
  }
}

export default connect(mapStateToProps, actions)(Problems);
