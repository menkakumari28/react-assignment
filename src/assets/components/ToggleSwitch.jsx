import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex items-center space-x-3">
      <label />
      <button
        onClick={() => setIsOn(!isOn)}
        className={`relative w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition-all ${
          isOn ? "bg-blue-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all ${
            isOn ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </button>
    </div>
  );
};

export default ToggleSwitch;
