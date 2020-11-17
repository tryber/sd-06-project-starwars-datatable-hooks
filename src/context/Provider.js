import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState([false]);

  const getPlanets = async () => {
    setIsLoading(true);
    const apiRequest = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const apiResponse = await apiRequest.json();
    await setPlanets(apiResponse.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const contextValue = { planets, isLoading };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
