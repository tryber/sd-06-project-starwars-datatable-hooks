import React, { useState, useContext } from 'react';
import compareAndFilterArrays from '../utils/compareAndFilterArrays';
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
    columnFilters, currentSelectedColumnFilters,
  );

  const hasAvailableColumnFilters = (
    availableColumnFilters && availableColumnFilters.length
  );

  const initialNumericFiltersState = {
    column: availableColumnFilters[0],
    comparison: comparisonFilters[0],
    value: '0',
  };
  const [filtersData, setFiltersData] = useState(
    { ...initialNumericFiltersState },
  );

  const onChange = (event) => {
    const { name, value } = event.target;
    setFiltersData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const applyFilterButtonClick = () => {
    applyFilter(filtersData);

    const newSelectedColumnFilters = [...filterByNumericValues, filtersData]
      .map((element) => element.column);

    const newAvailableColumnFilters = compareAndFilterArrays(
      columnFilters, newSelectedColumnFilters,
    );

    setFiltersData({
      ...filtersData,
      column: newAvailableColumnFilters.length ? newAvailableColumnFilters[0] : undefined,
    });
  };

  const renderFilters = () => (
    <div>
      <label htmlFor="column-filter">
        Column Filter:
        <select
          id="column-filter"
          name="column"
          data-testid="column-filter"
          onChange={ (event) => onChange(event) }
        >
          {availableColumnFilters
            .map((category, index) => (
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
          value={ filtersData.value }
          min={ 0 }
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

  const renderDisabledFilters = () => (
    <div>
      <label htmlFor="column-filter">
        Column Filter:
        <select id="column-filter" disabled>
          <option>No filters available</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Filter by:
        <select id="comparison-filter" disabled>
          {comparisonFilters.map((comparison, index) => (
            <option key={ index } value={ comparison }>{ comparison }</option>
          ))}
        </select>
      </label>
      <label htmlFor="value-filter">
        Value:
        <input id="value-filter" disabled />
      </label>
      <button type="button" disabled>
        Apply Filter
      </button>
    </div>
  );

  return (
    <div>
      { hasAvailableColumnFilters ? renderFilters() : renderDisabledFilters() }
    </div>
  );
}

export default NumericFilter;
