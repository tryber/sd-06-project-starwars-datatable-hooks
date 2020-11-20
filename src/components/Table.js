import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Table = () => {
  const {
    planets,
    getStarWarsPlanet,
    filterByName,
    filterByNumericValue,
  } = useContext(StarWarsContext);

  const tableHeade = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'Url',
  ];

  useEffect(() => {
    getStarWarsPlanet();
  }, []);

  // Explicação Zambelli para aluno
  let planetsFilter = planets;

  filterByNumericValue.forEach((filter) => {
    planetsFilter = planetsFilter.filter((planet) => {
      const zero = 0;
      if (filterByNumericValue.length === zero) {
        return true;
      }
      if (filter.comparison === 'maior que') {
        return planet[filter.column] > Number(filter.value);
      }
      if (filter.comparison === 'menor que') {
        return planet[filter.column] < Number(filter.value);
      }
      if (filter.comparison === 'igua a') {
        return planet[filter.column] === Number(filter.value);
      }
      return planetsFilter;
    });
  });

  return (
    <table className="table">
      <thead>
        <tr>
          {tableHeade.map((column, index) => (
            <th scope="col" key={ index }>{ column }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planetsFilter
          .filter((planet) => planet.name.toLowerCase()
            .includes(filterByName.toLowerCase()))
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
  );
};

export default Table;
