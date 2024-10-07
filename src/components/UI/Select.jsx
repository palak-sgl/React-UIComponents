import React from "react";

function Select(props) {
  const { options, placeholder } = props;
  return (
    <select
      className="border mt-2 rounded w-full px-3 py-1 focus:outline ring-1 focus-within:outline-indigo-500"
      placeholder={placeholder}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
