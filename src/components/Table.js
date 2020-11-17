import React, { useContext } from 'react';
import Context from '../context/StarWarsContext';
// import fetchData from '../services/FetchPlanets';

function Table() {
  const { loading } = useContext(Context);

  return (
    <div>
      {loading ? 'Loading...' : 'Carregou' }
    </div>
  );
}

export default Table;
