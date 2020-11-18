import React, { useContext } from 'react';
import Context from '../context/StarWarsContext';
import TableHeader from './TableHeader';
// import fetchData from '../services/FetchPlanets';

function Table() {
  const { loading, data } = useContext(Context);

  return (
    <div>
      {loading ? 'Loading...' : (
        <table>
          <TableHeader keys={ Object.keys(data[0]) } />
        </table>)}
    </div>
  );
}

export default Table;
