import React from "react";

const Switch = ({ rememberMe, setRememberMe }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setRememberMe(!rememberMe);
      }}
      role="switch"
      aria-checked={rememberMe}
      className={`relative w-12 h-6 flex items-center rounded-full p-1 transition-all ${
        rememberMe ? "bg-blue-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all ${
          rememberMe ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default Switch;
