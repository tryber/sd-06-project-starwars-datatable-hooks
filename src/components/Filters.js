import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import NumericFilter from './NumericFilter';
import TextFilter from './TextFilter';

function Filters() {
  const {
    comparisonFilters,
    applyFilter,
    saveSelectedColumnFilter,
    availableColumnFilters,
  } = useContext(StarWarsContext);

  console.log('Available filters:', availableColumnFilters);

  const initialNumericFiltersState = {
    column: availableColumnFilters[0],
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
    saveSelectedColumnFilter(numericFiltersData.column);
  };

  useEffect(() => {
    setNumericFiltersData({ ...initialNumericFiltersState });
  }, [availableColumnFilters]);

  return (
    <form onSubmit={ handleSubmit }>
      <TextFilter />
      <NumericFilter
        setNumericFiltersData={ setNumericFiltersData }
        columnFilters={ availableColumnFilters }
        comparisonFilters={ comparisonFilters }
      />
    </form>
  );
}

export default Filters;
