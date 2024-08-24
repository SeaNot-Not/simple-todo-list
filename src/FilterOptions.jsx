

export const FilterOptions = ({filterOption, handleRadioChange}) => {
    return (
        <div className="filter-options">
        <label>Filter Options: </label>
        <label className="radio-label">
          <input className="todo-radio"
          type="radio"
          value="completed"
          checked={filterOption === 'completed'}
          onChange={handleRadioChange} />
          Completed
        </label>
        <label className="radio-label">
          <input className="todo-radio"
          type="radio"
          value="pending"
          checked={filterOption === 'pending'}
          onChange={handleRadioChange} />
          Pending
        </label>
        <label className="radio-label">
          <input className="todo-radio"
          type="radio"
          value="none"
          checked={filterOption === 'none'}
          onChange={handleRadioChange} />
          None
        </label>
      </div>
    )
}