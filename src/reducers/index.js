import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import problems from './problems-reducer'
import ideas from './ideas-reducer'
import auth from './auth-reducer'
import prototype1 from './prototype1-reducer'

const rootReducer = combineReducers({
  form: formReducer,
  problems,
  ideas,
  auth,
  prototype1,
})

export default rootReducer
