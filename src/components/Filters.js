import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filters = () => {
  const {
    filterByNumericValue,
  } = useContext(StarWarsContext);

  return (
    <div>
      {filterByNumericValue.map((filter, index) => (
        <div key={ index }>
          <span>
            { filter.column }
          </span>
          <span>
            { filter.comparison }
          </span>
          <span>
            { filter.value }
          </span>
          <button
            type="button"
            data-testid="filter"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Filters;
