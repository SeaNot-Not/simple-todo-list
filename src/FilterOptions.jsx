import { TodoLabel } from "./components/TodoLabel";
import { TodoRadioInput } from "./components/TodoRadioInput";
import { TodoTextInput } from "./components/TodoTextInput";
import { TodoContainer } from "./components/TodoContainer";
import { TodoButton } from "./components/TodoButton";

export const FilterOptions = ({
  filterOption,
  searchQuery,
  handleRadioChange,
  handleSearchQuery,
  searchClear,
}) => {
  return (
    <>
      <TodoContainer className={"filter-options"}>
        <TodoLabel>Filter Options: </TodoLabel>
        <TodoLabel className={"radio-label"} labelText="Completed">
          <TodoRadioInput
            value={"completed"}
            checked={filterOption === "completed"}
            onChange={handleRadioChange}
          />
        </TodoLabel>
        <TodoLabel className={"radio-label"} labelText="Pending">
          <TodoRadioInput
            value={"pending"}
            checked={filterOption === "pending"}
            onChange={handleRadioChange}
          />
        </TodoLabel>
        <TodoLabel className={"radio-label"} labelText="None">
          <TodoRadioInput
            value={"none"}
            checked={filterOption === "none"}
            onChange={handleRadioChange}
          />
        </TodoLabel>
      </TodoContainer>
      <TodoContainer className={"search-bar"}>
        <TodoLabel>Search:</TodoLabel>
        <TodoTextInput
          value={searchQuery}
          onChange={(e) => handleSearchQuery(e.target.value)}
          id={"item"}
        />
        <TodoButton
          buttonText={"Clear"}
          onClick={searchClear}
          className={"btn btn-search"}
        />
      </TodoContainer>
    </>
  );
};
