import React from 'react';
import { useContext } from 'react';
import MyContext from '../context/MyContext';
import usePlanets from '../hooks/usePlanets';

function Table() {
  const {
    isFetching, setFetch, data,
    filters: { filterByName: { name } },
    filters: { filterByNumericValues: [{ column, comparison, value }] }
  } = useContext(MyContext);

  usePlanets(setFetch);

  const keys = [
    'name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity',
    'terrain', 'surface_water', 'population', 'films', 'created', 'edited', 'url',
  ];

  const filterByColumn = (data) => {
    switch (comparison) {
      case 'maior que':
        return data.filter(planet => Number(planet[column]) > Number(value));
      case 'menor que':
        return data.filter(planet => Number(planet[column]) < Number(value));
      case 'igual a':
        return data.filter(planet => Number(planet[column]) === Number(value));
      default:
        return data;
    };
  };

  return ((isFetching)
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
          {filterByColumn(data)
            .filter((planets) => planets.name.toLowerCase().includes(name.toLowerCase()))
            .map((planet) => (
              <tr key={planet.name}>
                <td data-testid="planet-name">{planet.name}</td>
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
