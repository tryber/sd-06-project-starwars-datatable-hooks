import React from 'react';
import './App.css';
import Table from './component/Table';
import FilterBar from './component/FilterBar';
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
