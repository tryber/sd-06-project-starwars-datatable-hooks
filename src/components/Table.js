import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import API from '../services/api';
import '../index.css';

function Table() {
  const { data } = useContext(StarWarsContext);
  API();

  // Tirar o residents
  if (data) {
    data.results.map((result) => delete result.residents);

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

    // 'temperate';
    // '2014-12-10T12:45:06.577000Z';
    // '19720';
    // '2014-12-20T20:58:18.434000Z';
    // ['https://swapi-trybe.herokuapp.com/api/films/5/'];
    // '1 standard';
    // 'Kamino';
    // '463';
    // '1000000000';
    // '27';
    // '100';
    // 'ocean';
    // url;

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
