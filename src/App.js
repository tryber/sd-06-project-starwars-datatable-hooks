import React from 'react';
import PlanetsTable from './components/PlanetsTable';
import './App.css';
import Provider from './context/Provider';
import Header from './components/Header';
import Filters from './components/Filters';
import Order from './components/Order';

function App() {
  return (
    <Provider>
      <Header />
      <Filters />
      <Order />
      <PlanetsTable />
    </Provider>
  );
}

export default App;
