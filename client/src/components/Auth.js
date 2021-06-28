import React, { useState } from 'react'
import {GoogleLogin} from 'react-google-login';
import { useDispatch } from 'react-redux';
import history from '../history';

export const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  /* const [showPassword, setShowPassword] = useState(false); */
  const dispatch = useDispatch();
  const handleSubmit = () => {};
  const handleChange = () => {};
  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    /* reset show password here */
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({type: 'AUTH', payload: {result, token}})
      history.push("/");
    } catch (error) {
      console.log(error)
    }
  };

  const googleFailure = (error) => {
    console.log(`Google sign in was unsuccessfull. Try Again Later. ERROR: ${error}`);
  };

  return (
    <div>
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <>
            <label>
              First Name
              <input name='firstName' onChange={handleChange} autoFocus required/>
            </label>
            <label>
              Last Name
              <input name='lastName' onChange={handleChange} autoFocus required/>
            </label>
          </>
        )}
        <label>
          Email
          <input name='email' onChange={handleChange} type='email' autoFocus required/>
        </label>
        <label>
          Password
          <input name='password' onChange={handleChange} type='password' autoFocus required/>
        </label>
        {isSignUp && (
          <>
            <label>
              Comfirm Password
              <input name='comfirmPassword' onChange={handleChange} type='password' autoFocus required/>
            </label>
          </>
        )}
        <button type='submit'>{isSignUp ? "Sign Up" : "Sign In"}</button>
        <GoogleLogin 
          clientId= "777333567792-p8299np5s0ssqj7981to01v7nhurcc4d.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled }
            > Google Sign In
            </button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        />
      </form>
      <button onClick={switchMode}>{isSignUp ? 'Already have an account ? Sign In' : "Don't have an account ? Sign Up"}</button>
    </div>
  )
}
