import React, { useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';

function TablePlanets() {
  const { data, filters } = useContext(StarWarsContext);
  const { name } = filters.filterByName;
  return (
    <div>
      <h1>Planets</h1>
      <table className="table-container">
        <thead className="table-head">
          <tr>
            <th>Name</th>
            <th>Rotation</th>
            <th>Orbital</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface_water</th>
            <th>population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          { data && data.map((item, index) => {
            if (item.name.includes(name)) {
              return (
                <tr key={ index }>
                  <td>{ item.name }</td>
                  <td>{ item.rotation_period }</td>
                  <td>{ item.orbital_period }</td>
                  <td>{ item.diameter }</td>
                  <td>{ item.climate }</td>
                  <td>{ item.gravity }</td>
                  <td>{ item.terrain }</td>
                  <td>{ item.surface_water }</td>
                  <td>{ item.population }</td>
                  <td>{ item.films }</td>
                  <td>{ item.created }</td>
                  <td>{ item.edited }</td>
                  <td>{ item.url }</td>
                </tr>
              );
            }
            return undefined;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TablePlanets;
