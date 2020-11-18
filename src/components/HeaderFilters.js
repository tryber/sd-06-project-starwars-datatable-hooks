import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function HeaderFilters() {
  const { filters, setFilters, filterPlanets } = useContext(StarWarsContext);
  // const { filterByNumericValues } = filters;
  const columns = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  function filterByNumeric() {
    const column = document.querySelector('#column').value;
    const { value } = document.querySelector('#value');
    const comparison = document.querySelector('#comparison').value;
    setFilters(
      {
        ...filters,
        filterByNumericValues: [{ column, comparison, value }],
      },
    );
  }

  function removeFilter() {
    setFilters(
      {
        ...filters,
        filterByNumericValues: [],
      },
    );
  }

  return (
    <div>
      <label htmlFor="inputFilter">
        Filtrar por nome
        <input
          onChange={ (event) => filterPlanets(event) }
          type="text"
          id="inputFilter"
          data-testid="name-filter"
        />
      </label>
      <br />

      <div data-testid="filter">
        <select id="column" data-testid="column-filter">
          { columns.filter((colum) => !filters.filterByNumericValues
            .find(({ column }) => column === colum))
            .map((colum) => <option key={ colum } value={ colum }>{ colum }</option>) }
        </select>

        <select id="comparison" data-testid="comparison-filter">
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>

        <input id="value" type="number" data-testid="value-filter" />

        <button type="button" onClick={ removeFilter }>X</button>
      </div>
      <button
        type="button"
        onClick={ filterByNumeric }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default HeaderFilters;
