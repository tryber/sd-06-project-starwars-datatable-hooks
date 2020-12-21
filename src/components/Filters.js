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
      {filterByNumericValues.map((numericFilter, index) => (
        <AppliedFilter key={ index } numericFilter={ numericFilter } />
      ))}
    </div>
  );
}

export default Filters;
