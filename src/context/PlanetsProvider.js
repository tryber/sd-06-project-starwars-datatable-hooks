import React, { useState } from 'react';
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

export default PlanetsProvider;
