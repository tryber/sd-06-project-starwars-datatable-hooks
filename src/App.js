import React, { useState } from 'react';
import Home from './pages/home';
import PlanetContext from './context/PlanetContext';
import fetchApi from './services/api';
import './App.css';

function App() {
  const ZERO = 0;
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(ZERO);

  const getApi = async () => {
    const api = await fetchApi();
    setPlanets(api);
  };

  const state = {
    planets,
    setPlanets,
    getApi,
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
        },
      ],
    },
  };
  return (
    <PlanetContext.Provider value={ state }>
      <Home />
    </PlanetContext.Provider>
  );
}

export default App;
