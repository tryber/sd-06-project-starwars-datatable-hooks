import React, { useContext, useState } from 'react';
import StarWarsContext from '../StarWarsContext';

function FilterBar() {
  const INITIAL_STATE = {
    column: '',
    comparison: '',
    value: '',
  };
  const [numericFilter, setNumericFilter] = useState(INITIAL_STATE);
  const { handleFilterByName, handleFilterByNumericValues } = useContext(StarWarsContext);
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
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
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
        onClick={ () => handleFilterByNumericValues(numericFilter) }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterBar;
