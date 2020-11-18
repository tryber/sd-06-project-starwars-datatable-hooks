import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Table from '../components/Table';

function App() {
  const { isFetching, fetchPlanets } = useContext(StarWarsContext);

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <div>
      {!isFetching ? (<Table />) : <p>Loading...</p>}
    </div>
  );
}

export default App;
