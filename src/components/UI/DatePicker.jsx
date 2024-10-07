function DatePicker({ value, onChange }) {
  return (
    <input
      type="date"
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-md p-2"
    />
  );
}

export default DatePicker;
