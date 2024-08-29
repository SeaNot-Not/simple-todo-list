export const FilterOptions = ({searchQuery, handleSearchQuery, filterOption, handleRadioChange, searchClear}) => {
    return (
      <>
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

      <div className="search-bar">
        <label>Search:</label>
        <input id="text-search" className="text-input" type="text" value={searchQuery} onChange={e => handleSearchQuery(e.target.value)}/>
        <button onClick={searchClear} className="btn btn-search">Clear</button>
      </div>
      </>
    )
}