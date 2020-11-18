import React from 'react';
import Table from './components/Table';
import './App.css';
import Provider from './provider/StarWarsProvider';

function App() {
  return (
    <Provider>
      <h1>Star Wars Datatable Hooks</h1>
      <Table />
    </Provider>
  );
}

export default App;
