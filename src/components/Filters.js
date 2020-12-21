import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import AppliedFilter from './AppliedFilter';
import NumericFilter from './NumericFilter';
import TextFilter from './TextFilter';

function Filters() {
  const {
    filters,
  } = useContext(StarWarsContext);

  const { filters: { filterByNumericValues } } = filters;

  return (
    <div>
      <TextFilter />
      <NumericFilter />
      {filterByNumericValues.map((currentFilter, index) => (
        <AppliedFilter  key={ index } filter={ currentFilter } />
      ))}
    </div>
  );
}

export default Filters;
