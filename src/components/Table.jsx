import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Planet from './Planet';

export default function Table() {
  const { getAPI, planets, filters, sortOptions } = useContext(StarWarsContext);
  const { name } = filters.filterByName;
  const { filterByNumericValues } = filters;
  const { column, comparison, number } = filterByNumericValues[0];
  const columns = planets[0] && Object.keys(planets[0]);

  useEffect(() => {
    getAPI();
  }, []);

  const numberOfColumns = 12;

  function filterSelect(elements) {
    switch (true) {
    case (comparison === ''):
      return true;
    case (comparison === 'maior que'):
      return Number(elements[column]) > Number(number);
    case (comparison === 'menor que'):
      return Number(elements[column]) < Number(number);
    case (comparison === 'igual a'):
      return Number(elements[column]) === Number(number);
    default:
      return false;
    }
  }

  const filteredPlanets = planets
    .filter((planetsFilter) => filterSelect(planetsFilter));
  const preFilteredPlanets = filteredPlanets
    .filter((planet) => planet.name.includes(name));
  const sortedPlanets = preFilteredPlanets
    .sort((planetA, planetB) => sortOptions(planetA, planetB));

  return (
    <table className="table">
      <thead>
        <tr>
          {planets[0] && columns.map((heading) => <th key={ heading.name }>{heading}</th>)
            .filter((place, index) => index <= numberOfColumns)}
        </tr>
      </thead>
      <tbody>
        {sortedPlanets
          .map((planet) => (<Planet
            key={ planet.name }
            planet={ planet }
          />
          ))}
      </tbody>
    </table>

  );
}
