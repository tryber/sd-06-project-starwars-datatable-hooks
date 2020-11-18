import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Table = () => {
  const { planets, getStarWarsPlanet, search } = useContext(StarWarsContext);

  useEffect(() => {
    getStarWarsPlanet();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Rotation Period</th>
          <th scope="col">Orbital Period</th>
          <th scope="col">Diameter</th>
          <th scope="col">Climate</th>
          <th scope="col">Gravity</th>
          <th scope="col">Terrain</th>
          <th scope="col">Surface Water</th>
          <th scope="col">Population</th>
          <th scope="col">Films</th>
          <th scope="col">Created</th>
          <th scope="col">Edited</th>
          <th scope="col">Url</th>
        </tr>
      </thead>
      <tbody>
        {planets
          .filter((planet) => planet.name.toLowerCase()
            .includes(search.toLowerCase()))
          .map((planet, index) => (
            <tr key={ index }>
              <td scope="row">{ planet.name }</td>
              <td scope="row">{ planet.rotation_period }</td>
              <td scope="row">{ planet.orbital_period }</td>
              <td scope="row">{ planet.diameter }</td>
              <td scope="row">{ planet.climate }</td>
              <td scope="row">{ planet.gravity }</td>
              <td scope="row">{ planet.terrain }</td>
              <td scope="row">{ planet.surface_water }</td>
              <td scope="row">{ planet.population }</td>
              <td scope="row">{ planet.films }</td>
              <td scope="row">{ planet.created }</td>
              <td scope="row">{ planet.edited }</td>
              <td scope="row">{ planet.url }</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
