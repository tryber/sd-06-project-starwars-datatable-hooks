import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { planets, text } = useContext(StarWarsContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Nome:</th>
          <th>Período de Rotação:</th>
          <th>Período de Orbitação:</th>
          <th>Diâmetro:</th>
          <th>Clima:</th>
          <th>Gravidade:</th>
          <th>Terreno:</th>
          <th>Água da Superfície:</th>
          <th>População:</th>
          <th>Moradores:</th>
          <th>Filmes:</th>
          <th>Criado em:</th>
          <th>Editado em:</th>
        </tr>
      </thead>
      <tbody>
        {planets.filter((p) => p.title.includes(text)).map((planet) => (
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
            <td>{ planet.residents }</td>
            <td>{ planet.films }</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
