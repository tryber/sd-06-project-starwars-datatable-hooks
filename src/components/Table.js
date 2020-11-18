import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, getPlanets, filters } = useContext(PlanetsContext);
  const { filterByName: { nameFilter } } = filters;
  const { filterByNumericValues: [{ column, comparison, value }] } = filters;
  useEffect(() => {
    getPlanets();
  });

  function numericFilter(planets) {
    if (comparison === '<') {
      return planets.filter((planet) => planet[column] < Number(value));
    }
    if (comparison === '>') {
      return planets.filter((planet) => planet[column] > Number(value));
    }
    if (comparison === '===') {
      return planets.filter((planet) => planet[column] === value);
    }
    return planets;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Rotation Period</th>
          <th scope="col">Orbital Period</th>
          <th scope="col"> Diameter</th>
          <th scope="col">Climate</th>
          <th scope="col">Gravity</th>
          <th scope="col">Terrain</th>
          <th scope="col">Surface Water</th>
          <th scope="col">Population</th>
          <th scope="col">Films</th>
          <th scope="col">Created</th>
          <th scope="col">Edited</th>
          <th scope="col">url</th>
        </tr>
      </thead>
      <tbody>
        {data ? numericFilter(data)
          .filter(
            (element) => element.name.includes(nameFilter),
          )
          .map((element) => (
            <tr key={ element.name }>
              <th scope="row">{element.name}</th>
              <td>{element.rotation_period}</td>
              <td>{element.orbital_period}</td>
              <td>{element.diameter}</td>
              <td>{element.climate}</td>
              <td>{element.gravity}</td>
              <td>{element.terrain}</td>
              <td>{element.surface_water}</td>
              <td>{element.population}</td>
              <td>{element.films}</td>
              <td>{element.created}</td>
              <td>{element.edited}</td>
              <td>{element.url}</td>
            </tr>
          )) : null}
      </tbody>
    </table>
  );
}

export default Table;
