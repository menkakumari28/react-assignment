import React from 'react';
const Popup = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center  opacity-bg">
    <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
      <p className="text-gray-800">{message}</p>
      <button
        onClick={onClose}
        className="mt-4 bg-black-500 text-white px-4 py-2 rounded"
      >
        OK
      </button>
    </div>
  </div>
);

export default Popup;