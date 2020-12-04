import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterList = () => {
  const zero = 0;
  const { filterNumber, setFilterNumber } = useContext(StarWarsContext);
  const removeFilters = (index) => {
    const remainingFiltersNumber = [
      ...filterNumber.slice(zero, index),
      ...filterNumber.slice(index + 1, filterNumber.length),
    ];
    setFilterNumber(remainingFiltersNumber);
  };

  return (
    <div className="filters-list">
      <h4> Current filters: </h4>
      {filterNumber.map((eachFilter, index) => (
        <div data-testid="filter" key={ index }>
          <span>
            <button
              type="button"
              className="red-button"
              onClick={ () => removeFilters(index) }
            >
              X
            </button>
            {`${eachFilter.column} ${eachFilter.comparison} ${eachFilter.value}`}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FilterList;
