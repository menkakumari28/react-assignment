import React, { useState } from "react";

const Input = ({ label, type,text, value, onChange, icon, validateEmail, ...props }) => {
  const [error, setError] = useState("");

  // Email Validation (Corporate only, no Gmail, Outlook, Yahoo, etc.)
  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);

    if (validateEmail) {
      const corporateEmailRegex = /^[a-zA-Z0-9._%+-]+@(?!gmail\.com|outlook\.com|yahoo\.com)([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      if (!corporateEmailRegex.test(newValue)) {
        setError("Only corporate email addresses are allowed.");
      } else {
        setError("");
      }
    }
  };

  return (
    <div className="mb-7 flex-label">
      <label className="block text-left text-black-700 font-medium mb-1">
        {label}
      </label>
      <div className="relative w-full">
        {/* Icon (Left Side) */}
        {icon && (
          <span className="absolute inset-y-0 left-3 flex items-center text-black-500">
            {icon}
          </span>
        )}

        {/* Input Field */}
        <input
          type={type}
          value={value}
          placeholder={text}
          onChange={handleChange}
          className={`w-full p-2 ${icon ? "pl-10" : "pl-3"} border border-balck-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
          {...props}
        />

        {/* Validation Error Message */}
        {error && <p className="text-red-500 error mt-1">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
