import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    setIsOn((prev) => !prev);
  };
  return (
    <button
      onClick={handleToggle}
      role="switch"
      aria-checked={isOn}
      className={`relative w-12 h-6 flex items-center rounded-full p-1 transition-all ${
        isOn ? "bg-blue-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default ToggleSwitch;
