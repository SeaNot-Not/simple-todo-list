import { useContext } from "react";
import { TodoButton } from "./components/TodoButton";
import { useNewItem } from "./hooks/useNewItem";
import { TodoContext } from "./context/TodoContext";
import { TodoTextInput } from "./components/TodoTextInput";

export function NewTodoForm() {
  const { addTodoItem } = useContext(TodoContext);
  const { newItem, setNewItem, handleSubmit } = useNewItem({ addTodoItem });

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <TodoTextInput
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          id={"item"}
        />
      </div>
      <TodoButton buttonText={"Add"} onClick={null} className={"btn btn-add"} />
    </form>
  );
}
