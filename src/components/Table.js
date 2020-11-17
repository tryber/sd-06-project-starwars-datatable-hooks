import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Período de rotação</th>
          <th>Período de órbita</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Criação</th>
          <th>Edição</th>
          <th>Filmes</th>
          <th>Gravidade</th>
          <th>População</th>
          <th>Água na superfície</th>
          <th>Terreno</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((planet, index) => (
          <tr key={ index }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.films}</td>
            <td>{planet.gravity}</td>
            <td>{planet.population}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.terrain}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
