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
          className={`absolute left-0 top-full mt-2 p-1 ${tooltipColor[color]} rounded-md text-sm`}
        >
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
