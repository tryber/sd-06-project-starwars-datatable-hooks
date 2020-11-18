import React, { useState } from 'react';
import Home from './pages/home';
import PlanetContext from './context/PlanetContext';
import './App.css';

function App() {
  const [planets, setPlanets] = useState('');
  const [name, setName] = useState('');
  const [column, setColumn] = useState('rotation_period');
  const [comparison, setComparison] = useState('>');
  const [value, setValue] = useState(0);
  const [btnFilter, setBtnFilter] = useState(false);
  const state = {
    planets,
    setPlanets,
    btnFilter,
    setBtnFilter,
    filters: {
      filterByName: {
        name,
        setName,
      },
      filterByNumericValues: [
        {
          column,
          setColumn,
          comparison,
          setComparison,
          value,
          setValue,
        }
      ]
    },
  };
  return (
    <PlanetContext.Provider value={ state }>
      <Home />
    </PlanetContext.Provider>
  );
}

export default App;
