export const TodoTextInput = ({ value, onChange, className, id }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className="text-input"
      type="text"
      id={id !== null && id}
    />
  );
};
