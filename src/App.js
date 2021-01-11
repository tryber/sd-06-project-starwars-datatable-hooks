import React from 'react';
import './App.css';
import Table from './components/Table';
import FilterForm from './components/FilterForm';
import Provider from './context/StarWarsProvider';

function App() {
  return (
    <div className="App">
      <Provider>
        <FilterForm />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
