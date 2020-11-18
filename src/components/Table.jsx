import React from 'react';
import { useContext } from 'react';
import MyContext from '../context/MyContext';
import usePlanets from '../context/usePlanets';

function Table() {
  const { isFetching, setFetch } = useContext(MyContext);

  const data = usePlanets(setFetch);

  const keys = [
    'name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity',
    'terrain', 'surface_water', 'population', 'films', 'created', 'edited', 'url',
  ];

  return ( (isFetching)
    ? <div>loading...</div>
    : (
    <table>
      <thead>
        <tr>
          {keys.map((key, index) => (
            <th key={index}>
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((planet, index) => (
          <tr key={index}>
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
  ));
};

export default Table;
