import React from "react";

/**
 * Input Component
 *
 * A reusable input field with a label. Supports all standard input attributes.
 *
 * @component
 * @example
 * <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
 *
 * @props
 * - label: string - Input label.
 * - type: string - Input type (e.g., "text", "email").
 * - value: string - Input value.
 * - onChange: function - Handles input changes.
 * - ...props: object - Additional input attributes (e.g., placeholder, required).
 *
 * @returns {JSX.Element} A labeled input field.
 */
const Input = ({ label, type, value, onChange, ...props }) => {
  return (
    <div className="mb-4 ">
      <label className="block text-left text-gray-700 font-medium mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-color rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
};

export default Input;
