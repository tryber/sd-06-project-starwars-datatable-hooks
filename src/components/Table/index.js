import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const tableTitle = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

function Table() {
  const { prismPlanets, getPrismPlanet } = useContext(StarWarsContext);

  useEffect(() => {
    getPrismPlanet();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {tableTitle.map((title) => (
              <th scope="col" key={ title }>{title}</th>))}
          </tr>
        </thead>
        <tbody>
          {prismPlanets.map((planet) => (
            <tr key={ planet.created }>
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
