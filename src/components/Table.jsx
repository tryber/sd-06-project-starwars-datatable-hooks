import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/StarWarsContext';
import FilterFields from './FilterFields';
import TableRow from './TableRow';

function Table() {
  const { loading, planetKeys, getPlanets, filters, input, filteredPlanets } = useContext(Context);

  useEffect(() => {
    getPlanets();
  }, []);

  if (loading) return (<h1>Loading...</h1>);

  return (
    <div>
      <FilterFields />
      <table>
        <thead>
          <tr>
            {planetKeys.map((headerTitle, index) => (
              <th key={ index }>{headerTitle.replace('_', ' ').toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredPlanets.filter((planet) => planet.name.toLowerCase().includes(input))
            .map((planet) => <TableRow key={ planet.name } planetValues={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
