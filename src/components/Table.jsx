import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Planet from './Planet';

export default function Table() {
  const { getAPI, planets, filters } = useContext(StarWarsContext);
  const { name } = filters.filterByName;
  const { filterByNumericValues } = filters;
  const { column, comparison, value } = filterByNumericValues[0];
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
      return Number(elements[column]) > Number(value);
    case (comparison === 'menor que'):
      return Number(elements[column]) < Number(value);
    case (comparison === 'igual a'):
      return Number(elements[column]) === Number(value);
    default:
      return false;
    }
  }

  const preFilteredPlanets = planets.filter((planetsFilter) => filterSelect(planetsFilter));
  const filteredPlanets = preFilteredPlanets.filter((planet) => planet.name.includes(name));
  console.log(filteredPlanets);
  console.log(preFilteredPlanets);
  return (
    <table className="table">
      <thead>
        <tr>
          {planets[0] && columns.map((heading) => <th key={ heading.name }>{heading}</th>)
            .filter((place, index) => index <= numberOfColumns)}
        </tr>
      </thead>
      <tbody>
        {filteredPlanets
          .map((planet) => (<Planet key={ planet.name } planet={ planet } />
          ))}
      </tbody>
    </table>

  );
}
