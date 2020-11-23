import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Planet from './Planet';

function Table() {
  const { data, isFetching, filters } = useContext(StarWarsContext);
  const { filterByName, filterByNumericValues, order } = filters;
  const headers = ['Name', 'Rotation Period', 'Oribital Period',
    'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Created', 'Edited', 'Url'];

  function filtersOptions(planet) {
    const zero = 0;
    if (filterByNumericValues.length > zero) {
      const { comparison } = filterByNumericValues[zero];
      const column = planet[filterByNumericValues[zero].column];
      const { value } = filterByNumericValues[zero];
      if (comparison === '') return true;
      if (comparison === 'maior que') return (Number(column) > Number(value));
      if (comparison === 'menor que') return (Number(column) < Number(value));
      if (comparison === 'igual a') return (Number(column) === Number(value));
    }
    return true;
  }

  function sortOptions(planetA, planetB) {
    const UM = 1;
    const ZERO = 0;
    if (order.column === 'name') {
      if (order.sort === 'ASC') {
        if (planetA.name > planetB.name) {
          return UM;
        }
        if (planetA.name < planetB.name) {
          return -UM;
        }
      } else {
        if (planetA.name < planetB.name) {
          return UM;
        }
        if (planetA.name > planetB.name) {
          return -UM;
        }
      }
      return ZERO;
    }

    if (order.sort === 'ASC') {
      return planetA[order.column] - planetB[order.column];
    }
    return planetB[order.column] - planetA[order.column];
  }

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            { headers.map((header) => <th key={ header }>{ header }</th>) }
          </tr>
        </thead>
        <tbody>
          { (isFetching) ? <tr><td>Loading...</td></tr>
            : data.filter((planet) => planet.name.includes(filterByName.name))
              .filter((planet) => filtersOptions(planet))
              .sort((planetA, planetB) => sortOptions(planetA, planetB))
              .map((planet) => (
                <Planet key={ planet.name } planet={ planet } />
              )) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
