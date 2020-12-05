import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, text } = useContext(StarWarsContext);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((planet) => planet.name.includes(text))
            .map((position, index) => (
              <tr key={ index }>
                <td data-testid="planet-name">{position.name}</td>
                <td>{position.rotation_period}</td>
                <td>{position.orbital_period}</td>
                <td>{position.diameter}</td>
                <td>{position.climate}</td>
                <td>{position.gravity}</td>
                <td>{position.terrain}</td>
                <td>{position.surface_water}</td>
                <td>{position.population}</td>
                <td>{position.films}</td>
                <td>{position.created}</td>
                <td>{position.edited}</td>
                <td>{position.url}</td>
              </tr>

            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
