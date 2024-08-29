export const TodoCheckboxInput = ({ checked, onChange }) => {
  return (
    <input
      className="todo-checkbox"
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
};
