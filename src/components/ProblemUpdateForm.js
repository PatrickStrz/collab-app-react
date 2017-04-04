import React from 'react'
import { Field,reduxForm } from 'redux-form'
import {TextField} from 'redux-form-material-ui'
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

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

  const ProblemUpdateForm = (props) => {
    const {handleSubmit, submitting, error} = props
    return(
      <MuiThemeProvider>
        <form onSubmit={handleSubmit} >
          <Field floatingLabelText="title" name="title" component={TextField} type="text"/>
          <br/>
          <Field floatingLabelText="text" name="text" component={TextField} type="text"/>
          <br/>
          <br/>
          <FlatButton label="Submit" secondary={true} type="submit" disabled={submitting}/>
          <br/>
          <br/>
          <strong style={{ color: '#ed3a3a', paddingTop:'5px'}} >{error && error}</strong>
        </form>
        </MuiThemeProvider>
    )
  }

export default reduxForm({
  validate,
},null)(ProblemUpdateForm)
