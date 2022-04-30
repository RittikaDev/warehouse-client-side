import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div class="page">
      <div class="container login-form">
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
              <input type="email" id="email" />
            </span>
            <label for="password">Password</label>
            <input type="password" id="password" />
            <input type="submit" id="submit" value="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
