import React, { useContext, useEffect } from 'react';
import Context from '../context/StarWarsContext';
import TableHeader from './TableHeader';
import fetchData from '../services/FetchPlanets';

function Table() {
  const { loading, data, setLoading, setData, getPlanets } = useContext(Context);

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <div>
      {loading ? 'Loading...' : (
        <table>
          {/* <TableHeader keys={ Object.keys(data[0]) } /> */}meh
        </table>)}
    </div>
  );
}

export default Table;
