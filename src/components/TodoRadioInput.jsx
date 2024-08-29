export const TodoRadioInput = ({ value, checked, onChange }) => {
  return (
    <input
      className="todo-radio"
      type="radio"
      value={value}
      checked={checked}
      onChange={onChange}
    />
  );
};
