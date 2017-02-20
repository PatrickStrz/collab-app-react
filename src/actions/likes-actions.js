import {UPVOTE} from './types'

export function upvote() {
  return {
    type: UPVOTE,
    payload: 'Just liked this!'
  }
}
