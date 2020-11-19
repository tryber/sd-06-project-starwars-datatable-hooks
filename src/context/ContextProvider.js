import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/api';

function ContextProvider({ children }) {
  const [planets, setPlanets] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [filters, setFilters] = useState({filterByName: {name: ''}});
  const { filterByName } = filters;

  useEffect(() => {
    if (filterByName.name === '') (async () => {
      const fetchPlanets = await getPlanets();
      setPlanets(fetchPlanets.results);
      setIsFetching(false);
    })();
    (async () => {
      const fetchPlanets = await getPlanets(filterByName.name);
      setPlanets(fetchPlanets.results);
      setIsFetching(false);
    })();
  }, [filters]);

  const contextValues = {
    planets,
    isFetching,
    filters,
    setFilters,
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
