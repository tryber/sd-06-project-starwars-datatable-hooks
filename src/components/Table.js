import React, { useContext, useState } from 'react';
import starWarsContext from '../context/starWarsContext';
import './Table.css';

function Table() {
  const [filter, setFilter] = useState({
    filters: {
      FilterByName: {
        name: '',
      },
    },
  });

  function handleFilterByName(event) {
    const { target } = event;
    const { value } = target;
    setFilter({
      filters: {
        FilterByName: {
          name: value,
        },
      },
    });
  }

  const { planets } = useContext(starWarsContext);

  function filterPlanets() {
    const { name } = filter.filters.FilterByName;
    if (name === '') return planets;
    // const capName = name.replace(/^\w/, (c) => c.toUpperCase());
    const filtered = planets.filter((planet) => planet.name.includes(name));
    return filtered;
  }

  return (
    <div>
      Data list:
      <div>
        Find a planet:
        <input
          data-testid="name-filter"
          type="text"
          name="search-bar"
          onChange={ (event) => handleFilterByName(event) }
        />
        <button
          type="button"
          onClick={ (event) => filterPlanets(event) }
        >
          Test filter
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Climate</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Films</th>
            <th>Gravity</th>
            <th>Name</th>
            <th>Orbital Period</th>
            <th>Population</th>
            <th>Rotation Period</th>
            <th>Surface Water</th>
            <th>Terrain</th>
            <th>URL</th>
          </tr>
        </thead>
      </table>
      <tbody>
        {filterPlanets()
          .map((planet, index) => (
            <tr key={ index }>
              <td>{planet.climate}</td>
              <td>{planet.created}</td>
              <td>{planet.diameter}</td>
              <td>{planet.edited}</td>
              <td>{planet.films}</td>
              <td>{planet.gravity}</td>
              <td data-testid="planet-name">{planet.name}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.population}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.terrain}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
      </tbody>
    </div>
  );
}

export default Table;
