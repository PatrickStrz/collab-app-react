import React,{Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import './Problem.css';
import {addProblem,
        removeProblem,} from '../lib/problems-helpers'
import ProblemForm from './problemForm'

class Problems extends Component {
  state = {
    ideasVisibleForProblems: []
  }

  listProblems = (problems) => {
    return problems.map((problem)=> {
      return (
        <div key={'problem-'+problem.id}>
          <p className='Problem'>{problem.title} | {problem.text}</p>
          <button onClick={(e)=>{this.getIdeasClickHandler(problem.id)}}>
            get ideas for problem {problem.id}
          </button>
          <button onClick={(e)=>this.props.deleteProblem(problem.id)}>Delete Post</button>
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
        return <p key={'idea'+idea.id}>problem:{idea.problem_id}| idea:{idea.title}</p>
      })
    }
    else{
      return <p>No ideas here, please add one :) +</p>
    }
  }


  render() {
    if (this.props.problemsReload){
      this.props.getProblems()
    }
    return (
      <div>
        <h2>Test redux</h2>
        <button onClick={this.props.upVote}>Upvote</button>
        <button onClick={this.props.downVote}>Downvote</button>
        <h3>Likes:{this.props.likes}</h3>
        <button onClick={this.props.getProblems}>Get All Problems</button>
        <div>
          {this.listProblems(this.props.problemsList)}
        </div>
          <br></br>
          <ProblemForm onSubmit={this.props.newProblem} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    likes: state.likes,
    problemsList: state.problems.problemsList,
    ideasForProblems: state.ideas.ideasForProblems,
    problemsReload: state.problems.problemsReload,
  }
}

export default connect(mapStateToProps, actions)(Problems);
