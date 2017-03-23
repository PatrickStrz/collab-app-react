import React,{ Component } from 'react'
import { Field,reduxForm } from 'redux-form'
class ProblemCreateForm extends Component{

  renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      <div>{touched && (error && <span>{error}</span>)}</div>
    </div>
  </div>
  )

  render(){

    const {handleSubmit, submitting} = this.props

    return(
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <Field name="title" component={this.renderField} type="text"/>
          <br/>
          <label>Text</label>
          <Field name="text" component={this.renderField} type="text"/>
          <br/>
          <input disabled={submitting} type="submit" />
          <br></br>
          <strong>{ this.props.submitError && this.props.submitError }</strong>
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
  form: 'newProblem',
  validate,
},null)(ProblemCreateForm)
