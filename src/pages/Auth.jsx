import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const Auth = () => {
  const [mode, setMode] = useState("signup")
  const {register, handleSubmit, formState:{errors}} = useForm();

  function onSubmit()
  {
    alert("Signed Up")
  }

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className='page-title'>
            {mode == "signup" ? "Sign Up" : "Login"}
          </h1>
          <form className='auth-form' onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className='form-label' htmlFor='email'>Email</label>
              <input className='form-input' type='email' id='email'
              {...register("email", {required : "Username is required"})}
              />
            </div> 
            <div className="form-group">
              <label className='form-label' htmlFor='password'>Password</label>
              <input className='form-input' type='password' id="password"
              {...register("password", 
                {required : "Password is required",
                  minLength : {
                    value: 6,
                    message : "Password should be atleast 6 characters"
                  },
                  maxLength : {
                    value: 20,
                    message : "Password should be atmost 20 characters"
                  }
                })}
              />
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
