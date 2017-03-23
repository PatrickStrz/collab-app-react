import React from 'react'
import { Field,reduxForm } from 'redux-form'


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

  const ProblemCreateForm = (props) => {
    const {handleSubmit, submitting} = props
    return(
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <Field name="title" component={renderField} type="text"/>
          <br/>
          <label>Text</label>
          <Field name="text" component={renderField} type="text"/>
          <br/>
          <input disabled={submitting} type="submit" />
          <br></br>
          <strong>{ props.submitError && props.submitError }</strong>
        </form>
    )
  }


export default reduxForm({
  form: 'newProblem',
  validate,
},null)(ProblemCreateForm)
