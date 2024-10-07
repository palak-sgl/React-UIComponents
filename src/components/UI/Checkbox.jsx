function Checkbox({ label }) {
  return (
    <div className="flex items-center space-x-2">
      <input type="checkbox" className="cursor-pointer" />
      <label className="cursor-pointer">{label}</label>
    </div>
  );
}

export default Checkbox;
