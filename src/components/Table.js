import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/starWarsContext';

function Table() {
  const { star, getApi, searchName } = useContext(StarWarsContext);

  useEffect(() => {
    getApi();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
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
      </thead>
      <tbody>
        {star
          .filter((el) => el.name.toLowerCase()
            .includes(searchName.toLowerCase()))
          .map((el, idx) => (
            <tr key={ idx }>
              <td>{ el.name }</td>
              <td>{ el.climate }</td>
              <td>{ el.created }</td>
              <td>{ el.diameter }</td>
              <td>{ el.edited }</td>
              <td>{ el.films }</td>
              <td>{ el.gravity }</td>
              <td>{ el.orbital_period }</td>
              <td>{ el.population }</td>
              <td>{ el.rotation_period }</td>
              <td>{ el.surface_water }</td>
              <td>{ el.terrain }</td>
              <td>{ el.url }</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
