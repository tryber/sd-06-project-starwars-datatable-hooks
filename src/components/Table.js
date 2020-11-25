import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    // Recupera do contexto as seguintes funções e arrays:
    tableArray,
    filterByName,
    filterByNumericValues,
  } = useContext(StarWarsContext);

  // Array dos ths que serão exibidos.
  const tableHeaders = ['Nome', 'Rotação',
    'Órbita', 'Diâmetro', 'Clima', 'Gravidade', 'Terreno',
    'Água', 'População', 'Filmes', 'Criado', 'Editado', 'URL'];

  // criando uma variável auxiliar para não sobrescrever o array original.
  let filteredPlanets = tableArray;

  // Função forEach percorre todos meus filtros gerados dentro do array filterByNumericValues, iterando sobre cada uma para fazer um filtro por vez.
  filterByNumericValues.forEach((filter) => {
    // Função filter percorre todas as comparações dentro deses filtros, iterando sobre cada um para realizar o filtro.
    filteredPlanets = filteredPlanets.filter((planet) => {
      if (filter.comparison === 'maior que') {
        return (planet[filter.column] > parseInt(filter.value, 10));
      }
      if (filter.comparison === 'menor que') {
        return (planet[filter.column] < parseInt(filter.value, 10));
      }
      if (filter.comparison === 'igual a') {
        return (parseInt(planet[filter.column], 10) === parseInt(filter.value, 10));
      }
      // arrow exigia algum retorno no final, logo retornei null.
      return null;
    });
    // arrow exigia algum retorno no final, logo retornei null.
    return null;
  });

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {/* Exibe os ths daquele array acima. */}
            {tableHeaders.map((table, i) => (
              <th key={ i }>{ table }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Meu array com os filtros numéricos já realizados */}
          {filteredPlanets
          // Função filter que verifica se o elemento do array com a chave planet.name possui valor que foi setado no "filterByName".
            .filter((table) => table.name.toLowerCase()
              .includes(filterByName.toLowerCase()))
          // E caso possuir faz uma função map desses elementos filtrados e retorna a renderização da table data.
            .map((table, i) => (
              <tr key={ i }>
                <td>{ table.name }</td>
                <td>{ table.rotation_period }</td>
                <td>{ table.orbital_period }</td>
                <td>{ table.diameter }</td>
                <td>{ table.climate }</td>
                <td>{ table.gravity }</td>
                <td>{ table.terrain }</td>
                <td>{ table.surface_water }</td>
                <td>{ table.population }</td>
                <td>{ table.films }</td>
                <td>{ table.created }</td>
                <td>{ table.edited }</td>
                <td>{ table.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
