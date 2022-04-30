import React from "react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div class="page">
      <div class="container login-form">
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
              <input type="email" id="email" />
            </span>
            <label for="password">Password</label>
            <input type="password" id="password" />
            <label for="password">Confirm Password</label>
            <input type="password" id="confirm-password" />
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
      </div>
    </div>
  );
};

export default Register;
