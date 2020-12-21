import React, { useState, useContext, useEffect } from 'react';
import compareAndFilterArrays from '../helpers/compareAndFilterArrays';
import StarWarsContext from '../context/StarWarsContext';

function NumericFilter() {
  const {
    filters,
    columnFilters,
    comparisonFilters,
    applyFilter,
  } = useContext(StarWarsContext);

  const { filters: { filterByNumericValues } } = filters;

  const currentSelectedColumnFilters = filterByNumericValues.map((element) => (
    element.column
  ));

  const availableColumnFilters = compareAndFilterArrays(
    columnFilters, currentSelectedColumnFilters
  );

  const hasAvailableColumnFilters = availableColumnFilters && availableColumnFilters.length > 0;

  const initialNumericFiltersState = {
    column: availableColumnFilters[0],
    comparison: comparisonFilters[0],
    value: 0,
  };
  const [filtersData, setFiltersData] = useState(
    { ...initialNumericFiltersState },
  );

  const renderFilters = () => {
    return (
      <div>
        <label htmlFor="column-filter">
          Column Filter:
        <select
            id="column-filter"
            name="column"
            data-testid="column-filter"
            onChange={(event) => onChange(event)}
          >
            {availableColumnFilters
              .map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
          </select>
        </label>
        <label htmlFor="comparison-filter">
          Filter by:
        <select
            id="comparison-filter"
            name="comparison"
            data-testid="comparison-filter"
            onChange={(event) => onChange(event)}
          >
            {comparisonFilters.map((comparison, index) => (
              <option key={index} value={comparison}>{comparison}</option>
            ))}
          </select>
        </label>
        <label htmlFor="value-filter">
          Value:
        <input
            type="number"
            id="value-filter"
            name="value"
            min={0}
            data-testid="value-filter"
            onChange={(event) => onChange(event)}
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={() => applyFilterButtonClick()}
        >
          Apply Filter
      </button>
      </div>
    );
  };

  const renderDisabledFilters = () => {
    return (
      <div>
        <label>
          Column Filter:
        <select disabled>
          <option>No filters available</option>
          </select>
        </label>
        <label>
          Filter by:
        <select disabled>
            {comparisonFilters.map((comparison, index) => (
              <option key={index} value={comparison}>{comparison}</option>
            ))}
          </select>
        </label>
        <label>
          Value:
        <input disabled/>
        </label>
        <button disabled>
          Apply Filter
      </button>
      </div>
    );
  };

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
    setFiltersData((prevState) => ({
      ...prevState,
      [objectKey]: processedValue,
    }));
  };

  const applyFilterButtonClick = () => {
    applyFilter(filtersData);

    const newSelectedColumnFilters = [...filterByNumericValues, filtersData]
      .map((element) => element.column);

    const newAvailableColumnFilters = compareAndFilterArrays(
      columnFilters, newSelectedColumnFilters
    );

    setFiltersData({
      ...filtersData,
      column: newAvailableColumnFilters.length > 0 ? newAvailableColumnFilters[0] : undefined
    });
  };

  return (
    <div>
      { hasAvailableColumnFilters ? renderFilters() : renderDisabledFilters() }
    </div>
  );
}

export default NumericFilter;
