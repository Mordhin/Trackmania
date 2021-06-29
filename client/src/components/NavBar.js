import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import history from '../history';

export const NavBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const logout = () => {
    console.log('logout');
    dispatch({type:"LOGOUT"});
    history.push("/");
    setUser(null);
  };

  console.log('user:' + user);

  useEffect(() => {
    const token = user?.token;
    /* also check JWT here */
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]); 

  return (
    <div>
      <h1>Navbar</h1>
      {user ? (
        <div>
          <img src={user.result.imageUrl} alt="user"/>
          {user.result.email}
          <button onClick={logout}>LogOut</button>
        </div>
      ):(
        <Link to="/auth">Sign In</Link>
      )}
    </div>
  )
}
