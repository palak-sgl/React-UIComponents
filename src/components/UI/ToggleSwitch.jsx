function ToggleSwitch({ isOn, handleToggle, color = "gray" }) {
  const toggleColor = {
    green: "bg-green-400",
    blue: "bg-blue-400",
    gray: "bg-gray-800",
  };
  const colorClasses = toggleColor[color] || toggleColor.gray;
  const baseClass = "bg-gray-400";
  return (
    <div
      onClick={handleToggle}
      className={`w-12 mt-2 h-6 flex items-center rounded-full  cursor-pointer ${
        isOn ? `${colorClasses}` : `${baseClass}`
      }`}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? "translate-x-6" : ""
        }`}
      />
    </div>
  );
}

export default ToggleSwitch;
