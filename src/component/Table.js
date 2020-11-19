import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const INITIAL_PLANETS = 0;
  const { data, fetchPlanets, loading,
    filters: {
      filterByName: { name },
      filterByNumericValues,
    },
  } = useContext(StarWarsContext);

  let filteredPlanets = data;
  filteredPlanets = name
    ? filteredPlanets.filter((planet) => planet.name.match(`${name}`) && planet)
    : filteredPlanets;

  const operators = {
    'maior que': (a, b) => a > b,
    'menor que': (a, b) => a < b,
    'igual a': (a, b) => a === b,
  };

  filterByNumericValues.forEach((filter) => {
    filteredPlanets = [...filteredPlanets]
      .filter((planet) => (operators[filter.comparison](
        parseInt(planet[filter.column], 10), parseInt(filter.value, 10),
      )));
  });

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
        {filteredPlanets && filteredPlanets.map((planet) => (
          <tr key={ planet.name } role="row">
            {Object.values(planet).map((item, index) => <td key={ index }>{item}</td>)}
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
