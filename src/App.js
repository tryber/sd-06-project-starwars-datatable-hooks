import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './components/Provider';
import SearchBox from './components/SearchBox';
import FilterBox from './components/FilterBox';

function App() {
  return (
    <Provider>
      <SearchBox />
      <FilterBox />
      <Table />
    </Provider>
  );
}

export default App;
