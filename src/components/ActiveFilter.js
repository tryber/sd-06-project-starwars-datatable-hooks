import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function ActiveFilter() {
  const { name,
    numericFilters,
    setFilters,
    filters,
    availableColumnFilters,
    setAvailableColumnFilters,
  } = useContext(StarWarsContext);

  const removeNumericFilter = (column) => {
    setFilters({ ...filters,
      filterByNumericValues: numericFilters
        .filter((numericFilter) => numericFilter.column !== column),
    });
    setAvailableColumnFilters([...availableColumnFilters, column]);
  };

  const removeNameFilter = () => {
    setFilters({
      ...filters, filterByName: { name: '' },
    });
  };

  const renderActiveNamefilter = () => {
    if (name !== '') {
      return (
        <div className="filter-name-container" data-testid="filter">
          <h3>text</h3>
          <p>{name}</p>
          <button
            type="button"
            onClick={ () => removeNameFilter() }

          >
            x
          </button>
        </div>
      );
    }
  };

  const renderActiveNumericFilter = () => (
    numericFilters.map((filter) => (
      <div
        className="filter-numeric-container"
        key={ filter.column }
        data-testid="filter"
      >
        <h3>{filter.column}</h3>
        <p>{filter.comparison}</p>
        <p>{filter.value}</p>
        <button
          type="button"
          onClick={ () => removeNumericFilter(filter.column) }
        >
          x
        </button>
      </div>
    ))
  );

  return (
    <div>
      {renderActiveNamefilter()}
      {renderActiveNumericFilter()}
    </div>
  );
}
