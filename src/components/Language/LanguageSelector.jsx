import React, { useState, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी (Hindi)" },
  { code: "ta", label: "தமிழ் (Tamil)" }, // Add more Indian languages if needed
];

const LanguageSelector = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  // Detect browser language on component mount
  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2); // Get first two letters
    const supportedLang = languages.find((lang) => lang.code === browserLang);

    if (supportedLang) {
      setSelectedLanguage(browserLang);
      onLanguageChange(browserLang);
    } else {
      setSelectedLanguage("en"); // Default to English
      onLanguageChange("en");
    }
  }, [onLanguageChange]);

  // Handle language change
  const handleChange = (event) => {
    const newLang = event.target.value;
    setSelectedLanguage(newLang);
    onLanguageChange(newLang);
  };

  return (
    <div className="mb-4 flex-label">
      <label
        htmlFor="language-select"
        className="block text-left text-black-700 font-medium mb-1"
      >
        Language :
      </label>
      <div className="relative width-80">
        {/* Globe Icon */}
        <span className="absolute inset-y-0 left-3 flex items-center text-black-500">
          <FaGlobe className="text-lg" />
        </span>

        {/* Language Dropdown */}
        <select
          id="language-select"
          value={selectedLanguage}
          onChange={handleChange}
          className="w-full p-2 text-gray-500 pl-10 pr-4 border border-balck-500 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer appearance-none"
        >
          {languages.map((lang) => (
            <option
              className="text-black-300"
              key={lang.code}
              value={lang.code}
            >
              {lang.label}
            </option>
          ))}
        </select>

        {/* Dropdown Arrow (Custom Styling) */}
        <span className="absolute inset-y-0 right-3 flex items-center text-black-500 pointer-events-none left">
          ▼
        </span>
      </div>
    </div>
  );
};

export default LanguageSelector;
