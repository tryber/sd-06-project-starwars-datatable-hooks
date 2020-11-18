import React, { useContext, useState, useEffect } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const [planetsName, setPlanetsName] = useState([]);
  const { filterByName } = filters;

  useEffect(() => {
    if (data !== undefined) {
      setPlanetsName(data);
    }
  }, [data]);

  return (
    <table>
      <tbody>
        <tr>
          <th>nome</th>
          <th>climate</th>
          <th>created</th>
          <th>diameter</th>
          <th>edited</th>
          <th>films</th>
          <th>gravity</th>
          <th>orbital_period</th>
          <th>population</th>
          <th>rotation_period</th>
          <th>surface_water</th>
          <th>terrain</th>
          <th>url</th>
        </tr>
        {
          planetsName.filter((f) => f.name.includes(filterByName.name)).map((e, id) => (
            <tr key={ id }>
              <td>{e.name}</td>
              <td>{e.climate}</td>
              <td>{e.created}</td>
              <td>{e.diameter}</td>
              <td>{e.films}</td>
              <td>{e.gravity}</td>
              <td>{e.orbital_period}</td>
              <td>{e.population}</td>
              <td>{e.rotation_period}</td>
              <td>{e.surface_water}</td>
              <td>{e.terrain}</td>
              <td>{e.url}</td>
            </tr>))
        }
      </tbody>
    </table>
  );
}

export default Table;
