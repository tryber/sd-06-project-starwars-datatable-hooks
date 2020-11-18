import React, { useContext, useState } from 'react';
import Context from '../context/Context';

export default function Table() {
  const { data, loading, filteredPlanets, setFilteredPlanets } = useContext(Context);
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{
      column: '',
      comparison: '',
      value: '',
    }],
  });
  const initialFilters = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [filterColumn, setFilterColumn] = useState(initialFilters);

  const handleChange = (e) => {
    const { value } = e.target;
    setFilter({ ...filter, filterByName: { name: value } });
    const newPlanets = data.filter((planet) => planet.name.toLowerCase().includes(value));
    setFilteredPlanets(newPlanets);
  };

  const handleFilter = () => {
    const coluna = document.getElementById('column-filter').value;
    const comp = document.getElementById('comparison-filter').value;
    const input = document.getElementById('value-filter').value;
    setFilter({ ...filter,
      filterByNumericValues: [{
        column: coluna,
        comparison: comp,
        value: input,
      }] });
  };

  const filterConditions = (planet) => {
    const { comparison } = filter.filterByNumericValues[0];
    const column = planet[filter.filterByNumericValues[0].column];
    const { value } = filter.filterByNumericValues[0];
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
  };

  const handleClick = () => {
    const newPlanets = filteredPlanets.filter((planet) => filterConditions(planet));
    setFilteredPlanets(newPlanets);
    const coluna = document.getElementById('column-filter').value;
    const newFilters = filterColumn.filter((f) => f !== coluna);
    setFilterColumn(newFilters);
  };

  return (
    <div>
      <header>
        <input
          type="text"
          name="name-filter"
          data-testid="name-filter"
          onChange={ handleChange }
        />
        <div>
          <select
            onChange={ handleFilter }
            data-testid="column-filter"
            id="column-filter"
          >
            {filterColumn.map((f) => (
              <option
                key={ f }
                value={ f }
                data-testid="filter"
              >
                {f}
              </option>

            ))}

          </select>
          <select
            onChange={ handleFilter }
            data-testid="comparison-filter"
            id="comparison-filter"
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input
            onChange={ handleFilter }
            type="text"
            data-testid="value-filter"
            id="value-filter"
          />
          <button
            type="button"
            onClick={ handleClick }
            data-testid="button-filter"
          >
            Filtrar
          </button>
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {loading ? <tr><td>Loading</td></tr>
            : filteredPlanets
              .map((planet) => (
                <tr key={ planet.name }>
                  <td>{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.population}</td>
                  <td>{planet.films}</td>
                  <td>{planet.created}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.url}</td>
                </tr>
              )) }
        </tbody>
      </table>
    </div>
  );
}
