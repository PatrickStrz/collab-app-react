import React,{ Component } from 'react'
import { Field,reduxForm } from 'redux-form'
import {newProblem} from '../actions/problems-actions'
class ProblemForm extends Component{

  render(){
    const {handleSubmit} = this.props
    return(
      <div>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <Field name="title" component="input" type="text"/>
          <br/>
          <br/>
          <label>Text</label>
          <Field name="text" component="input" type="text"/>
          <br/>
          <br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
export default reduxForm({
  form: 'newPost'
},null,{newProblem})(ProblemForm)
