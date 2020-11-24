import React, { useContext, useState } from 'react';
import starWarsContext from '../context/starWarsContext';
import './Table.css';

function Table() {
  const { planets, filter, setFilter } = useContext(starWarsContext);

  function handleFilterByName(event) {
    const { target } = event;
    const { value } = target;
    setFilter({
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  }

  function filterBySelect(event) {
    const { target } = event;
    const { name, value } = target;
    setFilter({
      filters: {
        filterByNumericValues: [
          {
            [name]: [value],
          },
        ],
      },
    });
  }

  function filterPlanets() {
    const { name } = filter.filters.filterByName;

    if (name === '') return planets;
    // const capName = name.replace(/^\w/, (c) => c.toUpperCase());
    const filtered = planets.filter((planet) => planet.name.includes(name));
    return filtered;
  }

  return (
    <div>
      <div className="filter-nav">
        <div className="search-bar">
          Find a planet:
          <input
            data-testid="name-filter"
            type="text"
            name="search-bar"
            onChange={(event) => handleFilterByName(event)}
          />
        </div>
        <div className="filters">
          <select
            data-testid="column-filter"
            name="colum"
            onChange={(event) => filterBySelect(event)}
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
          <select
            data-testid="comparison-filter"
            name="comparison"
            onChange={(event) => filterBySelect(event)}
          >
            <option value="bigger">bigger</option>
            <option value="smaller">smaller</option>
            <option value="equal">equal</option>
          </select>
          <input
            name="value"
            type="number"
            data-testid="value-filter"
            onChange={(event) => filterBySelect(event)}
          />
          <button
            type="button"
            data-testid="button-filter"
          >
            filter
          </button>
        </div>
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
        <tbody>
          {filterPlanets()
            .map((planet, index) => (
              <tr key={index}>
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
      </table>
    </div>
  );
}

export default Table;
