import React from 'react';
import SearchForm from './components/SearchForm';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <SearchForm />
      <Table />
    </Provider>
  );
}

export default App;
