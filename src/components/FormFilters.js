import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const initialValue = 0;

function FormFilters() {
  const { filterByName, setFilterByName, filterByNumber } = useContext(StarWarsContext);
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(initialValue);

  return (
    <form>
      <input
        type="text"
        name="search"
        data-testid="name-filter"
        onChange={ ({ target }) => setFilterByName(target.value) }
        value={ filterByName }
      />
      <select
        value={ columnFilter }
        onChange={ ({ target }) => setColumnFilter(target.value) }
        data-testid="column-filter"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        value={ comparisonFilter }
        onChange={ ({ target }) => setComparisonFilter(target.value) }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        value={ valueFilter }
        onChange={ ({ target }) => setValueFilter(target.value) }
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => filterByNumber(columnFilter, comparisonFilter, valueFilter) }
      >
        Filtrar
      </button>
    </form>
  );
}

export default FormFilters;
