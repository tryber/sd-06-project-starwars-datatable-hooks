import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    planets,
    headers,
    getPlanetsApi,
    filterPlanet,
    filterColumn,
  } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanetsApi();
  }, []);

  // Função de Filtro para valores numéricos
  function filterPlanetByColumns(planet) {
    let result = true;

    const zero = 0;
    for (let index = zero; index < filterColumn.length; index += 1) {
      const filter = filterColumn[index];

      if (!planet[filter.columnFilter] || Number.isNaN(planet[filter.columnFilter])) {
        result = false;
        break;
      }

      const valueFilter = parseInt(filter.valueFilter, 10);
      const planetFilter = parseInt(planet[filter.columnFilter], 10);
      if (filter.comparisonFilter === 'maior que') {
        result = planetFilter > valueFilter;
      } else if (filter.comparisonFilter === 'menor que') {
        result = planetFilter < valueFilter;
      } else {
        result = planetFilter === valueFilter;
      }

      if (!result) {
        break;
      }
    }

    return result;
  }

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => <th key={ header }>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {planets
          .filter((planet) => planet.name.toLowerCase()
            .includes(filterPlanet.toLowerCase()))
          .filter((planet) => filterPlanetByColumns(planet))
          .map((planet) => (
            <tr key={ planet.name }>
              {headers
                .map((header) => <td key={ planet[header] }>{planet[header]}</td>)}
            </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
