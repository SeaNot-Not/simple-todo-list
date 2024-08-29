import { useState } from "react";

export function TodoItems({
  id,
  title,
  completed,
  toggleTodoItem,
  deleteItem,
  setTodoItems,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [itemEditing, setItemEditing] = useState("");
  const [editedTodo, setEditedTodo] = useState("");

  const handleEditButton = (id) => {
    setIsEditing(true);
    setItemEditing(id);
  };

  const handleResetButton = () => {
    setIsEditing(false);
    setEditedTodo("");
    setItemEditing("");
  };

  const handleSaveButton = (itemEditing, newTodo) => {
    if (newTodo === "") {
      alert("Please input a string!");
    } else {
      setTodoItems((todos) => {
        return todos.map((todo) => {
          if (itemEditing === todo.id) {
            return { ...todo, title: newTodo };
          } else {
            return todo;
          }
        });
      });
      setIsEditing(false);
      setEditedTodo("");
      setItemEditing("");
    }
  };

  return (
    <li>
      <label>
        <input
          className="todo-checkbox"
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodoItem(id, e.target.checked)}
        />
        {title}
      </label>
      {itemEditing === id && isEditing ? (
        <>
          <button
            onClick={() => handleSaveButton(id, editedTodo)}
            className="btn btn-edit"
          >
            ✔
          </button>
          <button className="btn btn-danger" onClick={handleResetButton}>
            ✖
          </button>
          <input
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
            className="text-input"
            type="text"
          />
        </>
      ) : (
        <>
          <button onClick={() => handleEditButton(id)} className="btn btn-edit">
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => deleteItem(id)}>
            Delete
          </button>
        </>
      )}
    </li>
  );
}
