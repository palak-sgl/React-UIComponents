import { useState } from "react";

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-md shadow-lg bg-gray-300 p-4">
      <div
        className="cursor-pointer font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </div>
      {isOpen && <div className="mt-2 bg-white p-2 rounded-md">{content}</div>}
    </div>
  );
}

export default Accordion;
