import React from 'react';
import Table from './components/Table';
import './App.css';
import Provider from './context/Provider';
import FilterInput from './components/filterInput';
import FilterSelect from './components/FilterSelect';

function App() {
  return (
    <Provider>
      <FilterInput />
      <FilterSelect />
      <Table />
    </Provider>
  );
}

export default App;
