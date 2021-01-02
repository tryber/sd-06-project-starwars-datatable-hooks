import React, { useState, useContext } from 'react';
import compareAndFilterArrays from '../utils/compareAndFilterArrays';
import StarWarsContext from '../context/StarWarsContext';
import './NumericFilter.css';

function NumericFilter() {
  const {
    filters,
    columnFilters,
    comparisonFilters,
    addFilter,
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

  function onChange(event) {
    const { name, value } = event.target;
    setFiltersData({
      ...filtersData,
      [name]: value,
    });
  }

  function addFilterButtonClick() {
    addFilter(filtersData);

    const newSelectedColumnFilters = [...filterByNumericValues, filtersData]
      .map((element) => element.column);

    const newAvailableColumnFilters = compareAndFilterArrays(
      columnFilters, newSelectedColumnFilters,
    );

    setFiltersData({
      ...filtersData,
      column: newAvailableColumnFilters.length ? newAvailableColumnFilters[0] : undefined,
    });
  }

  function renderFilters() {
    return (
      <div className="numericFilter-container">
        <div className="numericFilter-selectors">
          <label className="dropdown-input" htmlFor="column-filter">
            Column Filter:
            <select
              id="column-filter"
              name="column"
              className="form-control"
              data-testid="column-filter"
              onChange={ (event) => onChange(event) }
            >
              {availableColumnFilters
                .map((category, index) => (
                  <option key={ index } value={ category }>{ category }</option>
                ))}
            </select>
          </label>
          <label className="dropdown-input" htmlFor="comparison-filter">
            Filter by:
            <select
              id="comparison-filter"
              name="comparison"
              className="form-control"
              data-testid="comparison-filter"
              onChange={ (event) => onChange(event) }
            >
              {comparisonFilters.map((comparison, index) => (
                <option key={ index } value={ comparison }>{ comparison }</option>
              ))}
            </select>
          </label>
          <label className=" value-input" htmlFor="value-filter">
            Value:
            <input
              type="number"
              id="value-filter"
              name="value"
              className="form-control"
              value={ filtersData.value }
              min={ 0 }
              data-testid="value-filter"
              onChange={ (event) => onChange(event) }
            />
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          data-testid="button-filter"
          onClick={ () => addFilterButtonClick() }
        >
          Apply Filter
        </button>
      </div>
    );
  }

  function renderDisabledFilters() {
    return (
      <div className="numericFilter-container">
        <div className="numeric-filter-selectors">
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
            <input className="value-input" id="value-filter" disabled />
          </label>
        </div>
        <button type="button" disabled>
          Apply Filter
        </button>
      </div>
    );
  }

  return (
    <div>
      { hasAvailableColumnFilters ? renderFilters() : renderDisabledFilters() }
    </div>
  );
}

export default NumericFilter;
