import React, { useContext } from 'react';
import StarWarsContext from '../context';

function Filters() {
  const { filters: { filterByNumericValues }, setFilters } = useContext(StarWarsContext);

  const excludeFilter = (filter) => {
    const index = filterByNumericValues.indexOf(filter);
    const magicNumberZero = 0;
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [
        ...prevState.filterByNumericValues.slice(magicNumberZero, index),
        ...prevState.filterByNumericValues.slice(index + 1),
      ],
    }));
  };
  return (
    <div>
      { filterByNumericValues.map((filter, index) => {
        const { column, range, rangeNumber, color } = filter;
        return (
          <div data-testid="filter" key={ index } style={ { backgroundColor: color } }>
            <p>{ `${column} ${range} ${rangeNumber}` }</p>
            <button
              type="button"
              onClick={ () => excludeFilter(filter) }
            >
              X
            </button>
          </div>
        );
      }) }
    </div>
  );
}

export default Filters;
