import React from "react";

/**
 * Button Component
 *
 * A reusable button component with customizable text, type, and styles.
 *
 * @component
 * @example
 * <Button onClick={handleClick} type="submit" className="mt-4">
 *   Submit
 * </Button>
 *
 * @props
 * - children: node - Content inside the button (e.g., text or icons).
 * - onClick: function - Handles button click events.
 * - type: string - Button type (default: "button").
 * - className: string - Additional CSS classes for custom styling.
 *
 * @returns {JSX.Element} A customizable button element.
 */
const Button = ({ children, onClick, type = "button", className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
