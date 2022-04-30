import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // Login with react firebase hook
  const [signInWithEmail, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);

  // Navigate to
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user]);
  // For Email
  const handleEmail = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
    setErrors({ ...errors, email: "" });
  };
  // For Password
  const handlePassword = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
    setErrors({ ...errors, password: "" });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userInfo);
    signInWithEmail(userInfo.email, userInfo.password);
  };

  return (
    <div class="page">
      <form class="container login-form" onSubmit={handleLogin}>
        <div class="left">
          <div class="login">Login</div>
          <div class="eula">
            By logging in you agree to the ridiculously long terms that you
            didn't bother to read
          </div>
        </div>
        <div class="right">
          <div class="form">
            <label for="email">Email</label>
            <span>
              <input
                placeholder="Email"
                type="email"
                onChange={handleEmail}
                id="email"
              />
            </span>
            <label for="password">Password</label>
            <input
              placeholder="Password"
              type="password"
              onChange={handlePassword}
              id="password"
            />
            <input type="submit" id="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
