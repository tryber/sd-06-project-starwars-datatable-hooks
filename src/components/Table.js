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
              <th scope="row">{ planet.name }</th>
              <th scope="row">{ planet.rotation_period }</th>
              <th scope="row">{ planet.orbital_period }</th>
              <th scope="row">{ planet.diameter }</th>
              <th scope="row">{ planet.climate }</th>
              <th scope="row">{ planet.gravity }</th>
              <th scope="row">{ planet.terrain }</th>
              <th scope="row">{ planet.surface_water }</th>
              <th scope="row">{ planet.population }</th>
              <th scope="row">{ planet.films }</th>
              <th scope="row">{ planet.created }</th>
              <th scope="row">{ planet.edited }</th>
              <th scope="row">{ planet.url }</th>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
