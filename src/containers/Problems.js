import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import './Problem.css';



class Problems extends Component {

  // listIdeasForProblems(ideas){
  //   map over ideas on click
  // }
  listIdeasForProblems(ideas){
    // debugger
    return ideas.map((idea)=>{
      return(
        <div key={'idea'+idea.id}>
          <p>{idea.title}|idea content: {idea.text}</p>
        </div>
      )
    })
  }

  listProblems(problems){
    return problems.map((problem)=>{
      return(
        <div key={'problem-'+problem.id}>
        <p className='Problem'>{problem.title} | {problem.text}</p>
        <button onClick={this.props.getIdeas}>get ideas</button>
        <div>{this.listIdeasForProblems(this.props.ideasList)}</div>
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
