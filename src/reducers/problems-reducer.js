import {PROBLEMS} from '../actions/types'

const initialState = {problemsList:[]}

export default function(state=initialState, action){
  if (action.type === PROBLEMS){
    return { ...state, problemsList:action.payload.data}
  }
  return state
}





//
//
// export function (state,action){
//   // switch (action.type){
//   //   case PROBLEMS:
//   //     return: posts: action.payload
//   //   case SOME_OTHER_CASE:
//   //     return ....
//   //
//   // }
//   case:
//   return state
// }
//
// export default function (state, action) {
//   if (typeof state === 'undefined') {
//     state = 0; // If state is undefined, initialize it with a default value
//   }
//
//   if (action.type === UPVOTE) {
//     return state + 1;
//   }
//   else if (action.type === DOWNVOTE) {
//     return state - 1;
//   }
//   else {
//     return state; // In case an action is passed in we don't understand
//   }
// }
//
//
//
// const initialState = { home:null, post:[]};
//
// export default function(state= INITIAL_STATE, action) {
//
//   switch(action.type){
//
//     case FETCH_HOME:
//       return { ...state, posts_list: action.payload};
//
//     case FETCH_POST:
//       return { ...state, post: action.payload};
//
//     case DELETE_POST:
//         return { ...state, post: null};
//   }
//   return state;
// }
