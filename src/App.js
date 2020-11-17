import React from 'react';
import StarWarsProvider from './context/StarWarsContext';
import Table from './components/Table';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <StarWarsProvider>
      <SearchBar />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
