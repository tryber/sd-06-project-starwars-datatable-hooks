import React from 'react';
import Table from './components/Table';
import SearchFilter from './components/SearchFilter';
import Header from './components/Header';
import './App.css';
import Provider from './provider/StarWarsProvider';

function App() {
  return (
    <Provider>
      <Header />
      <SearchFilter />
      <Table />
    </Provider>
  );
}

export default App;
