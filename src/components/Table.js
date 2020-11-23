import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    data: { planets },
    filters: { filterByName: { name: nameFilter }, filterByNumericValues },
  } = useContext(StarWarsContext);
  const zero = 0;

  const renderTableHeader = (planet) => {
    const headers = Object.keys(planet).filter((key) => key !== 'url');
    return headers.map((item, index) => <th key={ index }>{item}</th>);
  };

  const filterByNumbersParameters = (filtersByNumericValues) => {
    const lastIndex = filtersByNumericValues.length - 1;
    const { column, comparison, value } = filtersByNumericValues[lastIndex];

    const operator = {
      'maior que': (a, b) => Number(a) > Number(b),
      'menor que': (a, b) => Number(a) < Number(b),
      'igual a': (a, b) => Number(a) === Number(b),
    };

    return planets.filter((planet) => {
      const columnExists = planet[column] !== 'unknown';
      if (operator[comparison](planet[column], value) && columnExists) {
        return planet;
      }
      return undefined;
    });
  };

  const handleFilter = (planetsObj) => {
    if (nameFilter) {
      return planetsObj.filter((planet) => planet.name.toLowerCase()
        .includes(nameFilter.toLowerCase()));
    }

    if (filterByNumericValues.length !== zero) {
      return filterByNumbersParameters(filterByNumericValues);
    }

    return planetsObj;
  };

  const renderTableRow = (planet, indexPlanet) => {
    const columns = Object.keys(planet).filter((key) => key !== 'url');
    return (
      <tr key={ indexPlanet }>
        {columns.map((info, index) => {
          if (info === 'name') {
            return (
              <th scope="row" data-testid="planet-name" key={ index }>
                {planet[info]}
              </th>
            );
          }
          if (info === 'residents' || info === 'films') {
            return <td key={ index }>{planet[info].length}</td>;
          }
          return <td key={ index }>{planet[info]}</td>;
        })}
      </tr>
    );
  };

  return planets.length !== zero && (
    <table className="table">
      <thead>
        <tr>
          {renderTableHeader(planets[0])}
        </tr>
      </thead>
      <tbody>
        {handleFilter(planets).map((planet, index) => renderTableRow(planet, index))}
      </tbody>
    </table>
  );
}

export default Table;
