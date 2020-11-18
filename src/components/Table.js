import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { resultsApi, getResults, filters } = useContext(StarWarsContext);

  useEffect(() => {
    getResults();
  }, []);

  const filterComparison = (results) => {
    let resultFiltered = results;

    filters.filterByNumericValues.forEach((filter) => {
      const { column } = filter;
      const { valueComparison } = filter;
      if (filter.comparison === 'maior que') {
        resultFiltered = results
          .filter((planet) => Number(planet[column]) > Number(valueComparison));
      } else if (filter.comparison === 'menor que') {
        resultFiltered = results
          .filter((planet) => Number(planet[column]) < Number(valueComparison));
      } else if (filter.comparison === 'igual a') {
        resultFiltered = results
          .filter((planet) => Number(planet[column]) === Number(valueComparison));
      }
    });
    return resultFiltered;
  };

  return (
    <table className="table-hover table">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>Rotation period</th>
          <th>Orbital period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {filterComparison(resultsApi).filter((planet) => (
          planet.name.toLowerCase().includes(filters.filterByName.name.toLowerCase())
        )).map((planet) => (
          <tr key={ planet.name }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{planet.films.map((film) => film)}</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
