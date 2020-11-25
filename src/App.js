import React from 'react';
import Table from './components/Table';
import SearchFilter from './components/SearchFilter';
import Header from './components/Header';
import ShowFilters from './components/ShowFilters';
import './App.css';
import Provider from './provider/StarWarsProvider';

function App() {
  return (
    <Provider>
      <Header />
      <SearchFilter />
      <ShowFilters />
      <Table />
    </Provider>
  );
}

export default App;
