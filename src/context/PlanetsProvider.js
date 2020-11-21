import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import apiPlanets from '../services';
import StarWarsContext from './StarWarsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterName: { name: '' },
  });

  useEffect(() => {
    async function requestPlanets() {
      const planetsResult = await apiPlanets();
      setPlanets(planetsResult);
    }
    requestPlanets();
  }, []);

  const filteringName = (name) => {
    setFilters({
      ...filters,
      filterName: { name },
    });
  };

  const contexts = {
    planets,
    filters,
    setFilters,
    filteringName,
  };

  return (
    <StarWarsContext.Provider value={ { contexts } }>
      {children}
    </StarWarsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(Object).isRequired,
}.isRequired;

export default PlanetsProvider;
