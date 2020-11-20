import React, { useContext, useState } from 'react';
import StarWarsContext from '../StarWarsContext';

function FilterBar() {
  const INITIAL_STATE = {
    column: '',
    comparison: '',
    value: '',
  };
  const [numericFilter, setNumericFilter] = useState(INITIAL_STATE);
  const {
    filters, handleFilterByName, addFilterByNumericValues, removeFilterByNumericValues,
  } = useContext(StarWarsContext);
  const activeFilters = filters.filterByNumericValues;
  const filterColumns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const showActiveFilters = () => (
    activeFilters.map(({ column, comparison, value }) => (
      <div key={ column } data-testid="filter">
        {`${column} ${comparison} ${value} `}
        <button
          type="button"
          onClick={ () => removeFilterByNumericValues(column) }
        >
          X
        </button>
      </div>
    ))
  );

  const handleColumnDropdown = () => (
    filterColumns.filter((column) => {
      if (activeFilters[0]) {
        const columnsToRemove = activeFilters.map((filter) => filter.column);
        return (!columnsToRemove.includes(column));
      }
      return true;
    }).map((column) => <option key={ column } value={ column }>{column}</option>)
  );
  return (
    <div>
      <h1>Filtros</h1>
      <label htmlFor="filter-input">
        Busca por nome:
        <input
          data-testid="name-filter"
          id="filter-input"
          type="text"
          onChange={ (e) => handleFilterByName(e.target.value) }
        />
      </label>
      <select
        data-testid="column-filter"
        onChange={ (e) => setNumericFilter({ ...numericFilter, column: e.target.value }) }
      >
        {handleColumnDropdown()}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={
          (e) => setNumericFilter({ ...numericFilter, comparison: e.target.value })
        }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={ (e) => setNumericFilter({ ...numericFilter, value: e.target.value }) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => addFilterByNumericValues(numericFilter) }
      >
        Filtrar
      </button>
      <div>
        <h3>Filtros ativos:</h3>
        {activeFilters && showActiveFilters()}
      </div>
    </div>
  );
}

export default FilterBar;
