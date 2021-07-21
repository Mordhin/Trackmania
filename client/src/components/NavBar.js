import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import history from "../history";
import decode from "jwt-decode";
import logo from "../assets/running.svg";
import SvgRunning from "./svg/Running";

export const NavBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const array = ["cardioLogo", "strengthLogo", "bothLogo"];
  let index = 0;
  const [logo, setLogo] = useState(array[index]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    console.log("logout");
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  useEffect(() => {
    const logoInterval = setInterval(() => {
      index += 1;
      if (index === 3) index = 0;
      setLogo(array[index]);
    }, 10000);

    return () => {
      clearInterval(logoInterval);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="title">
        <div>Track</div>
        <div className={`dynamic_logo ${logo}`}>
          <div>mania</div>
          <div className="runningLogo">
            <SvgRunning />
          </div>
        </div>
      </div>

      {user ? (
        <div className="user">
          <img src={user.result.imageUrl} alt="user" />
          {user.result.email}
          <button onClick={logout}>LogOut</button>
        </div>
      ) : (
        <Link to="/auth">Sign In</Link>
      )}
    </div>
  );
};
