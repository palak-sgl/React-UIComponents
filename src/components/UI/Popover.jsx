import React, { useState } from "react";

function Popover({ triggerText, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={togglePopover}
        className="px-4 py-2 w-48 bg-blue-500 text-white rounded focus:outline-none"
      >
        {triggerText}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-90 p-2.5 bg-white border rounded-lg shadow-lg z-10">
          <div className="text-gray-700">{content}</div>
          <button
            onClick={togglePopover}
            className="mt-2 text-sm text-blue-500 hover:underline w-full"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Popover;
