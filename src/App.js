import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import getPlanets from './api';
import StarWarsContext from './context/StarWarsContext';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await getPlanets();
      setData(apiResponse.results);
    };

    fetchData();
  }, []);

  return (
    <StarWarsContext.Provider value={ data }>
      <Table />
    </StarWarsContext.Provider>
  );
}

export default App;
