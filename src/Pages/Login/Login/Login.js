import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";

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
    const emailRegexValidate = /\S+@\S+\.\S+/;
    const validatedEmail = emailRegexValidate.test(e.target.value);
    if (validatedEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid Email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };
  // For Password
  const handlePassword = (e) => {
    const passwordRegexValidate = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //Minimum eight characters, at least one letter and one number
    const validatedPassword = passwordRegexValidate.test(e.target.value);
    if (validatedPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({
        ...errors,
        password: "Password Not Correct",
      });
      setUserInfo({ ...userInfo, password: "" });
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    // console.log(userInfo);
    await signInWithEmail(userInfo.email, userInfo.password);
    const { data } = await axios.post(
      "https://intense-castle-01868.herokuapp.com/login",
      { email }
    );
    // console.log(data);
    localStorage.setItem("token", data.accessToken);
    navigate(from, { replace: true });
  };

  //   Reset Password
  const resetPassword = async () => {
    const email = emailRef.current.value;
    // console.log(email);
    await sendPasswordResetEmail(email);
    toast("Sent email");
  };

  return (
    <div className="page mb-5">
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
            {errors?.email && (
              <p
                className="text-danger"
                style={{ fontSize: "12px", fontWeight: "bolder" }}
              >
                {errors.email}
              </p>
            )}
            <label for="password">Password</label>
            <input
              placeholder="Password"
              type="password"
              onChange={handlePassword}
              id="password"
            />
            {errors?.password && (
              <p
                className="text-danger"
                style={{ fontSize: "12px", fontWeight: "bolder" }}
              >
                {errors.password}
              </p>
            )}
            {loading ? (
              <div className="text-center w-100">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              ""
            )}
            <button className="btn text-center">
              <input type="submit" id="submit" value="Submit" />
            </button>

            <p className="text-center">
              Don't have an account?
              <Link to="/register" className="btn ms-3">
                {" "}
                Signup Here
              </Link>
            </p>
            <p className="text-center">
              Fogot Password?{" "}
              <button className="btn ms-3" onClick={resetPassword}>
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
