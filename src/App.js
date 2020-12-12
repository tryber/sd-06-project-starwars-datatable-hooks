import React from 'react';
import Table from './components/Table';
import DataProvider from './context/DataProvider';
import FilterName from './components/FilterName';
import FilterNumber from './components/FilterNumber';
import FilterBonus from './components/FilterBonus';
import FilterList from './components/FilterList';
import './App.css';

function App() {
  return (
    <DataProvider>
      <div>
        <FilterName />
        <FilterNumber />
        <FilterList />
        <FilterBonus />
      </div>
      <div>
        <Table />
      </div>
    </DataProvider>
  );
}

export default App;
