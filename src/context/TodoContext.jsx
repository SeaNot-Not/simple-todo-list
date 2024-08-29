import { createContext } from "react";
import useTodoList from "../hooks/useTodoList";

//Context
export const TodoContext = createContext();

//Provider
export const TodoProvider = ({ children }) => {
  const [todoItems, setTodoItems] = useTodoList("ITEMS");

  // Todo Utility Functions
  const addTodoItem = (title) => {
    setTodoItems((todos) => {
      return [...todos, { id: crypto.randomUUID(), title, completed: false }];
    });
  };

  const toggleTodoItem = (id, completed) => {
    return setTodoItems((todos) => {
      return todos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      );
    });
  };

  const updateTodoItem = (itemEditingID, newTodo) => {
    setTodoItems((todos) => {
      return todos.map((todo) => {
        if (itemEditingID === todo.id) {
          return { ...todo, title: newTodo };
        } else {
          return todo;
        }
      });
    });
  };

  const deleteItem = (id) => {
    return setTodoItems((todos) => {
      return todos.filter((todo) => id !== todo.id);
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todoItems,
        setTodoItems,
        addTodoItem,
        toggleTodoItem,
        updateTodoItem,
        deleteItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
