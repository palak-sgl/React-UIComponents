import React from "react";

function Badge(props) {
  const { label, color } = props;
  const colorPalette = {
    red: "bg-red-500 text-white",
    yellow: "bg-yellow-500 text-red-500",
    transparent: "bg-gray-300 text-black border border-black ",
  };
  return (
    <span className={` py-1 px-3 rounded-md ${colorPalette[color]}`}>
      {label}
    </span>
  );
}

export default Badge;
