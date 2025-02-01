import React, { useState } from "react";
import Input from "../Input/InputFiled";
import Button from "../Button/Button";
import ToggleSwitch from "../ToggleSwitch";
import { FaEnvelope } from "react-icons/fa";
import PasswordInput from "../Password/PasswordInput";
import LanguageSelector from "../Language/LanguageSelector";
import Popup from "../Popup";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleLanguageChange = (lang) => {
    console.log("Selected Language:", lang);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true); // Show popup on successful login
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <Input
          label="Email :"
          placeholder="Enter Email"
          type="email"
          value={email}
          onChange={setEmail}
          icon={<FaEnvelope />}
          validateEmail={true}
          // required
        />
        <div className="relative">
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
        <div className="toggle-switch flex items-center">
          <ToggleSwitch />
          <p className="ml-2 cursor-pointer">Remember Me</p>
        </div>
        <Button type="submit" className="mt-4">
          Login
        </Button>
      </form>

      {/* Show Popup when login is successful */}
      {showPopup && (
        <Popup
          message="Login successful!"
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default LoginForm;
