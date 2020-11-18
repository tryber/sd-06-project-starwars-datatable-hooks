import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/api';

function ContextProvider({ children }) {
  const [planets, setPlanets] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    (async () => {
      const fetchPlanets = await getPlanets();
      setPlanets(fetchPlanets.results);
      setIsFetching(false);
    })();
  }, []);

  const contextValues = {
    planets,
    isFetching,
  };

  return (
    <StarWarsContext.Provider value={ contextValues }>
      {children}
    </StarWarsContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContextProvider;
