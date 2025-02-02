import React, { useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import Switch from "../Switch";
import { FaEnvelope } from "react-icons/fa";
import PasswordInput from "../PasswordInput";
import LanguageSelector from "../LanguageSelector";
import Popup from "../Popup";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [showPopup, setShowPopup] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
  };

  useEffect(() => {
    if (email?.length > 0 || password?.length > 0) {
      setValidationError("");
    }
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setValidationError("Please enter email and password");
      return;
    }
    if (!email.includes("@")) {
      setValidationError("Invalid email address");
      return;
    }
    if (password.length < 8) {
      setValidationError("Password should be atleast 8 characters long");
      return;
    }
    setShowPopup(true); // Show popup on successful login
  };

  return (
    <>
      <form
        data-testid="login-form"
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <Input
          label="Email :"
          placeholder="Enter Email"
          type="text"
          value={email}
          onChange={setEmail}
          icon={<FaEnvelope />}
          validateEmail
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
        <LanguageSelector
          onLanguageChange={handleLanguageChange}
          selectedLanguage={selectedLanguage}
        />
        <div className="toggle-switch flex items-center">
          <Switch rememberMe={rememberMe} setRememberMe={setRememberMe} />
          <p className="ml-2 cursor-pointer">Remember Me</p>
        </div>
        <Button type="submit" className="mt-4">
          Login
        </Button>
        {validationError && (
          <p data-testid="validation-error" className="text-red-500 mt-2">
            {validationError}
          </p>
        )}
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
