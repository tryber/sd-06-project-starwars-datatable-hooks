import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { planets, text, numFilter } = useContext(StarWarsContext);

  const filterNumbers = () => {
    let array = planets;
    numFilter.forEach((filter) => {
      if (filter.comparison === 'maior que') {
        (array = array.filter((p) => p[filter.column] > 1 * filter.number));
      }
      if (filter.comparison === 'menor que') {
        (array = array.filter((p) => p[filter.column] < 1 * filter.number));
      }
      if (filter.comparison === 'igual a') {
        (array = array.filter((p) => p[filter.column] === filter.number));
      }
    });
    return array;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Período de Rotação</th>
          <th>Período de Orbitação</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Água da Superfície</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criado em</th>
          <th>Editado em</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {filterNumbers(planets)
          .filter((p) => p.name.toLowerCase().includes(text.toLowerCase()))
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
  );
}

export default Table;
