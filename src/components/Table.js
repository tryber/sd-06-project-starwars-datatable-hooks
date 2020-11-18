import React, { useState, useEffect } from 'react';
import fetchApiplanets from '../Services/fetchApiPlanets';

function Table() {

  const [tablePalnets, setTablePlanets] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchApiplanets();
      setTablePlanets(data.results);
      console.log(data.results);
    };
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
        {tablePalnets.map((planet, index) => (
          <tr key={ index }>
            <td>{planet.name}</td>
            <td>{planet.climate}</td>
            <td>{planet.created}</td>
            <td>{planet.diameter}</td>
            <td>{planet.edited}</td>
            <td>{planet.films}</td>
            <td>{planet.gravity}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.population}</td>
            <td>{planet.rotation_period}</td>
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
