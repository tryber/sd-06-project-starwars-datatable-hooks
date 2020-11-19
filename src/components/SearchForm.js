import React, { useContext } from 'react';
import starWarsContext from '../context/starWarsContext';

function SearchForm() {
  const { setFilters, filters, dynamicFilter } = useContext(starWarsContext);

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ (event) => setFilters({ ...filters, column: event.target.value }) }
      >
        <option defaultValue>Selecione...</option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (event) => setFilters({ ...filters, compare: event.target.value }) }
      >
        <option defaultValue>Selecione...</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={ (event) => setFilters({ ...filters, number: event.target.value }) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => dynamicFilter() }
      >
        Adicionar filtro
      </button>
    </div>

  );
}

export default SearchForm;

// population, orbital_period, diameter, rotation_period e surface_water
