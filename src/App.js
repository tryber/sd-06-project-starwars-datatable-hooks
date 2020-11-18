import React from 'react';
import PlanetsTable from './components/PlanetsTable';
import './App.css';
import Provider from './context/Provider';
import Header from './components/Header';
import Filters from './components/Filters';

function App() {
  return (
    <Provider>
      <Header />
      <Filters />
      <PlanetsTable />
    </Provider>
  );
}

export default App;
