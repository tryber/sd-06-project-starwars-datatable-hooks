import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function HeaderFilters() {
  const { filters, setFilters, filterPlanets } = useContext(StarWarsContext);
  const columns = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const [sort, setSort] = useState('ASC');

  function sortOptions() {
    const column = document.querySelector('#column-sort').value;
    setFilters({
      ...filters,
      order: {
        column,
        sort,
      },
    });
  }
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

        <br />

        <select data-testid="column-sort" id="column-sort">
          <option value="name">Name</option>
          { columns.map((col) => <option key={ col } value={ col }>{ col }</option>) }
        </select>

        <label htmlFor="sortASC">
          ASC
          <input
            onClick={ () => setSort('ASC') }
            data-testid="column-sort-input-asc"
            type="radio"
            name="sort"
            id="sortASC"
            value="ASC"
          />
        </label>

        <label htmlFor="sortDESC">
          DESC
          <input
            onClick={ () => setSort('DESC') }
            data-testid="column-sort-input-desc"
            type="radio"
            name="sort"
            id="sortDESC"
            value="DESC"
          />
        </label>

        <button
          data-testid="column-sort-button"
          type="button"
          onClick={ sortOptions }
        >
          Ordenar
        </button>

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
