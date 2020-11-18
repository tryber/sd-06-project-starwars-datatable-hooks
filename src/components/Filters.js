import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const {
    filters: { filterByNumericValues },
    deleteNumericFilter,
  } = useContext(StarWarsContext).context;
  return (
    <section>
      {filterByNumericValues.map((filter, index) => (
        <div data-testid="filter" key={index}>
        <p>{filter.column}{' '}{filter.comparison}{' '}{filter.value}</p>
        <button type="button" onClick={() => deleteNumericFilter(filter)}>X</button>
        </div>
      ))}
    </section>
  );
}

export default Filters;
