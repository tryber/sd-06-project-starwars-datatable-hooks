import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <div>
        <Header />
        <Table />
      </div>
    </PlanetsProvider>
  );
}

export default App;
