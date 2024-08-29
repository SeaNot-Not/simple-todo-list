import { useState } from "react";

export const useTodoEdit = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [itemEditingID, setItemEditingID] = useState("");
  const [editedTodo, setEditedTodo] = useState("");

  const handleEditedTodoTextInput = (textValue) => {
    setEditedTodo(textValue);
  };

  const handleEditButton = (id) => {
    setIsEditing(true);
    setItemEditingID(id);
  };

  const handleResetButton = () => {
    setIsEditing(false);
    setEditedTodo("");
    setItemEditingID("");
  };

  const handleSaveButton = (itemEditingID, newTodo, updateTodoItem) => {
    if (newTodo === "") {
      alert("Please input a string!");
    } else {
      updateTodoItem(itemEditingID, newTodo);
      setIsEditing(false);
      setEditedTodo("");
      setItemEditingID("");
    }
  };

  return {
    itemEditingID,
    isEditing,
    editedTodo,
    handleEditedTodoTextInput,
    handleEditButton,
    handleResetButton,
    handleSaveButton,
  };
};
