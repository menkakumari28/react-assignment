import React from "react";

const Button = ({ children, onClick, type = "button", className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn text-white p-2 rounded hover:bg-blue-600 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
