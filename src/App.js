import React from 'react';
import Table from './components/Table';
import './App.css';
import Provider from './provider/StarWarsProvider';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
