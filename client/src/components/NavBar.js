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
  const [logo, setLogo] = useState("strengthLogo");
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

    setInterval(() => {
      logoCycle(logo);
    }, 2000);
  }, [location]);

  const logoCycle = (logo) => {
    const array = ["cardioLogo", "strengthLogo", "bothLogo"];
    const logoIndex = array.indexOf(logo);
    if (logoIndex === 2) logoIndex = -1;
    const nextLogo = array[logoIndex + 1];
    console.log(nextLogo);
    setLogo(nextLogo);
  };

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
