import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import filterPlanets from '../services';

function PlanetsTable() {
  const { planets, order,
    isLoading, filterByName, filterByNumericValues } = useContext(StarWarsContext);

  // const { column, sort } = order;
  let filteredPlanets = planets;

  // console.log(filteredPlanets);
  // function compare(a, b) {
  //   if ((a[order.column]) < b[order.column]) {
  //     if (order.sort === 'ASC') {
  //       return -1;
  //     }
  //     return 1;
  //   }
  //   if (a[order.column] > b[order.column]) {
  //     if (order.sort === 'ASC') {
  //       return 1;
  //     }
  //     return -1;
  //   }
  //   return 0;
  // }
  function compare(a, b) {
    const MAGIC_NUMBER_ZERO = 0;
    const MAGIC_NUMBER_MINUS_ONE = -1;
    if (order.column === 'name') {
      if (order.sort === 'ASC') {
        return a[order.column].localeCompare(b[order.column]);
      }
      return b[order.column].localeCompare(a[order.column]);
    }
    if (parseInt(a[order.column], 10) < parseInt(b[order.column], 10)) {
      if (order.sort === 'ASC') {
        return MAGIC_NUMBER_MINUS_ONE;
      }
      return 1;
    }
    if (parseInt(a[order.column], 10) > parseInt(b[order.column], 10)) {
      if (order.sort === 'ASC') {
        return 1;
      }
      return MAGIC_NUMBER_MINUS_ONE;
    }
    return MAGIC_NUMBER_ZERO;
  }

  filteredPlanets.sort(compare);
  const INITIAL_POSITION = 0;
  for (let i = INITIAL_POSITION; i < filterByNumericValues.length; i += 1) {
    filteredPlanets = filterPlanets(filteredPlanets, filterByNumericValues[i]);
  }

  return (
    <div>
      <table>
        <thead>
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
          {isLoading ? <p>Carregando</p>
            : filteredPlanets.filter((planet) => planet.name
              .toLowerCase().includes(filterByName.name))
              .map((planet) => (
                <tr key={ planet.name }>
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
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlanetsTable;
