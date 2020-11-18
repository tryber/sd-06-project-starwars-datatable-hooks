import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import InputName from './InputName';

function Table() {
  const {
    data,
    requestPlanets,
    filtersProvider:
      { filters:
        { filterByName:
          { name },
        },
      } } = useContext(StarWarsContext);

  useEffect(() => {
    requestPlanets();
  }, []);

  return (
    <div>
      <InputName />
      <h1>Tabela</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((planet) => planet.name.toLowerCase()
              .includes(name.toLowerCase()))
            .map((planet, index) => (
              <tr key={ index }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
