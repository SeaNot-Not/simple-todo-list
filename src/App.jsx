import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import { FilterOptions } from "./FilterOptions";
import useTodoList from "./hooks/useTodoList";

export default function App() {
  // Custom Hook Todo List
  const [todoItems, setTodoItems] = useTodoList("ITEMS");

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

  //---------------For Sorting Options----------------
  const [filterOption, setfilterOption] = useState("none");
  const [filteredItems, setFilteredItems] = useState([]);

  //----------------For Search Feature--------------------
  const [searchQuery, setSearchQuery] = useState("");

  //----------------For Search and Filter Feature------------------

  useEffect(() => {
    filterItems(filterOption, todoItems, searchQuery);
  }, [filterOption, todoItems, searchQuery]);

  const handleRadioChange = (e) => {
    const newFilterOption = e.target.value;
    setfilterOption(newFilterOption);
  };

  const filterItems = (newFilterOption, todoItems, searchQuery) => {
    let filtered;

    if (newFilterOption === "completed") {
      filtered = [...todoItems].filter((item) => item.completed === true);
    } else if (newFilterOption === "pending") {
      filtered = [...todoItems].filter((item) => item.completed === false);
    } else {
      filtered = [...todoItems];
    }

    if (searchQuery !== "") {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  };

  const handleSearchQuery = (value) => {
    setSearchQuery(value);
  };

  const searchClear = () => {
    setSearchQuery("");
  };

  //--------- What you see on screen -----------
  return (
    <>
      <div className="card-box">
        <NewTodoForm addTodoItem={addTodoItem} />
        <FilterOptions
          searchQuery={searchQuery}
          handleSearchQuery={handleSearchQuery}
          filterOption={filterOption}
          handleRadioChange={handleRadioChange}
          searchClear={searchClear}
        />

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
