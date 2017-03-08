import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import './Problem.css';



class Problems extends Component {

  state = {
    toggle: false
  }

  getIdeasClickHandler(problemId) {
    this.props.getIdeas(problemId)
    this.setState({toggle: !this.state.toggle})
  }

  listIdeasForProblem = (ideas, problemId) => {
    return ( ideas.map((idea)=> {
        if (idea.problem_id === problemId) {
          return <p>idea:{idea.title} for problem: {idea.problem_id}</p>
        }
      })
    )
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
            {this.state.toggle && this.listIdeasForProblem(this.props.ideasList, problem.id)}
          </div>
        </div>
      )
    })
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
