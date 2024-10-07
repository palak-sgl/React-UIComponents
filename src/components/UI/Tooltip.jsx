import { useState } from "react";

function Tooltip({ text, children, color }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipColor = {
    gray: "bg-gray-600 text-white",
    black: "bg-black text-white",
    white: "bg-white text-gray-600",
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div
          className={`absolute right-4 bottom-12 mt-1 px-2 py-1 ${tooltipColor[color]} rounded-md text-sm`}
        >
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
