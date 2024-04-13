import React from "react";
import "../style/Login.css";

function Login() {
  return (
    <>
      <div class="signup-container">
        {/* <div class="signup_nav">
          <span id="logo">
            <b>Chillify</b>
          </span>
        </div> */}
        <div class="signup_form">
          <form action="/login" method="post">
            <h1>Login to Docs.</h1>

            <div class="div-input">
              <p>Username</p>
              <input type="text" name="username" id="" />
            </div>

            <div class="div-input">
              <p>Password</p>
              <input type="password" name="password" id="" />
            </div>

            <div class="div-input" id="submit">
              <input type="submit" value="Continue" />
            </div>

            <div class="signup-login">
              <p>
                Don't have an account?{" "}
                <a href="/signup">Sign up for Chillify</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
