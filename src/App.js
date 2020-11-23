import React, { useState, useEffect } from 'react';
import StarWarsContext from './context';
import fetchStarWarsAPI from './servicesAPI';
import './App.css';
import Table from './pages/Table';
import SearchBar from './pages/SearchBar';
import NumericFilter from './pages/NumericFilter';
import Filters from './pages/Filters';

function App() {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: '',
    filterByNumericValues: [],
  });

  const [rangeNumber, setRangeNumber] = useState('');
  const [range, setRange] = useState('');
  const [column, setColumn] = useState('');

  useEffect(() => {
    const requestAPI = async () => {
      await fetchStarWarsAPI().then((r) => setPlanets(r));
    };
    requestAPI();
  }, []);

  const contextValue = {
    filters,
    setFilters,
    planets,
    range,
    setRange,
    rangeNumber,
    setRangeNumber,
    column,
    setColumn,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      <div className="App">
        <Filters />
        <SearchBar />
        <NumericFilter />
        <Table />
      </div>
    </StarWarsContext.Provider>
  );
}

export default App;
