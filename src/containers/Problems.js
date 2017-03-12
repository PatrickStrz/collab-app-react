import React,{Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import './Problem.css';
import {addProblem,
        removeProblem,} from '../lib/problems-helpers'

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
          <div>
            {this.state.ideasVisibleForProblems.includes(problem.id) && this.listIdeasForProblemFiltered(this.props.ideasList, problem.id)}
            {this.state.ideasVisibleForProblems.includes(problem.id) && <p>Visible</p>}
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
    let problems = this.state.ideasVisibleForProblems
    let toggledProblems = []
    if (problems.includes(problemId)) {
      toggledProblems = removeProblem(problemId,problems)
    }
    else {
      toggledProblems = addProblem(problemId,problems)
    }
    this.setState({ideasVisibleForProblems:toggledProblems})
  }

  listIdeasForProblemFiltered = (ideas, problemId) => {
    if (ideas.length > 0){
    return ideas.filter((idea)=>{
      return idea.problem_id === problemId
    }).map((idea)=>{
      return <p key={'idea-'+idea.id}>idea:{idea.title} for problem: {idea.problem_id}</p>
    })
  }
  }


  render() {
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    likes: state.likes,
    problemsList: state.problems.problemsList,
    ideasList: state.ideas.ideasList
  }
}

export default connect(mapStateToProps, actions)(Problems);
