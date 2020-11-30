import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    data: { planets },
    filters: { filterByName: { name: nameFilter },
      filterByNumericValues, order: { column, sort } },
    numericOptions,
  } = useContext(StarWarsContext);
  const ZERO = 0;
  const ONE = 1;

  const renderTableHeader = (planet) => {
    const headers = Object.keys(planet).filter((key) => key !== 'url');
    return headers.map((item, index) => <th key={ index }>{item}</th>);
  };

  const ASCENDENT = (a, b) => {
    if (numericOptions.includes(column)) {
      return a[column] - b[column];
    }
    return a[column] > b[column] ? ONE : -ONE;
  };

  const DESCENDENT = (a, b) => {
    if (numericOptions.includes(column)) {
      return b[column] - a[column];
    }
    return b[column] > a[column] ? -ONE : ONE;
  };

  const filterByNumbersParameters = (filtersByNumericValues) => {
    const lastIndex = filtersByNumericValues.length - 1;
    const { column: parameter, comparison, value } = filtersByNumericValues[lastIndex];

    const operator = {
      'maior que': (a, b) => Number(a) > Number(b),
      'menor que': (a, b) => Number(a) < Number(b),
      'igual a': (a, b) => Number(a) === Number(b),
    };

    return planets.filter((planet) => {
      const columnExists = planet[parameter] !== 'unknown';
      if (operator[comparison](planet[parameter], value) && columnExists) {
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

    if (filterByNumericValues.length !== ZERO) {
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

  return planets.length !== ZERO && (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          {renderTableHeader(planets[0])}
        </tr>
      </thead>
      <tbody>
        {handleFilter(planets)
          .sort(sort === 'ASC' ? ASCENDENT : DESCENDENT)
          .map((planet, index) => renderTableRow(planet, index))}
      </tbody>
    </table>
  );
}

export default Table;
