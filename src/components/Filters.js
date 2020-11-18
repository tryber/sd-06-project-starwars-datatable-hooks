import React, { useContext } from 'react';
import { filterContext } from '../contexts/FilterContext';

const Filters = () => {
  const { filterActions } = useContext(filterContext);
  const {
    nameFilter,
    setNameFilter,
    columnFilter,
    setColumnFilter,
    comparisonFilter,
    setComparisonFilter,
    valueFilter,
    setValueFilter,
    setFiltersState,
  } = filterActions;
  return (
    <div className="filters">
      <input
        type="text"
        data-testid="name-filter"
        placeholder="planet name filter"
        value={ nameFilter }
        onChange={ (e) => setNameFilter(e.target.value) }
      />
      <select
        data-testid="column-filter"
        value={ columnFilter }
        onChange={ (e) => setColumnFilter(e.target.value) }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ (e) => setComparisonFilter(e.target.value) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        placeholder="valor"
        data-testid="value-filter"
        value={ valueFilter }
        onChange={ (e) => setValueFilter(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setFiltersState({
          filters: {
            filterByName: {
              name: nameFilter,
            },
            filterByNumericValue: {
              column: columnFilter,
              comparison: comparisonFilter,
              value: valueFilter,
            },
          },
          activeFilters: true,
        }) }
      >
        aplicar filtros
      </button>
    </div>
  );
};

export default Filters;
