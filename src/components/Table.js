import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, getPlanetsData, filters, filterForms } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanetsData();
  }, []);

  useEffect(() => {
    filterForms();
  }, [filters.filterByNumericValues]);

  return (
    <table className="table table-bordered table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Rotation_Period</th>
          <th scope="col">Orbital_Period</th>
          <th scope="col">Diameter</th>
          <th scope="col">Climate</th>
          <th scope="col">Gravity</th>
          <th scope="col">Terrain</th>
          <th scope="col">Surface_Water</th>
          <th scope="col">Population</th>
          <th scope="col">Created</th>
          <th scope="col">Edited</th>
          <th scope="col">URL&apos;s</th>
          <th scope="col">Films</th>
        </tr>
      </thead>
      {data
        .filter((planet) => planet.name.toLowerCase()
          .includes(filters.filterByName.name.toLowerCase()))
        .map((planet, i) => (
          <tbody key={ i }>
            <tr>
              <th scope="row">{planet.name}</th>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>
                <a href={ planet.url }>
                  More Info
                </a>
              </td>
              <td>
                {planet.films.map((film, id) => (
                  <a key={ id } href={ film }>{`Film ${` ${id + 1}`}`}</a>
                ))}
              </td>
            </tr>
          </tbody>
        ))}
    </table>
  );
}

export default Table;
