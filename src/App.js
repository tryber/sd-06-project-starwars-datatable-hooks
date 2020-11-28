import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
// import Filters from './components/Filters';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
