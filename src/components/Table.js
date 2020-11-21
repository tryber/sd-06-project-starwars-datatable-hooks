import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    planets,
    filterPlanet,
    filterNumericValues,
  } = useContext(StarWarsContext);

  const NumericValues = () => {
    let filteredPlanets = planets;
    filterNumericValues.forEach(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        filteredPlanets = planets.filter((planet) => (
          planet[column] > parseInt(value, 10)));
      }
      if (comparison === 'menor que') {
        filteredPlanets = planets.filter((planet) => (
          planet[column] < parseInt(value, 10)));
      }
      if (comparison === 'igual a') {
        filteredPlanets = planets.filter((planet) => (
          planet[column] === value));
      }
    });
    return filteredPlanets;
  };

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Rotation period</th>
            <th scope="col">Orbital period</th>
            <th scope="col">Diameter</th>
            <th scope="col">Climate</th>
            <th scope="col">Gravity</th>
            <th scope="col">Terrain</th>
            <th scope="col">Surface water</th>
            <th scope="col">Population</th>
            <th scope="col">Films</th>
            <th scope="col">Created</th>
            <th scope="col">Edited</th>
            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>
          {NumericValues(planets)
            .filter((planet) => planet.name.toLowerCase()
              .includes(filterPlanet.toLowerCase()))
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

    </div>
  );
}

export default Table;
