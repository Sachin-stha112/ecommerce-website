import React from 'react'
import { useState } from 'react'

const Auth = () => {
  const [mode, setMode] = useState("signup")
  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className='page-title'>
            {mode == "signup" ? "Sign Up" : "Login"}
          </h1>
          <form className='auth-form'>
            <div className="form-group">
              <label className='form-label' htmlFor='email'>Email</label>
              <input className='form-input' type='email' id='email'/>
            </div> 
            <div className="form-group">
              <label className='form-label' htmlFor='password'>Password</label>
              <input className='form-input' type='password' id="password" />
            </div>
            <button type='submit' className='btn btn-primary btn-large'>{mode == "signup" ? "Sign Up": "Login"}</button>
          </form>
          <div className="auth-switch">
            {mode == "signup" ?
            (<p>Already have an account? <span onClick={()=> setMode("login")} className='auth-link'>Login</span>
            </p> ):
            (<p>Don't have an account? <span className='auth-link' onClick={() => setMode("signup")}>Sign up</span>
            </p>)
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
