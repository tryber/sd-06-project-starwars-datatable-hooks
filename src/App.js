import React, { useState, useEffect } from 'react';
import StarWarsContext from './context';
import fetchStarWarsAPI from './servicesAPI';
import './App.css';
import Table from './pages/Table';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestAPI = async () => {
      await fetchStarWarsAPI().then((r) => setData(r));
    };
    requestAPI();
  }, []);

  const contextValue = { data };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      <div className="App">
        <Table />
      </div>
    </StarWarsContext.Provider>
  );
}

export default App;
