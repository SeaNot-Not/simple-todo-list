import { useContext, useState } from "react";
import { TodoContext } from "./context/TodoContext";
import { useTodoEdit } from "./hooks/useTodoEdit";
import { TodoButton } from "./components/TodoButton";
import { TodoTextInput } from "./components/TodoTextInput";
import { TodoCheckboxInput } from "./components/TodoCheckboxInput";
import { TodoLabel } from "./components/TodoLabel";
import { sameIDBetweenTodoItemAndEditingItem } from "./utils/ConditionUtilities";
import { doesUserIsEditingAnItem } from "./utils/ConditionUtilities";

//ADD COMMENT

export function TodoItems({ id, title, completed }) {
  // Context Provider TodoContext
  const { toggleTodoItem, updateTodoItem, deleteItem } =
    useContext(TodoContext);

  // Custom Hook useTodoEdit
  const {
    itemEditingID,
    isEditing,
    editedTodo,
    handleEditedTodoTextInput,
    handleEditButton,
    handleResetButton,
    handleSaveButton,
  } = useTodoEdit();

  return (
    <li>
      <TodoLabel labelText={title}>
        <TodoCheckboxInput
          checked={completed}
          onChange={(e) => toggleTodoItem(id, e.target.checked)}
        />
      </TodoLabel>
      {sameIDBetweenTodoItemAndEditingItem(itemEditingID, id) &&
      doesUserIsEditingAnItem(isEditing) ? (
        <>
          <TodoButton
            buttonText={"✔"}
            onClick={() => handleSaveButton(id, editedTodo, updateTodoItem)}
            className={"btn btn-edit"}
          />
          <TodoButton
            buttonText={"✖"}
            onClick={handleResetButton}
            className={"btn btn-danger"}
          />
          <TodoTextInput
            value={editedTodo}
            onChange={(e) => handleEditedTodoTextInput(e.target.value)}
            className={"text-input"}
          />
        </>
      ) : (
        <>
          <TodoButton
            buttonText={"Edit"}
            onClick={() => handleEditButton(id)}
            className={"btn btn-edit"}
          />
          <TodoButton
            buttonText={"Delete"}
            onClick={() => deleteItem(id)}
            className={"btn btn-danger"}
          />
        </>
      )}
    </li>
  );
}
