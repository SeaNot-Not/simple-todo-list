import { useContext, useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import { FilterOptions } from "./FilterOptions";
import { TodoContext } from "./context/TodoContext";
import { useFilterTodo } from "./hooks/useFilterTodo.js";
import { TodoHeader } from "./components/TodoHeader.jsx";

export const TodoApp = () => {
  const { todoItems } = useContext(TodoContext);

  const {
    filterOption,
    filteredItems,
    searchQuery,
    handleRadioChange,
    filterItems,
    handleSearchQuery,
    searchClear,
  } = useFilterTodo();

  useEffect(() => {
    filterItems(filterOption, todoItems, searchQuery);
  }, [filterOption, todoItems, searchQuery]);

  return (
    <>
      <div className="card-box">
        <NewTodoForm />
        <FilterOptions
          filterOption={filterOption}
          searchQuery={searchQuery}
          handleRadioChange={handleRadioChange}
          handleSearchQuery={handleSearchQuery}
          searchClear={searchClear}
        />
        <TodoHeader headerText={"Todo List"} />
        <TodoList todoItems={filteredItems} />
      </div>
    </>
  );
};
