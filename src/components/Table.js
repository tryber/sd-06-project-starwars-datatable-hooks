import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { planets,
    getApiStar,
    searchTerm,
    filterByNumericValues } = useContext(StarWarsContext);

  useEffect(() => {
    getApiStar();
  }, []); // componentDidMount qdo carrega a 1ª vez
  // useEffect(() => {
  //  // getApiStar();
  // }, [searchTerm]); // componentUpData - qdo atualiza

  function numericFilter(batatinha) {
    const number = 0;
    let copyPlanets = batatinha;
    console.log(' filter', filterByNumericValues);
    copyPlanets = copyPlanets.filter((copyPlanet) => {
      if (filterByNumericValues.length === number) {
        console.log('VAZIO', filterByNumericValues);
        return true;
      }
      const { colunm } = filterByNumericValues[0];
      if (filterByNumericValues[0].comparison === 'maior que') {
        console.log('> q', copyPlanet);
        return copyPlanet[colunm] > Number(filterByNumericValues[0].value);
      }
      if (filterByNumericValues[0].comparison === 'menor que') {
        console.log('< q', copyPlanet);
        return copyPlanet[colunm] < Number(filterByNumericValues[0].value);
      }
      console.log('testando');
      return copyPlanet[colunm] === Number(filterByNumericValues[0].value);
    });
    console.log('linha 38', copyPlanets);
    return copyPlanets;
  }
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
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
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
