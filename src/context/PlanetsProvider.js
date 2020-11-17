import React, { useState } from 'react';
import PropTypes from 'prop-types';
import apiPlanets from '../services';
import StarWarsContext from './StarWarsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState();

  async function requestPlanets() {
    const planetsResult = await apiPlanets();
    setPlanets(planetsResult);
  }
  return (
    <StarWarsContext.Provider value={ { planets, requestPlanets } }>
      {children}
    </StarWarsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default PlanetsProvider;
