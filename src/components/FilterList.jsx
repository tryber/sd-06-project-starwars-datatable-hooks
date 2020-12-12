import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function FilterList() {
  const zero = 0;
  const { filterNumber, setFilterNumber } = useContext(DataContext);
  const removeFilter = (index) => {
    const arrayFilters = [
      ...filterNumber.slice(zero, index),
      ...filterNumber.slice(index + 1, filterNumber.length),
    ];
    setFilterNumber(arrayFilters);
  };

  return (
    <div>
      {filterNumber.map((filter, index) => (
        <div data-testid="filter" key={ index }>
          <span>
            {`${filter.column} ${filter.comparison} ${filter.value}`}
            <button
              id={ index }
              type="button"
              onClick={ (e) => removeFilter(e.target.id) }
            >
              X
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default FilterList;
