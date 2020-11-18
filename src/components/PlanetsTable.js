import React, { useContext } from 'react';
import { PlanetContext } from '../contexts/PlanetContext';
import PlanetRow from './PlanetRow';
import headers from '../services/headers';
import { filterContext } from '../contexts/FilterContext';

function getColumnValue(planet, column) {
  switch (column) {
  case 'population':
    return planet.population;
  case 'orbital_period':
    return planet.orbital_period;
  case 'diameter':
    return planet.diameter;
  case 'rotation_period':
    return planet.rotation_period;
  case 'surface_water':
    return planet.surface_water;
  default:
    return planet;
  }
}

function filterPlanet(columnValue, comp, value) {
  switch (comp) {
  case 'maior que':
    // radix param, have to study about it yet
    // https://stackoverflow.com/questions/7818903/jslint-says-missing-radix-parameter
    return (parseInt(columnValue, 0) > value);
  case 'menor que':
    return (parseInt(columnValue, 0) < value);
  case 'igual a':
    return (columnValue === value);
  default:
    return true;
  }
}

function getNameComparison({ name }, input) {
  const lowerCasedPlanetName = name.toLowerCase();
  const lowerCasedNameFilter = input.name.toLowerCase();
  return (lowerCasedPlanetName.match(lowerCasedNameFilter));
}

const PlanetsTable = () => {
  const { planets } = useContext(PlanetContext);
  const { filterActions } = useContext(filterContext);
  const { filtersState } = filterActions;
  const { activeFilters, filters } = filtersState;
  const { filterByName, filterByNumericValue } = filters;

  return planets ? (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header) => (<th key={ header }>{header}</th>))}
        </tr>
      </thead>
      <tbody>
        {!activeFilters && planets.map((planet) => (
          (getNameComparison(planet, filterByName))
            && <PlanetRow key={ planet.name } planet={ planet } />
        ))}
        {activeFilters && filterByNumericValue && planets.map((planet) => {
          const { column, comparison, value } = filterByNumericValue;
          const selectedColumnValue = getColumnValue(planet, column);
          return (getNameComparison(planet, filterByName))
            && filterPlanet(selectedColumnValue, comparison, value)
            && <PlanetRow key={ planet.name } planet={ planet } />;
        })}
        {activeFilters && !filterByNumericValue && planets.map((planet) => (
          (getNameComparison(planet, filterByName))
            && <PlanetRow key={ planet.name } planet={ planet } />
        ))}
      </tbody>
    </table>
  ) : (
    <p>Loading...</p>
  );
};

export default PlanetsTable;
