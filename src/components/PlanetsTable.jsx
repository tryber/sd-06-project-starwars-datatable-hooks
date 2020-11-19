import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function segundoFiltro(planets, filter) {
  if (filter.comparison === 'maior que') {
    return planets
      .filter((planet) => Number(planet[filter.column]) > Number(filter.value));
  } if (filter.comparison === 'menor que') {
    return planets
      .filter((planet) => Number(planet[filter.column]) < Number(filter.value));
  } if (filter.comparison === 'igual a') {
    return planets
      .filter((planet) => Number(planet[filter.column]) === Number(filter.value));
  }
  return planets;
}

function PlanetsTable() {
  const { returnAPI, filterName, filterNumber } = useContext(StarWarsContext);
  let allPlanets = returnAPI;
  filterNumber.forEach((filter) => {
    allPlanets = segundoFiltro(allPlanets, filter);
  });
  return (
    <tbody className="planets-table">
      {allPlanets
        .filter((planet) => planet.name.toLowerCase()
          .includes(filterName.name.toLowerCase()))
        .map((planet) => (
          <tr key={ planet.name }>
            <td key={ planet.name }>{planet.name}</td>
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

export default PlanetsTable;
