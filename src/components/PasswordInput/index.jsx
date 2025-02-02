import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ label, value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative mb-4 flex-label">
      <label className="block text-left text-black-700 font-medium mb-1">
        {label}
      </label>
      <div className="relative w-full">
        {/* Lock Icon */}
        <span className="absolute inset-y-0 left-3 flex items-center text-black-500">
          <FaLock />
        </span>

        {/* Password Input */}
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-2 pl-10 pr-10 border border-balck-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Toggle Show/Hide Password */}
        <button
          type="button"
          name="show"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center text-black-600 focus:outline-none"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
