import React, { useState } from "react";
import "../style/Login.css";
import axios from "axios";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChanges = (e) => {
    console.log(e.target.value)
    var name = e.target.name;
    var value = e.target.value;
    setData({ ...data, [name]: value });
  };

  // const handleLogin = async (e) => {
  //   try {
  //     e.preventDefault();

  //     const url = "http://localhost:9500/login";

  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (response.ok) {
  //       window.location.href = "/home";
  //     } else {
  //       throw new Error("Failed to register user");
  //     }
  //   } catch (error) {
  //     console.log(`Error while registering user: ${error}`);
  //   }
  // };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      const url = "http://localhost:9500/login";

      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // Redirect only if login is successful
        window.location.href = "http://localhost:3000/home";
      } else {
        // Handle unsuccessful login
        throw new Error("Failed to login");
      }
    } catch (error) {
      console.log(`Error while logging in: ${error}`);
    }
  };

  return (
    <>
      <div class="signup-container">
        <div class="signup_form">
          <form action="/login" method="post" onSubmit={handleLogin}>
            <h1>Login to Docs.</h1>

            <div class="div-input">
              <p>Username</p>
              <input
                type="text"
                name="username"
                id=""
                onChange={handleChanges}
              />
            </div>

            <div class="div-input">
              <p>Password</p>
              <input
                type="password"
                name="password"
                id=""
                onChange={handleChanges}
              />
            </div>
            <div class="div-input" id="submit">
              <input type="submit" value="Continue" />
            </div>
            <div class="signup-login">
              <p>
                Don't have an account? <a href="/">Sign up for Docs</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
