import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchStarWarsApi from '../services/StarWarsApi';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchStarWarsApi().then((response) => {
      setPlanets(response);
    });
    setIsLoading(false);
  }, []);

  const providerData = { planets, isLoading };

  return (
    <StarWarsContext.Provider value={ providerData }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
