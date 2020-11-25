import React, { useContext, useEffect } from 'react';
import Context from '../context/StarWarsContext';
import FilterFields from './FilterFields';
import TableRow from './TableRow';
import FilterApplyed from './FilterApplyed';

function Table() {
  const {
    loading,
    planetKeys,
    getPlanets,
    input,
    filters,
    filteredPlanets,
    sortPlanets,
  } = useContext(Context);

  useEffect(() => {
    getPlanets();
  }, []);

  if (loading) return (<h1>Loading...</h1>);

  return (
    <div>
      <FilterFields />
      {filters.filterByNumericValues.map((filter, index) => (
        <FilterApplyed key={ index } filter={ filter } />
      ))}
      <table>
        <thead>
          <tr>
            {planetKeys.map((headerTitle, index) => (
              <th key={ index }>{headerTitle.replace('_', ' ').toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredPlanets.sort(sortPlanets)
            .filter((planet) => planet.name.toLowerCase().includes(input))
            .map((planet) => <TableRow key={ planet.name } planetValues={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
