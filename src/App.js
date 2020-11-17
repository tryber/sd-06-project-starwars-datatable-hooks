import React from 'react';
import PlanetsTable from './components/PlanetsTable';
import './App.css';
import Provider from './context/Provider';
import Header from './components/Header';

function App() {
  return (
    <Provider>
      <Header />
      <PlanetsTable />
    </Provider>
  );
}

export default App;
