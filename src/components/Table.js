import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import fetchApiplanets from '../Services/fetchApiPlanets';

function Table() {
  const {
    nameInput,
    tablePalnets,
    setTablePlanets,
  } = useContext(StarWarsContext);

  useEffect(() => {
    async function fetchApi() {
      const data = await fetchApiplanets();
      setTablePlanets(data.results);
    }
    fetchApi();
  }, []);

  const tableHeaders = [
    'Nome',
    'Clima',
    'Criado',
    'Diâmetro',
    'Editado',
    'Filmes',
    'Gravidade',
    'Período orbital',
    'População',
    'Rotação período',
    'Água da superfície',
    'Terreno',
    'URL',
  ];

  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (<th key={ index }>{header}</th>))}
        </tr>
      </thead>
      <tbody>
        {tablePalnets
          .filter((planet) => planet.name.toLowerCase()
            .includes(nameInput.toLowerCase()))
          .map((planetName, index) => (
            <tr key={ index }>
              <td>{planetName.name}</td>
              <td>{planetName.climate}</td>
              <td>{planetName.created}</td>
              <td>{planetName.diameter}</td>
              <td>{planetName.edited}</td>
              <td>{planetName.films}</td>
              <td>{planetName.gravity}</td>
              <td>{planetName.orbital_period}</td>
              <td>{planetName.population}</td>
              <td>{planetName.rotation_period}</td>
              <td>{planetName.surface_water}</td>
              <td>{planetName.terrain}</td>
              <td>{planetName.url}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
