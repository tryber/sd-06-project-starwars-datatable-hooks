import React from 'react';
import './App.css';
import FilterBar from './context/components/FilterBar';
import Table from './context/components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <div className="App">
      <Provider>
        <FilterBar />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
