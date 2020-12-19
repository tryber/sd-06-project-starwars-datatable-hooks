import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function ActiveFilters() {
  const {
    filters,
    setFilters,
    availableColumns,
    setAvailableColumns,
  } = useContext(StarWarsContext);
  const activeFilters = filters.filters.filterByNumericValues;
  const eraseFilter = (column) => {
    const remainingFilters = activeFilters.filter((filter) => filter.column !== column);
    setFilters({
      ...filters,
      filters: {
        ...filters.filters,
        filterByNumericValues: [...remainingFilters],
      },
    });
    setAvailableColumns([...availableColumns, column]);
  };

  return (
    <div className="active-filters">
      { activeFilters.map((filter, index) => {
        const { column, comparison, value } = filter;

        return (
          <div data-testid="filter" key={ `${index}-filter` }>
            <span>{ `${column} | ${comparison} | ${value}` }</span>
            <button type="button" onClick={ () => eraseFilter(column) }>X</button>
          </div>
        );
      }) }
    </div>
  );
}

export default ActiveFilters;
