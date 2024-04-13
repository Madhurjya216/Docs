import React from "react";
import Bg from "./Background";
import SignUp from "./SignUp";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";

function Workspace() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/home" element={<Bg />} />
      </Routes>
    </>
  );
}

export default Workspace;
