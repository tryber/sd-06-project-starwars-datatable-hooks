import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

export default function NumericFiltersInputs() {
  const zero = 0;
  const {
    filters,
    setFilters,
    availableColumnFilters,
    setAvailableColumnFilters,
  } = useContext(StarWarsContext);

  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(zero);

  useEffect(() => {
    if (availableColumnFilters.length > zero) {
      setColumnFilter(availableColumnFilters[0]);
    }
  }, [availableColumnFilters]);

  const addFilters = (column, comparison, value) => {
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, {
        column,
        comparison,
        value,
      }] });

    setAvailableColumnFilters(availableColumnFilters
      .filter((availableColumn) => (
        availableColumn !== columnFilter)));
  };

  const renderColumnFilter = () => (
    <select
      data-testid="column-filter"
      value={ columnFilter }
      onChange={ (e) => setColumnFilter(e.target.value) }
    >
      {availableColumnFilters.map((filter) => (
        <option key={ `filter ${filter}` }>
          {filter}
        </option>))}
    </select>
  );

  const renderComparisonFilter = () => (
    <select
      data-testid="comparison-filter"
      onChange={ (e) => setComparisonFilter(e.target.value) }
    >
      <option value="maior que">maior que</option>
      <option value="menor que">menor que</option>
      <option value="igual a">igual a</option>

    </select>
  );

  const renderValueFilter = () => (
    <input
      type="number"
      data-testid="value-filter"
      value={ valueFilter }
      onChange={ (e) => setValueFilter(e.target.value) }
    />
  );

  const renderButton = () => (
    <button
      data-testid="button-filter"
      type="button"
      onClick={ () => addFilters(columnFilter, comparisonFilter, valueFilter) }
    >
      add filter
    </button>
  );

  return (
    <form>
      {renderColumnFilter()}
      {renderComparisonFilter()}
      {renderValueFilter()}
      {renderButton()}
    </form>
  );
}
