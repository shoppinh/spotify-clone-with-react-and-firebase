import React from "react";
import "./Login.css";
import { loginUrl } from "../spotify";
import logo from "../logos/Spotify_Logo_RGB_Green.png";
const Login = () => {
  return (
    <div className="login">
      <img src={logo} alt="spotify logo"></img>
      <a href={loginUrl}>Login With Spotify</a>
    </div>
  );
};

export default Login;
