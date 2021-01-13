import React, { useContext, useEffect } from 'react';
import getAPI from '../services/api/api';

import context from '../services/context/context';

function Table() {
  const { data, setData } = useContext(context);

  async function callAPI() {
    await setData(await getAPI());
  }

  useEffect(() => {
    callAPI();
  }, []);

  const zero = 0;

  if (data.length === zero) {
    return <h1>Loading...</h1>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation period</th>
          <th>orbital period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {data.map((planet) => (
          <tr key="a">
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
