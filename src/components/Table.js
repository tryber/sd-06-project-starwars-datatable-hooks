import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import API from '../services/api';
import '../index.css';

function Table() {
  const { data } = useContext(StarWarsContext);
  API();

  // Tirar o residents
  if (data) {
    const fields = data.results.map((result) => (
      <tr key={ result.url }>
        <td>{result.name}</td>
        <td>{result.rotation_period}</td>
        <td>{result.orbital_period}</td>
        <td>{result.diameter}</td>
        <td>{result.climate}</td>
        <td>{result.created}</td>
        <td>{result.edited}</td>
        <td>{result.gravity}</td>
        <td>{result.population}</td>
        <td>{result.surface_water}</td>
        <td>{result.terrain}</td>
        <td>{result.films}</td>
        <td>{result.url}</td>
      </tr>

    ));

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Gravity</th>
            <th>Population</th>
            <th>Surface Water</th>
            <th>Terrain</th>
            <th>Films</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {fields}
        </tbody>
      </table>
    );
  }
  return (
    <p>Loading...</p>
  );
}

export default Table;
