import React, { useState } from "react";
import ToggleSwitch from "../ToggleSwitch/";
import { FaEnvelope } from "react-icons/fa";
import PasswordInput from "../Password/PasswordInput";
import LanguageSelector from "../Language/LanguageSelector";
import InputField from "../Input/InputFiled";
import Button from "../Button/Button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to check if the email is corporate
  const isCorporateEmail = (email) => {
    const corporateDomain = /@company\.com$/; // Change to your corporate domain
    return corporateDomain.test(email);
  };

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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <InputField
        label="Email :"
        placeholder="Enter Email"
        type="email"
        value={email}
        onChange={setEmail}
        icon={<FaEnvelope />}
        validateEmail={true}
        required
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
      <div className="toggle-switch flex items-center space-x-2">
        <ToggleSwitch />
        <p className="cursor-pointer">Remember Me</p>
      </div>
      
      {/* Move Button inside Form to trigger form submission */}
      <Button type="submit" className="mt-4">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
