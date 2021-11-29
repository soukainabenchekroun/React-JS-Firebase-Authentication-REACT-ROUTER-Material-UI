import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import * as React from "react";

function App() {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}

export default App;
