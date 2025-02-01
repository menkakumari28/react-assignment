import React, { useState } from "react";
import Input from "../Input/InputFiled";
import Button from "../Button/Button";
import ToggleSwitch from "../ToggleSwitch";
import { FaEnvelope } from "react-icons/fa";
import PasswordInput from "../Password/PasswordInput";
import LanguageSelector from "../Language/LanguageSelector";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLanguageChange = (lang) => {
    console.log("Selected Language:", lang);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isCorporateEmail(email)) {
      alert("Please use a corporate email address.");
      return;
    }
    alert("Login successful!");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg "
      >
        {/* <h2 className="text-2xl font-bold mb-4 text-gray-800">Login</h2> */}
        <Input
          label="Email :"
          text="Enter Email"
          type="email"
          value={email}
          onChange={setEmail}
          icon={<FaEnvelope />}
          validateEmail={true} // Enables email validation
          required
        />
        <div className="reative">
          <PasswordInput
            label="Password :"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="mb-4 text-left forgot cursor-pointer">
            Forgot Password?
          </p>
        </div>
        <LanguageSelector onLanguageChange={handleLanguageChange} />
        <div className="toggle-switch">
          <ToggleSwitch />
          <p className="cursor-pointer">Remember Me</p>
        </div>
      </form>
      <Button type="submit" className="mt-4">
        Login
      </Button>
    </>
  );
};

export default LoginForm;
