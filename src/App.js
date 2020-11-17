import React from 'react';
import PlanetsTable from './components/PlanetsTable';
import './App.css';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <PlanetsTable />
    </Provider>
  );
}

export default App;
