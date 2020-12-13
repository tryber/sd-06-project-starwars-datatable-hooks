import React, { useContext, useEffect } from 'react';
import DataContext from '../context/DataContext';
import { numericColumnsOptions } from './FilterNumber';

function TBody() {
  const { dataApi,
    filterName, filterNumber, order, setOrder } = useContext(DataContext);

  const filterByNumber = (planets, filter) => {
    if (filter.comparison === 'maior que') {
      return planets
        .filter((planet) => Number(planet[filter.column]) > Number(filter.value));
    }
    if (filter.comparison === 'menor que') {
      return planets
        .filter((planet) => Number(planet[filter.column]) < Number(filter.value));
    }
    if (filter.comparison === 'igual a') {
      return planets
        .filter((planet) => Number(planet[filter.column]) === Number(filter.value));
    }
    return planets;
  };
  const orderCrescent = (a, b) => {
    const minusOne = -1;
    if (numericColumnsOptions.includes(order.column)) {
      return a[order.column] - b[order.column];
    }
    return a[order.column] > b[order.column] ? 1 : minusOne;
  };
  const orderDecrescent = (a, b) => {
    const minusOne = -1;
    if (numericColumnsOptions.includes(order.column)) {
      return b[order.column] - a[order.column];
    }
    return b[order.column] > a[order.column] ? minusOne : 1;
  };

  useEffect(() => {
    setOrder({ column: 'name', sort: 'ASC' });
  }, [setOrder]);

  let allPlanets = dataApi;

  filterNumber.forEach((filter) => {
    allPlanets = filterByNumber(allPlanets, filter);
  });

  return (
    <tbody>
      {allPlanets
        .filter((planet) => planet.name.includes(filterName.name))
        .sort(order.sort === 'ASC' || order.sort === '' ? orderCrescent : orderDecrescent)
        .map((planet) => (
          <tr key={ planet.name }>
            <td data-testid="planet-name" key={ planet.name }>{planet.name}</td>
            <td key={ planet.rotation_period }>{planet.rotation_period}</td>
            <td key={ planet.orbital_period }>{planet.orbital_period}</td>
            <td key={ planet.diameter }>{planet.diameter}</td>
            <td key={ planet.climate }>{planet.climate}</td>
            <td key={ planet.gravity }>{planet.gravity}</td>
            <td key={ planet.terrain }>{planet.terrain}</td>
            <td key={ planet.surface_water }>{planet.surface_water}</td>
            <td key={ planet.population }>{planet.population}</td>
            <td key={ planet.films }>{planet.films}</td>
            <td key={ planet.url }>{planet.url}</td>
            <td key={ planet.created }>{planet.created}</td>
            <td key={ planet.edited }>{planet.edited}</td>
          </tr>
        ))}
    </tbody>
  );
}

export default TBody;
