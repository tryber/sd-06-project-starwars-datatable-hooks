import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const {
    tableArray,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(StarWarsContext);

  const tableHeaders = ['Name', 'Rotation Period',
    'Orbital Period', 'Diameter', 'Climate', 'Gravity', 'Terrain',
    'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL'];

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
      <form>
        <label
          htmlFor="filterByName"
          className="name-filter"
        >
          Filtro por Nome
          {' '}
          <input
            name="filterByName"
            type="text"
            data-testid="name-filter"
            placeholder="Digite o nome"
            // Captura o valor digitado e seta no estado local "filterByName".
            onChange={ (e) => setFilterByName(e.target.value) }
          />
        </label>
        <label
          htmlFor="filterByNumber"
          className="column-filter"
        >
          Filtro por Elemento
          {' '}
          <select
            data-testid="column-filter"
            onChange={ (e) => setColumn(e.target.value) }
          >
            {/* <option disabled selected> -- select an option -- </option> */}
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
          <select
            data-testid="comparison-filter"
            onChange={ (e) => setComparison(e.target.value) }
          >
            {/* <option disabled selected> -- select an option -- </option> */}
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
          <input
            data-testid="value-filter"
            type="number"
            placeholder="valor"
            onChange={ (e) => setValue(e.target.value) }
          />
          <button
            data-testid="button-filter"
            type="button"
            onClick={ () => setFilterByNumericValues([...filterByNumericValues,
              { column, comparison, value },
            ]) }
          >
            Filtrar
          </button>
        </label>
      </form>
      <table className="table">
        <thead>
          <tr>
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
