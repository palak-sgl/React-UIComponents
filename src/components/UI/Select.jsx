import React from "react";

function Select(props) {
  const { options } = props;
  return (
    <select className="border mt-2 rounded px-3 py-1 focus:outline ring-1 focus-within:outline-indigo-500">
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
