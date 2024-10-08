import { useState } from "react";

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 cursor-pointer rounded-md shadow-lg bg-gray-300 p-4">
      <div
        className="flex flex-row justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="cursor-pointer font-semibold">{title}</div>
        <div className=" cursor-pointer">
          <i
            className={`fa-solid ${
              isOpen ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          ></i>
        </div>
      </div>
      {isOpen && <div className="mt-2 bg-white p-2 rounded-md">{content}</div>}
    </div>
  );
}

export default Accordion;
