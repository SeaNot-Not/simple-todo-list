export const TodoButton = ({ buttonText, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {buttonText}
    </button>
  );
};
