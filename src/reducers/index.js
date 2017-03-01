import { combineReducers } from 'redux';
import likes from './likes-reducer'
import problems from './problems-reducer'
import ideas from './ideas-reducer'



const rootReducer = combineReducers({
  //es6 for form: form
likes,
problems,
ideas

});

export default rootReducer;
