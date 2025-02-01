import React from "react";
import Logo from "./assets/images/logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen ">
        <div className="loginForm">
          <a href="https://noventiq.com/" target="_blank">
            <img src={Logo} className="logo" alt="noventiq logo" />
          </a>
          <LoginForm />
        </div>
        <p className="copyright">
          copyright 2024 Noventiq |Powered by Noventiq{" "}
        </p>
      </div>
    </>
  );
}

export default App;
