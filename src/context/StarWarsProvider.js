import React, { useState } from 'react';
import StarWarsContext from './StarWarsContext';
import fetchPlanetsInfo from '../services/apiServices';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPlanetsInfo = async () => {
    const planetsInfo = await fetchPlanetsInfo();
    setData(planetsInfo);
  };

  const contextValue = {
    data,
    getPlanetsInfo,
    isLoading,
    setIsLoading,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;
