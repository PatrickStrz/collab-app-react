import {UPVOTE} from '../actions/types'
import {DOWNVOTE} from '../actions/types'

export default function (state, action) {
  if (typeof state === 'undefined') {
    state = 0; // If state is undefined, initialize it with a default value
  }

  if (action.type === UPVOTE) {
    return state + 1;
  }
  else if (action.type === DOWNVOTE) {
    return state - 1;
  }
  else {
    return state; // In case an action is passed in we don't understand
  }
}
