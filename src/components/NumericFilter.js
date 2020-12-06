import React from 'react';

function NumericFilter(props) {
  const {
    setNumericFiltersData,
    columnFilters,
    comparisonFilters,
  } = props;
  

  const onChange = (event) => {
    const { name: objectKey, value, type } = event.target;
    // const processedValue = type === 'number' ? parseInt(value) : value;
    const processedValue = type === 'number'
      ? (isNaN(parseInt(value)) ? 0: parseInt(value))
      : value;
    setNumericFiltersData((prevState) => ({
      ...prevState,
      [objectKey]: processedValue,
    }));
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
      <button type="submit" data-testid="button-filter">Apply Filter</button>
    </div>
  );
}

export default NumericFilter;
