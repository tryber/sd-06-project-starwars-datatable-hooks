import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const {
    filters: { filterByNumericValues },
    deleteNumericFilter,
  } = useContext(StarWarsContext);
  return (
    <section>
      {filterByNumericValues.map((filter, index) => (
        <div data-testid="filter" key={ index }>
          <span>
            {filter.column}
            {' '}
            {filter.comparison}
            {' '}
            {filter.value}
          </span>
          <button type="button" onClick={ () => deleteNumericFilter(filter) }>X</button>
        </div>
      ))}
    </section>
  );
}

export default Filters;
