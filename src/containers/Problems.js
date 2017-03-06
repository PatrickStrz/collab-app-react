import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import './Problem.css';



class Problems extends Component {

  state = {
    toggle: false
  }

  ideasData = [{id:1,problem_id:1,title:"Ideas title 1",text: "sometext"},
  {id:1,problem_id:1,title:"Ideas title 2",text: "sometext"},
  {id:1,problem_id:1,title:"Ideas title 3",text: "sometext"}]

  getIdeasClickHandler(problemId){
    this.props.getIdeas(problemId)
    this.setState({toggle: !this.state.toggle})
  }

  listIdeasForProblems = (ideas, problemId) => {
    return ideas.map((idea)=>{
        return(
            <p>idea:{idea.id} for problem: {idea.problem_id}</p>
        )
      })
  }

  listProblems = (problems) => {

    return problems.map((problem)=>{

      return(
        <div key={'problem-'+problem.id}>
          <p className='Problem'>{problem.title} | {problem.text}</p>
          <button onClick={(e)=>{this.getIdeasClickHandler(problem.id)}}>
            get ideas for problem {problem.id}
          </button>
          <div>
            { this.state.toggle ? this.listIdeasForProblems(this.props.ideasList, problem.id) : ''}
          </div>
        </div>
      )
    })
  }

  render(){
    return(
      <div>
        <h2>Like this to see redux in action</h2>
        <button onClick={this.props.upVote}>Upvote</button>
        <button onClick={this.props.downVote}>Downvote</button>
        <h3>Likes:{this.props.likes}</h3>
        <button onClick={this.props.getProblems}>Get All Problems</button>

        <div>
          { this.props.problems !== [''] ?  this.listProblems(this.props.problemsList) : 'noth' }
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
