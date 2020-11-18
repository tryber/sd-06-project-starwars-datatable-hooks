import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Planet from './Planet';

function Table() {
  const { data, isFetching, filters } = useContext(StarWarsContext);
  const { filterByName, filterByNumericValues } = filters;
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
              .map((planet) => (
                <Planet key={ planet.name } planet={ planet } />
              )) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
