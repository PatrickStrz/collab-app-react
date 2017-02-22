import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'


class Problems extends Component {
  render(){
    return(
      <div>
        <h2>Like this to see redux in action</h2>
        <button onClick={this.props.upVote}>Upvote</button>
        <button onClick={this.props.downVote}>Downvote</button>
        <h3>Likes:{this.props.likes}</h3>
        <button onClick={this.props.getProblems}>Get All Problems</button>
        <div>
          { this.props.problems !== [''] ?  this.props.problemsList.map((problem)=> <p key={problem.id}>{problem.title}</p>) : 'noth' }

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    likes: state.likes,
    problemsList: state.problems.problemsList
  }
}

export default connect(mapStateToProps, actions)(Problems);
