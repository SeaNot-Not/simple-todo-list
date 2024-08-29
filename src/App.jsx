import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  //---------- Declaration of Hooks -----------
  const [todoItems, setTodoItems] = useState(() => {
    const savedItems = localStorage.getItem("ITEMS");
    return savedItems == null ? [] : JSON.parse(savedItems);
  });

  //---------------For Sorting Options----------------
  const [filterOption, setfilterOption] = useState("none");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    filterItems(filterOption, todoItems);
  }, [filterOption, todoItems]);

  //-------------For Saving to Local Storage--------------------
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todoItems));
  }, [todoItems]);

  //--------- Functions -----------

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

  const handleRadioChange = (e) => {
    const newFilterOption = e.target.value;
    setfilterOption(newFilterOption);
  };

  const filterItems = (newFilterOption, todoItems) => {
    let filtered;

    if (newFilterOption === "completed") {
      filtered = [...todoItems].filter((item) => item.completed === true);
    } else if (newFilterOption === "pending") {
      filtered = [...todoItems].filter((item) => item.completed === false);
    } else {
      filtered = [...todoItems];
    }
    setFilteredItems(filtered);
  };

  //--------- What you see on screen -----------
  return (
    <>
      <div className="card-box">
        <NewTodoForm addTodoItem={addTodoItem} />

        <div className="filter-options">
          <label>Filter Options: </label>
          <label className="radio-label">
            <input
              className="todo-radio"
              type="radio"
              value="completed"
              checked={filterOption === "completed"}
              onChange={handleRadioChange}
            />
            Completed
          </label>
          <label className="radio-label">
            <input
              className="todo-radio"
              type="radio"
              value="pending"
              checked={filterOption === "pending"}
              onChange={handleRadioChange}
            />
            Pending
          </label>
          <label className="radio-label">
            <input
              className="todo-radio"
              type="radio"
              value="none"
              checked={filterOption === "none"}
              onChange={handleRadioChange}
            />
            None
          </label>
        </div>
        <h2 className="header">Todo List</h2>

        <TodoList
          todoItems={filteredItems}
          toggleTodoItem={toggleTodoItem}
          deleteItem={deleteItem}
          setTodoItems={setTodoItems}
        />
      </div>
    </>
  );
}
