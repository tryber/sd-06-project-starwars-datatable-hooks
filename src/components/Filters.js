import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import NumericFilter from './NumericFilter';
import TextFilter from './TextFilter';

function Filters() {
  const {
    columnFilters,
    comparisonFilters,
    applyFilter,
  } = useContext(StarWarsContext);

  const initialNumericFiltersState = {
    column: columnFilters[0],
    comparison: comparisonFilters[0],
    value: 0,
  };
  const [numericFiltersData, setNumericFiltersData] = useState(
    { ...initialNumericFiltersState },
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Filters to be applied');
    console.table(numericFiltersData);
    console.log('--------------');
    applyFilter(numericFiltersData);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <TextFilter />
      <NumericFilter
        setNumericFiltersData={ setNumericFiltersData }
        columnFilters={ columnFilters }
        comparisonFilters={ comparisonFilters }
      />
    </form>
  );
}

export default Filters;
