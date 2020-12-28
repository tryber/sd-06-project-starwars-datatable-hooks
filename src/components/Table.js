import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { planets,
    getApiStar,
    searchTerm,
    filterByNumericValues,
    orderBy,
    columnSelect,
  } = useContext(StarWarsContext);

  useEffect(() => {
    getApiStar();
  }, []); // componentDidMount qdo carrega a 1ª vez

  // useEffect(() => {
  //   setOrderBy({ column: 'name', sort: 'ASC' });
  // }, [setOrderBy]);

  function numericFilter(listPlanets) {
    const number = 0;
    let copyPlanets = listPlanets;
    for (let index = number; index < filterByNumericValues.length; index += 1) {
      copyPlanets = copyPlanets.filter((copyPlanet) => {
        if (filterByNumericValues.length === number) {
          return true;
        }
        const { column, comparison, value } = filterByNumericValues[index];
        if (comparison === 'menor que') {
          return copyPlanet[column] < Number(value);
        }
        if (comparison === 'maior que') {
          return copyPlanet[column] > Number(value);
        }
        if (comparison === 'igual a') {
          return copyPlanet[column] === (value);
        }
        return null;
      });
    }
    return copyPlanets;
  }
  const oneNeg = -1;
  const orderCresc = (a, b) => {
    if (columnSelect.includes(orderBy.column)) {
      return a[orderBy.column] - b[orderBy.column];
    }
    return a[orderBy.column] > b[orderBy.column] ? 1 : oneNeg;
  };
  const orderDesc = (a, b) => {
    if (columnSelect.includes(orderBy.column)) {
      return b[orderBy.column] - a[orderBy.column];
    }
    return b[orderBy.column] > a[orderBy.column] ? 1 : oneNeg;
  };

  return (
    <form>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">name</th>
            <th scope="col">rotation_period</th>
            <th scope="col">orbital_period</th>
            <th scope="col">diameter</th>
            <th scope="col">climate</th>
            <th scope="col">gravity</th>
            <th scope="col">terrain</th>
            <th scope="col">surface_water</th>
            <th scope="col">population</th>
            <th scope="col">films</th>
            <th scope="col">created</th>
            <th scope="col">edited</th>
            <th scope="col">Url</th>
          </tr>
        </thead>
        <tbody>
          {numericFilter(planets)
            .filter((planet) => planet.name.toLowerCase()
              .includes(searchTerm))
            .sort(orderBy.sort === 'ASC' ? orderCresc : orderDesc)
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
    </form>
  );
}
export default Table;
