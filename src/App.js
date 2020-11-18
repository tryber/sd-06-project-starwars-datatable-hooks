import React from 'react';
import './App.css';
import Table from './components/Table';
import Filters from './components/Filters';
import Provider from './context/Provider';
import CurrentFilters from './components/CurrentFilters';

function App() {
  return (
    <Provider>
      <div className="App">
        <Filters />
        <CurrentFilters />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
