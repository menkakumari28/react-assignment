import React from "react";
import logo from "../assets/images/logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-auto p-4 text-center ">
      <div className="loginForm">
        <a href="https://noventiq.com/" target="_blank">
          <img src={logo} className="logo" alt="noventiq logo" />
        </a>
        <LoginForm />
      </div>
      <p className="copyright">
        Copyright 2024 Noventiq | Powered by Noventiq{" "}
      </p>
    </div>
  );
}

export default App;
