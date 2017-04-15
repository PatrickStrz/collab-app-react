import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import problems from './problems-reducer'
import ideas from './ideas-reducer'
import user from './user-reducer'
import auth from './auth-reducer'

const rootReducer = combineReducers({
  form: formReducer,
  problems,
  ideas,
  user,
  auth,
})

export default rootReducer
