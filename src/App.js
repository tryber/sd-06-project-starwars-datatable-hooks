import React, { useState, useEffect } from 'react';
import StarWarsContext from './context';
import fetchStarWarsAPI from './servicesAPI';
import './App.css';
import Table from './pages/Table';
import SearchBar from './pages/SearchBar';

function App() {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState('');

  useEffect(() => {
    const requestAPI = async () => {
      await fetchStarWarsAPI().then((r) => setPlanets(r));
    };
    requestAPI();
  }, []);

  const contextValue = { planets, selectedPlanet, setSelectedPlanet };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      <div className="App">
        <SearchBar />
        <Table />
      </div>
    </StarWarsContext.Provider>
  );
}

export default App;
