import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

const Table = () => {
  const { planets } = useContext(SWContext);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">climate</th>
          <th scope="col">created</th>
          <th scope="col">diameter</th>
          <th scope="col">edited</th>
          <th scope="col">name</th>
          <th scope="col">gravity</th>
          <th scope="col">name</th>
          <th scope="col">orbital_period</th>
          <th scope="col">population</th>
          <th scope="col">name</th>
          <th scope="col">rotation_period</th>
          <th scope="col">surface_water</th>
          <th scope="col">terrain</th>
        </tr>
      </thead>
      <tbody>
        {planets.map((planet) => (
          <tr key={planet.name}>
            <td>{planet.climate}</td>
            <td>{planet.created}</td>
            <td>{planet.diameter}</td>
            <td>{planet.edited}</td>
            <td>{planet.name}</td>
            <td>{planet.gravity}</td>
            <td>{planet.name}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.population}</td>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.terrain}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
