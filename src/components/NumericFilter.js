import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumericFilter() {
  const {
    columnFilters,
    comparisonFilters,
    applyFilter,
    saveSelectedColumnFilter,
    availableColumnFilters,
  } = useContext(StarWarsContext);

  const initialNumericFiltersState = {
    column: availableColumnFilters[0],
    comparison: comparisonFilters[0],
    value: 0,
  };
  const [numericFiltersData, setNumericFiltersData] = useState(
    { ...initialNumericFiltersState },
  );

  const onChange = (event) => {
    const { name: objectKey, value, type } = event.target;
    const defaultValue = 0;
    let processedValue = null;
    if (type === 'number') {
      processedValue = Number(value);
    } else if (!Number.isNaN(Number(value))) {
      processedValue = defaultValue;
    } else {
      processedValue = value;
    }
    setNumericFiltersData((prevState) => ({
      ...prevState,
      [objectKey]: processedValue,
    }));
  };

  const applyFilterButtonClick = () => {
    console.log('Filters to be applied');
    console.table(numericFiltersData);
    console.log('--------------');
    applyFilter(numericFiltersData);
    saveSelectedColumnFilter(numericFiltersData.column);
  };

  return (
    <div>
      <label htmlFor="column-filter">
        Column Filter:
        <select
          id="column-filter"
          name="column"
          data-testid="column-filter"
          onChange={ (event) => onChange(event) }
        >
          {columnFilters.map((category, index) => (
            <option key={ index } value={ category }>{ category }</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Filter by:
        <select
          id="comparison-filter"
          name="comparison"
          data-testid="comparison-filter"
          onChange={ (event) => onChange(event) }
        >
          {comparisonFilters.map((comparison, index) => (
            <option key={ index } value={ comparison }>{ comparison }</option>
          ))}
        </select>
      </label>
      <label htmlFor="value-filter">
        Value:
        <input
          type="number"
          id="value-filter"
          name="value"
          value={ setNumericFiltersData.value }
          data-testid="value-filter"
          onChange={ (event) => onChange(event) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => applyFilterButtonClick() }
      >
        Apply Filter
      </button>
    </div>
  );
}

export default NumericFilter;
