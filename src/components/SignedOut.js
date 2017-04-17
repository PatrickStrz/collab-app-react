import React from 'react'
import {Link} from 'react-router';

const SignedOut = () =>{
  return(
    <div>
      <h1>You have successfuly Signed out !</h1>
      <Link to="/">Return Home</Link>

    </div>
  )
}

export default SignedOut
