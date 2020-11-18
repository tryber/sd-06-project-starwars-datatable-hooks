import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Planet from './Planet';

function Table() {
  const { data, isFetching } = useContext(StarWarsContext);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  const headers = ['Name', 'Rotation Period', 'Oribital Period',
    'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Created', 'Edited', 'Url'];

  const columns = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  function filterPlanets({ target }) {
    setFilters({ ...filters, filterByName: { name: target.value } });
  }

  function filtersOptions(planet) {
    const { comparison } = filters.filterByNumericValues[0];
    const column = planet[filters.filterByNumericValues[0].column];
    const { value } = filters.filterByNumericValues[0];
    if (comparison === '') {
      return true;
    }
    if (comparison === 'maior que') {
      if (Number(column) > Number(value)) return true;
    }
    if (comparison === 'menor que') {
      if (Number(column) < Number(value)) return true;
    }
    if (comparison === 'igual a') {
      if (Number(column) === Number(value)) return true;
    }
    return false;
  }

  function filterByNumeric() {
    const column = document.querySelector('#column').value;
    const { value } = document.querySelector('#value');
    const comparison = document.querySelector('#comparison').value;
    setFilters({ ...filters, filterByNumericValues: [{ column, comparison, value }] });
  }

  return (
    <div>
      <label htmlFor="inputFilter">
        Filtrar
        <input
          onChange={ (event) => filterPlanets(event) }
          type="text"
          id="inputFilter"
          data-testid="name-filter"
        />
      </label>

      <select id="column" data-testid="column-filter">
        <option value="" hidden>Selecione</option>
        { columns
          .map((column) => <option key={ column } value={ column }>{ column }</option>) }
      </select>

      <select id="comparison" data-testid="comparison-filter">
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>

      <input id="value" type="number" data-testid="value-filter" />

      <button
        type="button"
        onClick={ filterByNumeric }
        data-testid="button-filter"
      >
        Filtrar
      </button>

      <table border="1">
        <thead>
          <tr>
            { headers.map((header) => <th key={ header }>{ header }</th>) }
          </tr>
        </thead>
        <tbody>
          { (isFetching) ? <tr><td>Loading...</td></tr>
            : data.filter((planet) => planet.name.includes(filters.filterByName.name))
              .filter((planet) => filtersOptions(planet))
              .map((planet) => (
                <Planet key={ planet.name } planet={ planet } />
              )) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
