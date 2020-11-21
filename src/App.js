import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetFilter from './components/PlanetFilter';
import Provider from './context/StarWarsProvider';

function App() {
  return (
    <Provider>
      <PlanetFilter />
      <Table />
    </Provider>
  );
}

export default App;
