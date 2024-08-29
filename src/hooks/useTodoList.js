import { useState, useEffect } from "react";

const useTodoList = (key) => {
  const [todoItems, setTodoItems] = useState(() => {
    const savedItems = localStorage.getItem(key);
    return savedItems == null ? [] : JSON.parse(savedItems);
  });

  //---------- For Saving to Local Storage ------------
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todoItems));
  }, [todoItems, key]);

  return [todoItems, setTodoItems];
};

export default useTodoList;
