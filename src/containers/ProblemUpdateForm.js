import React,{ Component } from 'react'
import { Field,reduxForm } from 'redux-form'
class ProblemUpdateForm extends Component{

  render(){

    const {handleSubmit} = this.props

    return(
        <form onSubmit={handleSubmit} >
          <label>Title</label>
          <Field name="title" component={renderField} type="text"/>
          <br/>
          <label>Text</label>
          <Field name="text" component={renderField} type="text"/>
          <br/>
          <input type="submit" title="update"/>
        </form>
    )
  }
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
<div>
  <label>{label}</label>
  <div>
    <input {...input} placeholder={label} type={type}/>
    <div>{touched && (error && <span>{error}</span>)}</div>
  </div>
</div>
)

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
  form: 'updatePost',
  validate,
},null)(ProblemUpdateForm)
