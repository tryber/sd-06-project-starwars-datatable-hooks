import React from 'react';
import PropTypes from 'prop-types';

function NumericFilter(props) {
  const {
    setNumericFiltersData,
    columnFilters,
    comparisonFilters,
  } = props;

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

NumericFilter.propTypes = {
  setNumericFiltersData: PropTypes.func.isRequired,
  columnFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  comparisonFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NumericFilter;
