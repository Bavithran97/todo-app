import React from 'react';

const FilterBar = ({ currentFilter, setFilter }) => {
  const filters = ['All', 'Completed', 'Incomplete'];

  return (
    <div className="btn-group mb-3">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`btn btn-${currentFilter === filter ? 'secondary' : 'outline-secondary'}`}
          onClick={() => setFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;