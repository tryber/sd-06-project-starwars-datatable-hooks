import React from 'react';
import Table from './components/Table';
import SearchForm from './components/SearchForm';
import './App.css';
import Provider from './provider/StarWarsProvider';

function App() {
  return (
    <Provider>
      <SearchForm />
      <Table />
    </Provider>
  );
}

export default App;
