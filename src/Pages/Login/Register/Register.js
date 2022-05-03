import React, { useEffect, useState } from "react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

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
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // create user with email and password from react firebase hook
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user]);
  // Google sign in
  const [signInWithGoogle, googleUser, loading2, googleError] =
    useSignInWithGoogle(auth);

  // For email
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
        password:
          "Minimum eight characters, at least one letter and one number",
      });
      setUserInfo({ ...userInfo, password: "" });
    }
  };
  // For confirm password
  const handleConfirmPassword = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Passwords does not match" });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    }
  };
  // Register Function
  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };
  console.log(userInfo);
  useEffect(() => {
    const error = googleError;
    if (error) {
      switch (error?.code) {
        case "auth/invalid-email":
          toast("Wrong email typed !");
          break;
        case "auth/invalid-password":
          toast("Wrong password, try again please!");
          break;
        default:
          toast("Something went wrong");
      }
    }
  }, [googleError]);
  return (
    <div className="page">
      <form className="container login-form" onSubmit={handleRegister}>
        <div className="left">
          <div className="login">Register</div>
          <div className="eula">
            By Registering you agree to the ridiculously long terms that you
            didn't bother to read
          </div>
        </div>
        <div className="right">
          <div className="form">
            <label for="email">Email</label>
            <span>
              <input
                type="email"
                id="email"
                placeholder="Email"
                onBlur={handleEmail}
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
              type="password"
              id="password"
              placeholder="Password"
              onBlur={handlePassword}
            />
            {errors?.password && (
              <p
                className="text-danger"
                style={{ fontSize: "12px", fontWeight: "bolder" }}
              >
                {errors.password}
              </p>
            )}
            <label for="password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              onBlur={handleConfirmPassword}
            />

            <button className="btn">
              <input type="submit" id="submit" value="Submit" />
            </button>
            <div className="d-flex align-items-center justify-content-center">
              <div style={{ height: "1.5px" }} className="bg-danger w-25"></div>
              <h3 className="mt-2 px-2">or</h3>
              <div style={{ height: "1.5px" }} className="bg-danger w-25"></div>
            </div>
            <div
              className="text-center logo btn"
              onClick={() => signInWithGoogle()}
            >
              Sign In With Google
            </div>
            <p>
              Already Have an account?
              <Link to="/login" className="btn ms-3">
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
