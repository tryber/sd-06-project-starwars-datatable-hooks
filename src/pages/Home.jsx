import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Table from '../components/Table';
import Filter from '../components/Filter';

function App() {
  const { isFetching, fetchPlanets } = useContext(StarWarsContext);

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <div>
      {!isFetching ? (
        <div>
          <Filter />
          <Table />
        </div>
      ) : <p>Loading...</p>}
    </div>
  );
}

export default App;
