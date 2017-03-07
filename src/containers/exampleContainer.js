import React,{Component} from 'react';
import { connect } from 'react-redux';
// import {upvote} from '../actions/likes-actions'
import * as actions from '../actions'

class Posts extends Component {
  render(){
    return(
      <div>
        <h2>Like this to see redux in action</h2>
        <button onClick={this.props.upVote}>Upvote</button>
        <button onClick={this.props.downVote}>Downvote</button>
        <h3>Likes:{this.props.likes}</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    likes: state.likes
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onClick: () => {
//       dispatch(upvote())
//     }
//   }
// }
export default connect(mapStateToProps, actions)(Posts);

// export default connect(mapStateToProps, mapDispatchToProps)(Likes);
