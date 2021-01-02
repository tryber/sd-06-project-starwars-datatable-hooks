import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import AppliedFilter from './AppliedFilter';
import NumericFilter from './NumericFilter';
import TextFilter from './TextFilter';
import Sorter from './Sorter';
import './Filters.css';

function Filters() {
  const {
    filters,
  } = useContext(StarWarsContext);

  const { filters: { filterByNumericValues } } = filters;

  return (
    <div className="filters-container">
      <TextFilter />
      <NumericFilter />
      {filterByNumericValues.map((numericFilter, index) => (
        <AppliedFilter key={ index } numericFilter={ numericFilter } />
      ))}
      <Sorter />
    </div>
  );
}

export default Filters;
