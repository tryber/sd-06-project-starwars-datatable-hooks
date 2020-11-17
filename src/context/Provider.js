import React, { useState } from 'react';
import StarWarsContext from './StarWarsContext';
import StarWarsAPI from '../services/StarsWarsAPI';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchPlanets = async () => {
    const response = await StarWarsAPI();
    const planetsObject = response.results;
    setPlanets(planetsObject);
  };

  const context = {
    data: { planets },
    fetchPlanets,
    searchTerm,
    setSearchTerm,
  };

  return (
    <StarWarsContext.Provider value={ { context } }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;
