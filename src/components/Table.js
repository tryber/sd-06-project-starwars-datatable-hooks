import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const { filterByName } = filters;
  const { name } = filterByName;

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NAME</th>
          <th scope="col">DIAMETER</th>
          <th scope="col">CLIMATE</th>
          <th scope="col">GRAVITY</th>
          <th scope="col">TERRAIN</th>
          <th scope="col">SURFACE WATER</th>
          <th scope="col">POPULATION</th>
          <th scope="col">FILMS</th>
          <th scope="col">CREATED</th>
          <th scope="col">EDITED</th>
          <th scope="col">URL</th>
          <th scope="col">RESIDENTS</th>
        </tr>
      </thead>
      <tbody>
        {data.filter((planets) => planets.name.includes(name))
          .map((planet) => (
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
              <td />
            </tr>
          ))}
      </tbody>
    </table>
  );
}
