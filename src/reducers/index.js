import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'
import problems from './problems-reducer'
import ideas from './ideas-reducer'

const rootReducer = combineReducers({
  form: formReducer,
  problems,
  ideas
});

export default rootReducer;
