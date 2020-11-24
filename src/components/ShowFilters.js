import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function ShowFilter() {
  const {
    filterByNumericValues,
  } = useContext(StarWarsContext);

  return (
    <>
      {filterByNumericValues
        .map((filter, i) => (
          <div key={ i } data-testid="filter" className="show-filters">
            <span>
              {`FILTRO ${i + 1}: ${filter.column} ${filter.comparison} ${filter.value}`}
            </span>
            <button
              type="button"
              className="remove-button"
              // onClick={ removeFilter(filter) }
            >
              X
            </button>
          </div>
        ))}
    </>
  );
}

export default ShowFilter;
