import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterList = () => {
  const zero = 0;
  const { filterNumber, setFilterNumber } = useContext(StarWarsContext);
  const cancelFilter = (i) => {
    const remainingFiltersNumber = [
      ...filterNumber.slice(zero, i),
      ...filterNumber.slice(i + 1, filterNumber.length),
    ];
    setFilterNumber(remainingFiltersNumber);
  };
  return (
    <div className="filters-list">
      <h4> Current filters: </h4>
      {filterNumber.map((filter, i) => (
        <div data-testid="filter" key={ filter.column }>
          <span>
            <button
              type="button"
              className="red-button"
              onClick={ () => cancelFilter(i) }
            >
              X
            </button>
            {`${filter.column} ${filter.comparison} ${filter.value}`}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FilterList;
