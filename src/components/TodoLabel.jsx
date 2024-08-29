export const TodoLabel = ({ children, className, labelText }) => {
  return (
    <label className={className !== null && className}>
      {children}
      {labelText !== null && labelText}
    </label>
  );
};
