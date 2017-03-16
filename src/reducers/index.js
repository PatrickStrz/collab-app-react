import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'
import likes from './likes-reducer'
import problems from './problems-reducer'
import ideas from './ideas-reducer'



const rootReducer = combineReducers({
  form: formReducer,
  likes,
  problems,
  ideas
});

export default rootReducer;
