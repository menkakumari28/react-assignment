import React, { useState } from "react";
import Input from "./InputFiled";
import Button from "./Button";
import View from "../../assets/images/view.svg";
import Hide from "../../assets/images/hide.svg";

/**
 * LoginForm Component
 *
 * A reusable login form component that allows users to log in using their email and password.
 * It includes the following features:
 * - Email and password input fields.
 * - Toggle visibility of the password.
 * - Language selection dropdown.
 * - Validation for corporate email addresses (e.g., ending with "@noventiq.com" or ".corp.com").
 * - Submission handling with alerts for success or validation errors.
 *
 * @component
 * @example
 * return (
 *   <LoginForm />
 * )
 *
 * @state
 * - email: string - Stores the email input value.
 * - password: string - Stores the password input value.
 * - showPassword: boolean - Toggles password visibility.
 * - language: string - Stores the selected language (defaults to browser language or "en").
 *
 * @function isCorporateEmail
 * - Validates if the provided email is a corporate email (ends with "@noventiq.com" or ".corp.com").
 *
 * @function handleSubmit
 * - Handles form submission:
 *   - Prevents default form behavior.
 *   - Validates email using `isCorporateEmail`.
 *   - Displays an alert for invalid emails or successful login.
 *
 * @returns {JSX.Element} A form with email, password, and language inputs, along with a submit button.
 */
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [language, setLanguage] = useState(navigator.language || "en");

  const isCorporateEmail = (email) => {
    return email.endsWith("@noventiq.com") || /@.*\.corp\.com$/.test(email);
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
    <div className="bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-100"
        data-testid="login-form"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Login</h2>

        <label
          htmlFor="email"
          className="text-left block text-gray-700 font-medium mb-1"
        >
          Email:
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="relative mb-4 ">
          <label
            htmlFor="password"
            className="text-left block text-gray-700 font-medium mb-1"
          >
            Password:
          </label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-color rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-10 text-sm text-blue-600"
          >
            {showPassword ? (
              <img src={Hide} alt="hide" className="w-5" />
            ) : (
              <img src={View} alt="show" className="w-5" />
            )}
          </button>
        </div>

        <div className="">
          <label
            htmlFor="language"
            className="block text-left text-gray-700 font-medium mb-1"
          >
            Language:
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 border border-color rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="ta">Tamil</option>
          </select>
        </div>

        <Button type="submit" className="mt-4">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
