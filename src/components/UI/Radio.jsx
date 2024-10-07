function Radio({ name, label, value }) {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        name={name}
        value={value}
        className="cursor-pointer"
      />
      <label className="cursor-pointer">{label}</label>
    </div>
  );
}

export default Radio;
