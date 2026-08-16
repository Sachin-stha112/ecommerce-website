import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const [mode, setMode] = useState("signup")
  const [error, setError] = useState(null)
  const {register, handleSubmit, formState:{errors}} = useForm();
  const {signUp, user, logout, login} = useAuth()
  const navigate = useNavigate();

  function onSubmit(data)
  { 
    setError(null)
    let result;
    if(mode === "signup")
    {
     result = signUp(data.email, data.password)
    }
    else 
    {
     result = login(data.email, data.password )
    }
    if(result.success)
    {
      navigate("/");
    }
    else
    {
      setError(result.error)
    }
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
              {...register("email", {required : "Email is required"})}
              />
              {errors.email && (
                <span className='form-error'>{errors.email.message}</span>
              )}
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
              {errors.password && (
                <span className='form-error'>{errors.password.message}</span>
              )}
            </div>
            {error && (
              <p className='form-error'>{error}</p>
            )}
            <button type='submit' className='btn btn-primary btn-large'>{mode == "signup" ? "Sign Up": "Login"}</button>
          </form>
          <div className="auth-switch">
            {mode == "signup" ?
            (<p>Already have an account? <span onClick={()=> {setMode("login"); setError(null)}} className='auth-link'>Login</span>
            </p> ):
            (<p>Don't have an account? <span className='auth-link' onClick={() => {setMode("signup"); setError(null)}}>Sign up</span>
            </p>)
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
