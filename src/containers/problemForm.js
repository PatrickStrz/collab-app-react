import React,{ Component } from 'react'
import { Field,reduxForm } from 'redux-form'
import {newProblem} from '../actions/problems-actions'
class ProblemForm extends Component{

  render(){

    const {handleSubmit} = this.props

    const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}/>
        <div>{touched && (error && <span>{error}</span>)}</div>
      </div>
    </div>
    )

    return(
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <Field name="title" component={renderField} type="text"/>
          <br/>
          <label>Text</label>
          <Field name="text" component={renderField} type="text"/>
          <br/>
          <input type="submit"/>
        </form>
    )
  }
}

const validate = (values) =>{
  const errors = {}
  if (!values.title){
    errors.title = 'required'
  }
  if (!values.text){
    errors.text = 'required'
  }
  return errors
}

export default reduxForm({
  form: 'newPost',
  validate,
},null,{newProblem})(ProblemForm)
