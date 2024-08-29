import { useState } from "react";

export const useNewItem = ({ addTodoItem }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") {
      alert("Please input a string!");
    } else {
      addTodoItem(newItem);
      setNewItem("");
    }
  };

  return { newItem, setNewItem, handleSubmit };
};
