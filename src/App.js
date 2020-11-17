import React, { useState } from 'react';
import Home from './pages/home';
import PlanetContext from './context/PlanetContext';
import './App.css';

function App() {
  const [planets, setPlanets] = useState('');
  const state = {
    planets,
    setPlanets,
  };
  return (
    <PlanetContext.Provider value={ state }>
      <Home />
    </PlanetContext.Provider>
  );
}

export default App;
