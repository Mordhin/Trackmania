import React, { useState } from 'react'
import {GoogleLogin} from 'react-google-login';
import { useDispatch } from 'react-redux';
import history from '../history';
import {signin, signup} from '../actions/authActions';

const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: '',}

export const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState)
  /* const [showPassword, setShowPassword] = useState(false); */
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if(isSignUp) {
      dispatch(signup(formData, history))
    } else {
      dispatch(signin(formData, history))
    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

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
    console.log(`Google sign in was unsuccessfull. Try Again Later.`);
    console.log(error);
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
              Confirm Password
              <input name='confirmPassword' onChange={handleChange} type='password' autoFocus required/>
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
