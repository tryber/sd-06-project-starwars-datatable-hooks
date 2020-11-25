import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import InputFilters from './InputFilters';
import InputName from './InputName';

function Table() {
  const {
    data,
    requestPlanets,
    filters,
  } = useContext(StarWarsContext);

  useEffect(() => {
    requestPlanets();
  }, []);

  const filterPlanets = () => {
    let planets = data;
    filters.filterByNumericValues.forEach((filter) => {
      const { column } = filter;
      const { comparison } = filter;
      const { value } = filter;
      if (comparison === 'maior que') {
        planets = planets.filter(
          (planet) => Number(planet[column]) > Number(value),
        );
      } else if (comparison === 'menor que') {
        planets = planets.filter(
          (planet) => Number(planet[column]) < Number(value),
        );
      } else if (comparison === 'igual a') {
        planets = planets.filter(
          (planet) => Number(planet[column]) === Number(value),
        );
      }
    });
    return planets;
  };

  const planetas = filterPlanets();

  return (
    <div>
      <InputName />
      <InputFilters />
      <h1>Tabela</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {planetas
            .filter((planet) => planet.name.toLowerCase()
              .includes(filters.filterByName.name.toLowerCase()))
            .map((planet, index) => (
              <tr key={ index }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
