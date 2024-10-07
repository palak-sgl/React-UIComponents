import React from "react";

function Tabs({ tab, content, color }) {
  const tabColors = {
    blue: " text-blue-600",
    red: " text-red-600",
    green: "text-green-600 ",
  };
  return (
    <div>
      <h2 className={`text-lg ${tabColors[color]} font-bold`}>
        Content for Tab {tab}
      </h2>
      <p>{content}</p>
    </div>
  );
}

export default Tabs;
