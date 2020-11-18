import React, { useContext, useEffect } from 'react';
import fetchApi from '../services/fetchApi';
import PlanetsContext from '../context/PlanetsContext';

// 1 - criar a estrutura dos dados que serao renderizados no APP

function Table() {
  // Cria passagem para que o useEffect possa acessar os dados da API
  const { planets, setPlanets } = useContext(PlanetsContext);
  // acessar os dados da API na hora de montar a pagina, segundo argumento
  useEffect(() => {
    fetchApi(setPlanets);
    // eslint-disable-next-line
  }, []);

  // criado array de chaves para diminuir quantidade de tr da tabela
  const keys = [
    'name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity',
    'terrain', 'surface_water', 'population', 'films', 'created', 'edited', 'url',
  ];

  return (
    <>
      <table>
        <thead>
          <tr>
            {/* sera renderizado keys na primeira linha e em cada coluna */}
            {keys.map((key) => <th key={ key }>{ key }</th>)}
          </tr>
        </thead>
        <tbody>
          {[...planets].map((planet) => (
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
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
