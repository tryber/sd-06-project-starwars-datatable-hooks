import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import './App.css';
import InputSearch from './components/InputSearch';

function App() {
  return (
    <StarWarsProvider>
      <InputSearch />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
