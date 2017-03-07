import {UPVOTE} from './types'
import {DOWNVOTE} from './types'

export const upVote = ()=> {
  return {
    type: UPVOTE,
    payload: 'Just liked this!'
  }
}
export function downVote() {
  return {
    type: DOWNVOTE,
    payload: 'Just liked this!'
  }
}
