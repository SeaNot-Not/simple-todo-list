import { useState, useEffect } from "react";

export function useTodoItems() {
  const [todoItems, setTodoItems] = useState(() => {
    const savedItems = localStorage.getItem("ITEMS");
    return savedItems == null ? [] : JSON.parse(savedItems);
  });

  //---------- For Saving to Local Storage ------------
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todoItems));
  }, [todoItems]);

  //----------------- Functions -------------------------
  const addTodoItem = (title) => {
    //Add Todo Item
    setTodoItems((todos) => {
      return [...todos, { id: crypto.randomUUID(), title, completed: false }];
    });
  };

  const toggleTodoItem = (id, completed) => {
    //Toggle Todo Item
    return setTodoItems((todos) => {
      return todos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      );
    });
  };

  const deleteItem = (id) => {
    // Delete Item Function
    return setTodoItems((todos) => {
      return todos.filter((todo) => id !== todo.id);
    });
  };

  return [todoItems, setTodoItems, addTodoItem, toggleTodoItem, deleteItem];
}
