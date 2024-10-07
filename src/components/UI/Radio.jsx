function Radio({ name, label, value, id }) {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        className="cursor-pointer"
      />
      <label className="cursor-pointer" for={id}>
        {label}
      </label>
    </div>
  );
}

export default Radio;
