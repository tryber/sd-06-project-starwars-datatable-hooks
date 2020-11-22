import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import './App.css';
import InputSearch from './components/InputSearch';
import NumericInput from './components/NumericInput';

function App() {
  return (
    <StarWarsProvider>
      <InputSearch />
      <NumericInput />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
