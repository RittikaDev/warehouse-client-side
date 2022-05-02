import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";

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
  const emailRef = useRef("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // Login with react firebase hook
  const [signInWithEmail, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  // Navigate to
  useEffect(() => {
    if (user) {
      // navigate(from, { replace: true });
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
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    console.log(userInfo);
    await signInWithEmail(userInfo.email, userInfo.password);
    const { data } = await axios.post("http://localhost:5000/login", { email });
    console.log(data);
    localStorage.setItem("token", data.accessToken);
    navigate(from, { replace: true });
  };

  //   Reset Password
  const resetPassword = async () => {
    const email = emailRef.current.value; //basically gives whatever was written in the email input
    // console.log(email);
    await sendPasswordResetEmail(email);
    alert("Sent email");
  };

  return (
    <div className="page">
      <form className="container login-form" onSubmit={handleLogin}>
        <div className="left">
          <div className="login">Login</div>
          <div className="eula">
            By logging in you agree to the ridiculously long terms that you
            didn't bother to read
          </div>
        </div>
        <div className="right">
          <div className="form">
            <label for="email">Email</label>
            <span>
              <input
                name="email"
                ref={emailRef}
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
            <p>
              Don't have an account?
              <Link to="/register" className="btn">
                {" "}
                Signup Here
              </Link>
            </p>
            <p>
              Fogot Password?{" "}
              <button className="btn" onClick={resetPassword}>
                Reset Password
              </button>{" "}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
