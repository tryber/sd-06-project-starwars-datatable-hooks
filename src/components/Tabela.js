import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Tabela() {
  const INITIAL_PLANETS = 0;
  const { data, fetchPlanets, loading,
    filters: {
      filterByName: { name },
      filterByNumericValues,
      order,
    },
  } = useContext(StarWarsContext);

  let filterPlanet = data;
  filterPlanet = name
    ? filterPlanet.filter((planet) => planet.name.match(`${name}`) && planet)
    : filterPlanet;

  const operators = {
    'maior que': (a, b) => a > b,
    'menor que': (a, b) => a < b,
    'igual a': (a, b) => a === b,
  };

  filterByNumericValues.forEach((filter) => {
    filterPlanet = [...filterPlanet]
      .filter((planet) => (operators[filter.comparison](
        parseInt(planet[filter.column], 10), parseInt(filter.value, 10),
      )));
  });

  const columnNumbers = [
    'rotation_period', 'orbital_period', 'diameter', 'surface_water', 'population'];
  if (order.sort) {
    if (columnNumbers.includes(order.column)) {
      const listNumbersOrder = {
        ASC: (a, b) => a - b,
        DESC: (a, b) => b - a,
      };
      filterPlanet = [...filterPlanet]
        .sort((a, b) => listNumbersOrder[order.sort](a[order.column], b[order.column]));
    } else {
      let ascOrd = 1;
      if (order.sort === 'DESC') ascOrd = -ascOrd;
      const descOrder = -ascOrd;

      filterPlanet = [...filterPlanet].sort((a, b) => {
        if (a[order.column] > b[order.column]) {
          return ascOrd;
        }
        if (a[order.column] < b[order.column]) {
          return descOrder;
        }
        const tie = 0;
        return tie;
      });
    }
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  const tableContent = () => (
    <table>
      <thead>
        <tr role="row">
          {(data.length > INITIAL_PLANETS) && Object.keys(data[0]).map((title) => (
            <th key={ title } role="columnheader">
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filterPlanet && filterPlanet.map((planet) => (
          <tr key={ planet.name } role="row">
            {Object.values(planet).map((item, index) => {
              if (item === planet.name) {
                return (
                  <td key={ 0 } data-testid="planet-name">{item}</td>
                );
              }
              return <td key={ index }>{item}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      {loading ? 'Loading...' : tableContent()}
    </div>
  );
}
