function Button({ label, onClick, color }) {
  const buttonColor = {
    black: "bg-black text-white",
    white: "bg-white text-black",
    blue: "bg-blue-600 text-white",
    green: "bg-green-500 text-white",
    red: "bg-red-600 text-white",
  };
  return (
    <button
      onClick={onClick}
      className={` ${buttonColor[color]} px-4 py-2 m-1 rounded-md shadow-lg`}
    >
      {label}
    </button>
  );
}

export default Button;
