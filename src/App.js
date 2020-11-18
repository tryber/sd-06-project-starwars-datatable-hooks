import React from 'react';
import Table from './components/Table';
import HeaderFilters from './components/HeaderFilters';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <HeaderFilters />
      <Table />
    </Provider>
  );
}

export default App;
