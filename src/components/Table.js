import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Loading from './Loading';

function Table() {
  const {
    filters,
    tableHeaders,
    isFetching,
    getFilteredPlanets,
  } = useContext(StarWarsContext);

  const { filters: { order } } = filters;

  const filteredPlanets = getFilteredPlanets();
  const numericColumns = [
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
    'population',
  ];

  // inspired by: https://morioh.com/p/9caf3015e0c0
  const filteredAndSortedPlanets = filteredPlanets
    .sort((a, b) => {
      const varA = (
        numericColumns.includes(order.column)
          ? Number(a[order.column])
          : a[order.column].toLowerCase()
      );
      const varB = (
        numericColumns.includes(order.column)
          ? Number(b[order.column])
          : b[order.column].toLowerCase()
      );

      const defaultComparisonValue = 0;
      const ascendingComparisonValue = 1;
      const descendingComparisonValue = -1;
      const comparisonInverter = -1;
      let comparison = defaultComparisonValue;
      if (varA > varB) {
        comparison = ascendingComparisonValue;
      } else if (varA < varB) {
        comparison = descendingComparisonValue;
      }
      return (
        (order.sort === 'ASC') ? comparison : comparison * comparisonInverter
      );
    });

  function renderTable() {
    return (
      <table
        className="table
          table-striped table-bordered table-hover table-sm table-responsive"
      >
        <thead className="thead-light">
          <tr>
            {tableHeaders.map((tableHeader, index) => (
              <th key={ index } scope="col">{ tableHeader }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedPlanets.map((planet) => (
            <tr key={ planet.name }>
              {Object.entries(planet).map((planetEntry, index) => (
                planetEntry[0] === 'name'
                  ? <td key={ index } data-testid="planet-name">{ planetEntry[1] }</td>
                  : <td key={ index }>{ planetEntry[1] }</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

    );
  }

  return (
    <div>
      { isFetching ? <Loading /> : renderTable()}
    </div>
  );
}

export default Table;
