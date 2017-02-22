import { combineReducers } from 'redux';
import likes from './likes-reducer'
import problems from './problems-reducer'



const rootReducer = combineReducers({
  //es6 for form: form
likes,
problems

});

export default rootReducer;
