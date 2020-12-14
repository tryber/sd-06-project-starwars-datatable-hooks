import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarContext';
import Header from './Header';

function TableWars() {
  const { planets, theadKeys } = useContext(StarWarsContext);
  return (
    <div>
      <Header />
      <label htmlFor="filter-planets">
        Filtrar
        <input
          type="text"
          data-testid="name-filter"
          name="filter-planets"
          id="filter-planets"
        />
      </label>
      <button type="button">Filtrar</button>
      <table border="1">
        <thead>
          <tr>
            {
              theadKeys.map((key) => (
                <th key={ key }>
                  {key.replace('_', ' ')}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            planets.map((planet) => (
              <tr key={ planet.name }>
                <td data-testid="planet-name">{planet.name}</td>
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
            ))
          }
        </tbody>
      </table>

    </div>
  );
}

export default TableWars;
