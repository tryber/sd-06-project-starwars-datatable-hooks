import React from 'react';
import PlanetTable from './components/PlanetTable';
import FilterForm from './components/FilterForm';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <FilterForm />
        <PlanetTable />
      </div>
    </Provider>
  );
}

export default App;
