import { useState } from "react";

export const useFilterTodo = () => {
  const [filterOption, setfilterOption] = useState("none");
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  return {
    filterOption,
    filteredItems,
    searchQuery,
    handleRadioChange,
    filterItems,
    handleSearchQuery,
    searchClear,
  };
};
