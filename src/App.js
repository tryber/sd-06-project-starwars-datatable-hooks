import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import './App.css';
// import SWAPIFetch from './services/SWAPIFetch';

function App() {
  return (
    <Provider>
      <NameFilter />
      <Table />
    </Provider>
  );
}

export default App;
