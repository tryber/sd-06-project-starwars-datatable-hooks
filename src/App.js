import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import getPlanets from './api';
import StarWarsContext from './context/StarWarsContext';

function App() {
  const [data, setData] = useState();
  const [filterByName, setFilterByName] = useState('');

  const handleChangeName = ({ target }) => {
    setFilterByName(target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await getPlanets();
      setData(apiResponse.results);
    };

    fetchData();
  }, []);

  const filter = {
    data,
    filters: {
      filterByName: {
        name: filterByName,
      },
    },
  };

  return (
    <StarWarsContext.Provider value={ filter }>
      <h4>Filtrar por nome</h4>
      <input data-testid="name-filter" type="text" onChange={ handleChangeName } />
      <Table />
    </StarWarsContext.Provider>
  );
}

export default App;
