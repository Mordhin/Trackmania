import React, { useState } from 'react'
import {GoogleLogin} from 'react-google-login';
import { useDispatch } from 'react-redux';
import history from '../history';
import {signin, signup} from '../actions/authActions';
import { FaGooglePlus } from 'react-icons/fa';
import lightbulb from '../assets/lightbulb.png';

const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: '',}

export const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState)
  const [factice, setFactice] = useState(false);
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

  const handleFactice = () => {
    setFactice(true);
  }

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
    <div className="auth">
      <div className={`factice ${factice ? "hidden" : ""}`}>
        <div className="facticeHeader"><img src={lightbulb} alt=""></img><button className="discretButton" onClick={handleFactice}>x</button></div>
        <p>Cette application étant une démo technique, je vous invite à vous connecter avec ce compte factice afin de bénéficier d'une expérience optimale (ie. database pré-remplie).</p>
        <br/>
        <ul>
          <li>Email: xxxxxxxxx</li>
          <li>Mot de Passe: 123456</li>
        </ul>
      </div>
      <div className="authTitle">{isSignUp ? "Inscrivez-vous !" : "Connectez-vous !"}</div>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <>
            <label>
              Prénom
              <input name='firstName' onChange={handleChange} autoFocus required/>
            </label>
            <label>
              Nom
              <input name='lastName' onChange={handleChange} autoFocus required/>
            </label>
          </>
        )}
        <label>
          Email
          <input name='email' onChange={handleChange} type='email' autoFocus required/>
        </label>
        <label>
          Mot de Passe
          <input name='password' onChange={handleChange} type='password' autoFocus required/>
        </label>
        {isSignUp && (
          <>
            <label>
              Comfirmez Mot de Passe
              <input name='confirmPassword' onChange={handleChange} type='password' autoFocus required/>
            </label>
          </>
        )}
        <button className="authButton" type='submit'>{isSignUp ? "S'inscrire" : "Se connecter"}</button>
        <div className="or">Ou</div>
        <GoogleLogin 
          clientId= "777333567792-p8299np5s0ssqj7981to01v7nhurcc4d.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              className="authButton google"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled }
            > Se connecter avec Google <FaGooglePlus />
            </button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        />
      </form>
{/*       <button onClick={switchMode}>{isSignUp ? 'Vous avez déjà un compte ? Connectez-vous' : "Pas encore de compte ? Inscrivez-vous !"}</button>
 */}      {isSignUp && (
        <div className="flex isSignUp">Vous avez déjà un compte ? <button className="discretButton" onClick={switchMode}>Connectez-vous.</button></div>
      )}
      {!isSignUp && (
        <div className="flex isSignUp">Pas encore de compte ? <button className="discretButton" onClick={switchMode}>Inscrivez-vous !</button></div>
      )}
    </div>
  )
}
