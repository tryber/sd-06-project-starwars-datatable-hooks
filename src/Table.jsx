import React from 'react';
import usePlanets from './context/usePlanets';

function Table() {
  const data = usePlanets();

  const keys = [
    'name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity',
    'terrain', 'surface_water', 'population', 'films', 'created', 'edited', 'url',
  ];
  
  return (
    <table>
      <thead>
        <tr>
          { keys.map((key, index) => (
            <th key={index}>
              {key}
            </th>
          )) }
        </tr>
      </thead>
      <tbody>
        { data.map(planet => (
            <tr>
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
          ))  
        }
      </tbody>
    </table>
  );
};

export default Table;
