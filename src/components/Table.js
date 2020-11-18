import React, { useContext, useEffect } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, getPlanetList, filters } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanetList();
  }, []);

  // sem parametros => didUpdate
  // [] => didmount
  // [variavel] => didUpdate condicional (shouldComponentUpdate)
  // retornar callback => willUnmount

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Rotation_period</th>
          <th scope="col">Orbital_period</th>
          <th scope="col">Diameter</th>
          <th scope="col">Climate</th>
          <th scope="col">Gravity</th>
          <th scope="col">Terrain</th>
          <th scope="col">Surface_water</th>
          <th scope="col">Population</th>
          <th scope="col">Films</th>
          <th scope="col">Created</th>
          <th scope="col">Edited</th>
          <th scope="col">URL</th>
        </tr>
      </thead>
      <tbody>
        {data
          .filter((planet) => planet.name.toLowerCase()
            .includes(filters.toLowerCase()))
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
          ))}
      </tbody>
    </table>
  );
}

export default Table;
