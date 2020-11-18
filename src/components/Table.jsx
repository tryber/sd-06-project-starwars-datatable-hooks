import React, { useContext, useEffect } from 'react';
import Context from '../context/StarWarsContext';
import TableRow from './TableRow';

function Table() {
  const { loading, data, planetKeys, getPlanets } = useContext(Context);

  useEffect(() => {
    getPlanets();
  }, []);

  if (loading) return (<h1>Loading...</h1>);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {planetKeys.map((headerTitle, index) => (
              <th key={ index }>{headerTitle.replace('_', ' ').toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((planet) => <TableRow key={ planet.name } planetValues={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
