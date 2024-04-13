import React, { useState } from "react";
import "../style/SignUp.css";

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const registerUser = async (e) => {
    try {
      e.preventDefault();
  
      const url = "http://localhost:9500/register";
  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        window.location.href = "/home";
      } else {
        throw new Error("Failed to register user");
      }
    } catch (error) {
      console.log(`Error while registering user: ${error}`);
    }
  };
  

  return (
    <div class="signup-container">
      <div class="signup_nav">
        <span id="logo">
          <b>Docs</b>
        </span>
      </div>
      <div class="signup_form">
        <form action="/register" method="post" onSubmit={registerUser}>
          <div class="div-input">
            <p>Username</p>
            <input type="text" name="username" id="" onChange={handleChange} />
          </div>

          <div class="div-input">
            <p>Fullname</p>
            <input type="text" name="fullname" id="" onChange={handleChange} />
          </div>

          <div class="div-input">
            <p>Email address</p>
            <input type="email" name="email" id="" onChange={handleChange} />
          </div>

          <div class="div-input">
            <p>Password</p>
            <input
              type="password"
              name="password"
              id=""
              onChange={handleChange}
            />
          </div>

          <div class="div-input" id="submit">
            <input type="submit" value="Continue" />
          </div>

          <div class="signup-login">
            <p>
              Already have an account? <a href="/login">Log in here.</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
