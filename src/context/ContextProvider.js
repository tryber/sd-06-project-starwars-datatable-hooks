import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/api';

function ContextProvider({ children }) {
  const [planets, setPlanets] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: { column: '', comparison: '', value: '' },
  });

  useEffect(() => {
    (async () => {
      const fetchPlanets = await getPlanets();
      const planetResults = fetchPlanets.results.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setPlanets(planetResults);
      setIsFetching(false);
    })();
  }, []);

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
