import { useState } from "react";

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-md p-4">
      <div
        className="cursor-pointer font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </div>
      {isOpen && <div className="mt-2">{content}</div>}
    </div>
  );
}

export default Accordion;
