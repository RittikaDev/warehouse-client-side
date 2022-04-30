import React, { useState } from "react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  // create user with email and password from react firebase hook
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  // For email
  const handleEmail = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
    setErrors({ ...errors, email: "" });
  };
  // For Password
  const handlePassword = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
    setErrors({ ...errors, password: "" });
  };
  // For confirm password
  const handleConfirmPassword = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password does not match" });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    }
  };
  // Register Function
  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };
  console.log(userInfo);
  return (
    <div class="page">
      <form class="container login-form" onSubmit={handleRegister}>
        <div class="left">
          <div class="login">Register</div>
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
                type="email"
                id="email"
                placeholder="Email"
                onBlur={handleEmail}
              />
            </span>
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onBlur={handlePassword}
            />
            <label for="password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              onBlur={handleConfirmPassword}
            />
            <input type="submit" id="submit" value="Submit" />
            <div className="d-flex align-items-center justify-content-center">
              <div style={{ height: "1.5px" }} className="bg-danger w-25"></div>
              <h3 className="mt-2 px-2">or</h3>
              <div style={{ height: "1.5px" }} className="bg-danger w-25"></div>
            </div>
            <div className="text-center logo">
              <FontAwesomeIcon
                icon={faGoogle}
                className="icon"
              ></FontAwesomeIcon>
            </div>
            <p>
              DAlready Have an account?
              <Link to="/login" className="btn">
                {" "}
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
